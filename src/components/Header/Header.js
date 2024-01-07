import { IconBuddyGithubIcon } from "@/assets/icon";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full h-max border-b border-b-gray-50/10">
      <div className="w-full px-5 xl:mx-auto xl:w-[1128px] text-white flex items-center justify-between py-3">
        <p className="font-semibold tracking-wider text-lg">NxEcho</p>

        <div className="flex items-center">
          <a href="https://google.com">
            <IconBuddyGithubIcon classname="h-5 me-4 animate-pulse" />
          </a>
          <button className="bg-violet-600 hover:bg-violet-700 px-3 py-1 rounded-md font-medium">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
