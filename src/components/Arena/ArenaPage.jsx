import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ArenaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-black relative">

      {/* ⬅️ BACK BUTTON (TOP RIGHT) */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition z-50"
      >
        ← Back
      </button>

      {/* LEFT SECTION */}
      <div className="relative flex items-center justify-center p-6 overflow-hidden">

        {/* 🌌 Gradient Glow */}
        <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-[120px] opacity-40 rounded-full"></div>

        {/* 🎯 Animated Image Card */}
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

          {/* 🔐 LOGIN STYLE INPUT */}
          <div className="space-y-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold">
              Notify Me
            </button>

          </div>

          {/* ⏳ COUNTDOWN TIMER */}
          <div className="mt-6 text-center text-sm text-purple-300">
            ⏳ Launching in: <span className="font-semibold">___Days</span>
          </div>

        </motion.div>
      </div>

    </div>
  );
};

export default ArenaPage;