"use client";
import { useState } from 'react';
import { TABS } from "@/constants";
import Image from 'next/image';

export const About = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className="max-container padding-container relative w-full flex-col items-center justify-start pb-32">
      <div className="w-full">
        {/* Reduced top padding for tabs */}
        <ul className="flex mb-0 list-none flex-wrap pt-1 pb-2 flex-row border-b border-gray-300" role="tablist">
          {TABS.map((tab) => (
            <li key={tab.id} className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={`regular-24 capitalize px-5 py-2 block leading-normal ${
                  openTab === tab.id ? "bold-24 text-transparent bg-clip-text bg-gradient-to-r from-[#E9038A] to-[#0A6195]" : "text-gray-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(tab.id);
                }}
                href={`#link${tab.id}`}
                role="tablist"
              >
                <img 
                  src={openTab === tab.id ? tab.ActiveImage : tab.DefaultImage} 
                  alt={tab.label} 
                  className="block mx-auto" 
                  width={44}
                  height={44} 
                />
                {tab.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative flex flex-col min-w-0 break-words w-full">
          {/* Reduced padding here */}
          <div className="">
            <div className="tab-content tab-space">
              {TABS.map((tab) => (
                <div 
                  key={tab.id} 
                  className={`${openTab === tab.id ? "flex" : "hidden"} flex-col md:flex-row items-start justify-between gap-6`}
                  id={`link${tab.id}`}
                >
                  {/* Text Content */}
                  <p className="md:w-1/2 text-black regular-18 mt-0">
                    {tab.description}
                  </p>

                  {/* Image */}
                  <Image 
                    src={tab.image} 
                    width={578} 
                    height={560.2} 
                    alt={tab.label} 
                    className="md:w-1/2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
