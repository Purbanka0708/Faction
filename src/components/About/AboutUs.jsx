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
    <main className="min-h-screen bg-gradient-to-b from-[#2a0638] via-[#1b0627] to-[#12001a] text-white relative overflow-hidden">
      <Navbar />

      {/* FLOATING BUBBLES — FULL PAGE (FIXED) */}
      {bubbleConfigs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: ["0%", i % 2 === 0 ? "-6%" : "6%", "0%"],
            opacity: [0, 0.85, 0.65],
            rotate: [0, i % 2 === 0 ? 6 : -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + (i % 3),
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
              "linear-gradient(180deg, rgba(249,221,87,0.06), rgba(248,244,232,0.02))",
            border: "1px solid rgba(249,221,87,0.12)",
            backdropFilter: "blur(6px)",
            color: "#FBDD57",
            fontSize: Math.max(16, b.size / 4),
            zIndex: 5,
          }}
          aria-hidden
        >
          <span style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}>
            {["📚", "⚗️", "🧮", "🔬", "✨", "🧩"][i % 6]}
          </span>
        </motion.div>
      ))}

      {/* CONTENT */}
      <div className="container mx-auto px-6 py-20 space-y-24 relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          About Us
        </motion.h1>

        <InfoCard
          title="Faction"
          description="Faction is a student-driven learning ecosystem built to empower learners through practice-first education, collaboration, and innovation. Started in 2024, Faction focuses on real-world problem solving rather than rote memorization."
        />

        <InfoCard
          image={founderImg}
          title="About Founder"
          description="Dr. Niladri Deb is a distinguished academician and biology mentor, widely respected for his deep conceptual clarity and structured approach to teaching. With years of experience in guiding students through rigorous academic and competitive pathways since 2018, he has consistently focused on building strong fundamentals and disciplined thinking rather than short-term exam strategies. 

Under his guidance, numerous students have achieved outstanding results in NEET, securing high ranks and admissions into India’s top medical institutions, including AIIMS, KGMU, RIMS, CMC, and other leading medical colleges across the country. These results stand as a testament to his methodical teaching style and long-term mentoring approach.

Dr. Deb’s classrooms are known for their calm, logical, and insight-driven environment, where students are encouraged to understand concepts from first principles and develop independent problem-solving abilities. He places strong emphasis on consistency, clarity of thought, and conceptual depth qualities essential for success in highly competitive exams like NEET.

Beyond academics, Dr. Deb is deeply invested in the holistic development of students. He believes that true success comes from sustained effort, ethical learning practices, and mental discipline. At Faction, his mentorship plays a crucial role in shaping confident, focused, and intellectually grounded learners, reinforcing our commitment to meaningful and transformative education."
        />

        <InfoCard
          image={coFounderImg}
          title="About Co-Founder"
          description="Soumyadeep Nandi is the Co-Founder of Faction Education and the mind behind Faction Physics, an initiative born out of his belief that quality education must be concept-driven, student-centric, and scalable through thoughtful use of technology. An alumnus of IIT Kharagpur, he brings together strong academic credentials, firsthand experience of competitive examinations, and a deep understanding of how students learn and struggle.

Having cleared JEE Advanced, KVPY, WBJEE (AIR 49) and other national-level examinations, Soumyadeep understands that long-term success is built on clarity of fundamentals, disciplined practice, and the right learning environment. His teaching philosophy emphasizes first-principle thinking, structured problem-solving, and developing intellectual independence in students.

A strong advocate of technology-enabled learning, Soumyadeep actively integrates digital tools, data-driven assessments, and structured test analytics to enhance both teaching and learning outcomes. He believes that when used correctly, technology can reduce friction in learning, personalize student journeys, and make high-quality mentorship accessible without compromising depth or rigor.

Under his guidance, students have shown consistent academic growth—not just in scores, but in confidence, consistency, and clarity of approach. Beyond the classroom, Soumyadeep is focused on building Faction as a long-term educational ecosystem, where strong pedagogy, ethical mentorship, and intelligent use of technology come together to create meaningful and transformative learning experiences."
          reverse
        />

        <InfoCard
          title="Our Team"
          description="Faction is powered by passionate educators, operations members, and tech innovators working together to create a seamless learning ecosystem."
          clickable
          onClick={() => navigate("/team")}
        />
      </div>

      {/* FACTION BOT */}
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
