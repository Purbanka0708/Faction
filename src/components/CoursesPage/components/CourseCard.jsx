const CourseCard = ({ course }) => {
  return (
    <div className="bg-[#F8F4E8] rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-[#2D0B34]/10">

      {/* Thumbnail */}
      <div className="h-40 bg-[#2D0B34]/10 relative">
        <span className="absolute top-3 left-3 bg-[#FBDD57] text-[#2D0B34] text-xs px-3 py-1 rounded-full font-semibold">
          {course.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-[#2D0B34]">
          {course.title}
        </h3>

        <div className="text-sm text-[#2D0B34]/70 flex gap-4 mb-4">
          <span>{course.mode}</span>
          <span>{course.duration}</span>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 border border-[#2D0B34] text-[#2D0B34] rounded-lg py-2 hover:bg-[#2D0B34] hover:text-[#F8F4E8] transition">
            Details
          </button>
          <button className="flex-1 bg-[#2D0B34] text-[#F8F4E8] rounded-lg py-2 hover:bg-[#FBDD57] hover:text-[#2D0B34] transition">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
