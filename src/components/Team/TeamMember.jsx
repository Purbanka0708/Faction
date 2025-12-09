
import React from "react";


const roleColorMap = [
  { test: /founder/i, color: "#F0D200" },
  { test: /co[- ]?founder/i, color: "#A767FF" }, 
  { test: /academic|faculty|instruct/i, color: "#F6C0B8" },
  { test: /operations|coordinator/i, color: "#A7D9B5" }, 
  { test: /media|marketing|editor/i, color: "#E2B2FF" }, 
  { test: /test|assessment/i, color: "#C8E0FF" }, 
  { test: /facility|support/i, color: "#FFD6E0" }, 
];

function pickBadgeColor(role = "") {
  const r = roleColorMap.find((m) => m.test.test(role));
  return r ? r.color : "#E2E8F0"; 
}

const InitialsFallback = ({ name }) => {
  const initials = name
    .split(" ")
    .map((p) => p.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-semibold text-slate-700 drop-shadow">
      {initials}
    </div>
  );
};

const TeamMember = ({ member }) => {
  const badgeColor = pickBadgeColor(member.role);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden flex items-center justify-center">
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              
              e.currentTarget.style.display = "none";
              
            }}
          />
        ) : null}

        
        {!member.img && <InitialsFallback name={member.name} />}
      </div>

      <h3 className="text-lg font-semibold text-[#1e1e1e]">{member.name}</h3>
      <p className="text-sm text-slate-600 mt-2">{member.role}</p>

      <div
        className="mt-4 px-3 py-1 rounded-full text-sm font-medium"
        style={{
          backgroundColor: badgeColor,
          color: "#111827",
        }}
      >
        {member.role}
      </div>

      <div className="mt-4 flex gap-3">
        
        <a href="#" className="text-[#A767FF] hover:text-[#F0D200]">
          LinkedIn
        </a>
        <a href="#" className="text-[#A767FF] hover:text-[#F0D200]">
          Profile
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
