import React from "react";
import { motion } from "framer-motion";
import { toppersData } from "./data/ToppersData";

const ToppersSection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
        Our Toppers
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-16 gap-x-8">
        {toppersData.map((topper, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* Circular Image */}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg mb-6 bg-white">
              <img
                src={topper.image}
                alt={topper.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {topper.name}
            </h3>

            {/* Exam + Rank (optional) */}
            {topper.exam && topper.rank && (
              <p className="text-sm text-gray-300 mt-1">
                {topper.exam} • {topper.rank}
              </p>
            )}

            {/* Company / Institute Logo */}
            {topper.companyLogo && (
              <div className="mt-4 h-6 flex items-center">
                <img
                  src={topper.companyLogo}
                  alt="Company logo"
                  className="h-full object-contain"
                />
              </div>
            )}

            {/* College / University */}
            {topper.college && (
              <p className="text-sm text-gray-300 mt-3">
                {topper.college}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToppersSection;
