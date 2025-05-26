import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = 'Explore Kerala | Nature, Culture & Travel',
  description = 'Explore Kerala – backwaters, hill stations, beaches, wildlife, Ayurveda & culture. Plan your dream trip to God\'s Own Country.',
  keywords = 'Kerala tourism, Kerala travel blog, Munnar, Alleppey, houseboat, Kerala culture, Ayurveda, beaches, backwaters',
  image = 'https://explorekerala.ai/default-og-image.jpg',
  url = 'https://explorekerala.ai',
  type = 'website',
  author = 'Explore Kerala Team'
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      {/* Basic SEO */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
