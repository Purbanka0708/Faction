// api/openai.js
// Vercel serverless function — stores your OPENAI_API_KEY in Vercel environment variables

const fetch = require("node-fetch");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send({ error: "Only POST allowed" });
    return;
  }

  const { message } = req.body || {};
  if (!message) {
    res.status(400).send({ error: "Message required" });
    return;
  }

  const OPENAI_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_KEY) {
    res.status(500).send({ error: "OpenAI API key not configured" });
    return;
  }

  try {
    const payload = {
      model: "gpt-4o-mini", // choose whichever model you have access to
      messages: [
        { role: "system", content: "You are a helpful assistant for Faction coaching center. Provide concise answers about courses, enrollment, fees and batch info." },
        { role: "user", content: message },
      ],
      max_tokens: 600,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("OpenAI error", response.status, text);
      res.status(500).send({ error: "AI service error" });
      return;
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "Sorry, no reply.";
    res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
