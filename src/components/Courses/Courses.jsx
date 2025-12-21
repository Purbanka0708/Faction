import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CoursesData = [
  {
    id: 1,
    title: "Foundation Courses (Class 5-8)",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "IIT/JEE Preparation",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "NEET Preparation",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Tests Series",
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Doubt-Solving & Mentorship",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 Academic Support",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Courses = () => {
  return (
    <section className="bg-[#F8F4E8]">
      <div className="container pb-14 pt-16">

        <h1 className="text-4xl font-bold text-left pb-10 text-[black]">
          Courses & Programs We Offer
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {CoursesData.map((course) => (
            <motion.div
              key={course.id}
              variants={SlideLeft(course.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Redirect to Courses page */}
              <Link
                to="/courses"
                className="bg-[#FAF2B5] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7
                           hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl
                           border border-transparent hover:border-[#F0D200] cursor-pointer"
              >
                <div className="text-4xl mb-4 text-[black]">
                  {course.icon}
                </div>

                <h1 className="text-lg font-semibold text-center px-3 text-slate-900">
                  {course.title}
                </h1>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
