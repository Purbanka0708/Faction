const CourseCard = ({ course }) => {
  return (
    <div className="
      w-full h-full
      bg-white rounded-2xl
      shadow-md
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-xl
      flex flex-col
    ">
      {/* Image placeholder */}
      <div className="h-44 bg-gray-200 rounded-t-2xl relative">
        <span className="absolute top-3 left-3 bg-[#FBDD57] text-xs px-3 py-1 rounded-full font-medium">
          {course.tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="font-semibold text-lg text-[#2D0B34] mb-1">
          {course.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {course.mode} · {course.duration}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <button className="flex-1 border border-[#2D0B34] rounded-lg py-2 text-sm">
            Details
          </button>
          <button className="flex-1 bg-[#2D0B34] text-white rounded-lg py-2 text-sm">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
