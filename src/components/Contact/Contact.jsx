// src/components/Contact/Contact.jsx
import React, { useState } from "react";
import FactionBot from "./FactionBot";
import Navbar from "../Navbar/Navbar";
import botIcon from "../../assets/factionbot.png"; 
import { motion } from "framer-motion";

const Contact = () => {
  const [botOpen, setBotOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    callback: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Message sent (demo).");
    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
      callback: false,
    });
  };

  return (
    <main className="min-h-screen pb-20 
      bg-gradient-to-br from-[#02203c] via-[#043a64] to-[#074b87] text-white">

      {/* ⭐ NAVBAR ALWAYS ON TOP */}
      <Navbar />

      {/* ⭐ Centered Contact Form */}
      <div className="container mx-auto py-16 flex justify-center">
        <div className="bg-white text-black rounded-2xl p-10 shadow-xl w-full md:w-[520px]">

          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Have a question or want to request a callback? Fill the form and our team will connect with you.
          </p>

          <form onSubmit={submit} className="space-y-4">

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border px-4 py-3"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Contact number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border px-4 py-3"
                placeholder="+91 98xxxxxxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border px-4 py-3"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border px-4 py-3"
                rows={3}
                placeholder="Your address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border px-4 py-3"
                rows={5}
                placeholder="Tell us about your query"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                id="callback"
                name="callback"
                type="checkbox"
                checked={form.callback}
                onChange={handleChange}
              />
              <label htmlFor="callback" className="text-sm">
                Request a callback
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#F0D200] text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-[#c9b000] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ⭐ Floating Bot Icon + Panel */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end space-x-4">

        {/* Bot Panel (Desktop Only) */}
        <div className="hidden md:block">
          <FactionBot open={botOpen} onClose={() => setBotOpen(false)} />
        </div>

        {/* Floating Icon */}
        <motion.button
          onClick={() => setBotOpen((s) => !s)}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#A767FF] text-white 
          flex items-center justify-center shadow-xl border-4 border-white"
        >
          <img src={botIcon} alt="FactionBot" className="w-10 h-10 rounded-full" />
          <span
            className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
              botOpen ? "bg-green-400" : "bg-yellow-400"
            }`}
          />
        </motion.button>
      </div>

      {/* Mobile Bot Overlay */}
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
