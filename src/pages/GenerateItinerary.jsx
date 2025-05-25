import React, { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [itinerary, setItinerary] = useState([]);

  const generateItinerary = async () => {
    const response = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: prompt }),
      // body: JSON.stringify({ prompt, max_tokens: 512 }),
    });
    const data = await response.json();
    setResult(data.response || "No itinerary generated.");
    const rawText = data.itinerary || "";

     setItinerary(data.itinerary || []);

    // Extract Day-wise breakdown
    console.log(data);
    console.log(data.itinerary);
  };

  return (
   <div style={{ padding: 20 }}>
      <h2>Structured Kerala Travel Itinerary</h2>
      <textarea
        rows={5}
        cols={60}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., create itinerary for kerala solo women trip"
      />
      <br />
      <button onClick={generateItinerary}>Generate Itinerary</button>

      <div style={{ marginTop: 30 }}>
        {itinerary.map((item, idx) => (
          <div key={idx} style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
            // backgroundColor: "#fdfdfd"
          }}>
            <h3>{item.day}</h3>
            <h4>📍 {item.location}</h4>
            {item.distance && <p><strong>Distance:</strong> {item.distance}</p>}
            {item.rating && <p><strong>Rating:</strong> {item.rating}</p>}
            <ul>
              {item.activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
