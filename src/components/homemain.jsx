import HeroSection from "./homemain/HeroSection";
import StatsSection from "./homemain/StatsSection";
import CategoriesSection from "./homemain/CategoriesSection";
import FeaturedAgentsSection from "./homemain/FeaturedAgentsSection";
import CtaSection from "./homemain/CtaSection";

export default function HomeMain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-[#1A1A1A] text-gray-100 relative overflow-hidden">
      {/* Subtle Golden + Crimson Glow Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,0,0.08),_transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(128,0,32,0.15),_transparent_70%)]"></div>

      {/* Page sections are now composed from imported components */}
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedAgentsSection />
      <CtaSection />
    </div>
  );
}
