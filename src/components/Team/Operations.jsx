// src/components/Team/Operations.jsx
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import TeamData from "./TeamData";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
import FactionBot from "../Contact/FactionBot";
import botIcon from "../../assets/factionbot.png";
import { motion } from "framer-motion";

/**
 * Modernized Operations page
 * Palette:
 *   deep:  #2E0B35
 *   accent: #FBDD57
 *   light:  #F8F4E8
 *
 * Keeps TeamCard compatibility. Uses floating bubbles, glass cards, staggered grid.
 */

const bubbleConfigs = [
  { left: "5%", top: "14%", size: 90, delay: 0 },
  { left: "86%", top: "12%", size: 72, delay: 1.2 },
  { left: "10%", top: "72%", size: 64, delay: 2.0 },
  { left: "84%", top: "66%", size: 88, delay: 0.7 },
  { left: "52%", top: "6%", size: 48, delay: 1.6 },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const Operations = () => {
  const [botOpen, setBotOpen] = useState(false);
  const list = TeamData.filter((t) => t.group === "operations");

  return (
    <main
      className="min-h-screen pb-20 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 500px at 12% 8%, rgba(46,11,53,0.55), transparent), linear-gradient(180deg,#2E0B35 0%, #1b0520 100%)",
      }}
    >
      <Navbar />

      {/* decorative floating bubbles */}
      {bubbleConfigs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            y: ["0%", i % 2 === 0 ? "-6%" : "6%", "0%"],
            opacity: [0, 0.9, 0.6],
            rotate: [0, i % 2 === 0 ? 5 : -5, 0],
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
            background: "linear-gradient(180deg, rgba(251,221,87,0.06), rgba(248,244,232,0.02))",
            border: "1px solid rgba(248,244,232,0.08)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
            color: "#FBDD57",
            fontSize: Math.max(14, b.size / 4),
            zIndex: 5,
          }}
          aria-hidden
        >
          {["⚙️", "📦", "🧾", "📊", "🧩"][i % 5]}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold" style={{ color: "#F8F4E8" }}>
              Operations Team
            </h1>
            <p className="mt-2 text-sm text-[#e9e4de]/70 max-w-xl">
              The operations team ensures a seamless learning experience — scheduling, support, & logistics.
            </p>
          </div>

          <Link
            to="/team"
            className="px-4 py-2 rounded-full border border-[rgba(248,244,232,0.14)] text-[#F8F4E8]/90 hover:bg-[rgba(248,244,232,0.06)] transition"
          >
            ← Back
          </Link>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {list.map((m) => (
            <motion.div key={m.id} variants={cardVariants}>
              {/* TeamCard is expected to render a card. We keep its look but add subtle wrapper styles */}
              <div
                className="rounded-2xl p-4"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03))",
                  border: "1px solid rgba(248,244,232,0.05)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <TeamCard member={m} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* bot */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end space-x-4">
        <div className="hidden md:block">
          <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
        </div>

        <motion.button
          onClick={() => setBotOpen((s) => !s)}
          whileTap={{ scale: 0.94 }}
          animate={botOpen ? { rotate: 18, scale: 1.02 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="relative w-14 h-14 rounded-full shadow-xl border-4 border-white"
          title="Open FactionBot"
          style={{
            background: "linear-gradient(180deg,#FBDD57,#F7D746)",
            color: "#2E0B35",
          }}
        >
          {botIcon ? (
            <img src={botIcon} alt="FactionBot" className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <span className="text-2xl">🤖</span>
          )}

          <span
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white"
            style={{ background: botOpen ? "#34e59a" : "#ffd344" }}
          />
        </motion.button>
      </div>

      {/* mobile bot panel */}
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

export default Operations;
