import { Helmet } from 'react-helmet';

const HomePage = () => (
  <>
    <Helmet>
      {/* Title */}
      <title>Explore Kerala | God's Own Country - Nature, Culture & Travel</title>

      {/* Basic Meta */}
      <meta name="description" content="Explore the best of Kerala – backwaters, hill stations, beaches, wildlife, food, culture, and top travel tips. Plan your dream trip to God's Own Country." />
      <meta name="keywords" content="Kerala tourism, Munnar, Alleppey, Kerala backwaters, Kerala travel, Kerala blog, beaches, Ayurveda, houseboats" />
      <meta name="author" content="Explore Kerala Team" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content="Explore Kerala | Nature, Culture & Travel" />
      <meta property="og:description" content="Discover Kerala's hidden gems, eco-tourism, Ayurveda, and cultural richness. Ideal for nature lovers and cultural travelers." />
      <meta property="og:image" content="https://explorekerala.ai/og-image.jpg" />
      <meta property="og:url" content="https://explorekerala.ai" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Explore Kerala | Nature, Culture & Travel" />
      <meta name="twitter:description" content="Plan your trip to Kerala with travel blogs, guides, and tips. Explore backwaters, hill stations, and authentic Kerala experiences." />
      <meta name="twitter:image" content="https://explorekerala.ai/twitter-card.jpg" />
    </Helmet>

    <h1>Welcome to Explore Kerala</h1>
  </>
);

export default HomePage;
