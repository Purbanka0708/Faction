
import React from "react";
import Navbar from "../Navbar/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <section className="min-h-screen bg-[#FEFCED] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-4xl">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
