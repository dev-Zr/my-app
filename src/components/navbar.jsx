// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-[#1D6F2C] to-[#15491F] bg-opacity-95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-[#C0975B]/40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#C0975B] to-[#D1A04D] rounded-md shadow-md transition-transform hover:rotate-3"></div>
            <h1 className="text-2xl font-bold text-[#F5EBD0] tracking-wide drop-shadow-md">
              AM
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="nav-link text-[#F5EBD0] hover:text-[#D1A04D] transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="nav-link text-[#F5EBD0] hover:text-[#D1A04D] transition duration-300 font-medium"
            >
              Explore
            </Link>
            <Link
              to="/create"
              className="nav-link text-[#F5EBD0] hover:text-[#D1A04D] transition duration-300 font-medium"
            >
              Create
            </Link>
            <Link
              to="/pricing"
              className="nav-link text-[#F5EBD0] hover:text-[#D1A04D] transition duration-300 font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="nav-link text-[#F5EBD0] hover:text-[#D1A04D] transition duration-300 font-medium"
            >
              About
            </Link>
          </nav>

          {/* Buttons & Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-[#F5EBD0] hover:text-[#D1A04D] transition btn-lift">
              <i className="fas fa-search"></i>
            </button>

            {/* Glowing Golden/Black Login Button */}
            <Link
              to="/login"
              className="login-btn relative overflow-hidden bg-gradient-to-br from-[#D1A04D] to-[#1A1A1A] text-[#F5EBD0] font-semibold py-2 px-5 rounded-md transition-all duration-500 shadow-[0_0_10px_rgba(209,160,77,0.4)] hover:shadow-[0_0_20px_rgba(209,160,77,0.9)] hover:scale-105 hover:brightness-110"
            >
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-gradient-to-br from-[#D1A04D] to-[#000000] opacity-0 hover:opacity-30 transition-opacity duration-700 blur-md rounded-md"></span>
            </Link>

            <Link
              to="/signup"
              className="signup-btn bg-[#800020] text-[#F5EBD0] hover:bg-[#A32030] py-2 px-4 rounded-md font-semibold transition duration-300 shadow-md"
            >
              Sign Up
            </Link>

            <button className="md:hidden text-[#F5EBD0] transition hover:text-[#D1A04D] hover:rotate-90">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
