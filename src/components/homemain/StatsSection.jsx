import { stats } from "../../constants/homemain";

export default function StatsSection() {
  return (
    <section className="py-12 bg-black/50 backdrop-blur-lg border-t border-[#FFD700]/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="transition hover:scale-105 hover-glow">
              <h3 className="text-3xl font-bold text-[#FFD700]">{stat.num}</h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}