"use client";
import { useState } from "react";
import { TABS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="max-container padding-container relative w-full flex-col items-center justify-start">
      <div className="w-full">
        {/* Tabs Navigation */}
        <nav className="flex mb-0 list-none flex-wrap pt-1 pb-2 flex-row border-b border-gray-300">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`regular-24 capitalize px-5 py-2 block leading-normal transition-all ease-in-out  
                ${
                  activeTab === tab.id
                    ? "bold-24 text-transparent bg-clip-text bg-gradient-to-r from-[#E9038A] to-[#0A6195]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              <Image
                src={activeTab === tab.id ? tab.ActiveImage : tab.DefaultImage}
                alt={tab.label}
                width={44}
                height={44}
                className="block mx-auto"
              />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab Content with Smooth Transition */}
        <div className="relative flex flex-col min-w-0 break-words w-full">
          <div className="tab-content tab-space py-5 relative">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                className={`w-full flex flex-col md:flex-row items-start justify-between gap-6 transition-opacity duration-[1200ms] ease-in-out 
                  ${activeTab === tab.id ? "opacity-100 visible" : "opacity-0 hidden"}`}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
              >
                {/* Left Section: Paragraph + Button */}
                <div className="md:w-1/2 flex flex-col items-start gap-4">
                  <p className="leading-7 mt-5 text-black regular-18 transition-opacity duration-[1200ms] ease-in-out">
                    {tab.description}
                  </p>

                  {/* Button Below Paragraph */}
                  <Link
                    href="/"
                    className="bold-16 text-black flexCenter cursor-pointer  mt-4
                    border-2 border-black rounded-xl px-5 py-3 
                    transition-all duration-500 ease-in-out 
                    hover:bg-gradient-to-r hover:from-[#9B248E]/90 hover:via-[#4A4792]/90 hover:to-[#2D5393]/90 
                    hover:text-white hover:border-transparent group"
                  >
                    Show More About UNIEST
                    <MoveRight className="ml-2 transition-all duration-500 ease-in-out text-black group-hover:text-white" />
                  </Link>
                </div>

                {/* Right Section: Image with Smooth Fade & Scale */}
                <Image
                  src={tab.image}
                  width={578}
                  height={560.2}
                  alt={tab.label}
                  className="md:w-1/2 transition-opacity duration-[1200ms] ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
