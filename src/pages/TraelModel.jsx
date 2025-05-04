import { useEffect, useState } from "react";
import axios from "axios";


const TravelModel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/travel-model")
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("API fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading travel model data...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Travel Model Results</h1>
      <pre className="bg-gray-700 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TravelModel;
