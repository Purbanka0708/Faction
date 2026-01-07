import React from "react";
// import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <section className="bg-[#FEFCED]">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">

            <h1 className="text-4xl font-bold !leading-snug text-black">
              Join Faction and Begin Your Success Journey
            </h1>

            <p className="text-slate-700">
              Become a part of our growing student community where learning,
              discipline, and mentorship come together to build strong
              foundations for NEET & IIT/JEE success.
            </p>

            {/* SIGN UP REDIRECT */}
            <Link
              to="/signup"
              className="inline-block bg-[#F0D200] text-slate-900 font-semibold px-8 py-3 rounded-full !mt-8
              hover:bg-[#A767FF] hover:text-white transition-all duration-300"
            >
              Join Now
            </Link>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/background/ChatGPT%20Image%20Jan%207%2C%202026%2C%2004_13_06%20PM.png"}
            alt="Students joining Faction community"
            className="w-[500px] md:max-w-[500px] object-cover drop-shadow"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner2;
