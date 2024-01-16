import CreateFeedForm from "@/components/CreateFeedForm/CreateFeedForm";
import Header from "@/components/Header/Header";

const Feed = () => {
  return (
    <main className="relative h-full bg-[#151718]">
      <Header />
      <div className="absolute -top-[0] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-violet-700 to-green-700 w-[50vw] h-[50vh] blur-[150px] opacity-70 md:opacity-30 rounded-full z-0"></div>
      <section className="text-white min-h-screen max-h-full relative">
        <div className="w-11/12 md:w-[780px] pt-32 mx-auto">
          <CreateFeedForm />
          {/* list of feeds */}
          <p className="h-[5000px]">sfd</p>
        </div>
      </section>
    </main>
  );
};

export default Feed;
