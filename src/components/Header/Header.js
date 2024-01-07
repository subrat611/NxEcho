import { IconBuddyGithubIcon } from "@/assets/icon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full h-max border-b border-b-gray-50/10">
      <div className="w-full px-5 xl:mx-auto xl:w-[1128px] text-white flex items-center justify-between py-3">
        <p className="font-semibold tracking-wider text-lg">NxEcho</p>

        <div className="flex items-center">
          <div className="me-3 text-gray-300">
            <Link href="/" className="me-3 hover:text-gray-50">
              Home
            </Link>
            <Link href="/events" className="me-3 hover:text-gray-50">
              Events
            </Link>
            <Link href="/feed" className="me-3 hover:text-gray-50">
              Feed
            </Link>
          </div>
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
