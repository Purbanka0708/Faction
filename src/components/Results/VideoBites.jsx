import React from "react";
import { motion } from "framer-motion";

/* Temporary placeholder videos (replace later) */
const videos = [
  "/assets/results/videos/student1.mp4",
  "/assets/results/videos/student2.mp4",
  "/assets/results/videos/student3.mp4",
];

const VideoBites = () => {
  return (
    <section className="container mx-auto px-6 pb-20">
      <h2 className="text-3xl font-bold mb-8">Student Video Bites</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-white/10"
          >
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoBites;
