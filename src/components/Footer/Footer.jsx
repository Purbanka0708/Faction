import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#F8F4E8]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          
          
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-[black]">About Faction</h1>
            <p className="text-slate-700">
              Faction (A Plan in Progress) is a dedicated coaching institute 
              focused on building strong foundations for students. 
              From Classes 6–10 to NEET & IIT/JEE aspirants, 
              we provide structured learning, expert guidance, regular tests, 
              and personalized mentorship to ensure academic excellence.
            </p>
          </div>

          
          <div className="grid grid-cols-2 gap-10">
            
            
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-[black]">Courses</h1>
              <div className="text-slate-700">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-[#A767FF] duration-200">
                    Foundation (Class 6–10)
                  </li>
                  <li className="cursor-pointer hover:text-[#A767FF] duration-200">
                    IIT/JEE Preparation
                  </li>
                  <li className="cursor-pointer hover:text-[#A767FF] duration-200">
                    NEET Preparation
                  </li>
                  <li className="cursor-pointer hover:text-[#A767FF] duration-200">
                    Test Series & Mentorship
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-[black]">Links</h1>
              <div className="text-slate-700">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-[#A767FF] duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-[#A767FF] duration-200">
                    Courses
                  </li>
                  <li className="cursor-pointer hover:text-[#A767FF] duration-200">
                    About Us
                  </li>
                  <li className="cursor-pointer hover:text-[#A767FF] duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>

          </div>

          
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-[black]">Get In Touch</h1>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-slate-500"
              />
              <button className="bg-[#F0D200] text-slate-900 font-semibold py-4 px-6 rounded-e-xl hover:bg-[#A767FF] hover:text-white transition-all duration-300">
                Go
              </button>
            </div>

            
            <div className="flex space-x-6 py-3 text-slate-800">
              <a href="">
                <FaWhatsapp className="cursor-pointer hover:text-[#A767FF] hover:scale-105 duration-200" />
              </a>
              <a href="">
                <FaInstagram className="cursor-pointer hover:text-[#A767FF] hover:scale-105 duration-200" />
              </a>
              <a href="">
                <TbWorldWww className="cursor-pointer hover:text-[#A767FF] hover:scale-105 duration-200" />
              </a>
              <a href="">
                <FaYoutube className="cursor-pointer hover:text-[#A767FF] hover:scale-105 duration-200" />
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
