import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "./data/testimonialsData";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 pt-10 pb-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        What Our Students Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((t, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-r from-[#45389B] to-[#292259]
                       rounded-2xl shadow-xl p-8 text-white"
          >
            <p className="text-sm text-gray-200 leading-relaxed mb-6">
              “{t.review}”
            </p>

            <div className="border-t border-white/20 pt-4">
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-300">
                {t.exam} • {t.college}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
