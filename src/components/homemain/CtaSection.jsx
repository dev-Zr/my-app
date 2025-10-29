export default function CtaSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-black via-[#0F0F0F] to-[#1C1C1C] text-white border-t border-[#FFD700]/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">
          Ready to Elevate Your Workflow?
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals using AM to build, deploy, and trade
          AI agents — the royal way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="  bg-gradient-to-r from-[#FFD700] via-[#C6A800] to-[#A32030] text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center shadow-lg shadow-[#FFD700]/40 transition-all glow-gradient-btn hover-glow hover-golden">
            Start Free Trial
          </button>
          <button className="border border-[#FFD700]/40 bg-black/40 text-[#FFD700] font-medium py-3 px-6 rounded-lg flex items-center justify-center backdrop-blur-md transition-all hover-crimson hover-glow">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
