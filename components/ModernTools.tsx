import Image from "next/image";
import { ModernTool } from "@/constants";
import ModernToolsCard from "./ModernToolsCard";

export const ModernTools = () => {
  return (
    <div className="max-container padding-container w-full flex flex-col items-center justify-start py-5 lg:py-10 mb-10 text-center">
      
      {/* Heading Section */}
      <div className="flex flex-col gap-4 justify-center">
        
        {/* Title with lines */}
        <h4 className="relative text-black text-base sm:text-lg text-center">
          <span className="flex items-center justify-center gap-3">
            <span className="h-[0.1rem] w-[165px] bg-gradient-to-r from-[#0D0D0D]/5 to-[#D70A8B]/100 rounded-full" />
            Offerings & Features
            <span className="h-[0.1rem] w-[165px] bg-gradient-to-r from-[#D70A8B]/100 to-[#0D0D0D]/5 rounded-full" />
          </span>
        </h4>

        {/* Gradient Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Modern Tools for{" "}
          <span className="bg-gradient-to-r from-[#E3058A] to-[#0A6195] text-transparent bg-clip-text">
            Smarter SME Growth
          </span>
        </h2>

        {/* Description */}
        <div className="max-w-lg text-center mx-auto px-10 sm:px-6 md:px-0">
          <p className="text-black text-sm sm:text-base leading-relaxed">
            Explore smart financing tools designed to unlock capital, reduce friction, and support SME growth.
          </p>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="bg-[#FDEBFF]  w-full rounded-2xl p-6 md:p-10 shadow-md mt-20">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image src="/profile-2user.svg" alt="Alternative Financing Solutions" width={32} height={32} />
            <h3 className="text-[#2F3B59] font-semibold md:text-lg text-base text-left">Alternative Financing Solutions:</h3>
          </div>
          {/* Financing Options List */}
          <div className="flex flex-col gap-4 text-left">
            {/* Option 1 */}
            <div className="text-left">
              <p className="text-[#2F3B59] text-sm">a. Invoice Financing: Unlocks cash flow by allowing SMEs to get early payments on outstanding invoices.
              </p>
            </div>

            {/* Option 2 */}
            <div className="text-left">
              <p className="text-[#2F3B59] text-sm">b. Revenue-Based Financing: Provides capital based on business performance.</p>
            </div>

            {/* Option 3 */}
            <div className="text-left">
              <p className="text-[#2F3B59] text-sm">c. Short-Term Investment: Quick access to working capital with minimal documentation and competitive processing cost.
              </p>
            </div>

            {/* Option 4 */}
            <div className="text-left">
              <p className="text-[#2F3B59] text-sm">d. Supply Chain Financing: Helps businesses manage cash flow efficiently by optimizing supplier and buyer payment cycles.
              </p>
            </div>
          </div>
        </div>
        <hr className="h-px md:w-lg lg:w-4xl w-3xs mx-auto my-8 bg-[#8C9ABF] border-0"/>

        {/* ModernTool Grid */}
        <ul className="mt-10 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full">
          {ModernTool.map((tool, index) => (
            <div className="flex items-center" key={tool.title}> {/* Add key here */}
              <ModernToolsCard
                title={tool.title}
                icon={tool.icon}
                description={tool.description}
              />
             {(index === 0 || index === 1) && (
                <div
                  className={`
                    h-16 w-px bg-[#8C9ABF] mx-3
                    hidden 
                    ${index === 0 || index === 1 ? "lg:block" : ""}
                    ${index === 0 ? "md:block" : ""}
                  `}
                />
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
