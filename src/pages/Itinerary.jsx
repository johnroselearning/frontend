import React from 'react';

export default function Itinerary({ data }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Trip Itinerary</h2>
      {data.map((day, idx) => (
        <div key={idx} className="p-3 border rounded-lg mb-2">
          <h3 className="font-semibold">Day {day.day}</h3>
          <p><strong>Location:</strong> {day.location}</p>
          <ul className="list-disc list-inside">
            {day.activities.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}