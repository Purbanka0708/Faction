import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Courses", path: "/courses" },
  { id: 3, title: "About Us", path: "/about" },
  { id: 4, title: "Results", path: "/results" },
  { id: 5, title: "Our Team", path: "/team" },
  { id: 6, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  // active link logic
  const isActiveLink = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="relative z-50 bg-[#F8F4E8] shadow-sm">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo */}
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <h1 className="font-bold text-2xl text-slate-900 cursor-pointer">
            Faction
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => {
              const isActive = isActiveLink(menu.path);

              return (
                <li key={menu.id} className="relative">
                  <Link
                    to={menu.path}
                    className={`inline-block pb-2 relative transition-colors duration-200 ${
                      isActive
                        ? "text-[#A767FF]"
                        : "text-slate-900 hover:text-[#A767FF]"
                    }`}
                  >
                    {menu.title}

                    {/* Underline */}
                    <div
                      className={`absolute left-0 bottom-0 h-[3px] w-full bg-[#F0D200] rounded-md transition-all duration-300 ${
                        isActive ? "block" : "hidden group-hover:block"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}

            {/* CTA */}
            <Link
              to="/signin"
              className="bg-[#F0D200] text-slate-900 font-semibold px-6 py-2 rounded-full ml-3
                hover:bg-[#A767FF] hover:text-white transition-colors duration-300"
            >
              Start Solving
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-4xl text-slate-900"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <IoMdMenu />
        </button>
      </motion.div>

      {/* ---------------- MOBILE MENU ---------------- */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute right-0 top-0 h-full w-72 bg-[#FEFCED] p-6 shadow-xl"
          >
            {/* Close */}
            <button
              className="mb-8 text-3xl text-slate-900"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-6 text-lg font-medium text-slate-900">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-[#A767FF] transition-colors"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}

              {/* CTA */}
              <Link
                to="/signin"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex justify-center px-6 py-3 rounded-full
                  bg-[#F0D200] text-slate-900 font-semibold
                  hover:bg-[#A767FF] hover:text-white transition"
              >
                Start Solving
              </Link>
            </ul>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
