import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DestinationCard = ({ place }) => (
  <Card className="shadow-lg rounded-2xl">
    <CardContent className="p-4">
      <h2 className="text-2xl font-semibold text-green-700 mb-2">{place.name}</h2>

      <div className="mb-2">
        <h3 className="font-semibold">🍲 Must-Try Food:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {place.food.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>

      <div className="mb-2">
        <h3 className="font-semibold">🛍️ Where to Shop:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {place.shopping.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">🌄 Top Attractions:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {place.attractions.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default DestinationCard;
