import Image from "next/image";
import React from "react";

export const Ceo = () => {
  return (
    <div className="max-container padding-container w-full flex flex-col items-center justify-start py-5 lg:py-10 mb-10 text-center">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 justify-center">
        {/* Title with gradient lines */}
        <h4 className="relative text-black text-base sm:text-lg text-center">
          <span className="flex items-center justify-center gap-3">
            <span className="h-[0.1rem] w-[165px] bg-gradient-to-r from-[#0D0D0D]/5 to-[#D70A8B]/100 rounded-full" />
            Future of Funding
            <span className="h-[0.1rem] w-[165px] bg-gradient-to-r from-[#D70A8B]/100 to-[#0D0D0D]/5 rounded-full" />
          </span>
        </h4>

        {/* Gradient Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          A Message from{" "}
          <span className="bg-gradient-to-r from-[#E3058A] to-[#0A6195] text-transparent bg-clip-text">
            Our CEO
          </span>
        </h2>

        {/* Description */}
        <div className="max-w-lg text-center mx-auto">
          <p className="text-black text-sm sm:text-base leading-relaxed">
            At UNIEST, we’re redefining funding, empowering SMEs to grow, innovate, and lead.
          </p>
        </div>
      </div>

      {/* CEO Message Section */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center mt-10">
        {/* CEO Text Message */}
        <div className="flex flex-col gap-5 items-start justify-start w-full lg:w-1/2">
          <h4 className="relative text-black text-base sm:text-lg">
            <span className="flex items-center justify-center gap-3">
              {/* Title Text */}
              <span className="text-sm sm:text-lg -mt-0.5 bg-gradient-to-r from-[#E3058A] to-[#0A6195] text-transparent bg-clip-text">Our CEO Message</span>

              {/* Gradient Line */}
              <span className="h-[1px] w-80 bg-gradient-to-r from-[#D70A8B] to-[#0A6195]  rounded-full" />
            </span>
          </h4>

          {/* CEO Message Content */}
          <p className="text-[#2E2E2E] regular-18 sm:text-base leading-relaxed mt-2 text-left">
            At UNIEST, we’re transforming capital access through an equity-based marketplace that empowers both businesses and investors. Our goal is to close the funding gap for startups and SMEs with a transparent, AI-enhanced investment experience.
          </p>
          <p className="text-[#2E2E2E] regular-18 sm:text-base leading-relaxed mt-2 text-left">
            Looking ahead, we’re expanding our reach, refining our platform, and focusing on high-impact growth.
          </p>

          {/* Key Roadmap */}
          <h5 className="text-lg mt-1 font-semibold text-[#2E2E2E]">Key Roadmap Includes:</h5>
          <ul className="list-disc pl-5 text-sm sm:text-base text-[#2E2E2E] mt-2 mb-4">
            <li>Strong investor engagement, validating our vision.</li>
            <li>Expanding portfolio of funded, innovative businesses.</li>
            <li>Strategic partnerships boosting reach and credibility.</li>
          </ul>
          <div className="flex gap-3 justify-center items-center">
            <Image src="/sayIcon.svg" alt="CEO image" width={81} height={69} />
            <div>
               <h4 className="bold-20 text-transparent bg-clip-text bg-gradient-multiColor">Dr. Ahmed Mohamed</h4>
               <p className="text-black font-medium regular-20 text-left">CEO of UNIEST</p>
            </div>
          </div>
        </div>

        {/* CEO Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image src="/CeoImg.svg" alt="CEO image" width={577} height={596} />
        </div>
      </div>
    </div>
  );
};
