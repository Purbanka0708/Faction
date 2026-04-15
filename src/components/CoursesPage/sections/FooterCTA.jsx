import React from "react";
import { Link } from "react-router-dom";

const FooterCTA = () => {

  // WhatsApp redirect function
  const handleWhatsAppClick = () => {
    const phoneNumber = "916909986306";
    const message = "Hello, I would like to talk to a counselor.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-[#2D0B34] text-[#F8F4E8] py-16 text-center">

      <h2 className="text-3xl font-bold mb-4">
        Start Learning With Faction
      </h2>

      <p className="text-white/80 mb-8">
        Join thousands of students achieving top results.
      </p>

      <div className="flex justify-center gap-4">
        
        {/* Talk to Counselor → WHATSAPP */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#FBDD57] text-[#2D0B34] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          Talk to Counselor
        </button>

        {/* Start Learning → Arena Page */}
        <Link to="/arena">
          <button className="border border-[#F8F4E8] px-6 py-3 rounded-lg
                             hover:bg-[#F8F4E8] hover:text-[#2D0B34] transition">
            Start Learning
          </button>
        </Link>

      </div>
    </section>
  );
};

export default FooterCTA;