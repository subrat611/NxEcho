import { IconBuddyBagIcon } from "@/assets/icon";
import Image from "next/image";
import Link from "next/link";

const PlacementSection = () => {
  return (
    <section className="w-full py-2 px-5 xl:mx-auto xl:w-[768px]">
      <p className="text-xl text-center capitalize md:text-5xl text-white font-semibold">
        Opportunity
      </p>

      <div className="my-10 relative">
        {[...new Array(3)].map((item, i) => (
          <div
            className={`my-5 capitalize text-white bg-gray-700/20 rounded-xl border border-gray-700 px-5 py-5 ${
              i === 2 && "border-b-0"
            }`}
            key={i}
          >
            <div className="flex flex-col items-start md:flex-row md:items-start">
              <div className="mt-2 p-3 bg-gray-700/10 border border-gray-700 rounded-full flex items-center justify-center">
                <IconBuddyBagIcon />
              </div>
              <div className="mt-3 md:ms-4 md:mt-0">
                <p className="text-lg">product designer</p>
                <p className="text-green-300">internship</p>
                <p>CSE</p>
              </div>
            </div>
            <div className="flex items-center justify-end mt-3">
              <Link href="/opportunity" className="text-slate-200">
                read more
              </Link>
              <Link
                href="/opportunity"
                className="ml-3 capitalize bg-violet-700 px-2 py-1 rounded-sm font-medium"
              >
                apply
              </Link>
            </div>
          </div>
        ))}
        <div className="absolute -bottom-2 flex flex-col justify-center items-center text-white w-full h-20">
          <div className="absolute -bottom-2 bg-black blur-[80px] h-20 w-full"></div>
          <div className="absolute -bottom-2 bg-black blur-[90px] h-20 w-full"></div>
          <div className="absolute -bottom-2 bg-black blur-[60px] h-20 w-full"></div>
          <Link
            href="/opportunity"
            className="absolute bg-violet-600 hover:bg-violet-700 px-3 py-1 rounded-md font-medium"
          >
            view all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
