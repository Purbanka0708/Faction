// src/components/UI/DroppingCards.jsx
import React from "react";
import { motion } from "framer-motion";

/*
  Usage:
    import DroppingCards from "../components/UI/DroppingCards";
    <DroppingCards items={[{title:'Fast', lines:['A','B']}, ...]} />
*/

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 220, scale: 0.98, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.9, 0.3, 1],
    },
  },
};

const innerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};

const textLine = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const clipVariants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function DroppingCards({ items = [] }) {
  // fallback items if none passed
  const fallback = [
    { title: "Fast Feedback", lines: ["Auto-check tests", "Detailed hints"] },
    { title: "Community Driven", lines: ["Discuss solutions", "Mentor guidance"] },
    { title: "Hands-on Practice", lines: ["Daily questions", "Peer review"] },
  ];
  const data = items.length ? items : fallback;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
        >
          {data.map((it, idx) => (
            <motion.div
              key={idx}
              className="relative"
              variants={cardVariants}
              style={{ perspective: 1100 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 18px 30px rgba(20,20,30,0.08)",
                }}
              >
                {/* Media placeholder (replace with video or image as you like) */}
                <div className="h-44 md:h-52 w-full bg-gradient-to-r from-gray-100 to-gray-50 flex items-center justify-center">
                  <div className="text-sm text-gray-500">Video / Media</div>
                </div>

                {/* Content area with clip-reveal + line animations */}
                <motion.div className="p-5" variants={innerVariants}>
                  <motion.div variants={clipVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h3 className="text-lg font-semibold mb-2 text-[#111827]" variants={textLine}>
                      {it.title}
                    </motion.h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      {(it.lines || []).map((line, i) => (
                        <motion.p key={i} variants={textLine} className="leading-snug">
                          {line}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
