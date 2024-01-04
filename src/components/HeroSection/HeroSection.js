const HeroSection = () => {
  return (
    <section className="text-white">
      <div className="flex justify-center items-center h-screen">
        <div className="h-[23vh] w-11/12 md:h-[30vh] md:w-3/6 flex justify-center relative">
          <div className="absolute -top-[200px] bg-gradient-to-r from-violet-700 to-green-700 w-[50vw] h-[50vh] blur-[230px] opacity-30 rounded-full"></div>
          <div className="font-semibold text-xl text-center capitalize md:text-5xl md:leading-[4rem]">
            <div className="text-base font-medium flex justify-center mb-3 cursor-default">
              <div className="flex items-center bg-gray-700/50 px-5 py-1 rounded-full w-fit">
                <div className="h-2 w-2 bg-violet-500 mt-1 me-2 rounded-full"></div>
                <p className="normal-case text-base">
                  your one stop career hub
                </p>
                <div className="words overflow-hidden"></div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <span className="px-1">Explore</span>
              <div className="h-7 md:h-16 overflow-hidden">
                <span className="block text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-green-300 animate-spin_words">
                  Opportunities
                </span>
                <span className="block text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-green-300 animate-spin_words">
                  Communitites
                </span>
                <span className="block text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-green-300 animate-spin_words">
                  events & more
                </span>
              </div>
            </div>
            <span>O.P Jindal University Training And Placement Cell</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
