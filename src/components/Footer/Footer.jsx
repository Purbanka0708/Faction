import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#F8F4E8]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">

          {/* ABOUT */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-black">About Faction</h1>
            <p className="text-slate-700">
              Faction (A Plan in Progress) is a dedicated coaching institute
              focused on building strong foundations for students.
              From Classes 5–10 to NEET & IIT/JEE aspirants,
              we provide structured learning, expert guidance, regular tests,
              and personalized mentorship to ensure academic excellence.
            </p>
          </div>

          {/* COURSES + LINKS */}
          <div className="grid grid-cols-2 gap-10">

            {/* COURSES */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-black">Courses</h1>
              <ul className="space-y-2 text-lg text-slate-700">
                <li>
                  <Link to="/courses" className="hover:text-[#A767FF] duration-200">
                    Faction Juniors (Class 5–7)
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-[#A767FF] duration-200">
                    IIT/JEE Preparation
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-[#A767FF] duration-200">
                    NEET Preparation
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-[#A767FF] duration-200">
                    Test Series
                  </Link>
                </li>
              </ul>
            </div>

            {/* LINKS */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-black">Links</h1>
              <ul className="space-y-2 text-lg text-slate-700">
                <li>
                  <Link to="/" className="hover:text-[#A767FF] duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-[#A767FF] duration-200">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#A767FF] duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#A767FF] duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* GET IN TOUCH */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-black">Get In Touch</h1>

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

            {/* SOCIAL ICONS */}
            <div className="flex space-x-6 py-3 text-slate-800 text-xl">
              <a
                href="https://wa.me/916909986306"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="hover:text-[#A767FF] hover:scale-105 duration-200" />
              </a>

              <a
                href="https://www.instagram.com/faction.education/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-[#A767FF] hover:scale-105 duration-200" />
              </a>

              <a
                href="https://www.linkedin.com/company/faction-education/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-[#A767FF] hover:scale-105 duration-200" />
              </a>

              <a
                href="https://www.youtube.com/@faction-education"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="hover:text-[#A767FF] hover:scale-105 duration-200" />
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
