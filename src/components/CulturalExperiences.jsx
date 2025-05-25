import React from "react";

export default function CulturalExperiences({ experiences }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Cultural Experiences</h2>
      <ul className="list-disc pl-6">
        {experiences.map((exp, idx) => (
          <li key={idx}>{exp}</li>
        ))}
      </ul>
    </section>
  );
}
