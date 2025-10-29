// src/pages/Login.jsx
import { Link } from "react-router-dom";

export default function Login() {
  const headingStyle = {
    background: "linear-gradient(90deg, #FFD700 0%, #FFB84D 50%, #A32030 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    textShadow: "0 0 18px rgba(255,215,0,0.25)",
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-[#0A0A0A] to-[#1A1A1A] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,0,0.08),_transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(163,32,48,0.15),_transparent_70%)] pointer-events-none"></div>

      <div className="relative bg-black/60 backdrop-blur-lg border border-[#FFD700]/30 rounded-2xl shadow-2xl w-full max-w-md p-8 text-gray-100">
        <h2
          style={headingStyle}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Login to your royal account and continue exploring AI Agents
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-[#FFD700] font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full bg-black/40 border border-[#FFD700]/40 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/60 placeholder-gray-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#FFD700] font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full bg-black/40 border border-[#FFD700]/40 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A32030]/60 placeholder-gray-500"
            />
          </div>

          {/* Glowing gold-ruby button */}
          <button
            type="submit"
            className="relative w-full bg-gradient-to-r from-[#FFD700] via-[#C6A800] to-[#A32030] text-black font-semibold py-3 rounded-lg shadow-lg shadow-[#FFD700]/40 transition-all glow-gradient-btn hover-glow hover-golden before:content-[''] before:absolute before:inset-[-3px] before:rounded-lg before:bg-gradient-to-r before:from-[#FFD700] before:via-[#FF6B3D] before:to-[#A32030] before:blur-md before:opacity-80 before:-z-10 hover:before:blur-lg hover:before:opacity-100"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-gray-400 text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#FFD700] font-medium hover:text-[#A32030] transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
