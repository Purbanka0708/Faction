// src/components/Team/TeamCard.jsx
import React from "react";

const TeamCard = ({ member }) => {
  // member: { id, name, role, img }
  const { name, role, img } = member || {};

  // initials fallback (first letters of up to two names)
  const initials = name
    ? name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "NA";

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-full max-w-xs mx-auto">
      {img ? (
        <img
          src={img}
          alt={name}
          className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
        />
      ) : (
        <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-2xl font-semibold text-slate-700">
          {initials}
        </div>
      )}

      {/* NAME */}
      <h3 className="text-lg font-semibold text-slate-800 mb-1">{name}</h3>

      {/* ROLE */}
      <p className="text-slate-500 mb-4">{role}</p>

      {/* Badge */}
      <div className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
        {role}
      </div>

      {/* Links */}
      <div className="flex justify-center gap-6 text-sm mt-3">
        <a href="#" className="text-purple-500 hover:underline">LinkedIn</a>
        <a href="#" className="text-purple-500 hover:underline">Profile</a>
      </div>
    </div>
  );
};

export default TeamCard;
