import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative py-20 px-6 backdrop-blur-lg bg-white/5 border-b border-[#FFD700]/10"
      id="main-section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Hero */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-5xl font-bold mb-6 text-white leading-tight drop-shadow-[0_0_20px_rgba(255,215,0,0.25)]">
              Discover &amp; Create{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFEA70] to-[#A32030]">
                Smart AI Agents
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              A royal-grade marketplace where users can build, buy, and sell
              intelligent agents — crafted for every profession and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/explore"
                className="bg-gradient-to-r from-[#FFD700] via-[#C6A800] to-[#A32030] text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center shadow-lg shadow-[#FFD700]/40 transition-all glow-gradient-btn hover-glow hover-golden"
              >
                <i className="fas fa-compass mr-2 icon-hover"></i>
                Explore Agents
              </Link>
              <button className="border border-[#FFD700]/40 bg-black/40 text-[#FFD700] font-medium py-3 px-6 rounded-lg flex items-center justify-center backdrop-blur-md transition-all hover-crimson hover-glow">
                <i className="fas fa-plus-circle mr-2 icon-hover"></i>
                Create Agent
              </button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center transition hover:scale-105">
                <i className="fas fa-check-circle text-[#FFD700] mr-2 icon-hover"></i>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center transition hover:scale-105">
                <i className="fas fa-check-circle text-[#A32030] mr-2 icon-hover"></i>
                <span>14-day free trial</span>
              </div>
            </div>
          </div>

          {/* Right Hero Card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative transition-transform hover:scale-105 hover-glow">
              <div className="w-80 h-80 bg-gradient-to-br from-black/70 to-[#1C1C1C]/90 rounded-2xl shadow-2xl overflow-hidden border border-[#FFD700]/30 backdrop-blur-2xl card-hover">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#FFD700]/30 rounded-full mr-3 border border-[#A32030]/40"></div>
                      <div>
                        <h3 className="font-semibold text-[#FFD700]">
                          AI Assistant
                        </h3>
                        <p className="text-xs text-gray-300">
                          Productivity Agent
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded w-full"></div>
                      <div className="h-2 bg-white/20 rounded w-4/5"></div>
                      <div className="h-2 bg-white/20 rounded w-3/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    {[1, 2, 3, 4].map((_, idx) => (
                      <div
                        key={idx}
                        className="w-12 h-12 bg-white/5 rounded-lg transition hover:scale-110 hover:bg-[#A32030]/20 hover-glow"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FFD700]/10 rounded-xl transition hover:rotate-6 hover-golden"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#A32030]/20 rounded-xl transition hover:-rotate-6 hover-crimson"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}