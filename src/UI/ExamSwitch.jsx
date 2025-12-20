import React from "react";

const ExamSwitch = () => {
  return (
    <div className="flex justify-center gap-4 my-8">
      <button className="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold">
        NEET
      </button>
      <button className="px-5 py-2 rounded-full bg-white/10 text-white">
        JEE
      </button>
      <button className="px-5 py-2 rounded-full bg-white/10 text-white">
        JEE ADV
      </button>
    </div>
  );
};

export default ExamSwitch;
