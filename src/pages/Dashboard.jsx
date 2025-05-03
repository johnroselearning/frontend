import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <p className="text-gray-700">
        Welcome to ExploreMunnar Dashboard! Here you can manage content,
        settings, and explore the beautiful Munnar places.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">Total Visitors This Month</h3>
          <p className="text-3xl mt-2 text-green-600">12,438</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">Active Bookings</h3>
          <p className="text-3xl mt-2 text-blue-600">324</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">Top-Rated Place</h3>
          <p className="mt-2 text-xl font-medium">Eravikulam National Park</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4">Latest Reviews</h3>
        <ul className="space-y-3">
          <li className="border-b pb-2">
            “Amazing views at Top Station! Must visit.” – ★★★★★
          </li>
          <li className="border-b pb-2">
            “Mattupetty Dam was peaceful and scenic.” – ★★★★☆
          </li>
          <li className="border-b pb-2">
            “Eco Point was crowded but beautiful.” – ★★★★☆
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
