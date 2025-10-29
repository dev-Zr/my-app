// src/pages/signup.jsx
import { Link } from "react-router-dom";

export default function Signup() {
  const headingStyle = {
    background: "linear-gradient(90deg, #FFD700 0%, #C6A800 50%, #A32030 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    textShadow: "0 0 12px rgba(255,215,0,0.6)",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-[#1A1A1A] flex items-center justify-center px-4 relative overflow-hidden">
      {/* background glow accents (same as Login page) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,0,0.08),_transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(163,32,48,0.15),_transparent_70%)] pointer-events-none"></div>

      <div className="relative bg-black/60 backdrop-blur-lg shadow-[0_0_25px_rgba(255,215,0,0.25)] border border-[#FFD700]/30 rounded-2xl w-full max-w-md p-8 text-gray-100">
        {/* Heading — inline style ensures visibility (matches Login page) */}
        <h2 style={headingStyle} className="text-3xl md:text-4xl font-extrabold text-center mb-6">
          Create Your Account
        </h2>

        <p className="text-gray-300 text-center mb-8">
          Join our community and start exploring Smart AI Agents
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-[#FFD700]/30 bg-black/40 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/70 placeholder-gray-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-[#FFD700]/30 bg-black/40 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/70 placeholder-gray-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-[#FFD700]/30 bg-black/40 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/70 placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FFD700] via-[#C6A800] to-[#A32030] text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center shadow-lg shadow-[#FFD700]/40 transition-all glow-gradient-btn hover-glow hover-golden"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6 text-gray-400 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-[#FFD700] hover:text-[#FFA500] transition">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
