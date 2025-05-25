import React from "react";

export default function BlogSection() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold mb-4">How to Reach Top Tourist Places in Kerala: Flights, Trains, Buses & Car Rentals (2025 Guide)</h1>
      <p>Kerala, known as “God’s Own Country,” is a top destination for nature lovers, honeymooners, families, and culture seekers...</p>

      <section id="munnar">
        <h2 className="text-2xl font-semibold">🌄 Munnar – Tea Hills & Misty Escapes</h2>
        <ul className="list-disc ml-5">
          <li><strong>Nearest Airport:</strong> Cochin (COK) — ₹3,000–₹6,500</li>
          <li><strong>Taxi:</strong> ₹3,200–₹4,500 (110 km, ~4 hours)</li>
          <li><strong>Train:</strong> Aluva or Ernakulam — ₹250–₹1,100</li>
          <li><strong>Bus:</strong> ₹120–₹250 (5 hrs, every 1–2 hours)</li>
        </ul>
      </section>

      <section id="alleppey">
        <h2 className="text-2xl font-semibold">🚣 Alleppey (Alappuzha) – Backwaters & Houseboats</h2>
        <ul className="list-disc ml-5">
          <li><strong>Airport:</strong> Cochin — ₹2,500–₹3,500 taxi (85 km)</li>
          <li><strong>Train:</strong> Direct trains available — ₹180–₹1,200</li>
          <li><strong>Bus:</strong> ₹100–₹250, frequent</li>
        </ul>
      </section>

      <section id="wayanad">
        <h2 className="text-2xl font-semibold">🌲 Wayanad – Forests & Wildlife</h2>
        <ul className="list-disc ml-5">
          <li><strong>Airport:</strong> Calicut (CCJ) — ₹3,000–₹6,000</li>
          <li><strong>Taxi:</strong> ₹3,000–₹4,500</li>
          <li><strong>Train:</strong> Kozhikode — ₹300–₹1,500</li>
          <li><strong>Bus:</strong> ₹120–₹250</li>
        </ul>
      </section>

      <section id="kochi">
        <h2 className="text-2xl font-semibold">🌆 Kochi (Cochin) – City of Forts & Flavors</h2>
        <ul className="list-disc ml-5">
          <li><strong>Airport:</strong> Cochin (COK) — ₹2,500–₹8,000</li>
          <li><strong>Train:</strong> Ernakulam Jn — ₹300–₹1,800</li>
          <li><strong>Bus:</strong> ₹80–₹250 to major destinations</li>
        </ul>
      </section>

      <section id="thekkady">
        <h2 className="text-2xl font-semibold">🐘 Thekkady / Periyar – Wildlife & Spice</h2>
        <ul className="list-disc ml-5">
          <li><strong>Airports:</strong> Madurai or Kochi — ₹3,500–₹4,800</li>
          <li><strong>Train:</strong> Kottayam/Ernakulam — ₹200–₹1,200</li>
          <li><strong>Bus:</strong> ₹100–₹250</li>
        </ul>
      </section>

      <section id="car-prices">
        <h2 className="text-2xl font-semibold">🚘 Car Rental Prices (2025)</h2>
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Vehicle Type</th>
              <th className="border px-4 py-2">Price/Day</th>
              <th className="border px-4 py-2">Distance Limit</th>
              <th className="border px-4 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Sedan</td>
              <td className="border px-4 py-2">₹2,500–₹3,200</td>
              <td className="border px-4 py-2">100–120 km</td>
              <td className="border px-4 py-2">Extra ₹12/km</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SUV</td>
              <td className="border px-4 py-2">₹3,500–₹4,800</td>
              <td className="border px-4 py-2">100–120 km</td>
              <td className="border px-4 py-2">Ideal for families</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tempo Traveller</td>
              <td className="border px-4 py-2">₹5,500–₹7,000</td>
              <td className="border px-4 py-2">100–120 km</td>
              <td className="border px-4 py-2">For 8–12 people</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Self-drive Car</td>
              <td className="border px-4 py-2">₹2,000–₹3,500</td>
              <td className="border px-4 py-2">300 km/day</td>
              <td className="border px-4 py-2">Available in cities</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">💡 Quick Travel Tips</h2>
        <ul className="list-disc ml-5">
          <li>Book trains 120 days ahead via IRCTC</li>
          <li>Use MakeMyTrip or RedBus to compare prices</li>
          <li>Travel light during monsoons (June–August)</li>
        </ul>
      </section>

      <section>
        <p className="mt-6 text-lg">
          Planning a trip? Drop a comment or contact us for itinerary suggestions. 
          Safe travels to God's Own Country! 🌴
        </p>
      </section>
    </div>
  );
}


// export default BlogSection;
