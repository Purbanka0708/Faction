// src/components/Contact/FactionBot.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const FactionBot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi — I'm FactionBot. Ask me about courses, enrollment, or request a callback." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { from: "user", text: input }]);
    setInput("");

    // placeholder bot reply (replace with actual API call)
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: "Thanks — our team will follow up. For detailed replies, deploy the OpenAI endpoint." }]);
    }, 900);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.22 }}
          className="w-[360px] md:w-[420px] bg-white rounded-2xl shadow-2xl border border-transparent"
          style={{ boxShadow: "0 12px 30px rgba(16,24,40,0.08)" }}
        >
          {/* header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div>
              <h3 className="font-semibold text-lg">FactionBot</h3>
              <p className="text-xs text-gray-500">AI assistant — ask about courses, batches or enrollment.</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close bot"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <FaTimes />
            </button>
          </div>

          {/* messages */}
          <div className="p-4 h-[320px] overflow-auto bg-[#FFF9E6] rounded-b-none">
            {messages.map((m, i) => (
              <div key={i} className={`mb-4 ${m.from === "bot" ? "text-left" : "text-right"}`}>
                <div className={`inline-block px-4 py-2 rounded-lg ${m.from === "bot" ? "bg-white text-gray-800" : "bg-[#A767FF] text-white"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* input */}
          <div className="p-4 border-t flex gap-3 items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about courses, batches, enrollment..."
              className="flex-1 rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A767FF]/30"
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button
              onClick={send}
              className="bg-[#F0D200] text-slate-900 font-semibold px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default FactionBot;
