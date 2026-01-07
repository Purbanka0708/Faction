import React from "react";
import { toppersData } from "./data/ToppersData";

const getYearFromRank = (rank) => {
  const match = rank.match(/\b(20\d{2})\b/);
  return match ? match[1] : "Others";
};

/* AND MANY MORE CARD */
const AndManyMoreCard = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-40 h-40 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center mb-8">
        <span className="text-4xl text-white/70">+</span>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        And many more
      </h3>

      <p className="text-sm text-gray-400">
        Successful students
      </p>
    </div>
  );
};

const ToppersSection = ({ activeExam, setActiveExam }) => {
  const filteredToppers = toppersData.filter(
    (topper) => topper.exam === activeExam
  );

  /* ================= NEET LOGIC (YEAR-WISE) ================= */
  const groupedByYear =
    activeExam === "NEET"
      ? filteredToppers.reduce((acc, topper) => {
          const year = getYearFromRank(topper.rank);
          if (!acc[year]) acc[year] = [];
          acc[year].push(topper);
          return acc;
        }, {})
      : null;

  const sortedYears =
    activeExam === "NEET"
      ? Object.keys(groupedByYear).sort((a, b) => b - a)
      : [];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#2a0038] via-[#24002f] to-[#1a0022]">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Faction Hall of Fame
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-6 mb-20">
        {["NEET", "JEE"].map((exam) => (
          <button
            key={exam}
            onClick={() => setActiveExam(exam)}
            className={`px-8 py-3 rounded-full font-semibold transition
              ${
                activeExam === exam
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            {exam}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-6">

        {/* ================= NEET VIEW ================= */}
        {activeExam === "NEET" && (
          <div className="space-y-32">
            {sortedYears.map((year) => (
              <div key={year}>
                <h3 className="text-4xl font-bold text-center text-yellow-400 mb-16">
                  {year} Results
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-24 gap-x-16 text-center">
                  {groupedByYear[year].map((topper, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-40 h-40 rounded-full overflow-hidden bg-white mb-8">
                        <img
                          src={topper.image}
                          alt={topper.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">
                        {topper.name}
                      </h3>

                      <p className="text-sm text-gray-300 mb-4">
                        {topper.exam} • {topper.rank}
                      </p>

                      <p className="text-sm text-gray-400">
                        {topper.college}
                      </p>
                    </div>
                  ))}

                  <AndManyMoreCard />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= JEE VIEW (NO YEAR) ================= */}
        {activeExam === "JEE" && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-24 gap-x-16 text-center">
              {filteredToppers.map((topper, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden bg-white mb-8">
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {topper.name}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4">
                    {topper.exam} • {topper.rank}
                  </p>

                  <p className="text-sm text-gray-400">
                    {topper.college}
                  </p>
                </div>
              ))}

              {/* SINGLE AND MANY MORE */}
              <AndManyMoreCard />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToppersSection;
