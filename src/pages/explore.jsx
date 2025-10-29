// src/pages/Explore.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function Explore() {
  const [search, setSearch] = useState("");

  const categories = [
    { title: "Trending Agents", color: "from-gray-800 to-indigo-900" },
    { title: "You May Like", color: "from-teal-800 to-cyan-900" },
    { title: "New Arrivals", color: "from-rose-800 to-pink-900" },
    { title: "Top Rated", color: "from-yellow-800 to-orange-900" },
  ];

  const agents = [
    { name: "Content Creator Pro", company: "AI Studio", rating: "4.8 (230)", price: "$29/mo" },
    { name: "Data Analyst Expert", company: "DataMind", rating: "4.9 (180)", price: "$49/mo" },
    { name: "Customer Support AI", company: "SupportBot", rating: "4.7 (320)", price: "$39/mo" },
    { name: "Marketing Genius AI", company: "MarketBot", rating: "4.9 (120)", price: "$59/mo" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1A0F0B] to-[#3B0000] text-offwhite font-serif">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFD700] via-[#C6A800] to-[#A32030] py-24 px-6 text-center text-black rounded-b-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
          Explore the AI Marketplace
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Discover your perfect AI assistant. Boost productivity, creativity, and more.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for agents, specialties..."
            className="w-full px-6 py-4 rounded-full shadow-xl border-2 border-[#FFD700] bg-[#141414] text-offwhite placeholder-[#FFD700]/60 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
          />
          <i className="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-[#FFD700]"></i>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#FFD700]">
          Explore Categories
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-14">
          <Link
            to="/trending"
            className="category-button trending p-8 rounded-2xl bg-gradient-to-r from-[#3B0000] via-[#8B0000] to-[#FFD700] text-offwhite text-center font-semibold text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#FFD700]/40"
          >
            <h3 className="text-2xl">Trending Agents</h3>
          </Link>

          <Link
            to="/may-like"
            className="category-button like p-8 rounded-2xl bg-gradient-to-r from-[#1B3B00] via-[#006400] to-[#FFD700] text-offwhite text-center font-semibold text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#FFD700]/40"
          >
            <h3 className="text-2xl">You May Like</h3>
          </Link>

          <Link
            to="/new-arrivals"
            className="category-button arrivals p-8 rounded-2xl bg-gradient-to-r from-[#A32030] via-[#8B0000] to-[#FFD700] text-offwhite text-center font-semibold text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#FFD700]/40"
          >
            <h3 className="text-2xl">New Arrivals</h3>
          </Link>

          <Link
            to="/top-rated"
            className="category-button top-rated p-8 rounded-2xl bg-gradient-to-r from-[#FFD700] via-[#C6A800] to-[#8B0000] text-black text-center font-semibold text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#FFD700]/40"
          >
            <h3 className="text-2xl">Top Rated</h3>
          </Link>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#1A0F0B] via-[#2B0000] to-[#3B0000] text-offwhite">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#FFD700]">
          Featured Agents
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-6">
          {agents
            .filter((agent) => agent.name.toLowerCase().includes(search.toLowerCase()))
            .map((agent, idx) => (
              <div
                key={idx}
                className="bg-[#141414] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-[#FFD700]/40 border border-[#FFD700]/20"
              >
                <div className="h-40 bg-gradient-to-r from-[#8B0000] via-[#A32030] to-[#FFD700] text-black flex justify-center items-center font-bold text-2xl">
                  {agent.name}
                </div>
                <div className="p-6 bg-[#1C1C1C] border-t border-[#FFD700]/40">
                  <p className="text-sm text-gray-400 mb-2">by {agent.company}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#FFD700] font-semibold">{agent.rating}</span>
                    <span className="text-[#A32030] font-bold">{agent.price}</span>
                  </div>
                  <Link
                    to="#"
                    className="block w-full py-3 text-center rounded-full font-medium bg-gradient-to-r from-[#FFD700] via-[#C6A800] to-[#A32030] text-black hover:shadow-[0_0_15px_#FFD700] transition-all duration-300"
                  >
                    View Agent
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#1B3B00] via-[#004400] to-[#A32030] text-offwhite">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#FFD700]">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          {[
            {
              quote:
                "This platform revolutionized the way I work. My productivity has skyrocketed!",
              name: "John Doe",
              role: "Content Creator",
            },
            {
              quote: "I found the perfect AI assistant for my business. Highly recommend!",
              name: "Jane Smith",
              role: "Business Owner",
            },
            {
              quote:
                "An incredible marketplace with top-notch AI agents. It changed my workflow!",
              name: "Michael Lee",
              role: "Data Analyst",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-[#141414] rounded-2xl shadow-lg p-8 border border-[#FFD700]/20"
            >
              <p className="text-lg italic text-gray-300 mb-4">"{t.quote}"</p>
              <p className="font-semibold text-[#FFD700]">{t.name}</p>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#FFD700] via-[#C6A800] to-[#A32030] text-black">
        <h2 className="text-4xl font-semibold text-center mb-6 drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]">
          Join Our Newsletter
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 text-center font-medium">
          Stay updated with the latest AI trends and updates. Subscribe now!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-2/3 md:w-1/3 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A32030]"
          />
          <button className="ml-4 px-8 py-4 rounded-full bg-[#A32030] text-[#FFD700] font-semibold hover:bg-[#8B0000] hover:shadow-[0_0_15px_#FFD700] transition-all">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
