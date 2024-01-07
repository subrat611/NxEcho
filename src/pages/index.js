// components
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import PlacementSection from "@/components/PlacementSection/PlacementSection";

export default function Home() {
  return (
    <main className="relative h-full bg-[#151718]">
      <Header />
      <HeroSection />
      {/* <PlacementSection /> */}
    </main>
  );
}
