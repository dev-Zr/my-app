import { categories } from "../../constants/homemain";

export default function CategoriesSection() {
  return (
    <section className="py-16 px-6 bg-[#0A0A0A]/80 backdrop-blur-md border-t border-[#FFD700]/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover AI agents tailored to every professional domain and
            creative field.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-black/60 to-[#1A1A1A]/80 border border-[#FFD700]/30 p-6 rounded-lg shadow-lg backdrop-blur-lg text-center transition-all card-hover"
            >
              <div className="w-16 h-16 bg-black border border-[#FFD700]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <i
                  className={`fas ${cat.icon} text-[#FFD700] text-xl icon-hover`}
                ></i>
              </div>
              <h3 className="font-semibold text-white">{cat.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
