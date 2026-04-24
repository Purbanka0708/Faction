// src/components/Contact/Contact.jsx

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";
import FactionBot from "./FactionBot";
import botIcon from "../../assets/factionbot.png";
import { motion } from "framer-motion";

const Contact = () => {
  const [botOpen, setBotOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    callback: false,
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const formVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Handle Inputs
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setStatusMessage("Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatusMessage("");

    try {
      await emailjs.send(
        "service_b5lwgjl",
        "template_eqlpa18",
        {
          user_name: formData.name,
          user_phone: formData.phone,
          message: formData.message,
          callback: formData.callback ? "Yes" : "No",
        },
        "lvXAG4_UNu6eXv5P3"
      );

      setStatusMessage("Message sent successfully ✅");

      setFormData({
        name: "",
        phone: "",
        message: "",
        callback: false,
      });
    } catch (error) {
      console.error(error);
      setStatusMessage("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <main
      className="min-h-screen w-full relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dttquxaro/image/upload/v1769065833/Gemini_Generated_Image_ojfjfaojfjfaojfj_vavmr8.png)",
      }}
    >
      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">
            Contact Us
          </h1>

          <p className="text-center text-slate-200 max-w-2xl mx-auto mt-1">
            Have a question? Fill the form and our team will connect with you.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* LEFT FORM */}
            <motion.div
              className="w-full order-2 md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={formVariants}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl mx-auto md:mx-0">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Any Queries? Drop a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Name
                    </label>

                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded-xl border border-slate-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Contact number
                    </label>

                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded-xl border border-slate-200"
                      placeholder="+91 98xxxxxxxx"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Message
                    </label>

                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded-xl border border-slate-200"
                      placeholder="Tell us about your query"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      id="callback"
                      name="callback"
                      checked={formData.callback}
                      onChange={handleChange}
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-300"
                    />

                    <label
                      htmlFor="callback"
                      className="text-sm text-slate-700"
                    >
                      Request a callback
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 w-full bg-yellow-400 hover:bg-purple-700 hover:text-white transition py-3 rounded-full font-semibold"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {statusMessage && (
                    <p className="text-center mt-2 font-medium text-purple-700">
                      {statusMessage}
                    </p>
                  )}

                </form>
              </div>
            </motion.div>


            {/* RIGHT VIDEO */}
            <motion.div
              className="relative flex items-center justify-center group order-1 md:order-2 mb-6 mt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={videoVariants}
            >
              <div className="absolute rounded-2xl w-[90%] h-[88%] -top-4 -left-4 border-4 border-violet-400/50 z-10" />

              <div className="absolute rounded-2xl w-[92%] h-[92%] -bottom-4 -right-4 bg-violet-500/50 backdrop-blur-sm shadow-lg z-20" />

              <div className="relative z-30 rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full max-w-2xl">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  <video
                    src="https://res.cloudinary.com/dttquxaro/video/upload/v1769065558/Faction_Video_teewf1.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>


      {/* BOT */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end">
        <div className="hidden md:block">
          <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
        </div>

        <motion.button
          onClick={() => setBotOpen((s) => !s)}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#A767FF] text-white flex items-center justify-center shadow-xl border-4 border-white"
        >
          <img
            src={botIcon}
            alt="FactionBot"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span
            className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
              botOpen ? "bg-green-400" : "bg-yellow-400"
            }`}
          />
        </motion.button>
      </div>

      <div className="md:hidden">
        {botOpen && (
          <div className="fixed left-4 right-4 bottom-24 z-40">
            <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
          </div>
        )}
      </div>

    </main>
  );
};

export default Contact;