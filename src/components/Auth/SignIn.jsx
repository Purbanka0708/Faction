// src/components/Auth/SignIn.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import HeroPng from "../../assets/hero.png"; // IMPORT from src/assets

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.email) return "Please enter an email.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email.";
    if (!form.password || form.password.length < 6)
      return "Password must be at least 6 characters.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) return setError(v);
    setError("");
    // TODO: replace with real auth API call
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left - visual */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#A767FF]/10 to-[#F0D200]/10 p-8">
          <div className="text-center px-6">
            <img src={HeroPng} alt="Faction" className="w-48 mx-auto drop-shadow" />
            <h3 className="mt-6 text-2xl font-semibold text-[#A767FF]">Welcome back to Faction</h3>
            <p className="mt-2 text-slate-600">Sign in to continue your learning journey</p>
          </div>
        </div>

        {/* Right - form */}
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-[#A767FF]">Sign In</h2>
          <p className="mt-2 text-slate-700">Enter your details to access your account</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && <div className="text-sm text-red-600">{error}</div>}

            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A767FF]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-2 relative">
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A767FF]/30 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-slate-700">
                <input
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300"
                />
                Remember me
              </label>
              <Link to="/forgot" className="text-[#A767FF] hover:underline">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#F0D200] hover:bg-[#A767FF] hover:text-white text-slate-900 font-semibold px-6 py-3 rounded-full transition"
            >
              Sign In
            </button>

            <div className="text-center text-sm text-slate-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#A767FF] font-semibold">Sign up</Link>
            </div>

            <div className="mt-3 flex gap-3 items-center justify-center">
              <button className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-[#A767FF] hover:text-white transition">Continue with Google</button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-[#A767FF] hover:text-white transition">Continue with WhatsApp</button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
