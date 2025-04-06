"use client";
import Image from "next/image";

export const Newsletters = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-6 md:px-8 py-10 bg-gradient-to-r from-[#9B248E]/90 via-[#4A4792]/90 to-[#2D5393]/90 rounded-xl">
      
      {/* Logo Section */}
      <div className="w-full lg:w-1/6 flex justify-center lg:justify-center items-end">
        <Image src="/uniest2.svg" width={184} height={58} alt="uniest logo" />
      </div>

      {/* Newsletter Text Section */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h3 className="text-xl font-semibold text-[#FCFAED] mb-2">Newsletters</h3>
        <p className="text-[#FCFAED] text-sm leading-snug">
          Subscribe to receive the latest legal insights, industry updates,
          and expert advice directly to your inbox.
        </p>
      </div>

      {/* Email Input Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center">
        <div className="relative flex h-12 w-full max-w-md">
          <input
            type="email"
            className="peer h-full w-full rounded-md border-0 bg-[#FCFAED] px-4 py-2 pr-28 text-sm text-[#303030] shadow-sm placeholder-gray-400 focus:outline-none"
            placeholder="Enter Email address"
            required
          />
          <button
            className=" cursor-pointer absolute right-1 top-1 bottom-1 z-10 rounded-md bg-gradient-to-r from-[#9B248E] via-[#4A4792] to-[#2D5393] px-6 text-sm font-medium text-white shadow-md hover:bg-pink-700 transition"
            type="button"
          >
            Subscribe
          </button>
        </div>
        {/* Align the paragraph to the left or right based on screen size */}
        <p className="mt-2 text-sm text-[#FCFAED] text-center lg:text-left lg:max-w-md">
          Your data is in safe hands. Check out our{"  "}
          <a href="#">
            Privacy Policy
          </a>{"  "}
          for more info.
        </p>
      </div>
    </div>
  );
};
