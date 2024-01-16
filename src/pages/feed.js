import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";

const Feed = () => {
  return (
    <main className="relative h-full bg-[#151718]">
      <Header />
      <section className="text-white min-h-screen max-h-full relative">
        <div className="absolute -top-[0] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-violet-700 to-green-700 w-[50vw] h-[50vh] blur-[150px] opacity-70 md:opacity-30 rounded-full z-0"></div>
        <div className="w-4/5 md:w-[780px] pt-32 mx-auto">
          {/* create feed form */}
          {/* list of feeds */}
        </div>
      </section>
    </main>
  );
};

export default Feed;
