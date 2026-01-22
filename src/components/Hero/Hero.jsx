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
    <section className="bg-white overflow-hidden relative">
      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[unset] md:min-h-[650px] lg:mt-20">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center md:items-start justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-8 max-w-[90%] sm:max-w-[500px] lg:max-w-[400px]">
            {" "}
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
              className="text-sm text-slate-700 space-y-3 leading-relaxed max-w-[90%] mx-auto md:mx-0"
            >
              <p>
                At{" "}
                <span className="font-semibold text-slate-900">
                  Faction Education,
                </span>
                <br />
                We don’t just prepare students for exams,
                <br />
                We build clarity, discipline, and thinking ability.
              </p>

              <p>
                With strong academics, tech-driven learning, and personal
                mentorship, we help students from the Northeast compete
                confidently in JEE, NEET, and foundational programs without
                needing to leave home.
              </p>

              <p className="font-semibold text-slate-900 bg-slate-100 inline-block px-4 py-2 rounded-lg">
                Start early. Think deeply. Build for life.
              </p>
            </motion.p>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start mt-2"
            >
              {/* SIGN UP REDIRECT */}
              <Link
                to="/signup"
                className="flex items-center gap-2 group bg-[#F0D200] text-slate-900 font-semibold px-7 py-4 rounded-full text-base shadow-md hover:bg-[#A767FF] hover:text-white transition-all duration-300"
              >
                Start Learning
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center ">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={
              "https://res.cloudinary.com/dttquxaro/image/upload/v1769067894/HeroPng-Photoroom_mvvfzu.png"
            }
            alt="Student preparing for NEET and IIT/JEE at Faction coaching"
            className="relative md:absolute w-full sm:w-[360px] md:w-[800px] xl:w-[1000px] -mt-10 md:mt-0 z-10 drop-shadow-2xl -translate-y-4"
          />

          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt="Decorative background shape"
            className="absolute -bottom-[170px] w-[800px] md:w-[1500px] z-[1] hidden lg:block opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;