// src/components/Team/OurTeam.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FactionBot from "../Contact/FactionBot";
import botIcon from "../../assets/factionbot.png";
import { motion } from "framer-motion";

/**
 * Colour palette used:
 * deep:  #2E0B35
 * accent: #FBDD57
 * light:  #F8F4E8
 *
 * Notes:
 * - Requires TailwindCSS + Framer Motion.
 * - Uses Tailwind arbitrary values for some styles (rounded corners, blur).
 */

const categories = [
  {
    id: "educators",
    title: "Educators",
    subtitle: "Expert faculty guiding your success",
    icon: "🎓",
    to: "/team/educators",
  },
  {
    id: "operations",
    title: "Operations",
    subtitle: "Ensuring smooth learning experience",
    icon: "👥",
    to: "/team/operations",
  },
  {
    id: "webtech",
    title: "Web & Tech",
    subtitle: "Building the future of education",
    icon: "</>",
    to: "/team/webtech",
  },
];

const bubbleConfigs = [
  // x%, y%, size, delay, opacity
  { left: "6%", top: "12%", size: 110, delay: 0 },
  { left: "85%", top: "8%", size: 90, delay: 1.2 },
  { left: "8%", top: "72%", size: 70, delay: 2.1 },
  { left: "88%", top: "64%", size: 90, delay: 0.6 },
  { left: "50%", top: "3%", size: 50, delay: 1.6 },
  { left: "28%", top: "40%", size: 36, delay: 2.8 },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const OurTeam = () => {
  const [botOpen, setBotOpen] = useState(false);

  return (
    <main className="min-h-screen pb-20 relative overflow-hidden" style={{ background: "radial-gradient(1200px 600px at 10% 10%, rgba(46,11,53,0.65), transparent), linear-gradient(180deg,#2E0B35 0%, #1d0723 100%)" }}>
      <Navbar />

      {/* Floating animated bubbles (icons/images) */}
      {bubbleConfigs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: ["0%", `${(i % 2 === 0) ? -6 : 6}%`, "0%"],
            opacity: [0, 0.85, 0.65],
            rotate: [0, (i % 2 === 0) ? 6 : -6, 0],
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
            boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
            background: "linear-gradient(180deg, rgba(249,221,87,0.06), rgba(248,244,232,0.02))",
            border: "1px solid rgba(249,221,87,0.12)",
            backdropFilter: "blur(6px)",
            color: "#FBDD57",
            fontSize: Math.max(16, b.size / 4),
            zIndex: 5,
          }}
          aria-hidden
        >
          {/* Replace with images if you have them (e.g. <img src=... />) */}
          <span style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}>
            {["📚", "⚗️", "🧮", "🔬", "✨", "🧩"][i % 6]}
          </span>
        </motion.div>
      ))}

      <div className="container mx-auto py-20 text-center relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-3 bg-[rgba(248,244,232,0.04)] border border-[rgba(248,244,232,0.06)] px-4 py-1 rounded-full mb-6">
            <span className="text-sm" style={{ color: "#FBDD57" }}>✨</span>
            <span className="text-sm font-medium" style={{ color: "#F8F4E8" }}>Our Amazing Team</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: "#F8F4E8" }}>
            Meet The Faction Team
          </h1>

          <p className="max-w-3xl mx-auto text-[15px] mt-4 text-[#e9e4de]/80">
            Our experienced faculty and team guide students from foundations through NEET &amp; IIT/JEE.
            Click a category to view members of that group.
          </p>
        </motion.div>

        {/* Category cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {categories.map((c, idx) => (
            <motion.div
              key={c.id}
              variants={cardVariants}
              className="relative rounded-2xl p-8 shadow-2xl"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03))",
                border: "1px solid rgba(248,244,232,0.05)",
                backdropFilter: "blur(8px)",
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link to={c.to} className="group block text-left">
                <div className="flex items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold shadow-md"
                    style={{
                      background: "#FBDD57",
                      color: "#2E0B35",
                    }}
                    aria-hidden
                  >
                    <span>{c.icon}</span>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#F8F4E8" }}>
                      {c.title}
                    </h3>
                    <p className="text-sm mt-1 text-[#e9e4de]/70">{c.subtitle}</p>
                  </div>
                </div>

                {/* decorative corner accent */}
                <div className="absolute -right-8 -top-8 opacity-10 transform rotate-12" aria-hidden>
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="60" fill="#FBDD57" />
                  </svg>
                </div>

                {/* hover bar */}
                <div className="mt-6">
                  <div className="w-full h-0.5 bg-[rgba(248,244,232,0.03)] group-hover:bg-[rgba(249,221,87,0.6)] transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating bot icon + panel */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end space-x-4">
        {/* Desktop panel */}
        <div className="hidden md:block">
          <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
        </div>

        {/* Floating icon */}
        <motion.button
          onClick={() => setBotOpen((s) => !s)}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 1 }}
          animate={botOpen ? { rotate: 20, scale: 1.02 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
          title="Open FactionBot"
          style={{
            background: "linear-gradient(180deg,#FBDD57,#F5D948)",
            border: "3px solid rgba(255,255,255,0.85)",
            color: "#2E0B35",
          }}
        >
          {botIcon ? (
            <img src={botIcon} alt="FactionBot" className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <span className="text-2xl">🤖</span>
          )}

          <span
            className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white`}
            style={{ background: botOpen ? "#2ee6a1" : "#ffcc33" }}
          />
        </motion.button>
      </div>

      {/* Mobile stacked bot panel when open */}
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

export default OurTeam;
