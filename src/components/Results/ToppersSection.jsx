import React from "react";
import { motion } from "framer-motion";
import { toppersData } from "./data/ToppersData";

const ToppersSection = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Our Toppers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {toppersData.map((topper, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-r from-[#45389B] to-[#292259]
                       rounded-2xl shadow-xl overflow-hidden text-white"
          >
            <div className="h-56 bg-white flex items-center justify-center">
              <img
                src={topper.image}
                alt={topper.name}
                className="h-full object-contain p-4"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">{topper.name}</h3>
              <p className="text-sm text-gray-200 mt-1">{topper.exam}</p>
              <p className="mt-2 font-semibold">{topper.rank}</p>
              <p className="text-sm text-gray-300 mt-1">
                {topper.college}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToppersSection;
