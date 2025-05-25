import React, { useState } from 'react';
import axios from 'axios';

const locations = [
  { name: 'Munnar', feature: 'Hill Station 🌿' },
  { name: 'Alleppey', feature: 'Backwaters 🚤' },
  { name: 'Varkala', feature: 'Beach 🏖' },
  { name: 'Thekkady', feature: 'Wildlife 🐘' },
  { name: 'Kochi', feature: 'Cultural City 🎭' }
];

export default function LocationSelector({ onItineraryReady }) {
  const [selected, setSelected] = useState([]);

  const toggleLocation = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:8000/generate', { locations: selected });
    onItineraryReady(res.data.itinerary);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Select Your Preferred Locations</h2>
      <div className="grid grid-cols-2 gap-4">
        {locations.map((loc) => (
          <button
            key={loc.name}
            className={`p-3 rounded-lg border ${selected.includes(loc.name) ? 'bg-green-200' : 'bg-white'}`}
            onClick={() => toggleLocation(loc.name)}
          >
            <strong>{loc.name}</strong><br />
            {loc.feature}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded-lg">Generate Itinerary</button>
    </div>
  );
}
