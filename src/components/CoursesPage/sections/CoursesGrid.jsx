import { useState } from "react";
import CourseCard from "../components/CourseCard";

const CoursesGrid = ({ data }) => {
  const items = data.subjects || data.streams;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full h-full flex flex-col">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2D0B34]">
          {data.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Mode: {data.mode}
        </p>
      </div>

      {/* Tabs (NORMAL SCROLL — NOT STICKY) */}
      {items.length > 1 && (
        <div className="mb-6">
          <div className="flex gap-3 flex-wrap">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeIndex === index
                      ? "bg-[#2D0B34] text-[#F8F4E8] shadow-md"
                      : "bg-[#FBDD57]/40 text-[#2D0B34] hover:bg-[#FBDD57]"
                  }`}
              >
                {item.subject || item.stream}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Courses Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
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
