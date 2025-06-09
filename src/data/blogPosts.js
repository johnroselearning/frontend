
// const blogPosts = [
    // {
    //   id: 'munnar-tea-capital',
    //   title: ('posts.munnar.title'),
    //   excerpt: ('posts.munnar.excerpt'),
    //   content: ('posts.munnar.content'),
    //   image: '/api/placeholder/400/240',
    //   date: '2024-01-15',
    //   author: 'Ravi Kumar',
    //   readTime: 5,
    //   category: 'destinations'
    // },
    // {
    //   id: 'alleppey-backwaters',
    //   title: ('posts.backwaters.title'),
    //   excerpt: ('posts.backwaters.excerpt'),
    //   content: ('posts.backwaters.content'),
    //   image: '/api/placeholder/400/240',
    //   date: '2024-01-10',
    //   author: 'Priya Nair',
    //   readTime: 7,
    //   category: 'destinations'
    // },
    // {
    //   id: 'kerala-ayurveda',
    //   title: ('posts.ayurveda.title'),
    //   excerpt: ('posts.ayurveda.excerpt'),
    //   content: ('posts.ayurveda.content'),
    //   image: '/api/placeholder/400/240',
    //   date: '2024-01-05',
    //   author: 'Dr. Suresh',
    //   readTime: 6,
    //   category: 'culture'
    // },
        // Destination posts
  //    { id: 1, title: "Hidden Gems of Santorini", category: "destinations", author: "Maria K.", date: "2024-05-20", readTime: 6,image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400", excerpt: "Discover the lesser-known spots in this Greek paradise that most tourists miss." ,  content: ('posts.santorini.content')},
  //   { id: 2, title: "Tokyo's Best Neighborhoods", category: "destinations", author: "Kenji S.", date: "2024-05-18", readTime: 6,image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400", excerpt: "From bustling Shibuya to peaceful Yanaka, explore Tokyo's diverse districts.",content: ('posts.santorini.content') },
  //   { id: 3, title: "Bali's Secret Beaches", category: "destinations", author: "Sarah L.", date: "2024-05-15", readTime: 6,image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400", excerpt: "Skip the crowds and find your own slice of paradise in Bali.",content: ('posts.santorini.content') },
  //   { id: 4, title: "Patagonia Wilderness Guide", category: "destinations", author: "Carlos M.", date: "2024-05-12",readTime: 6, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", excerpt: "Navigate the stunning landscapes of South America's frontier.",content: ('posts.patagonia.content') },
  //   { id: 5, title: "Morocco's Imperial Cities", category: "destinations", author: "Fatima B.", date: "2024-05-10", readTime: 6,image: "https://images.unsplash.com/photo-1539650116574-75c0c6d34f51?w=400", excerpt: "Journey through Marrakech, Fez, Rabat, and Meknes.",content: ('posts.morocco.content') },
  //    // Cultural & Heritage posts
  //   { id: 6, title: "Ancient Temples of Angkor", category: "culture", author: "David W.", date: "2024-05-22", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400", excerpt: "Exploring Cambodia's magnificent temple complex and its rich history." },
  //   { id: 7, title: "Flamenco Culture in Seville", category: "culture", author: "Isabella R.", date: "2024-05-19", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400", excerpt: "Dive deep into the passionate world of traditional Spanish dance." },
  //   { id: 8, title: "Machu Picchu: Beyond the Ruins", category: "culture", author: "Miguel A.", date: "2024-05-17", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400", excerpt: "Understanding the Inca civilization and its lasting legacy." },
  //   { id: 9, title: "Celtic Heritage in Ireland", category: "culture", author: "Siobhan O.", date: "2024-05-14", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400", excerpt: "Tracing ancient Celtic traditions through modern Irish culture." },
  //   { id: 10, title: "Samurai History in Kyoto", category: "culture", author: "Hiroshi T.", date: "2024-05-11", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400", excerpt: "Walking the paths of ancient warriors in Japan's former capital." },
  //     // Food & Cuisine posts
  //   { id: 11, title: "Street Food Paradise in Bangkok", category: "food", author: "Lisa Chen", date: "2024-05-21", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400", excerpt: "A foodie's guide to Thailand's incredible street food scene." },
  //   { id: 12, title: "Pasta Making in Tuscany", category: "food", author: "Giuseppe F.", date: "2024-05-16", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400", excerpt: "Learn traditional pasta techniques from Italian nonnas." },
  //   { id: 13, title: "Spice Markets of Istanbul", category: "food", author: "Ayşe K.", date: "2024-05-13", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", excerpt: "Navigate the aromatic world of Turkish spices and flavors." },
  //   { id: 14, title: "Wine Tasting in Argentina", category: "food", author: "Roberto S.", date: "2024-05-09", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", excerpt: "Discovering world-class Malbec in Mendoza's vineyards." },
  //   { id: 15, title: "Japanese Tea Ceremony", category: "food", author: "Yuki M.", date: "2024-05-07", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400", excerpt: "The art and philosophy behind Japan's traditional tea culture." },
    
  //   // Adventure posts
  //   { id: 16, title: "Climbing Mount Kilimanjaro", category: "adventure", author: "Alex P.", date: "2024-05-23", image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400", excerpt: "A complete guide to conquering Africa's highest peak." },
  //   { id: 17, title: "Whitewater Rafting in Colorado", category: "adventure", author: "Jake R.", date: "2024-05-20", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", excerpt: "Navigate the thrilling rapids of the Colorado River." },
  //   { id: 18, title: "Surfing the Mentawai Islands", category: "adventure", author: "Kelly S.", date: "2024-05-18", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400", excerpt: "Catching perfect waves in Indonesia's surf paradise." },
  //   { id: 19, title: "Trekking in Nepal's Himalayas", category: "adventure", author: "Pemba S.", date: "2024-05-15", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", excerpt: "Journey to Everest Base Camp and beyond." },
  //   { id: 20, title: "Diving the Great Barrier Reef", category: "adventure", author: "Emma T.", date: "2024-05-12", image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400", excerpt: "Explore one of the world's most diverse marine ecosystems." },
    
  //   // Travel Tips posts
  //   { id: 21, title: "Budget Backpacking Europe", category: "travel-tips", author: "Mark D.", date: "2024-05-24", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400", excerpt: "How to explore Europe on $50 a day without sacrificing experiences." },
  //   { id: 22, title: "Digital Nomad Guide to Lisbon", category: "travel-tips", author: "Anna V.", date: "2024-05-22", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400", excerpt: "Best coworking spaces, cafes, and neighborhoods for remote work." },
  //   { id: 23, title: "Solo Female Travel in India", category: "travel-tips", author: "Priya N.", date: "2024-05-19", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", excerpt: "Safety tips and cultural insights for independent female travelers." },
  //   { id: 24, title: "Photography Gear for Travel", category: "travel-tips", author: "Tom H.", date: "2024-05-17", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400", excerpt: "Essential camera equipment for capturing your adventures." },
  //   { id: 25, title: "Travel Insurance Guide", category: "travel-tips", author: "Linda M.", date: "2024-05-14", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400", excerpt: "Everything you need to know about protecting your trips." }
  // ];
