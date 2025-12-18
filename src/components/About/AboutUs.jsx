import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

/* Bot */
import FactionBot from "../Contact/FactionBot";
import botIcon from "../../assets/factionbot.png";

/* Images */
import founderImg from "../../assets/about/founder.jpg";
import coFounderImg from "../../assets/about/cofounder.jpg";

/* ---------------- REUSABLE CARD ---------------- */

const InfoCard = ({
  image,
  title,
  description,
  reverse = false,
  clickable = false,
  onClick,
}) => (
  <motion.div
    whileHover={{ scale: clickable ? 1.02 : 1 }}
    className={`flex ${
      reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
    }
    bg-gradient-to-r from-[#45389B] to-[#292259]
    text-white rounded-2xl shadow-xl overflow-hidden
    cursor-${clickable ? "pointer" : "default"}`}
    onClick={onClick}
  >
    {/* IMAGE */}
    <div className="relative w-full md:w-1/2 h-72 md:h-auto bg-white flex items-center justify-center">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-6
                     transition-transform duration-300 hover:scale-105"
        />
      ) : (
        <div className="text-gray-400 text-sm">Image Placeholder</div>
      )}
    </div>

    {/* TEXT */}
    <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-200 text-sm md:text-base leading-relaxed">
        {description}
      </p>

      {clickable && (
        <span className="mt-6 inline-block text-sm font-semibold text-white underline">
          Click to explore →
        </span>
      )}
    </div>
  </motion.div>
);

/* ---------------- PAGE ---------------- */

const AboutUs = () => {
  const navigate = useNavigate();
  const [botOpen, setBotOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a0638] via-[#1b0627] to-[#12001a] text-white">
      <Navbar />

      {/* CONTENT */}
      <div className="container mx-auto px-6 py-20 space-y-24">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          About Us
        </motion.h1>

        {/* FACTION */}
        <InfoCard
          title="Faction"
          description="Faction is a student-driven learning ecosystem built to empower learners through practice-first education, collaboration, and innovation. Started in 2024, Faction focuses on real-world problem solving rather than rote memorization."
        />

        {/* FOUNDER */}
        <InfoCard
          image={founderImg}
          title="About Founder"
          description="The founder envisioned Faction as a platform where students move beyond rote learning and build strong real-world problem-solving skills through guidance, practice, and mentorship."
        />

        {/* CO-FOUNDER */}
        <InfoCard
          image={coFounderImg}
          title="About Co-Founder"
          description="The co-founder focuses on scaling impact, mentoring teams, and ensuring a smooth and inclusive learning experience for every student."
          reverse
        />

        {/* TEAM */}
        <InfoCard
          title="Our Team"
          description="Faction is powered by passionate educators, operations members, and tech innovators working together to create a seamless learning ecosystem."
          clickable
          onClick={() => navigate("/team")}
        />

        {/* FACULTY & ALUMNI */}
        <InfoCard
          title="Faculty & Alumni"
          description="Our faculty mentors and alumni provide academic depth, industry exposure, and continuous guidance to help learners grow confidently."
          reverse
        />
      </div>

      {/* ---------------- FACTION BOT ---------------- */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end">
        <div className="hidden md:block">
          <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
        </div>

        <motion.button
          onClick={() => setBotOpen((s) => !s)}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#A767FF] text-white
                     flex items-center justify-center shadow-xl
                     border-4 border-white"
        >
          <img
            src={botIcon}
            alt="FactionBot"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span
            className={`absolute -top-1 -right-1 w-3 h-3 rounded-full
                        border-2 border-white ${
                          botOpen ? "bg-green-400" : "bg-yellow-400"
                        }`}
          />
        </motion.button>
      </div>
    </main>
  );
};

export default AboutUs;
