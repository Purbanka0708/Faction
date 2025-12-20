const HeroSection = () => {
  return (
    <section className="bg-[#2D0B34] text-[#F8F4E8]">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Courses
          </h1>

          <p className="text-[#F8F4E8]/80 mb-6 max-w-lg">
            Structured offline learning programs for School, JEE & NEET aspirants.
          </p>

          <input
            type="text"
            placeholder="Search courses..."
            className="w-full max-w-md px-4 py-3 rounded-lg text-[#2D0B34] outline-none"
          />

          <div className="flex flex-wrap gap-3 mt-6">
            {["Class 5–8", "Foundation", "NEET", "JEE", "Test Series"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-1 rounded-full bg-[#FBDD57] text-[#2D0B34] text-sm font-medium"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="h-72 rounded-2xl bg-[#FBDD57]/20"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