const blogPosts = [
  
  // Destinations
  // {
  //   id: 1,
  //   title: "Hidden Gems of Santorini",
  //   category: "destinations",
  //   author: "Maria K.",
  //   date: "2024-05-20",
  //   readTime: 6,
  //   image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400",
  //   excerpt: "Discover the lesser-known spots in this Greek paradise that most tourists miss.",
  //   content: "Beyond the iconic blue domes and bustling streets of Oia, Santorini hides secret coves, vineyards, and ancient ruins that many travelers overlook. Venture to Pyrgos for a quiet village vibe, or explore the volcanic beaches of Vlychada and Koloumbos. These spots offer serenity and authenticity far from the cruise ship crowds."
  // },
  {
    id: 1,
    title: "Eco-Tourism Facts That’ll Blow Your Forest-Lovin’ Mind",
    category: "destinations",
    author: "Maria K.",
    date: "2024-05-20",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400",
    excerpt: "Discover the lesser-known spots in this Greek paradise that most tourists miss.",
    // content: "Beyond the iconic blue domes and bustling streets of Oia, Santorini hides secret coves, vineyards, and ancient ruins that many travelers overlook. Venture to Pyrgos for a quiet village vibe, or explore the volcanic beaches of Vlychada and Koloumbos. These spots offer serenity and authenticity far from the cruise ship crowds."
    //content: "Kerala's eco-tourism model is truly innovative and impactful. **Fact #1: Ex-Poachers Are Now TikTok-Worthy Guides.** Many trail guides were once poachers, now dedicated protectors of wildlife. **Fact #2: Eco-Tourism in Kerala Has a QR Code for Everything.** From digital bookings to POS payments in the jungle, technology streamlines the experience. **Fact #3: Every Ticket = Direct Support to Tribal Families.** Half of all eco-tourism revenue directly supports local communities. **Fact #4: You Can Sleep in a Treehouse in a Tiger Reserve.** Gavi offers authentic treehouse stays, providing a true wilderness experience. **Fact #5: There’s a Bird That Sounds Like a Lo-Fi Playlist.** The Malabar Whistling Thrush's serene calls are a natural soundtrack. **Fact #6: Kerala’s Forests Are Protected by AI.** The forest department uses AI and drones for monitoring fires, poaching, and wildlife. **Fact #7: Kerala's Model Is Being Copied Worldwide.** Countries like Costa Rica and Kenya are adopting Kerala's successful approach. **Fact #8: Want Real Influence? Try Being a Forest Guardian.** Engage in activities like planting trees or joining cleanups for meaningful impact. **Fact #9: Forest Bathing is a Thing—and It’s Free Here.** Walking in these forests reduces anxiety and boosts immunity. **Fact #10: Some Trail Guides Can Imitate Over 100 Bird Calls.** Experience an incredible auditory journey with guides who can mimic a vast array of bird sounds."
content: [
    '  **Fact #1: Ex-Poachers Are Now TikTok-Worthy Guides.** Many trail guides were once poachers, now dedicated protectors of wildlife. ',
    `  **Fact #2: Eco-Tourism in Kerala Has a QR Code for Everything.** From digital bookings to POS payments in the jungle, technology streamlines the experience.`,
    "**Fact #3: Every Ticket = Direct Support to Tribal Families.** Half of all money from eco-tourism goes straight to the community. You’re not funding some corporate resort—you’re putting food on the table for forest-fringe families.",
    "**Fact #4: You Can Sleep in a Treehouse in a Tiger Reserve.** Gavi offers real treehouses. Not glamping. Real. Forest. Air. No fake jungle wallpaper. Just you, a misty dawn, and maybe an elephant trumpet wake-up call.",
    "**Fact #5: There’s a Bird That Sounds Like a Lo-Fi Playlist.** The Malabar Whistling Thrush—aka “Whistling Schoolboy”—sings tunes so chill, you’ll want it on your Spotify. Nature invented lo-fi before YouTube did.",
    "**Fact #6: Kerala’s Forests Are Protected by AI.** The forest department uses AI and drones to monitor fires, poaching, and wildlife movements. So yeah, it’s like Black Mirror—but ethical.",
    "**Fact #7: Kerala's Model Is Being Copied Worldwide.** Costa Rica, Kenya, and even Bhutan are studying Kerala’s model. So technically, eco-tourism here is internationally viral—just without the hashtag.",
    "**Fact #8: Want Real Influence? Try Being a Forest Guardian.** Instead of just posting #SaveThePlanet, take a hike with a tribal guide. Plant a tree. Join a cleanup trail. It’s influence that matters. Offline but impactful.",
    "**Fact #9: Forest Bathing is a Thing—and It’s Free Here.** Science backs it: walking in forests reduces anxiety and boosts immunity. In Kerala, it’s part of your trek package. No filters required.",
    "**Fact #10: Some Trail Guides Can Imitate Over 100 Bird Calls.** Seriously. Sit with one over a campfire and close your eyes. It’s like opening the most peaceful Spotify playlist you’ve ever heard."
   
  ]
  },
  {
    id: 2,
    title: "Kerala Eco-Tourism",
    category: "destinations",
    author: "Kenji S.",
    date: "2024-05-18",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
    excerpt: "From bustling Shibuya to peaceful Yanaka, explore Tokyo's diverse districts.",
    content: `<h2><strong> The Silent Beginning</strong></h2>
<p>Once, Kerala's forests were royal playgrounds. Game reserves for maharajas and British elites echoed with gunshots, not birdcalls. Locals watched from the margins, their knowledge unvalued, their survival uncertain.</p>
<p><strong>Did you know?</strong> Kerala's first sanctuary, Periyar, was established in 1934—but it wasn’t meant to protect. It was meant to hunt.</p>
<br/>
<h2><strong>  Listening to the Forest's Voice</strong></h2>
<p>By the 1990s, the winds began to change. Kerala realized that real conservation means inviting locals to the table. Or better yet—handing them the compass.</p>
<p><em>What happened when ex-poachers became forest guides? The forest breathed a little easier.</em></p>
<p>Thus began community-based eco-tourism, a bold, human-centered conservation model. The Periyar Tiger Trail was its heartbeat.</p>
<p><strong>Curious fact:</strong> The first Tiger Trail guides had criminal records. Today, they lead conservation workshops for university students.</p>
<br/>
<h2><strong> Tourism That Touches the Soul</strong></h2>
<p>In Kerala, tourism isn’t about collecting photos. It’s about feeling the heartbeat of the jungle.</p>
<ul>
  <li>Trek through Periyar's bamboo forests, guided by a former forest thief</li>
  <li>Sleep in Gavi's treehouse, lulled by cicadas</li>
  <li>Watch dawn mist roll over Ponmudi, where clouds kiss the hills</li>
  <li>Hear the haunting song of the Malabar Whistling Thrush</li>
</ul>
<p><strong>True story:</strong> A tourist once burst into tears hearing a tribal elder mimic birdcalls. "I’ve never felt so small and connected," she said.</p>
<br/>
<h2><strong>  The Numbers That Matter</strong></h2>
<ul>
  <li><strong>80+</strong> eco-tourism centers across Kerala</li>
  <li><strong>2,170+</strong> locals employed directly, <strong>10,000+</strong> indirectly</li>
  <li><strong>₹60–80 crore</strong> annual revenue, 50% shared with communities</li>
</ul>
<p><strong>Unexpected twist:</strong> These aren’t just guides and guards. They are former smugglers, homemakers, even school dropouts who now lead scientific forest monitoring.</p>
<br/>
<h2><strong> The Responsible Traveller</strong></h2>
<p>Kerala doesn’t just welcome you. It trusts you.</p>
<ul>
  <li><strong>Carrying capacity rules:</strong> Because too many feet can kill a trail</li>
  <li><strong>Polluter Pays principle:</strong> Your ticket helps clean what you might unknowingly harm</li>
  <li><strong>Project Green Grass:</strong> A forest cleanup crew powered by locals</li>
  <li><strong>Wildlife Insurance:</strong> You’re covered, just in case nature gets wild</li>
</ul>
<p><strong>Did you know?</strong> If 10 lakh tourists each paid just Rs 10 to local panchayats, Kerala would generate Rs 1 crore for sustainable development annually.</p>
<br/>

<h2><strong> Kerala's Global Legacy</strong></h2>
<p>While many talk about sustainability, Kerala lives it.</p>
<ul>
  <li><strong>Eco-Tourism Authority:</strong> Oversees long-term planning</li>
  <li><strong>Digital access:</strong> POS machines, online booking, guided maps</li>
  <li><strong>Integrated circuits:</strong> Thattekkad, Thekkady, Gavi, Ponmudi, Athirappilly — all linked for mindful travel</li>
</ul>
<p><strong>Curious fact:</strong> Kerala's eco-tourism model has been studied by Bhutan, Kenya, and even Costa Rica.</p>
<br/>
<h2><strong>  For the Curious Explorer</strong></h2>
<ul>
  <li><strong>Thekkady:</strong> Meet a reformed sandalwood smuggler</li>
  <li><strong>Gavi:</strong> Sleep in a tree where hornbills nest</li>
  <li><strong>Thattekkad:</strong> Spot 300+ birds in 3 days</li>
  <li><strong>Kottur:</strong> Walk the trail of elephants at dawn</li>
</ul>
<br/>
<h2><strong> Come as a Traveller, Leave as a Protector</strong></h2>
<p>Not all journeys are measured in miles. Some are measured in awareness.</p>
<p>When you step into Kerala’s forests, you enter more than a scenic landscape. You step into a living, breathing classroom. Every birdcall is a lesson. Every footprint, a responsibility.</p>
<p>You come to see elephants, but learn about harmony. You arrive with curiosity—and if you open your heart—you leave with purpose.</p>

<p>The people you meet—former poachers, tribal guides, forest watchers—are not just hosts. They are living proof that change is possible when dignity is given.</p>
<p>And you, the traveller, are not just a visitor. You are a witness. A supporter. A potential protector.</p>
<br/>
<h2>Final Word: Walk Gently</h2>
<p>Kerala’s forests aren’t museums. They are living, breathing homes.</p>
<p>Come not to conquer. Come to witness. <br>
Come not to consume. Come to connect. <br>
Come not as a tourist. Come as a temporary guardian of the wild.</p>
<br/>
<br/>
<p><strong>KERALA ECO-TOURISM</strong><br>
Where the wild is welcome. And so are you.</p>`
  },
  // {
  //   id: 2,
  //   title: "Tokyo's Best Neighborhoods",
  //   category: "destinations",
  //   author: "Kenji S.",
  //   date: "2024-05-18",
  //   readTime: 6,
  //   image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
  //   excerpt: "From bustling Shibuya to peaceful Yanaka, explore Tokyo's diverse districts.",
  //   content: "Tokyo’s neighborhoods are worlds within themselves. Shibuya dazzles with neon lights and youth culture, while Yanaka offers a taste of old Edo with its traditional houses and family-run shops. Don't miss Shimokitazawa for its vintage flair and Kichijoji for a mix of urban life and lush parks."
  // },
  {
    id: 3,
    title: "Bali's Secret Beaches",
    category: "destinations",
    author: "Sarah L.",
    date: "2024-05-15",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400",
    excerpt: "Skip the crowds and find your own slice of paradise in Bali.",
    content: "While Kuta and Seminyak draw most tourists, Bali’s real treasures lie off the beaten path. Visit Nyang Nyang Beach for a secluded stretch of white sand, or escape to Amed for crystal-clear waters and snorkeling. These beaches are perfect for travelers seeking tranquility and natural beauty."
  },
  {
    id: 4,
    title: "Patagonia Wilderness Guide",
    category: "destinations",
    author: "Carlos M.",
    date: "2024-05-12",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    excerpt: "Navigate the stunning landscapes of South America's frontier.",
    content: "Patagonia is a vast land of jagged peaks, glacial lakes, and untamed beauty. Whether trekking through Torres del Paine or kayaking in the fjords of Chile, you'll encounter landscapes that defy imagination. It’s a dream for adventurers and a sanctuary for wildlife lovers."
  },
  {
    id: 5,
    title: "Morocco's Imperial Cities",
    category: "destinations",
    author: "Fatima B.",
    date: "2024-05-10",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d34f51?w=400",
    excerpt: "Journey through Marrakech, Fez, Rabat, and Meknes.",
    content: "Morocco’s imperial cities pulse with history and culture. From the intricate mosaics of Fez’s medina to the bustling souks of Marrakech, each city offers a unique window into Morocco’s past. Don’t miss the serene beauty of Rabat’s Kasbah or the regal ruins of Meknes."
  },

  // Culture
  {
    id: 6,
    title: "Ancient Temples of Angkor",
    category: "culture",
    author: "David W.",
    date: "2024-05-22",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400",
    excerpt: "Exploring Cambodia's magnificent temple complex and its rich history.",
    content: "Angkor is more than just Angkor Wat. The vast complex includes temples like Bayon, known for its smiling stone faces, and Ta Prohm, where nature reclaims history. Each structure tells a story of the Khmer Empire's power and devotion. Sunrise here is a moment of spiritual awe."
  },
  {
    id: 7,
    title: "Flamenco Culture in Seville",
    category: "culture",
    author: "Isabella R.",
    date: "2024-05-19",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400",
    excerpt: "Dive deep into the passionate world of traditional Spanish dance.",
    content: "Flamenco in Seville is more than performance—it's emotion in motion. Born from Andalusian, Gypsy, and Moorish roots, it thrives in tablaos and on cobbled streets. The guitar, singing, and dance come together in a passionate expression of soul, pain, and joy."
  },
  {
    id: 8,
    title: "Machu Picchu: Beyond the Ruins",
    category: "culture",
    author: "Miguel A.",
    date: "2024-05-17",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400",
    excerpt: "Understanding the Inca civilization and its lasting legacy.",
    content: "Machu Picchu is not just a postcard view. It’s an architectural marvel showcasing Incan knowledge of astronomy, engineering, and agriculture. A visit here is a step back into a civilization that harmonized with its environment and built wonders still standing centuries later."
  },
  {
    id: 9,
    title: "Celtic Heritage in Ireland",
    category: "culture",
    author: "Siobhan O.",
    date: "2024-05-14",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
    excerpt: "Tracing ancient Celtic traditions through modern Irish culture.",
    content: "From Gaelic language to myths of druids and fairies, Ireland’s Celtic heritage is woven into daily life. Explore ancient stone circles, listen to traditional music in cozy pubs, and celebrate festivals like Samhain that link the past with the present."
  },
  {
    id: 10,
    title: "Samurai History in Kyoto",
    category: "culture",
    author: "Hiroshi T.",
    date: "2024-05-11",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400",
    excerpt: "Walking the paths of ancient warriors in Japan's former capital.",
    content: "Kyoto preserves the spirit of the samurai through its castles, temples, and martial arts schools. Visit Nijo Castle to see the shogun’s residence, or stroll through the Philosopher's Path reflecting on the Bushido code. The legacy of honor lives on here."
  },

  // Food
  {
    id: 11,
    title: "Street Food Paradise in Bangkok",
    category: "food",
    author: "Lisa Chen",
    date: "2024-05-21",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400",
    excerpt: "A foodie's guide to Thailand's incredible street food scene.",
    content: "Bangkok’s street food is a sensory feast. Try spicy papaya salad on Khao San Road, grilled satay skewers in Chatuchak Market, or steaming boat noodles near Victory Monument. Every corner serves a dish rich in flavor and tradition, making each bite unforgettable."
  },
  {
    id: 12,
    title: "Pasta Making in Tuscany",
    category: "food",
    author: "Giuseppe F.",
    date: "2024-05-16",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400",
    excerpt: "Learn traditional pasta techniques from Italian nonnas.",
    content: "In the rolling hills of Tuscany, pasta is a sacred art. Join a farmhouse class where nonnas teach how to knead, roll, and shape pasta by hand. Savor the simplicity of tagliatelle al ragù, and discover that every dish carries generations of love."
  },
  {
    id: 13,
    title: "Spice Markets of Istanbul",
    category: "food",
    author: "Ayşe K.",
    date: "2024-05-13",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    excerpt: "Navigate the aromatic world of Turkish spices and flavors.",
    content: "Istanbul’s spice markets offer a kaleidoscope of scents and colors. From saffron and sumac to dried rose petals and pomegranate molasses, each stall is a journey through Ottoman culinary heritage. Learn how these spices shape Turkish cuisine and culture."
  },
  {
    id: 14,
    title: "Wine Tasting in Argentina",
    category: "food",
    author: "Roberto S.",
    date: "2024-05-09",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    excerpt: "Discovering world-class Malbec in Mendoza's vineyards.",
    content: "Mendoza’s sun-soaked vineyards produce some of the world’s finest Malbec. Tour family-run bodegas, sample rich reds in scenic cellars, and enjoy farm-to-table pairings. The wine culture here is as warm and vibrant as the Argentine people."
  },
  {
    id: 15,
    title: "Japanese Tea Ceremony",
    category: "food",
    author: "Yuki M.",
    date: "2024-05-07",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
    excerpt: "The art and philosophy behind Japan's traditional tea culture.",
    content: "The Japanese tea ceremony is a meditative ritual rooted in Zen. From the precise gestures to the serene setting, each moment emphasizes harmony, respect, purity, and tranquility. Matcha isn’t just a drink here—it’s a bridge to mindfulness and tradition."
  },

  // Adventure
  {
    id: 16,
    title: "Climbing Mount Kilimanjaro",
    category: "adventure",
    author: "Alex P.",
    date: "2024-05-23",
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400",
    excerpt: "A complete guide to conquering Africa's highest peak.",
    content: "Mount Kilimanjaro is the climb of a lifetime. From lush rainforest trails to icy summit views, the journey challenges body and spirit. With proper training and acclimatization, even novice trekkers can reach Uhuru Peak and witness the sunrise above the clouds."
  },
  {
    id: 17,
    title: "Whitewater Rafting in Colorado",
    category: "adventure",
    author: "Jake R.",
    date: "2024-05-20",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
    excerpt: "Navigate the thrilling rapids of the Colorado River.",
    content: "Colorado’s rivers offer rapids for all levels—from beginner float trips to heart-pounding Class V runs. Paddle through red-rock canyons, spot bald eagles overhead, and embrace the adrenaline rush as you ride the river’s powerful pulse."
  },
  {
    id: 18,
    title: "Surfing the Mentawai Islands",
    category: "adventure",
    author: "Kelly S.",
    date: "2024-05-18",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400",
    excerpt: "Catching perfect waves in Indonesia's surf paradise.",
    content: "The Mentawai Islands are a dream destination for surfers. With consistent swells, warm waters, and uncrowded breaks, these islands off Sumatra’s coast offer world-class waves and remote, tropical bliss. It’s where surf meets serenity."
  },
  {
    id: 19,
    title: "Trekking in Nepal's Himalayas",
    category: "adventure",
    author: "Pemba S.",
    date: "2024-05-15",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400",
    excerpt: "Journey to Everest Base Camp and beyond.",
    content: "The Himalayas offer a life-changing trekking experience. From lush rhododendron forests to glacial valleys, each step reveals majestic peaks and resilient Sherpa culture. Reaching Everest Base Camp is a badge of honor for adventurers worldwide."
  },
  {
    id: 20,
    title: "Diving the Great Barrier Reef",
    category: "adventure",
    author: "Emma T.",
    date: "2024-05-12",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400",
    excerpt: "Explore one of the world's most diverse marine ecosystems.",
    content: "Dive into a kaleidoscope of coral and marine life in Australia's Great Barrier Reef. Swim alongside turtles, reef sharks, and vibrant fish while witnessing one of Earth’s most awe-inspiring underwater wonders—now in urgent need of protection."
  },
  {
  id: 21,
  title: "The Art of Calligraphy in Iran",
  category: "culture",
  author: "Neda H.",
  date: "2024-05-21",
  image: "https://images.unsplash.com/photo-1564518098554-3ffdc38c78a0?w=400",
  excerpt: "Explore the poetic elegance of Persian script and tradition.",
  content: "In Iran, calligraphy is revered as a spiritual and artistic expression. From the sweeping lines of Nastaʿlīq to intricate Quranic designs, the script reflects centuries of devotion. Visit workshops in Isfahan or Tehran to watch master calligraphers at work, blending ink, paper, and poetry."
},

// Food
{
  id: 22,
  title: "Coastal Cuisine of Kerala",
  category: "food",
  author: "Anita V.",
  date: "2024-05-26",
  image: "https://images.unsplash.com/photo-1589308078052-918ccf1087a9?w=400",
  excerpt: "Taste the vibrant flavors of India’s southwest coast.",
  content: "Kerala’s food is a celebration of the sea and spice. Enjoy tangy fish curries with coconut, crunchy banana chips, and fresh appams. Visit beachside shacks in Alleppey or backwater homestays in Kumarakom for the most authentic, aromatic experiences."
},
{
  id: 23,
  title: "Savory Stews of the Caucasus",
  category: "food",
  author: "Arman B.",
  date: "2024-05-22",
  image: "https://images.unsplash.com/photo-1627582469487-ef1f8b11c582?w=400",
  excerpt: "Hearty dishes that warm the soul from Georgia to Armenia.",
  content: "The Caucasus is home to comforting cuisine rich in herbs, meats, and tradition. Try kharcho, a spicy beef soup from Georgia, or Armenian khashlama, slow-cooked lamb with vegetables. These meals are often served family-style, with wine, toasts, and laughter."
},

// Adventure
{
  id: 24,
  title: "Hiking Norway’s Trolltunga",
  category: "adventure",
  author: "Erik J.",
  date: "2024-05-25",
  image: "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?w=400",
  excerpt: "A dramatic cliff hike with jaw-dropping views over fjords.",
  content: "Trolltunga, or 'the Troll’s Tongue,' juts out over Lake Ringedalsvatnet, offering an epic reward for an 8–12 hour trek. The trail crosses alpine terrain, snow patches, and rocky ridges. Be prepared—but the panorama is worth every step."
},
{
  id: 25,
  title: "Caving in Slovenia's Karst Region",
  category: "adventure",
  author: "Mateja K.",
  date: "2024-05-22",
  image: "https://images.unsplash.com/photo-1524853547741-bf6c6fa16058?w=400",
  excerpt: "Explore underground cathedrals sculpted by nature.",
  content: "Slovenia’s Karst caves like Postojna and Škocjan reveal a surreal world beneath the surface. Walk past massive stalactites, subterranean rivers, and echoing chambers. For the truly adventurous, guided spelunking tours lead into wild, unlit passages."
}



];

 export default blogPosts;

// You can also export individual functions if needed
export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentPosts = (limit = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};