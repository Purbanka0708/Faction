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
        
        <Link to="/">
          <h1 className="font-bold text-2xl text-slate-900 cursor-pointer">
            Faction
          </h1>
        </Link>

       
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => {
              const isActive = location.pathname === menu.path;

              return (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    className={`inline-block py-2 px-3 text-slate-900 relative group transition-colors duration-200 ${
                      isActive ? "text-[#A767FF]" : "hover:text-[#A767FF]"
                    }`}
                  >
                    
                    <div
                      className={`w-2 h-2 bg-[#F0D200] absolute rounded-full left-1/2 -translate-x-1/2 top-7 ${
                        isActive ? "block" : "hidden group-hover:block"
                      }`}
                    ></div>

                    {menu.title}
                  </Link>
                </li>
              );
            })}

            
            <Link
              to="/signin"
              className="bg-[#F0D200] text-slate-900 font-semibold px-6 py-2 rounded-full ml-3 
                hover:bg-[#A767FF] hover:text-white transition-colors duration-300"
            >
              Sign In
            </Link>
          </ul>
        </div>

        
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl text-slate-900" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
