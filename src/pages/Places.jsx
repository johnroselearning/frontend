import PlaceCard from "../components/PlaceCard";
import React, { useState } from 'react';
const dummyPlaces = [
  {
    name: "Tea Gardens",
    image: "https://source.unsplash.com/400x300/?tea,plantation",
    description: "Scenic tea plantations of Munnar.",
    category: "Nature",
  },
  {
    name: "Eravikulam National Park",
    image: "https://source.unsplash.com/400x300/?national,park",
    description: "Home to the endangered Nilgiri Tahr.",
    category: "Wildlife",
  },
  {
    name: "Mattupetty Dam",
    image: "https://source.unsplash.com/400x300/?dam,water",
    description: "A beautiful spot for boating and photography.",
    category: "Adventure",
  },
];

const Places = () => {
  const [filter, setFilter] = useState("");
  const filtered = filter
    ? dummyPlaces.filter((place) =>
        place.category.toLowerCase().includes(filter.toLowerCase())
      )
    : dummyPlaces;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Places</h2>
      <input
        type="text"
        placeholder="Filter by category (e.g., Nature)"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded-lg mb-6 w-full max-w-sm"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Places;