// components
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import PlacementSection from "@/components/PlacementSection/PlacementSection";
import useAuthStore from "@/store/useAuthStore";

export default function Home() {
  const { userData, status } = useAuthStore((state) => state);
  return (
    <main className="relative h-full bg-[#151718]">
      <Header />
      <HeroSection />
      {/* <PlacementSection /> */}
    </main>
  );
}
