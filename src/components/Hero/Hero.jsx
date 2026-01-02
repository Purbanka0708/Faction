import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
// import HeroPng from "../../assets/hero.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-[#F8F4E8] overflow-hidden relative">
      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-8 lg:max-w-[400px]">

            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug text-slate-900"
            >
              Let&apos;s build a strong{" "}
              <span className="text-[#A767FF]">Career Foundation</span> for your
              future
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-slate-700"
            >
              At{" "}
              <span className="font-semibold text-slate-900">
                Faction Education
              </span>
              , we don’t just prepare students for exams;
we build clarity, discipline, and thinking ability.

With strong academics, tech-driven learning, and personal mentorship,
we help students from the Northeast compete confidently in JEE, NEET, and foundational programs — without needing to leave home.

Start early. Think deeply. Build for life.
            </motion.p>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              {/* SIGN UP REDIRECT */}
              <Link
                to="/signup"
                className="flex items-center gap-2 group bg-[#F0D200] text-slate-900 font-semibold px-6 py-3 rounded-full
                           hover:bg-[#A767FF] hover:text-white transition-all duration-300"
              >
                Start Learning
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/background/hero%20banner.png"}
            alt="Student preparing for NEET and IIT/JEE at Faction coaching"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />

          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt="Decorative background shape"
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
