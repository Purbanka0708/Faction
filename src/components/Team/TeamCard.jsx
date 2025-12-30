// src/components/Team/TeamCard.jsx
import React from "react";

const TeamCard = ({ member }) => {
  const { name, role, img } = member || {};

  // initials fallback
  const initials = name
    ? name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "NA";

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-xl
        p-8
        text-center
        w-full
        max-w-xs
        mx-auto
        h-[420px]          /* 🔥 FIXED HEIGHT */
        flex
        flex-col
        items-center
      "
    >
      {/* Avatar (fixed size container) */}
      <div className="w-28 h-28 mb-4 flex items-center justify-center">
        {img ? (
          <img
            src={img}
            alt={name}
            className="w-28 h-28 rounded-full object-cover"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-semibold text-slate-700">
            {initials}
          </div>
        )}
      </div>

      {/* NAME */}
      <h3 className="text-lg font-semibold text-slate-800 leading-tight">
        {name}
      </h3>

      {/* ROLE TEXT (fixed height using clamp) */}
      <p className="text-slate-500 mt-1 line-clamp-2">
        {role}
      </p>

      {/* Badge */}
      <div className="mt-4 inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
        {role}
      </div>

      {/* Spacer pushes links to bottom */}
      <div className="flex-1"></div>

      {/* Links (always aligned) */}
      <div className="flex justify-center gap-6 text-sm mt-4">
        <a href="#" className="text-purple-500 hover:underline">
          LinkedIn
        </a>
        <a href="#" className="text-purple-500 hover:underline">
          Profile
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
