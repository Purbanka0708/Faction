import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ArenaPage = () => {
  const navigate = useNavigate();

  // ✅ Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ✅ Countdown State
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
  const targetDate = new Date("2026-04-30T23:59:59");

  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      setTimeLeft("Launched 🚀");
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const format = (num) => String(num).padStart(2, "0");

    setTimeLeft(
      `${format(hours)}h ${format(minutes)}m ${format(seconds)}s`
    );
  };

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);

  // ✅ EmailJS Function
  const handleNotify = () => {
    if (!name || !email) return;

    const templateParams = {
      user_name: name,
      user_email: email,
    };

    emailjs
      .send(
        "service_b5lwgjl",   // 🔥 replace
        "template_9aapeir",  // 🔥 replace
        templateParams,
        "lvXAG4_UNu6eXv5P3"    // 🔥 replace
      )
      .then(() => {
        setSubmitted(true);
        setName("");
        setEmail("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-black relative">

      {/* ⬅️ BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition z-50"
      >
        ← Back
      </button>

      {/* LEFT SECTION */}
      <div className="relative flex items-center justify-center p-6 overflow-hidden">

        {/* Gradient Glow */}
        <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-[120px] opacity-40 rounded-full"></div>

        {/* Image Card */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-4"
        >
          <img
            src="https://res.cloudinary.com/dttquxaro/image/upload/v1775476043/Arena_z9cwqd.jpg"
            alt="Arena"
            className="w-full max-w-md rounded-xl"
          />
        </motion.div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-center px-6 py-10">

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl text-white"
        >

          {/* TITLE */}
          <h1 className="text-3xl font-bold mb-2">
            Enter Arena ⚔️
          </h1>

          <p className="text-gray-300 mb-6 text-sm">
            Register to be one of the exclusive beta testers of Arena, and help build India’s largest practice and competitive ecosystem.
          </p>

          {/* INPUTS */}
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              onClick={handleNotify}
              className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold"
            >
              Notify Me
            </button>

            {submitted && (
              <p className="text-green-400 text-sm text-center">
                ✅ You will be notified!
              </p>
            )}

          </div>

          {/* COUNTDOWN */}
          <div className="mt-6 text-center text-sm text-purple-300">
            ⏳ Launching in: <span className="font-semibold">{timeLeft}</span>
          </div>

        </motion.div>
      </div>

    </div>
  );
};

export default ArenaPage;