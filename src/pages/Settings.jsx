import React, { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState("admin@exploremunnar.ai");
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="bg-white p-6 rounded-2xl shadow max-w-xl">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Admin Email
          </label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="text-sm">Enable Email Notifications</span>
          </label>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
