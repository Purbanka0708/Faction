import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#F8F4E8]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">

            <h1 className="text-4xl font-bold !leading-snug text-[#A767FF]">
              Thousands of Students Trust Faction for Their Success
            </h1>

            <p className="text-slate-700">
              From foundation classes to NEET & IIT/JEE preparation, we help
              students build strong concepts, gain confidence, and achieve
              top results every year.
            </p>

            {/* Enroll Now → Signup Page */}
            <Link
              to="/signup"
              className="inline-flex items-center gap-4 group bg-[#F0D200]
                         text-slate-900 font-semibold px-8 py-3 rounded-full !mt-8
                         hover:bg-[#A767FF] hover:text-white transition-all duration-300"
            >
              Enroll Now
              <FaBell className="group-hover:text-white group-hover:animate-bounce text-lg duration-200" />
            </Link>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
