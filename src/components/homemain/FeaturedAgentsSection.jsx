import { featuredAgents } from "../../constants/homemain";

export default function FeaturedAgentsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black/80 to-[#1C1C1C]/90 border-t border-[#FFD700]/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Featured Agents
            </h2>
            <p className="text-gray-400">
              Exclusive AI agents with royal-grade performance
            </p>
          </div>
          <button className="text-[#A32030] hover:text-[#FFD700] font-medium flex items-center transition-all hover-glow">
            View All <i className="fas fa-arrow-right ml-2 icon-hover"></i>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredAgents.map((agent, idx) => (
            <div
              key={idx}
              className="bg-black/60 border border-[#FFD700]/30 rounded-lg overflow-hidden shadow-lg backdrop-blur-md transition-all card-hover"
            >
              <div className="h-40 bg-gradient-to-br from-[#1A1A1A] to-[#A32030]/20"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-[#FFD700]/30 rounded-full mr-3 border border-[#A32030]/30"></div>
                  <div>
                    <h3 className="font-semibold text-white">{agent.name}</h3>
                    <p className="text-xs text-gray-400">
                      by {agent.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{agent.desc}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <i className="fas fa-star text-[#FFD700] text-sm icon-hover"></i>
                    <span className="text-sm text-gray-400 ml-1">
                      {agent.rating}
                    </span>
                  </div>
                  <span className="text-[#A32030] font-semibold">
                    {agent.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
