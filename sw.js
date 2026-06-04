const SHELL_CACHE  = 'saferoute-shell-v2';
const TILE_CACHE   = 'saferoute-tiles-v1';
const GEO_CACHE    = 'saferoute-geo-v1';
const CRIME_CACHE  = 'saferoute-crime-v1';
const MAX_TILES    = 1500; // ~30MB at ~20KB/tile

const SHELL_URLS = [
  '/saferoute/',
  '/saferoute/index.html',
  '/saferoute/zones.js',
  '/saferoute/app.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
];

// ── Install: pre-cache the app shell ─────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(SHELL_URLS))
      .catch(() => {}) // don't block install if CDN unreachable
  );
  self.skipWaiting();
});

// ── Activate: delete stale caches ────────────────────────────────────────────
self.addEventListener('activate', event => {
  const valid = new Set([SHELL_CACHE, TILE_CACHE, GEO_CACHE, CRIME_CACHE]);
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => !valid.has(k)).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── Fetch: route each request to the right strategy ──────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  // Only intercept GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Map tiles → cache-first, store on visit, trim when oversized
  if (isTileRequest(url)) {
    event.respondWith(tileFirst(request));
    return;
  }

  // GeoJSON boundaries → stale-while-revalidate
  if (isGeoRequest(url)) {
    event.respondWith(staleWhileRevalidate(GEO_CACHE, request));
    return;
  }

  // Crime / open-data APIs → network-first, fall back to stale cache
  if (isCrimeRequest(url)) {
    event.respondWith(networkFirstCache(CRIME_CACHE, request));
    return;
  }

  // App shell + Leaflet CDN → cache-first
  if (isShellRequest(url)) {
    event.respondWith(cacheFirst(SHELL_CACHE, request));
    return;
  }

  // Everything else (Nominatim geocoding, OSRM routing) → network-only
  // (these are interactive and stale data would be wrong)
});

// ── URL classifiers ───────────────────────────────────────────────────────────
function isTileRequest(url) {
  return url.hostname.includes('tile.openstreetmap.org') ||
         url.hostname.includes('tiles.stadiamaps.com') ||
         url.hostname.includes('tile.stamen.com') ||
         url.pathname.match(/\/\d+\/\d+\/\d+\.png$/);
}

function isGeoRequest(url) {
  return url.hostname === 'raw.githubusercontent.com' ||
         url.hostname.includes('tigerweb.geo.census.gov') ||
         (url.hostname.includes('arcgis.com') && url.searchParams.get('f') === 'geojson') ||
         (url.pathname.includes('FeatureServer') && url.searchParams.get('f') === 'geojson') ||
         url.hostname.includes('data.police.uk');
}

function isCrimeRequest(url) {
  return url.hostname.includes('.gov') ||
         url.hostname.includes('opendata') ||
         (url.hostname.includes('arcgis.com') && url.searchParams.get('f') === 'json') ||
         url.pathname.includes('/query') ||
         url.hostname.includes('resource');
}

function isShellRequest(url) {
  return url.hostname === 'unpkg.com' ||
         url.pathname.startsWith('/saferoute');
}

// ── Cache strategies ──────────────────────────────────────────────────────────
async function tileFirst(request) {
  const cache = await caches.open(TILE_CACHE);
  const hit = await cache.match(request);
  if (hit) return hit;
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
      trimCache(TILE_CACHE, MAX_TILES);
    }
    return response;
  } catch {
    // Offline with no cached tile — return transparent 1×1 PNG
    return new Response(
      Uint8Array.from(atob(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
      ), c => c.charCodeAt(0)),
      { status: 200, headers: { 'Content-Type': 'image/png' } }
    );
  }
}

async function staleWhileRevalidate(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const networkFetch = fetch(request)
    .then(res => { if (res.ok) cache.put(request, res.clone()); return res; })
    .catch(() => null);
  // Return cached immediately if available; otherwise wait for network
  if (cached) {
    networkFetch.catch(() => {}); // update in background, ignore errors
    return cached;
  }
  return (await networkFetch) || new Response('[]', { status: 200, headers: { 'Content-Type': 'application/json' } });
}

async function networkFirstCache(cacheName, request) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) {
      // Clone and add a header so the page knows data is stale
      const headers = new Headers(cached.headers);
      headers.set('X-SafeRoute-Cached', 'true');
      const body = await cached.arrayBuffer();
      return new Response(body, { status: cached.status, headers });
    }
    return new Response('[]', { status: 200, headers: { 'Content-Type': 'application/json' } });
  }
}

async function cacheFirst(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('', { status: 503 });
  }
}

// ── Trim tile cache to maxItems (FIFO) ───────────────────────────────────────
async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    const toDelete = keys.slice(0, keys.length - maxItems);
    await Promise.all(toDelete.map(k => cache.delete(k)));
  }
}
