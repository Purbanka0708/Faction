import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Courses", path: "/#courses" },
  { id: 3, title: "About Us", path: "/#about" },
  { id: 4, title: "Our Team", path: "/team" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="relative z-20 bg-[#F8F4E8] shadow-sm">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-2xl text-slate-900 cursor-pointer">
            Faction
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => {
              const isActive = location.pathname === menu.path;

              return (
                <li key={menu.id} className="relative">
                  <Link
                    to={menu.path}
                    className={`inline-block pb-2 text-slate-900 relative group transition-colors duration-200 ${
                      isActive ? "text-[#A767FF]" : "hover:text-[#A767FF]"
                    }`}
                  >
                    {menu.title}

                    {/* NEW UNDERLINE (Rectangle) */}
                    <div
                      className={`absolute left-0 bottom-0 h-[3px] w-full bg-[#F0D200] rounded-md transition-all duration-300 ${
                        isActive ? "block" : "hidden group-hover:block"
                      }`}
                    ></div>
                  </Link>
                </li>
              );
            })}

            {/* Sign In Button */}
            <Link
              to="/signin"
              className="bg-[#F0D200] text-slate-900 font-semibold px-6 py-2 rounded-full ml-3 
                hover:bg-[#A767FF] hover:text-white transition-colors duration-300"
            >
              Start Solving
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl text-slate-900" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
