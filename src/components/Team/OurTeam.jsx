// src/components/Team/OurTeam.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FactionBot from "../Contact/FactionBot";
import botIcon from "../../assets/factionbot.png";
import { motion } from "framer-motion";

const OurTeam = () => {
  const [botOpen, setBotOpen] = useState(false);

  return (
    <main className="min-h-screen pb-20 bg-gradient-to-b from-[#042c47] via-[#083a5c] to-[#0c4b74] text-white">
      <Navbar />

      <div className="container mx-auto py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet The Faction Team</h1>
        <p className="max-w-2xl mx-auto text-gray-200 mb-10">
          Our experienced faculty and team guide students from foundations through NEET &amp; IIT/JEE.
          Click a category to view members of that group.
        </p>

        {/* Category buttons (only these on this page) */}
        <div className="flex justify-center gap-6">
          <Link
            to="/team/educators"
            className="px-6 py-3 rounded-full bg-white text-[#A767FF] font-semibold shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 transition"
          >
            Educators
          </Link>

          <Link
            to="/team/operations"
            className="px-6 py-3 rounded-full bg-white text-[#2a7a47] font-semibold shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 transition"
          >
            Operations
          </Link>

          <Link
            to="/team/webtech"
            className="px-6 py-3 rounded-full bg-white text-[#7a3ecf] font-semibold shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 transition"
          >
            Web &amp; Tech
          </Link>
        </div>
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
          className="relative w-14 h-14 rounded-full bg-[#A767FF] text-white flex items-center justify-center shadow-xl border-4 border-white"
          title="Open FactionBot"
        >
          {botIcon ? (
            <img src={botIcon} alt="FactionBot" className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <span className="text-2xl">🤖</span>
          )}

          <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${botOpen ? "bg-green-400" : "bg-yellow-400"}`} />
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
