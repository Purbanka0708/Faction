import React from "react";
import ExamSwitch from "../../UI/ExamSwitch";
import { resultsData } from "./data/resultsData";

const ResultsTable = ({ activeExam, setActiveExam }) => {
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Detailed Results
      </h2>

      <ExamSwitch active={activeExam} setActive={setActiveExam} />

      <div className="overflow-x-auto">
        <table className="w-full border borderwhite/10 rounded-xl overflow-hidden">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4 text-left">Student Name</th>
              <th className="p-4 text-left">Score / Rank</th>
              <th className="p-4 text-left">College</th>
            </tr>
          </thead>

          <tbody>
            {resultsData[activeExam].map((row, index) => (
              <tr
                key={`${activeExam}-${index}`}
                className="border-t border-white/10 hover:bg-white/5"
              >
                <td className="p-4">{row.name}</td>
                <td className="p-4">{row.score}</td>
                <td className="p-4">{row.college}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ResultsTable;