import React from 'react';
// import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet';

const SchemaGenerator = ({ type, data }) => {
  if (!type || !data) return null;

  let jsonLd = {};

  switch (type) {
    case 'blog':
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data.title,
        "image": data.image,
        "author": { "@type": "Person", "name": data.author || "Explore Kerala Team" },
        "publisher": {
          "@type": "Organization",
          "name": "Explore Kerala",
          "logo": {
            "@type": "ImageObject",
            "url": "https://explorekerala.ai/logo.png"
          }
        },
        "datePublished": data.datePublished,
        "dateModified": data.dateModified || data.datePublished,
        "description": data.description,
        "mainEntityOfPage": { "@type": "WebPage", "@id": data.url }
      };
      break;

    case 'destination':
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": data.name,
        "description": data.description,
        "image": data.image,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": data.lat,
          "longitude": data.lng
        },
        "url": data.url
      };
      break;

    case 'business':
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": data.name,
        "description": data.description,
        "image": data.image,
        "address": data.address,
        "telephone": data.phone,
        "url": data.url,
        "priceRange": data.priceRange || "₹₹",
        "amenityFeature": data.amenities || []
      };
      break;

    default:
      return null;
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SchemaGenerator;
