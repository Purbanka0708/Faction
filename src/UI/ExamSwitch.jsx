import React from "react";

const ExamSwitch = ({ active, setActive }) => {
  return (
    <div className="flex justify-center gap-4 mb-10">
      {/* NEET */}
      <button
        onClick={() => setActive("NEET")}
        className={`px-6 py-2 rounded-full font-semibold transition
          ${
            active === "NEET"
              ? "bg-yellow-400 text-black"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
      >
        NEET
      </button>

      {/* JEE */}
      <button
        onClick={() => setActive("JEE")}
        className={`px-6 py-2 rounded-full font-semibold transition
          ${
            active === "JEE"
              ? "bg-yellow-400 text-black"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
      >
        JEE
      </button>
    </div>
  );
};

export default ExamSwitch;
