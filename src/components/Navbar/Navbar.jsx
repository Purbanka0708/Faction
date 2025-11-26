import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20 bg-[#FEFCED] shadow-sm">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl text-slate-900">
            Faction
          </h1>
        </div>

        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path || menu.link}
                  className="inline-block py-2 px-3 text-slate-900 hover:text-[#A767FF] relative group transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-[#F0D200] absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn bg-[#F0D200] text-slate-900 font-semibold px-6 py-2 rounded-full ml-3 hover:bg-[#A767FF] hover:text-white transition-colors duration-200">
              Sign In
            </button>
          </ul>
        </div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl text-slate-900" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
