import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";



const ChatBot = () => {
  const [sessionId] = useState(uuidv4()); // only created once
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm your travel assistant. Ask me anything about your trip!" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = { type: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        message: userInput,
        session_id: sessionId
      });

      const botMessage = {
        type: "bot",
        text: res.data.response || "Sorry, I didn’t understand that."
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong. Please try again later." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">🧠 AI Travel Chat Assistant</h2>
      <div className="h-80 overflow-y-auto border p-3 rounded mb-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 text-sm ${msg.type === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.type === "user"
                  ? "bg-blue-100 text-blue-900"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {loading && (
          <div className="text-left text-sm text-gray-500 animate-pulse">Typing...</div>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l"
          placeholder="Ask about travel places, packages..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
