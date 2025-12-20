import { useState } from "react";
import CourseCard from "../components/CourseCard";

const CoursesGrid = ({ data }) => {
  // detect subjects OR streams
  const items = data.subjects || data.streams;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container mx-auto px-6 py-16">
      
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#2D0B34] mb-8">

          {data.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Mode: {data.mode}
        </p>
      </div>

      {/* Tabs (only if more than one subject/stream) */}
      {items.length > 1 && (
  <div className="flex gap-4 mb-10 flex-wrap">
    {items.map((item, index) => (
      <button
        key={item.id}
        onClick={() => setActiveIndex(index)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition
          ${
            activeIndex === index
              ? "bg-[#2D0B34] text-[#F8F4E8]"
              : "bg-[#FBDD57]/40 text-[#2D0B34] hover:bg-[#FBDD57]"
          }`}
      >
        {item.subject || item.stream}
      </button>
    ))}
  </div>
)}


      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items[activeIndex].courses.map((course) => (
          <CourseCard
            key={course.id}
            course={{
              ...course,
              tag: data.title,
              mode: data.mode,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesGrid;
