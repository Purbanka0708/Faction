// src/components/Team/WebTech.jsx
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import TeamData from "./TeamData";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
import FactionBot from "../Contact/FactionBot";
import botIcon from "../../assets/factionbot.png";
import { motion } from "framer-motion";

const bubbleConfigs = [
  { left: "7%", top: "18%", size: 90, delay: 0 },
  { left: "86%", top: "14%", size: 80, delay: 1.1 },
  { left: "12%", top: "72%", size: 65, delay: 2.0 },
  { left: "88%", top: "66%", size: 95, delay: 0.7 },
  { left: "50%", top: "5%", size: 55, delay: 1.6 },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

const WebTech = () => {
  const [botOpen, setBotOpen] = useState(false);
  const list = TeamData.filter((t) => t.group === "webtech");

  return (
    <main
      className="min-h-screen pb-20 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 500px at 10% 10%, rgba(46,11,53,0.55), transparent), linear-gradient(180deg, #2E0B35 0%, #1b0520 100%)",
      }}
    >
      <Navbar />

      {/* Floating bubbles */}
      {bubbleConfigs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            y: ["0%", i % 2 === 0 ? "-6%" : "6%", "0%"],
            opacity: [0, 0.85, 0.6],
            rotate: [0, i % 2 === 0 ? 6 : -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + (i % 3),
            delay: b.delay,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute rounded-full flex items-center justify-center"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(248,244,232,0.08)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
            color: "#FBDD57",
            fontSize: Math.max(16, b.size / 4),
          }}
        >
          {["💻", "🛠", "⚡", "🧩", "🌐"][i % 5]}
        </motion.div>
      ))}

      {/* Page Content */}
      <div className="container mx-auto py-16 px-6 relative z-10">

        {/* Heading + Quote + Back Button */}
        <div className="mb-10 flex justify-between items-start">
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "#F8F4E8" }}
            >
              Web & Tech Team
            </h1>

            {/* Quote paragraph */}
            <p className="mt-2 text-sm text-[#e9e4de]/70 max-w-xl">
              Our Web & Tech team builds the digital backbone of Faction — 
              crafting seamless platforms, smart tools, and innovative experiences 
              that empower learning at scale.
            </p>
          </div>

          {/* Back button */}
          <Link
            to="/team"
            className="px-4 py-2 rounded-full border border-[rgba(248,244,232,0.2)]
                      text-[#F8F4E8]/90 hover:bg-[rgba(248,244,232,0.1)] transition"
          >
            ← Back
          </Link>
        </div>

        {/* Animated Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {list.map((m) => (
            <motion.div key={m.id} variants={cardVariants}>
              <div
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(248,244,232,0.06)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <TeamCard member={m} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bot */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end space-x-4">
        <div className="hidden md:block">
          <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
        </div>

        <motion.button
          onClick={() => setBotOpen((s) => !s)}
          whileTap={{ scale: 0.92 }}
          animate={botOpen ? { rotate: 18, scale: 1.03 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-14 h-14 rounded-full shadow-xl border-4 border-white"
          style={{
            background: "linear-gradient(180deg,#FBDD57,#F7D746)",
            color: "#2E0B35",
          }}
        >
          {botIcon ? (
            <img
              src={botIcon}
              alt="FactionBot"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <span className="text-2xl">🤖</span>
          )}

          <span
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white"
            style={{ background: botOpen ? "#32e59e" : "#ffd344" }}
          />
        </motion.button>
      </div>

      {/* Mobile Bot Panel */}
      <div className="md:hidden">
        {botOpen && (
          <div className="fixed left-4 right-4 bottom-24 z-40">
            <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
          </div>
        )}
      </div>
    </main>
  );
};

export default WebTech;
