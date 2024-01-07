const HeroSection = () => {
  return (
    <section className="text-white">
      <div className="flex justify-center items-center h-screen">
        <div className="h-[23vh] w-11/12 md:h-[30vh] md:w-3/6 flex justify-center relative">
          <div className="absolute -top-[280px] md:-top-[260px] bg-gradient-to-r from-violet-700 to-green-700 w-[50vw] h-[50vh] blur-[150px] opacity-70 md:opacity-30 rounded-full z-0"></div>
          <div className="font-semibold text-xl text-center capitalize md:text-5xl md:leading-[4rem] z-10">
            <div className="text-base font-medium flex justify-center mb-3 cursor-default">
              <div className="flex items-center bg-gray-700/50 px-5 py-1 rounded-full w-fit">
                <div className="h-2 w-2 bg-violet-500 mt-1 me-2 rounded-full"></div>
                <p className="normal-case text-base">your social pulse</p>
                <div className="words overflow-hidden"></div>
              </div>
            </div>
            <span>Welcome to NxEcho Hub</span>
            <div className="flex justify-center items-center">
              <span className="px-1">Discover</span>
              <div className="h-7 md:h-16 overflow-hidden">
                <span className="block text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-green-300 animate-spin_words">
                  Discussions
                </span>
                <span className="block text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-green-300 animate-spin_words">
                  Communitites
                </span>
                <span className="block text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-green-300 animate-spin_words">
                  events & more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
