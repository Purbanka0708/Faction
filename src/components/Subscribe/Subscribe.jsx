import React from "react";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${"https://res.cloudinary.com/dttquxaro/image/upload/v1769065221/ChatGPT_Image_Jan_5_2026_06_27_23_PM_irgfen.png"})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {

  const handleEnrollClick = () => {
    const phoneNumber = "916909986306";
    const message = "Hello, I want to enroll. Please share details.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="
          w-full
          min-h-[400px] md:min-h-[600px]   /* FIXED HEIGHT ISSUE */
          flex items-center
          px-4
        "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full"
        >
          <div className="
            text-center
            space-y-4
            max-w-md
            mx-auto
            bg-white/70 backdrop-blur-sm   /* improves readability */
            p-6 md:p-8
            rounded-xl
          ">

            <h1 className="text-2xl md:text-4xl font-bold leading-snug text-[#A767FF]">
              Thousands of Students Trust Faction for Their Success
            </h1>

            <p className="text-sm md:text-base text-slate-700">
              From foundation classes to NEET & IIT/JEE preparation, we help
              students build strong concepts, gain confidence, and achieve
              top results every year.
            </p>

            {/* Enroll Now → WHATSAPP */}
            <button
              onClick={handleEnrollClick}
              className="
                inline-flex items-center gap-3
                bg-[#F0D200]
                text-slate-900 font-semibold
                px-6 md:px-8 py-3
                rounded-full mt-6
                hover:bg-[#A767FF] hover:text-white
                transition-all duration-300
              "
            >
              Enroll Now
              <FaBell className="group-hover:animate-bounce text-lg duration-200" />
            </button>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;