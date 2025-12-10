// src/components/Team/Educators.jsx
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import TeamData from "./TeamData";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
import FactionBot from "../Contact/FactionBot";
import botIcon from "../../assets/factionbot.png";
import { motion } from "framer-motion";

const Educators = () => {
  const [botOpen, setBotOpen] = useState(false);
  const list = TeamData.filter((t) => t.group === "educators");

  return (
    <main className="min-h-screen pb-20 bg-gradient-to-b from-[#042c47] via-[#083a5c] to-[#0c4b74] text-white">
      <Navbar />
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Educators</h1>
          <Link to="/team" className="text-white/80 hover:underline">Back</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {list.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </div>

      {/* bot */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end space-x-4">
        <div className="hidden md:block">
          <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
        </div>

        <motion.button
          onClick={() => setBotOpen((s) => !s)}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#A767FF] text-white flex items-center justify-center shadow-xl border-4 border-white"
          title="Open FactionBot"
        >
          {botIcon ? <img src={botIcon} alt="FactionBot" className="w-10 h-10 rounded-full object-cover" /> : <span className="text-2xl">🤖</span>}
          <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${botOpen ? "bg-green-400" : "bg-yellow-400"}`} />
        </motion.button>
      </div>

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

export default Educators;
