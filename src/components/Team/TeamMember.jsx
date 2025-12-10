// src/components/Team/TeamMember.jsx
import React from "react";

const badgeColor = (group) => {
  switch (group) {
    case "educators":
      return "bg-[#F7DAD3] text-[#9b5a4a]"; // soft peach
    case "operations":
      return "bg-[#DFF2E2] text-[#2a7a47]"; // soft green
    case "content":
    case "webtech":
      return "bg-[#EBD8FF] text-[#7a3ecf]"; // lavender
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const TeamMember = ({ member }) => {
  const initials = member.name
    ? member.name
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "TM";

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
      <div className="flex justify-center mb-4">
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            className="w-28 h-28 rounded-full object-cover shadow-sm"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-[#f1f5f9] flex items-center justify-center text-2xl font-semibold text-slate-700">
            {initials}
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-slate-500 mt-1">{member.role}</p>

      <div className="mt-4 flex items-center justify-center gap-3">
        <span className={`inline-block px-3 py-1 rounded-full text-sm ${badgeColor(member.group)}`}>
          {member.role}
        </span>
      </div>

      <div className="mt-4 text-sm text-[#A767FF] flex justify-center gap-6">
        {/* placeholders for links */}
        <a href="#" className="hover:underline">LinkedIn</a>
        <a href="#" className="hover:underline">Profile</a>
      </div>
    </div>
  );
};

export default TeamMember;
