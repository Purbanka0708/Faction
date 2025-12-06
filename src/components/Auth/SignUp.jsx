
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name) return "Please enter your full name.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email.";
    if (form.password.length < 6) return "Password must be at least 6 characters.";
    if (form.password !== form.confirm) return "Passwords do not match.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) return setError(v);
    setError("");
    // TODO: call signup API
    setTimeout(() => navigate("/signin"), 700);
  };

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#A767FF]/10 to-[#F0D200]/10 p-8">
          <div className="text-center px-6">
            <img src="/src/assets/hero.png" alt="Faction" className="w-48 mx-auto drop-shadow" />
            <h3 className="mt-6 text-2xl font-semibold text-[#A767FF]">Create your Faction account</h3>
            <p className="mt-2 text-slate-600">Join and start learning for NEET & IIT/JEE</p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-[#A767FF]">Sign Up</h2>
          <p className="mt-2 text-slate-700">Create an account to track progress and access course material</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && <div className="text-sm text-red-600">{error}</div>}

            <div>
              <label className="block text-sm font-medium text-slate-700">Full name</label>
              <input name="name" value={form.name} onChange={handleChange} className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A767FF]/30" placeholder="Your full name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A767FF]/30" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input name="password" value={form.password} onChange={handleChange} type="password" className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A767FF]/30" placeholder="Create a password" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Confirm Password</label>
              <input name="confirm" value={form.confirm} onChange={handleChange} type="password" className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A767FF]/30" placeholder="Confirm password" />
            </div>

            <button type="submit" className="w-full bg-[#F0D200] hover:bg-[#A767FF] hover:text-white text-slate-900 font-semibold px-6 py-3 rounded-full transition">
              Create account
            </button>

            <div className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#A767FF] font-semibold">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
