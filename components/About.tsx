"use client";
import { useState } from "react";
import { TABS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="max-container padding-container relative w-full flex flex-col items-center justify-start py-5  lg:py-10">
      <div className="w-full">
        {/* Tabs Navigation */}
        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-6 border-b border-gray-300 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`flex flex-col items-center justify-center text-center px-3 sm:px-5 py-2 rounded-md transition-all duration-300 ease-in-out 
                ${
                  activeTab === tab.id
                    ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B248E] via-[#4A4792] to-[#2D5393]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              <Image
                src={activeTab === tab.id ? tab.ActiveImage : tab.DefaultImage}
                alt={tab.label}
                width={40}
                height={40}
                className="mb-1"
              />
              <span className="text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl">
                {tab.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="w-full py-6">
          {TABS.map((tab) => (
            <div
              key={tab.id}
              className={`transition-all duration-1000 ease-in-out 
                ${activeTab === tab.id ? "opacity-100 visible" : "opacity-0 hidden"}`}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
            >
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
                {/* Left Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5">
                  <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
                    {tab.description}
                  </p>

                  {/* Centered Button for Mobile */}
                  <div className="w-full flex justify-start ">
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center border-2 border-black text-sm sm:text-base font-semibold px-5 py-3 rounded-xl mt-4
                        transition-all duration-500 ease-in-out group
                        hover:bg-gradient-to-r hover:from-[#9B248E]/90 hover:via-[#4A4792]/90 hover:to-[#2D5393]/90
                        hover:text-white hover:border-transparent"
                    >
                      Show More About UNIEST
                      <MoveRight className="ml-2 transition-all duration-500 text-black group-hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2">
                  <Image
                    src={tab.image}
                    width={578}
                    height={560}
                    alt={tab.label}
                    className="w-full h-auto rounded-md object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
