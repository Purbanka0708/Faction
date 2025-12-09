// src/components/Contact/Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";

const FAQ = [
  { q: "what is faction?", a: "Faction is a coaching centre that prepares students from foundation classes to NEET & IIT/JEE." },
  { q: "how do i enroll?", a: "Click Enroll on the homepage or message us using the contact form. We'll guide you step-by-step." },
  { q: "do you provide online classes?", a: "Yes — we offer both online and offline batches. Contact us for batch details." },
  { q: "fees?", a: "Fees depend on the course; please request a callback or message us your requirements." }
];

function simpleBotReply(text) {
  const t = text.toLowerCase();
  const found = FAQ.find((f) => t.includes(f.q.split(" ")[0]));
  if (found) return found.a;
  if (t.includes("hello") || t.includes("hi")) return "Hello! How can I help you today? You can ask about courses, enrollment, or fees.";
  return null;
}

const Chatbot = () => {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi — I'm FactionBot. Ask me about courses, enrollment, or request a callback." }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function handleSend() {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // 1) local fallback quick reply
    const local = simpleBotReply(input.trim());
    if (local) {
      setTimeout(() => {
        setMessages((m) => [...m, { from: "bot", text: local }]);
      }, 400);
      return;
    }

    // 2) If you have serverless OpenAI proxy (see api/openai.js), call it:
    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() }),
      });
      if (!res.ok) throw new Error("AI error");
      const data = await res.json();
      const reply = data?.reply || "Sorry, I couldn't find an answer right now.";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    } catch (err) {
      // Final fallback
      setMessages((m) => [...m, { from: "bot", text: "Sorry — I'm having trouble connecting to the AI. Please contact us using the form." }]);
    }
  }

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-[black]">FactionBot</h3>
            <p className="text-sm text-slate-600">AI assistant — ask about courses, batches or enrollment.</p>
          </div>
          <button
            onClick={() => setOpen((s) => !s)}
            className="text-slate-600 hover:text-[#A767FF]"
            title={open ? "Hide chat" : "Open chat"}
          >
            {open ? "—" : "+"}
          </button>
        </div>

        {open && (
          <>
            <div className="h-80 overflow-y-auto p-3 bg-[#FEFCED] rounded-lg" style={{ scrollBehavior: "smooth" }}>
              {messages.map((m, i) => (
                <div key={i} className={`mb-3 ${m.from === "bot" ? "text-left" : "text-right"}`}>
                  <div className={`inline-block px-4 py-2 rounded-xl ${m.from === "bot" ? "bg-white" : "bg-[#A767FF] text-white"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about courses, batches, enrollment..."
                className="flex-1 p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#A767FF] outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-[#F0D200] hover:bg-[#A767FF] hover:text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                Send
              </button>
            </div>

            <div className="text-xs text-slate-500 mt-2">
              Tip: If you want more accurate replies via AI, deploy the optional serverless endpoint and set your OpenAI API key.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
