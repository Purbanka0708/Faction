const CourseCardSkeleton = () => {
  return (
    <div
      className="
        w-full h-full
        bg-white rounded-2xl
        shadow-md
        animate-pulse
        flex flex-col
      "
    >
      {/* Image */}
      <div className="h-80 rounded-t-2xl bg-gray-200" />

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="h-5 w-3/4 bg-gray-200 rounded mb-2" />
        <div className="h-4 w-1/2 bg-gray-200 rounded mb-4" />

        <div className="mt-auto flex gap-3">
          <div className="flex-1 h-9 bg-gray-200 rounded-lg" />
          <div className="flex-1 h-9 bg-gray-300 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
