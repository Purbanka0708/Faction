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
        p-6
        text-center
        w-full
        max-w-xs
        mx-auto
        h-full        /* ✅ REDUCED HEIGHT */
        flex
        flex-col
        items-center
      "
    >
      {/* Avatar */}
      <div className="w-24 h-24 mb-3 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center">
        {img ? (
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-xl font-semibold text-slate-700">
            {initials}
          </div>
        )}
      </div>

      {/* NAME */}
      <h3 className="text-base font-semibold text-slate-800 leading-tight">
        {name}
      </h3>

      {/* BADGE */}
      <div className="mt-3 bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-semibold">
        {role}
      </div>

      {/* Small spacer (NOT flex-1 anymore) */}
      <div className="mt-auto pt-4"></div>

      {/* Links */}
      <div className="flex justify-center gap-6 text-sm">
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
