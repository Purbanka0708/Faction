import React from "react";
import { motion } from "framer-motion";

const HeroResults = () => {
  return (
    <section className="container mx-auto px-6 pt-20 pb-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-extrabold mb-6"
      >
        Our Results Speak Louder Than Words
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-[#e9e4de]/80 text-base md:text-lg"
      >
        Year after year, our Factionites have proven the path to top ranks across India’s leading institutions. Now it’s your turn to walk it.
      </motion.p>
    </section>
  );
};

export default HeroResults;
