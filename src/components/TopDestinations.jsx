import React from "react";

export default function TopDestinations({ title, destinations }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc pl-6">
        {destinations.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> – {item.description} ({item.distance})
          </li>
        ))}
      </ul>
    </section>
  );
}
