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

/* ---------------- FLOATING BUBBLES (GLOBAL) ---------------- */

const bubbleConfigs = [
  { left: "6%", top: "12%", size: 110, delay: 0 },
  { left: "85%", top: "8%", size: 90, delay: 1.2 },
  { left: "8%", top: "72%", size: 70, delay: 2.1 },
  { left: "88%", top: "64%", size: 90, delay: 0.6 },
  { left: "50%", top: "3%", size: 50, delay: 1.6 },
  { left: "28%", top: "40%", size: 36, delay: 2.8 },
];

/* ---------------- MOTION VARIANTS ---------------- */

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

/* ---------------- REUSABLE CARD ---------------- */

const InfoCard = ({
  image,
  title,
  description,
  reverse = false,
  clickable = false,
  onClick,
}) => {
  const motionVariant = reverse ? fadeRight : fadeLeft;

  return (
    <motion.div
      variants={motionVariant}
      whileHover={clickable ? { scale: 1.02 } : {}}
      onClick={onClick}
      className={`
        group relative flex
        ${reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"}
        rounded-3xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_25px_70px_rgba(0,0,0,0.45)]
        overflow-hidden
        cursor-${clickable ? "pointer" : "default"}
      `}
    >
      {/* IMAGE */}
      {image && (
        <div className="md:w-1/2 flex items-center justify-center p-10">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="
              relative rounded-3xl overflow-hidden
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              ring-1 ring-white/10
            "
          >
            <img
              src={image}
              alt={title}
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FBDD57]/10 via-transparent to-transparent" />
          </motion.div>
        </div>
      )}

      {/* TEXT */}
      <div className="flex-1 px-8 py-12 md:px-14 md:py-16">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-wide">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
          {description}
        </p>

        {clickable && (
          <span className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[#FBDD57] group-hover:gap-3 transition-all">
            Explore the team →
          </span>
        )}
      </div>
    </motion.div>
  );
};

/* ---------------- PAGE ---------------- */

const AboutUs = () => {
  const navigate = useNavigate();
  const [botOpen, setBotOpen] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#2a0638] via-[#1b0627] to-[#12001a] text-white">
      <Navbar />

      {/* FLOATING BUBBLES WITH ICONS */}
      {bubbleConfigs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            y: ["0%", i % 2 === 0 ? "-6%" : "6%", "0%"],
            opacity: [0.3, 0.7, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + i,
            delay: b.delay,
            ease: "easeInOut",
          }}
          className="pointer-events-none fixed rounded-full flex items-center justify-center"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            background:
              "linear-gradient(180deg, rgba(249,221,87,0.05), rgba(248,244,232,0.02))",
            border: "1px solid rgba(249,221,87,0.12)",
            backdropFilter: "blur(8px)",
            zIndex: 5,
          }}
          aria-hidden
        >
          <span
            style={{
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
              fontSize: Math.max(16, b.size / 4),
            }}
          >
            {["📚", "⚗️", "🧮", "🔬", "✨", "🧩"][i % 6]}
          </span>
        </motion.div>
      ))}

      {/* CONTENT */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-28 space-y-32 relative z-10"
      >
        <motion.div variants={fadeLeft} className="text-center max-w-3xl mx-auto">
          <h1 className="relative inline-block text-4xl md:text-6xl font-bold mb-8">
            Building Thinkers,
            <span className="text-[#FBDD57]"> Not Just Toppers</span>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-1 rounded-full bg-[#FBDD57]/60" />
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Faction is a student-driven learning ecosystem focused on depth,
            discipline, and long-term mastery — not shortcuts.
          </p>
        </motion.div>

        <InfoCard
          title="What is Faction?"
          description="Founded in 2024, Faction is built around practice-first learning, structured thinking, and ethical mentorship. We prioritize conceptual clarity and real-world problem solving over rote memorization."
        />

        <InfoCard
          image={founderImg}
          title="About the Founder"
          description="Dr. Niladri Deb is a highly respected biology mentor known for his calm, logic-driven teaching style and deep conceptual approach. Since 2018, his mentorship has guided students to top medical institutions including AIIMS, KGMU, RIMS, CMC, and other leading colleges. At Faction, his focus lies in building disciplined thinking, consistency, and first-principle understanding — shaping learners for sustained academic success and personal growth."
        />

        <InfoCard
          image={coFounderImg}
          title="About the Co-Founder"
          reverse
          description="An IIT Kharagpur alumnus, Soumyadeep Nandi brings together academic rigor and modern educational design.Having cleared JEE Advanced, KVPY, and WBJEE (AIR 49), he emphasizes structured problem solving, clarity of fundamentals, and intellectual independence. At Faction, he leads technology-driven learning systems that combine pedagogy, analytics, and scalable mentorship — without compromising depth."
        />

        <InfoCard
          title="Our Team"
          description="Faction is powered by educators, operations leaders, and technologists united by a shared vision — building an education ecosystem rooted in clarity, discipline, and trust."
          clickable
          onClick={() => navigate("/team")}
        />
      </motion.section>

      {/* FACTION BOT */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end">
        <div className="hidden md:block">
          <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
        </div>

        <motion.button
          onClick={() => setBotOpen((s) => !s)}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#A767FF] text-white flex items-center justify-center shadow-xl border-4 border-white"
        >
          <img src={botIcon} alt="FactionBot" className="w-10 h-10 rounded-full" />
          <span
            className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
              botOpen ? "bg-green-400" : "bg-yellow-400"
            }`}
          />
        </motion.button>
      </div>
    </main>
  );
};

export default AboutUs;
