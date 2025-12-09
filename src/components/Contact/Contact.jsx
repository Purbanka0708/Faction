// src/components/Contact/Contact.jsx
import React, { useState } from "react";
import Chatbot from "./Chatbot";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    callback: false,
  });
  const [status, setStatus] = useState(""); // 'sent' | 'error' | ''

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  }

  function validate() {
    if (!form.name.trim()) return "Enter name";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "Enter valid email";
    if (!form.phone.trim() || !/^[\d+\-\s]{6,15}$/.test(form.phone)) return "Enter valid phone";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    const err = validate();
    if (err) {
      setStatus(err);
      return;
    }

    // Replace this with your real backend endpoint later
    // Example: await fetch("/api/contact", {method: "POST", body: JSON.stringify(form)})
    try {
      console.log("Contact form submit:", form);
      setStatus("sent");
      setForm({ name: "", phone: "", email: "", message: "", callback: false });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="min-h-screen bg-[#FEFCED]">
      <Navbar />
      <div className="container py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-[black] mb-2">Contact Us</h2>
          <p className="text-slate-700 mb-6">
            Have a question or want to request a callback? Fill the form and our team will connect with you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#A767FF] outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contact number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#A767FF] outline-none"
                placeholder="+91 98xxxxxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#A767FF] outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#A767FF] outline-none"
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
                className="w-4 h-4"
              />
              <label htmlFor="callback" className="text-slate-700">
                Request a callback
              </label>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-[#F0D200] hover:bg-[#A767FF] hover:text-white transition-colors px-6 py-3 rounded-full font-semibold"
              >
                Send Message
              </button>

              <div className="text-sm text-slate-600">
                {status === "sent" && <span className="text-green-600">Sent — we will contact you soon.</span>}
                {status === "error" && <span className="text-red-600">Something went wrong. Try again.</span>}
                {status && typeof status === "string" && status !== "sent" && status !== "error" && (
                  <span className="text-red-600">{status}</span>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Chatbot */}
        <div>
          <Chatbot />
        </div>
      </div>
    </section>
  );
};

export default Contact;
