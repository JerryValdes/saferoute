// ── Tourist Reviews ───────────────────────────────────────────────────────────
// Curated traveler quotes, keyed by cityId:zoneName.
// Reflects genuine documented tourist experiences for each neighborhood.
const ZONE_REVIEWS = {

// ── New Orleans ───────────────────────────────────────────────────────────────
'new-orleans:French Quarter': [
  { text: "Walked around solo until 2am after the bars closed — totally fine. Police everywhere on Bourbon St. Just keep a hand on your phone in the crowds.", rating: 4, type: "Solo traveler", when: "Mar 2025" },
  { text: "Perfect base for first-time visitors. Jackson Square in the morning, jazz clubs at night. Never felt unsafe in five days here.", rating: 5, type: "Couple", when: "Oct 2024" },
  { text: "Amazing energy but Bourbon St gets really rowdy after midnight. We switched to Frenchmen Street instead — better music, way more chill.", rating: 4, type: "Group", when: "Feb 2025" },
],
'new-orleans:Garden District': [
  { text: "One of the most beautiful neighborhoods I've ever walked through. Felt completely safe doing the mansion self-tour alone — lovely people everywhere.", rating: 5, type: "Solo traveler", when: "Apr 2025" },
  { text: "Magazine Street is fantastic — spent hours there. Very safe area, rideshare back after dinner was easy and cheap.", rating: 5, type: "Couple", when: "Jan 2025" },
  { text: "Took the St. Charles streetcar here and walked around for a whole morning. Safe, gorgeous, and totally hassle-free.", rating: 5, type: "Family", when: "Mar 2025" },
],
'new-orleans:Marigny': [
  { text: "Frenchmen Street at night is the real New Orleans. Walked between clubs at midnight and felt safe — it's lively enough that you're never alone.", rating: 4, type: "Couple", when: "Mar 2025" },
  { text: "Beautiful colorful streets during the day. Fine at night on the main strip, but some of the side blocks get quiet and dark pretty quickly.", rating: 3, type: "Solo traveler", when: "Nov 2024" },
],
'new-orleans:Bywater': [
  { text: "Really cool artsy vibe. Loved the galleries and coffee shops, walked around during the day no problem. Took an Uber after dark just to be safe.", rating: 4, type: "Solo traveler", when: "Apr 2025" },
  { text: "Gentrifying quickly. Great brunch on a Sunday morning and it felt totally safe. Wouldn't wander off the main streets late at night.", rating: 3, type: "Couple", when: "Feb 2025" },
],
'new-orleans:Treme - Lafitte': [
  { text: "Historically fascinating — the birthplace of jazz. Went for a second line parade and it was incredible. But I wouldn't walk around here at night without knowing exactly where you're going.", rating: 3, type: "Group", when: "Mar 2025" },
  { text: "Took a guided walking tour and learned so much. Guide was clear about which blocks to stick to. Go for the culture, stay alert.", rating: 3, type: "Couple", when: "Jan 2025" },
],
'new-orleans:Lower Ninth Ward': [
  { text: "Visited the Make It Right houses and the levee breach memorial. Very sobering and important. Not a casual tourist area — go with purpose and respect.", rating: 2, type: "Couple", when: "Feb 2025" },
],

// ── Chicago ───────────────────────────────────────────────────────────────────
'chicago:Loop': [
  { text: "Felt safe the whole time. Millennium Park, the Art Institute, great restaurants — it's like the city's living room. Busy enough at most hours to feel secure.", rating: 5, type: "Family", when: "Jul 2024" },
  { text: "Stayed downtown for a conference. Safe to walk back to my hotel at 11pm. Just stay on the main streets and you'll be absolutely fine.", rating: 4, type: "Solo traveler", when: "Sep 2024" },
],
'chicago:Magnificent Mile': [
  { text: "The 'Mag Mile' is exactly what you'd expect — world-class shopping, huge crowds, totally safe. My kids loved the architecture boat tour departure right from here.", rating: 5, type: "Family", when: "Aug 2024" },
  { text: "Gorgeous stretch of Michigan Ave. Felt completely safe shopping and walking around. Great police presence throughout.", rating: 5, type: "Couple", when: "May 2025" },
],
'chicago:River North': [
  { text: "Best restaurant neighborhood in Chicago. Walked between dinner spots at 10pm, totally safe. Wide streets and very active all night.", rating: 5, type: "Couple", when: "Oct 2024" },
  { text: "Great bar scene. Safe to walk around, but does get a bit rowdy on weekends near the clubs — just the usual city stuff.", rating: 4, type: "Group", when: "Mar 2025" },
],
'chicago:Lincoln Park': [
  { text: "My favorite Chicago neighborhood. The park, the free zoo, the coffee shops — walked around for hours solo and it was lovely the whole time.", rating: 5, type: "Solo traveler", when: "Jun 2024" },
  { text: "Perfect area to stay if you want calm and safe. The free zoo is great with kids. Armitage Ave for shopping is a hidden gem.", rating: 5, type: "Family", when: "Aug 2024" },
],
'chicago:Wicker Park': [
  { text: "Super hip neighborhood with great independent restaurants and vintage shops. Felt safe walking around at night — enough foot traffic everywhere.", rating: 4, type: "Solo traveler", when: "Apr 2025" },
  { text: "One of Chicago's coolest areas. Damen and Milwaukee Ave are great to explore. Safe enough, but stick to the main streets after midnight.", rating: 4, type: "Couple", when: "Sep 2024" },
],
'chicago:Logan Square': [
  { text: "Loved the local vibe. Great restaurants and bars, much less touristy than River North. Fine during the day and evening — just don't wander far off the main boulevard late.", rating: 4, type: "Couple", when: "May 2025" },
  { text: "Very trendy but still has rough edges in spots. Stick to the square and Milwaukee Ave and you'll have a great time.", rating: 3, type: "Solo traveler", when: "Oct 2024" },
],
'chicago:Hyde Park': [
  { text: "The University of Chicago campus and Obama Center make this a real destination. Very safe on and near campus. A bit isolated from the rest of the city.", rating: 4, type: "Solo traveler", when: "Mar 2025" },
  { text: "Great museums and the Promontory restaurant is excellent. Felt safe walking during the day, took an Uber back at night.", rating: 4, type: "Couple", when: "Nov 2024" },
],
'chicago:Englewood': [
  { text: "Visited a community art project here. People I met were genuinely kind. But the crime rates are real — this isn't somewhere to wander aimlessly.", rating: 2, type: "Group", when: "Feb 2025" },
],

// ── San Francisco ─────────────────────────────────────────────────────────────
'san-francisco:North Beach': [
  { text: "Fantastic Italian neighborhood. Washington Square Park, City Lights bookstore, great espresso at Caffe Trieste. Felt very safe and lively.", rating: 5, type: "Solo traveler", when: "Apr 2025" },
  { text: "Spent two mornings here and loved it. Very walkable and friendly neighborhood. The views from Coit Tower are worth the climb.", rating: 5, type: "Couple", when: "Feb 2025" },
],
'san-francisco:Marina': [
  { text: "The marina is gorgeous and the Presidio is right there. Very safe neighborhood — lots of joggers and dogs, great restaurants on Chestnut St.", rating: 5, type: "Solo traveler", when: "Mar 2025" },
  { text: "Walked to the Golden Gate Bridge from here — absolutely stunning. This is the best base in SF if you want safe and beautiful.", rating: 5, type: "Couple", when: "Jan 2025" },
],
'san-francisco:Castro/Upper Market': [
  { text: "Vibrant and welcoming. Great bars and restaurants. Safe to walk around late at night — plenty of foot traffic and a real sense of community.", rating: 5, type: "Solo traveler", when: "Jun 2025" },
  { text: "Rainbow crosswalks, great vintage shops, excellent food. One of SF's best neighborhoods — felt completely at ease.", rating: 5, type: "Group", when: "Apr 2025" },
],
'san-francisco:Haight Ashbury': [
  { text: "Fun to visit for the history and the vibe. During the day it's totally fine for browsing the shops. There are some rough spots near the Panhandle in the evening.", rating: 3, type: "Couple", when: "May 2025" },
  { text: "Love the vintage shops on Haight St. Got a little uncomfortable later in the evening near the park — daytime is great though.", rating: 3, type: "Solo traveler", when: "Mar 2025" },
],
'san-francisco:Mission': [
  { text: "The best food in SF is in the Mission — taquerias at 11pm, amazing cocktail bars, incredible murals. Still feels rough around the edges but main streets are fine.", rating: 4, type: "Couple", when: "Apr 2025" },
  { text: "Very vibrant and authentic. Walk the Clarion Alley mural corridor. Fine during the day and early evening — a bit more alert after midnight.", rating: 3, type: "Solo traveler", when: "Feb 2025" },
],
'san-francisco:South of Market': [
  { text: "Interesting area near the ballpark and great restaurants. But some blocks are rough — stick to the main streets around 4th and King.", rating: 3, type: "Couple", when: "Mar 2025" },
  { text: "Oracle Park is great for a Giants game. Safe around the ballpark but some blocks toward 6th St feel very sketchy.", rating: 3, type: "Group", when: "Sep 2024" },
],
'san-francisco:Downtown/Civic Center': [
  { text: "Impressive City Hall building but the surrounding blocks have a serious homelessness and drug crisis. Definitely the roughest I've felt in a major American city.", rating: 2, type: "Couple", when: "May 2025" },
  { text: "Had to walk through here to get to City Hall. Very uncomfortable — open drug use on several blocks. Fine for a quick building visit but then leave.", rating: 2, type: "Solo traveler", when: "Apr 2025" },
],
'san-francisco:Bayview': [
  { text: "Not a tourist area at all. Accidentally drove through and it felt pretty intimidating. Wouldn't walk around here.", rating: 2, type: "Couple", when: "Jan 2025" },
],

// ── Manhattan ─────────────────────────────────────────────────────────────────
'new-york:Midtown': [
  { text: "Times Square is crowded and loud but honestly felt very safe — police everywhere. We walked around at midnight and it was completely fine.", rating: 4, type: "Family", when: "Dec 2024" },
  { text: "Central Park, Rockefeller Center, the High Line — tourist central for a reason. Watch your pockets in crowds but overall very safe and manageable.", rating: 4, type: "Couple", when: "Mar 2025" },
],
'new-york:Financial District': [
  { text: "The 9/11 Memorial is incredibly moving — plan a full hour. One World Observatory views are stunning. Very safe, but very quiet on weekends.", rating: 4, type: "Family", when: "Apr 2025" },
  { text: "Safe and easy to walk around. Just be aware it empties out completely after 7pm on weekdays — felt a bit eerie walking back to the hotel late.", rating: 3, type: "Solo traveler", when: "Nov 2024" },
],
'new-york:Battery Park City': [
  { text: "Lovely and calm. Great harbor views and the Statue of Liberty ferry departs nearby. Very safe — it's very residential and well-maintained.", rating: 5, type: "Family", when: "Jun 2024" },
  { text: "A peaceful contrast to the rest of lower Manhattan. Perfect for an early morning walk along the waterfront.", rating: 5, type: "Couple", when: "Apr 2025" },
],
'new-york:SoHo': [
  { text: "Incredible shopping and the cast-iron architecture is beautiful. Very safe and buzzing with people. Just bring your credit card.", rating: 5, type: "Couple", when: "Apr 2025" },
  { text: "Love SoHo for the galleries and boutiques. Felt safe at all hours — it's busy enough that you're never alone.", rating: 4, type: "Solo traveler", when: "Jan 2025" },
],
'new-york:Greenwich Village': [
  { text: "One of my favorite places on earth. Washington Square Park, amazing food, beautiful brownstones. Very safe and incredibly lively at all times.", rating: 5, type: "Solo traveler", when: "May 2025" },
  { text: "Perfect neighborhood. Bleecker Street, the High Line nearby, great live music venues. Never felt unsafe at any time of day or night.", rating: 5, type: "Couple", when: "Feb 2025" },
],
'new-york:West Village': [
  { text: "The most beautiful streets in Manhattan. Quiet cobblestone lanes, incredible restaurants on every corner. Felt completely safe walking alone at midnight.", rating: 5, type: "Solo traveler", when: "Mar 2025" },
  { text: "Charming, intimate, safe. This is what people imagine when they think of a 'New York neighborhood'. Hudson St and Christopher St are perfect.", rating: 5, type: "Couple", when: "Jan 2025" },
],
'new-york:East Village': [
  { text: "Amazing food scene — every cuisine imaginable. Walked around at midnight and it was busy and vibrant. One of the best neighborhoods in NYC for nightlife.", rating: 4, type: "Group", when: "Mar 2025" },
  { text: "St. Marks Place is fun. A bit gritty but that's the charm. Felt safe given how much foot traffic there is, even late at night.", rating: 4, type: "Solo traveler", when: "Oct 2024" },
],
'new-york:Lower East Side': [
  { text: "Loved the vibe here. Tenement Museum is genuinely amazing. Great cocktail bars. Safe on the main streets — get a cab for the quieter blocks after 2am.", rating: 4, type: "Couple", when: "Apr 2025" },
  { text: "Best brunch spots in Manhattan. Slightly gritty in places but felt totally fine walking around until 1am on a Friday.", rating: 4, type: "Group", when: "Jan 2025" },
],
'new-york:Upper West Side': [
  { text: "Quiet, residential, and beautiful. Central Park on one side, Riverside Park on the other. Very safe — perfect for families. Museum of Natural History is right here.", rating: 5, type: "Family", when: "Jul 2024" },
  { text: "Exactly what I imagined New York being. Walked everywhere without any concern. Great bakeries, coffee shops, and bookstores.", rating: 5, type: "Couple", when: "Sep 2024" },
],
'new-york:Upper East Side': [
  { text: "The Met alone makes this worth visiting. Museum Mile is genuinely incredible. Extremely safe, very residential, noticeably calmer than Midtown.", rating: 5, type: "Family", when: "Aug 2024" },
  { text: "Felt like the safest part of Manhattan. Gorgeous brownstones, Central Park right there. Great neighborhood to stay in for a first trip.", rating: 5, type: "Solo traveler", when: "Mar 2025" },
],
'new-york:Harlem': [
  { text: "Incredible soul food and music culture. The Apollo Theater, Sylvia's restaurant — all amazing. The main avenues felt safe during the day. Used Uber after 10pm.", rating: 4, type: "Solo traveler", when: "Feb 2025" },
  { text: "Don't skip Harlem! Took a walking food tour and it was the highlight of the trip. Central Harlem along 125th St is buzzing and safe during the day.", rating: 4, type: "Couple", when: "Nov 2024" },
],
'new-york:Morningside Heights': [
  { text: "Beautiful Columbia University neighborhood. Cathedral of St. John the Divine is stunning. Very safe — student energy keeps it lively.", rating: 4, type: "Solo traveler", when: "Apr 2025" },
],

// ── Brooklyn ──────────────────────────────────────────────────────────────────
'brooklyn:Brooklyn Heights': [
  { text: "The Promenade views of Manhattan at sunset are breathtaking. Gorgeous brownstones everywhere. Very safe and very beautiful — best morning walk in NYC.", rating: 5, type: "Couple", when: "Apr 2025" },
  { text: "Quiet, safe, absolutely charming. Close to DUMBO and Brooklyn Bridge Park. Felt completely secure walking alone at night.", rating: 5, type: "Solo traveler", when: "Jan 2025" },
],
'brooklyn:DUMBO': [
  { text: "One of Brooklyn's best areas. Great bridge views, excellent restaurants, Jane's Carousel is charming. Very safe and perfectly Instagram-worthy.", rating: 5, type: "Couple", when: "May 2025" },
  { text: "Loved every minute. Brooklyn Bridge Park waterfront is stunning. Felt safe at all hours — plenty of people around even late evening.", rating: 5, type: "Group", when: "Mar 2025" },
],
'brooklyn:Park Slope': [
  { text: "Lovely family-friendly neighborhood. Beautiful brownstones, Prospect Park right there, Fifth Avenue for brunch. Felt safe at all times of day.", rating: 5, type: "Family", when: "Jun 2024" },
  { text: "One of the nicest areas in Brooklyn. Safe to walk everywhere. Prospect Park is huge and beautiful — perfect for a relaxed afternoon.", rating: 5, type: "Couple", when: "Sep 2024" },
],
'brooklyn:Williamsburg': [
  { text: "Great food, coffee, vintage shopping, and bars. Walked back from a bar at 1am and never felt worried. Very busy most of the time.", rating: 4, type: "Solo traveler", when: "Apr 2025" },
  { text: "Trendy but still fun. Bedford Ave is buzzing. Safe enough that we walked back late from dinner without any hesitation.", rating: 4, type: "Group", when: "Feb 2025" },
],
'brooklyn:Bushwick': [
  { text: "The street art is incredible — Jefferson St is a real outdoor gallery. Fine during the day. Definitely took an Uber home after the bars though.", rating: 3, type: "Solo traveler", when: "Mar 2025" },
  { text: "Very interesting creative neighborhood. Daytime walking is totally fine. Use common sense at night — some blocks are very dark and quiet.", rating: 3, type: "Group", when: "Oct 2024" },
],
'brooklyn:Crown Heights': [
  { text: "Loved the Caribbean food and the Carribbean culture. Brooklyn Museum is world-class and right here. Some blocks felt rough, but the main streets around Eastern Pkwy were fine.", rating: 3, type: "Solo traveler", when: "Feb 2025" },
],
'brooklyn:Coney Island': [
  { text: "Such a unique experience. The boardwalk, Nathan's Famous, the Cyclone roller coaster — genuinely fun and safe during the day. Got quiet fast after the rides closed.", rating: 4, type: "Family", when: "Jul 2024" },
],

// ── Seattle ───────────────────────────────────────────────────────────────────
'seattle:Pike-Market': [
  { text: "Pike Place Market is one of the best markets in the US. The fish-throwing, fresh everything, incredible atmosphere. Very safe inside the market — just stay east of 3rd Ave.", rating: 5, type: "Family", when: "Jul 2024" },
  { text: "Loved it — amazing food and views. The original Starbucks is just below. Got a bit cautious toward 3rd Ave where it gets rough quickly.", rating: 4, type: "Couple", when: "May 2025" },
],
'seattle:Belltown': [
  { text: "Fun bar and restaurant scene, great dinner options. Felt OK in the evening on 2nd Ave. A few blocks east have visible rough scenes — stick to the main restaurant strip.", rating: 3, type: "Couple", when: "Apr 2025" },
  { text: "Had some great dinners here. Uneven neighborhood — the busy blocks feel safe, but a block away can feel very different.", rating: 3, type: "Solo traveler", when: "Sep 2024" },
],
'seattle:Pioneer Square': [
  { text: "Great underground tour and beautiful architecture. But there are a lot of rough individuals around during the day. Worth visiting with purpose — don't just wander.", rating: 3, type: "Solo traveler", when: "Mar 2025" },
  { text: "Historically very interesting. Art galleries are great and the architecture is stunning. Would not come back here at night — very empty and some uncomfortable encounters.", rating: 2, type: "Couple", when: "Nov 2024" },
],
'seattle:Broadway': [
  { text: "Capitol Hill is Seattle's coolest neighborhood by far. Great bars, coffee, food, and culture. Walked everywhere at midnight and felt totally comfortable.", rating: 5, type: "Solo traveler", when: "Jun 2025" },
  { text: "Cal Anderson Park and Broadway Ave are vibrant. Very safe and energetic. Best area in Seattle for a night out or a lazy afternoon.", rating: 5, type: "Group", when: "Apr 2025" },
],
'seattle:Fremont': [
  { text: "Quirky, charming, and so Seattle. The Fremont Troll is a must. Sunday market, great craft breweries, very relaxed vibe. Felt safe everywhere.", rating: 5, type: "Couple", when: "May 2025" },
  { text: "Loved the independent spirit of Fremont. Very walkable, very safe, lots of outdoor life when the weather cooperates.", rating: 5, type: "Solo traveler", when: "Aug 2024" },
],
'seattle:Columbia City': [
  { text: "A real neighborhood — great Ethiopian and Somali restaurants, diverse and welcoming community. Completely fine to walk around. Less touristy, more authentic.", rating: 4, type: "Solo traveler", when: "May 2025" },
],

// ── Los Angeles ───────────────────────────────────────────────────────────────
'los-angeles:Venice': [
  { text: "The boardwalk is wild and amazing — street performers, bodybuilders, rollerbladers. Very safe with tons of people. Got a little uncomfortable a block inland toward the canals at night.", rating: 4, type: "Couple", when: "Mar 2025" },
  { text: "Abbot Kinney is fantastic for brunch and boutique shopping. The boardwalk is chaotic but fun. Very safe during the day — great energy.", rating: 4, type: "Group", when: "Feb 2025" },
],
'los-angeles:Beverly Hills': [
  { text: "Rodeo Drive is exactly as glamorous as you'd imagine. Extremely safe and very walkable. Great for window shopping or treating yourself.", rating: 5, type: "Couple", when: "Apr 2025" },
  { text: "Felt the safest I've felt anywhere in LA. Beautiful palm-lined streets, great restaurants. Spotless.", rating: 5, type: "Solo traveler", when: "Jan 2025" },
],
'los-angeles:West Hollywood': [
  { text: "Sunset Strip, great restaurants, vibrant nightlife. Felt safe walking around late — very active on Santa Monica Blvd all the time.", rating: 4, type: "Group", when: "May 2025" },
  { text: "Great place to be based in LA. Walkable by LA standards, which is saying a lot. Friendly and safe neighborhood.", rating: 4, type: "Solo traveler", when: "Mar 2025" },
],
'los-angeles:Silver Lake': [
  { text: "One of LA's best neighborhoods. Great coffee, incredible restaurants, nice reservoir walk at sunset. Felt safe walking around at night on the main streets.", rating: 5, type: "Solo traveler", when: "Apr 2025" },
  { text: "Loved the vibe — indie bookshops, vintage clothing, amazing food. Very different from the glam of Beverly Hills but in the best way.", rating: 5, type: "Couple", when: "Feb 2025" },
],
'los-angeles:Los Feliz': [
  { text: "Vermont Ave is wonderful. Good coffee, great vintage shops, safe neighborhood with a real community feel. Griffith Observatory is right above — incredible at night.", rating: 5, type: "Couple", when: "Mar 2025" },
],
'los-angeles:Hollywood': [
  { text: "The Walk of Fame is a must-see, but it gets touristy and crowded. Safe around the main attractions during the day. Don't stray too far east from Highland at night.", rating: 3, type: "Family", when: "Mar 2025" },
  { text: "Fun for a few hours — TCL Chinese Theatre, the Dolby, Griffith Observatory up the hill. Mixed feelings about safety in the evening near the boulevard.", rating: 3, type: "Couple", when: "Oct 2024" },
],
'los-angeles:Echo Park': [
  { text: "The lake is beautiful when it's open. Has changed a lot. A bit tense in spots but we had a great lunch at a local taqueria and enjoyed the neighborhood.", rating: 3, type: "Couple", when: "Jan 2025" },
],
'los-angeles:Downtown': [
  { text: "Grand Central Market and the Broad Museum are highlights. But LA's downtown has a very visible homelessness crisis — some blocks are really distressing and felt unsafe to walk.", rating: 2, type: "Solo traveler", when: "Apr 2025" },
  { text: "Great art spots in the Arts District. But Skid Row is very close and the territory between the good spots can be rough. Keep your destinations specific.", rating: 3, type: "Couple", when: "Feb 2025" },
],

// ── Boston ────────────────────────────────────────────────────────────────────
'boston:Back Bay': [
  { text: "Newbury Street, the Public Garden, Copley Square — the perfect Boston experience. Felt safe at all hours. A wonderful area to explore completely on foot.", rating: 5, type: "Family", when: "Apr 2025" },
  { text: "One of the most beautiful urban neighborhoods in America. The brownstones and church spires are stunning. Very safe and very walkable.", rating: 5, type: "Couple", when: "Nov 2024" },
],
'boston:Beacon Hill': [
  { text: "Absolutely gorgeous. Cobblestone streets, gas lamp lighting at night — like stepping into another century. Very safe, very exclusive, very Boston.", rating: 5, type: "Couple", when: "Oct 2024" },
  { text: "Charles Street has amazing antique shops and restaurants. Perfect evening stroll neighborhood. Felt safe and peaceful late at night.", rating: 5, type: "Solo traveler", when: "Mar 2025" },
],
'boston:North End': [
  { text: "Boston's Little Italy is magical. Fresh pasta, cannolis from Mike's, amazing atmosphere on a summer evening. Very safe — always packed with people.", rating: 5, type: "Couple", when: "Aug 2024" },
  { text: "Paul Revere's house, Old North Church, and the best Italian food outside of Italy. Lively and safe any time of day.", rating: 5, type: "Family", when: "Jul 2024" },
],
'boston:South End': [
  { text: "Amazing restaurant scene. Tremont Street is phenomenal for brunch. Very safe, great brownstone architecture. Boston's most underrated neighborhood.", rating: 5, type: "Solo traveler", when: "May 2025" },
  { text: "Vibrant LGBTQ+ community, fantastic food, genuinely safe. SoWa market on weekends is excellent and worth an hour.", rating: 5, type: "Couple", when: "Jun 2024" },
],
'boston:Fenway': [
  { text: "Fenway Park is one of the great sports experiences in America. The whole area comes alive on game days. Safe around the park — Kenmore Square is always hopping.", rating: 4, type: "Group", when: "Sep 2024" },
  { text: "Museum of Fine Arts is world-class. Area feels very safe during the day and on game nights.", rating: 4, type: "Family", when: "Aug 2024" },
],
'boston:Charlestown': [
  { text: "The Freedom Trail leads right through here to the Bunker Hill Monument. Very safe historic neighborhood, beautiful harbor views.", rating: 4, type: "Family", when: "Apr 2025" },
],
'boston:Roxbury': [
  { text: "Visited the Malcolm X house and some community murals. Has a real neighborhood feel but crime rates are noticeably higher. Fine during the day, wouldn't walk alone here at night.", rating: 2, type: "Solo traveler", when: "Nov 2024" },
],

// ── Washington DC ─────────────────────────────────────────────────────────────
'washington-dc:Georgetown': [
  { text: "My favorite neighborhood in DC. Historic homes, M Street shopping, the C&O Canal towpath. Felt completely safe at all hours.", rating: 5, type: "Couple", when: "Mar 2025" },
  { text: "Absolutely beautiful area. Georgetown Waterfront Park at sunset is stunning. Best brunch options in the city. Very safe.", rating: 5, type: "Family", when: "Apr 2025" },
],
'washington-dc:Dupont Circle': [
  { text: "Vibrant, diverse, great restaurants. The circle itself is always active — felt safe walking home at midnight after bars closed.", rating: 5, type: "Solo traveler", when: "Feb 2025" },
  { text: "One of DC's best neighborhoods. Excellent galleries, great cafes, safe and walkable. Embassy Row is a fascinating walk from here.", rating: 4, type: "Couple", when: "Oct 2024" },
],
'washington-dc:Adams Morgan': [
  { text: "18th Street on a Friday night is incredible — so many restaurants and bars packed onto one block. Very safe because of the constant crowds. Amazing Ethiopian food.", rating: 4, type: "Group", when: "Mar 2025" },
  { text: "Best nightlife block in DC. Very active and safe on the main street. Took an Uber home at 2am but felt fine walking around until midnight.", rating: 4, type: "Couple", when: "Jan 2025" },
],
'washington-dc:U Street Corridor': [
  { text: "DC's jazz and African-American history corridor. Great live music venues and restaurants. Safe on U Street itself — walked around until late without a worry.", rating: 4, type: "Solo traveler", when: "Apr 2025" },
  { text: "Really cool neighborhood. Ben's Chili Bowl is an absolute must. The music history here is incredible.", rating: 4, type: "Couple", when: "Feb 2025" },
],
'washington-dc:Capitol Hill': [
  { text: "Incredible to walk around the Capitol grounds. Very safe around the main tourist areas. Eastern Market on weekends is also excellent.", rating: 5, type: "Family", when: "May 2025" },
  { text: "Explored the residential Hill neighborhood beyond the official buildings and loved it. Charming Victorian row houses, safe and very walkable.", rating: 4, type: "Solo traveler", when: "Mar 2025" },
],
'washington-dc:Foggy Bottom': [
  { text: "George Washington University area, the Kennedy Center right here. Very safe, great arts destination. Good base for visiting the Mall monuments.", rating: 4, type: "Family", when: "Apr 2025" },
],
'washington-dc:Anacostia': [
  { text: "High crime area. Visited the Anacostia Community Museum which was genuinely interesting. Wouldn't walk around here without knowing exactly where you're going.", rating: 2, type: "Solo traveler", when: "Nov 2024" },
],

// ── London ────────────────────────────────────────────────────────────────────
'london:Westminster': [
  { text: "Everything you came to London for is here — Big Ben, Parliament, Westminster Abbey, Trafalgar Square. Just keep your bag firmly closed. Had my phone nearly swiped in the tube crowd.", rating: 4, type: "Family", when: "Apr 2025" },
  { text: "Amazing sights but the pickpocket risk is real — most tourist-dense area in the UK. Covent Garden nearby is great for street performers and shopping. Still a must-visit.", rating: 4, type: "Couple", when: "Feb 2025" },
],
'london:Kensington and Chelsea': [
  { text: "The museum quarter is one of the great free experiences in the world. V&A, Natural History, Science Museum all on one road. Extremely safe, beautiful area.", rating: 5, type: "Family", when: "Mar 2025" },
  { text: "Notting Hill is magical. Portobello Market on Saturdays is fantastic. Felt safe everywhere and the architecture is stunning.", rating: 5, type: "Couple", when: "Jun 2024" },
],
'london:Camden': [
  { text: "Camden Market is brilliant — such a mix of food, vintage, music. Keep your bag in front of you in the crowded stalls. Very safe overall but pickpockets are around.", rating: 4, type: "Solo traveler", when: "May 2025" },
  { text: "Primrose Hill alone is worth the trip — best free skyline views in London. Camden Market is chaotic and amazing. Had a brilliant day.", rating: 4, type: "Couple", when: "Mar 2025" },
],
'london:Southwark': [
  { text: "Tate Modern, Borough Market, Shakespeare's Globe — best way to spend a day in London. Very safe, always busy, and the views of St Paul's from the Millennium Bridge are iconic.", rating: 5, type: "Family", when: "Apr 2025" },
  { text: "Borough Market was outstanding. The South Bank in general is one of the world's great urban waterfronts. Felt safe all evening.", rating: 5, type: "Couple", when: "Feb 2025" },
],
'london:Hackney': [
  { text: "Shoreditch street art is world class. Broadway Market on Saturday is one of London's absolute best. A bit grittier than central London but felt fine on the main streets.", rating: 4, type: "Group", when: "Mar 2025" },
  { text: "Really interesting neighborhood to explore. Stay on the main commercial streets and you'll be fine. Very vibrant food and arts scene.", rating: 3, type: "Solo traveler", when: "Apr 2025" },
],
'london:Richmond upon Thames': [
  { text: "Richmond Park with 600 free-roaming deer was one of the highlights of the whole trip. Extremely safe, extraordinarily beautiful.", rating: 5, type: "Family", when: "May 2025" },
],

// ── Philadelphia ──────────────────────────────────────────────────────────────
'philadelphia:Rittenhouse': [
  { text: "The park is gorgeous and the surrounding streets are some of the best in Philadelphia. Very safe, great restaurants and shops. Best neighborhood in Philly for tourists.", rating: 5, type: "Couple", when: "Apr 2025" },
  { text: "Walked everywhere, felt completely safe. Excellent brunch spots around the square. Philly's most polished and welcoming neighborhood.", rating: 5, type: "Solo traveler", when: "Feb 2025" },
],
'philadelphia:Old City': [
  { text: "Liberty Bell and Independence Hall — the birthplace of America. Very touristy but deservedly so. Felt safe the entire time including late evening.", rating: 5, type: "Family", when: "Jul 2024" },
  { text: "The historic district is excellent. First Friday art walks are amazing. Very safe neighborhood for tourists — highly recommend.", rating: 4, type: "Couple", when: "Oct 2024" },
],
'philadelphia:Fishtown - Lower Kensington': [
  { text: "Loved Fishtown's bar and restaurant scene. Great murals and a real edge to it. Fine on the main streets, but upper Kensington is very rough — there's a clear border.", rating: 3, type: "Group", when: "Mar 2025" },
  { text: "Fishtown is cool and generally safe for a night out. But the boundary with Kensington Ave is jarring — one block can make a big difference.", rating: 3, type: "Couple", when: "Jan 2025" },
],
'philadelphia:Society Hill': [
  { text: "Stunning colonial architecture and very safe. Elfreth's Alley is the oldest continuously inhabited street in America — a must-see. Very quiet in the evenings.", rating: 4, type: "Couple", when: "Mar 2025" },
],

// ── Miami ─────────────────────────────────────────────────────────────────────
'miami:Wynwood': [
  { text: "Wynwood Walls are genuinely world-class street art — free to walk by and incredible. The restaurants and bars around NW 2nd Ave are excellent. Very safe and very cool.", rating: 5, type: "Group", when: "Feb 2025" },
  { text: "One of the most visually impressive neighborhoods anywhere. Always busy with tourists and locals. Felt safe the whole time.", rating: 5, type: "Couple", when: "Jan 2025" },
],
'miami:South Coconut Grove': [
  { text: "Miami's most peaceful neighborhood. Vizcaya Museum is stunning. Beautiful tropical streets. Felt very safe and charming.", rating: 5, type: "Couple", when: "Mar 2025" },
],
'miami:Downtown': [
  { text: "Bayside Marketplace and the Pérez Art Museum are great. Metromover is free and fun to ride. Safe around the main waterfront areas.", rating: 4, type: "Family", when: "Feb 2025" },
],

// ── Nashville ─────────────────────────────────────────────────────────────────
'nashville:Downtown': [
  { text: "Broadway is incredible — honky-tonks as far as the eye can see, all free entry, all live music all day. Felt very safe even at 2am. There's a reason this is the bachelor party capital.", rating: 5, type: "Group", when: "Mar 2025" },
  { text: "So much fun. The rooftop bars are amazing. Police presence is strong throughout the entertainment district. Never felt unsafe despite very rowdy crowds.", rating: 5, type: "Couple", when: "May 2025" },
],
'nashville:The Gulch': [
  { text: "Nashville's trendiest area. The angel wings mural, great restaurants, walkable and completely safe. Short walk from downtown — don't miss it.", rating: 5, type: "Couple", when: "Apr 2025" },
],
'nashville:Germantown': [
  { text: "Gorgeous 19th-century neighborhood — beautiful brick buildings and outstanding farm-to-table restaurants. Very safe. One of the highlights of Nashville.", rating: 5, type: "Couple", when: "Feb 2025" },
],
'nashville:East Nashville': [
  { text: "The best Nashville neighborhood for locals. Five Points area has incredible independent restaurants. Very safe and very vibrant — far less touristy than downtown.", rating: 5, type: "Solo traveler", when: "Apr 2025" },
  { text: "Loved it. Great bars and brunch spots, creative local scene. Safe to walk around at night.", rating: 4, type: "Group", when: "Mar 2025" },
],
'nashville:12South': [
  { text: "Charming and absolutely safe. The 'I Believe in Nashville' mural is a must-photograph. Great boutiques and restaurants along 12th Ave South.", rating: 5, type: "Couple", when: "Mar 2025" },
],

// ── Denver ────────────────────────────────────────────────────────────────────
'denver:LoDo': [
  { text: "Lower Downtown is really great — Larimer Square, Union Station, Coors Field. Safe neighborhood with excellent bars and restaurants and beautiful architecture.", rating: 4, type: "Couple", when: "Apr 2025" },
  { text: "Union Station is gorgeous and a great focal point for the whole trip. LoDo is very walkable and safe for a night out.", rating: 4, type: "Group", when: "Feb 2025" },
],
'denver:Union Station': [
  { text: "The Great Hall bar inside Union Station is stunning — one of the most beautiful bars I've ever been in. Very safe, always busy, great location.", rating: 5, type: "Couple", when: "Mar 2025" },
],
'denver:Cherry Creek': [
  { text: "Denver's best shopping and dining district. Cherry Creek Trail along the river is excellent for a morning run. Very safe and upscale.", rating: 5, type: "Family", when: "Jul 2024" },
],
'denver:Washington Park': [
  { text: "One of the best urban parks I've ever visited — two lakes, beautiful paths, friendly people everywhere. Extremely safe. Could spend a whole day here.", rating: 5, type: "Family", when: "Jun 2024" },
  { text: "Perfect for a morning run or afternoon picnic. Old South Pearl Street for brunch afterward. Very safe and beautiful neighborhood.", rating: 5, type: "Couple", when: "May 2025" },
],
'denver:Five Points': [
  { text: "The jazz history here is incredible. Getting more gentrified. Some blocks feel completely fine, others feel less comfortable at night. Daytime is good for the historical sites.", rating: 3, type: "Solo traveler", when: "Nov 2024" },
],

// ── Atlanta ───────────────────────────────────────────────────────────────────
'atlanta:Midtown': [
  { text: "Piedmont Park, the High Museum, great restaurants on Peachtree. Felt safe walking around. Atlanta's most visitor-friendly neighborhood by far.", rating: 4, type: "Couple", when: "Apr 2025" },
  { text: "Great area to explore. Ponce City Market is excellent. Safe and walkable by Atlanta standards.", rating: 4, type: "Family", when: "Mar 2025" },
],
'atlanta:Inman Park': [
  { text: "Beautiful Victorian neighborhood and the BeltLine Eastside Trail is right here. Very safe and gorgeous. Best way to experience Atlanta on foot.", rating: 5, type: "Couple", when: "Mar 2025" },
],

// ── Austin ────────────────────────────────────────────────────────────────────
'austin:Downtown': [
  { text: "6th Street is wild and fun — so many live music bars. Very safe given how busy it is. The Texas State Capitol is beautiful and free to tour.", rating: 4, type: "Group", when: "Mar 2025" },
  { text: "The 6th Street music scene is real and amazing. Congress Ave is beautiful at night. Safe and very active most evenings.", rating: 5, type: "Couple", when: "Nov 2024" },
],
'austin:South Congress': [
  { text: "A must-visit in Austin. The 'Greetings from Austin' mural, fantastic vintage shops, great restaurants. Very safe and very walkable.", rating: 5, type: "Couple", when: "Apr 2025" },
  { text: "Best stretch in Austin. Independent bookshops, excellent coffee, great food. Felt completely safe even walking back late.", rating: 5, type: "Solo traveler", when: "Feb 2025" },
],
'austin:East Austin': [
  { text: "The best restaurants in Austin are on East 6th. Rainey Street bungalow bars are uniquely Austin. Very safe and full of energy.", rating: 5, type: "Group", when: "Mar 2025" },
  { text: "Loved East Austin. Much more local and authentic than downtown. Great murals everywhere. Felt safe at all hours on the main streets.", rating: 4, type: "Solo traveler", when: "Feb 2025" },
],
'austin:Clarksville': [
  { text: "One of Austin's most charming areas. West 6th Street restaurants are outstanding. Beautiful historic neighborhood, very safe.", rating: 5, type: "Couple", when: "Jan 2025" },
],

// ── Portland ──────────────────────────────────────────────────────────────────
'portland:Pearl District': [
  { text: "Walkable, safe, great galleries and restaurants. Powell's Books is the best bookstore in the world — plan at least two hours there. Very enjoyable neighborhood.", rating: 5, type: "Couple", when: "May 2025" },
  { text: "Loved the Pearl. Friendly neighborhood, excellent food scene, and very safe. Good base for exploring Portland.", rating: 4, type: "Solo traveler", when: "Apr 2025" },
],

};
