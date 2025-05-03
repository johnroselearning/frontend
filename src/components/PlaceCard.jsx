import React from "react";

const PlaceCard = ({ place }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full max-w-sm">
      <img
        src={place.image}
        alt={place.name}
        className="h-48 w-full object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold mb-1">{place.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{place.description}</p>
      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
        {place.category}
      </span>
    </div>
  );
};

export default PlaceCard;