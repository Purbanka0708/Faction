import React from "react";
// import BannerPng from "../../assets/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">

        
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/background/education.png"}
            alt="Students studying for NEET and IIT/JEE at Faction coaching"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>

        
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug text-[black]"
            >
              India&apos;s Most Student-Focused Coaching Experience
            </motion.h1>

            <div className="flex flex-col gap-6">

              
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 
                bg-[#FAF2B5] rounded-2xl hover:bg-white 
                duration-300 hover:shadow-2xl border border-transparent hover:border-[#F0D200]"
              >
                <FaBookReader className="text-2xl text-[black]" />
                <p className="text-lg text-slate-900">
                  Comprehensive study material for Boards, NEET &amp; IIT/JEE.
                </p>
              </motion.div>

              
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 
                bg-[#FAF2B5] rounded-2xl hover:bg-white 
                duration-300 hover:shadow-2xl border border-transparent hover:border-[#F0D200]"
              >
                <GrUserExpert className="text-2xl text-[black]" />
                <p className="text-lg text-slate-900">
                  Expert faculty team with years of mentoring experience.
                </p>
              </motion.div>

              
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 
                bg-[#FAF2B5] rounded-2xl hover:bg-white 
                duration-300 hover:shadow-2xl border border-transparent hover:border-[#F0D200]"
              >
                <MdOutlineAccessTime className="text-2xl text-[black]" />
                <p className="text-lg text-slate-900">
                  Regular tests &amp; performance analysis to track progress.
                </p>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
