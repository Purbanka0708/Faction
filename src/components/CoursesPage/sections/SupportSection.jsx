const SupportSection = () => {
  return (
    <section className="bg-[#FBDD57]/30 py-20">

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">

        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2 text-[#2D0B34]">

              24×7 Doubt Solving
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get instant help from expert mentors anytime.
            </p>
            <button className="text-[#2D0B34] font-medium hover:underline">

              Get Support →
            </button>
          </div>
        ))}

      </div>
    </section>
  );
};

export default SupportSection;
