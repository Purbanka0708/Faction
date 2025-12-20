import React from "react";
import { motion } from "framer-motion";

const sliderItems = [
  "AIR 32 – JEE Advanced",
  "AIR 118 – NEET",
  "AIR 256 – JEE Advanced",
  "AIR 402 – JEE Main",
];

const ResultsSlider = () => {
  return (
    <section className="overflow-hidden py-12 bg-black/10">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap"
      >
        {sliderItems.concat(sliderItems).map((item, index) => (
          <div
            key={index}
            className="px-8 py-4 rounded-full bg-[#45389B] text-white shadow-md"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ResultsSlider;
