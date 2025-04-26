import { Ecosystems } from "@/constants";
import EcosystemCard from "./EcosystemCard";

export const Ecosystem = () => {
  return (
    <div className="max-container padding-container w-full flex flex-col items-center justify-start  py-5  lg:py-10 mb-10 text-center">
      <div className="flex flex-col gap-4 justify-center">

        {/* Title with lines */}
        <h4 className="relative text-black text-base sm:text-lg text-center">
            <span className="flex items-center justify-center gap-3">
                <span className="h-[0.1rem] w-[165px] bg-gradient-to-r from-[#0D0D0D]/5 to-[#D70A8B]/100  rounded-full" />
                Our Ecosystem & Key Stakeholders
                <span className="h-[0.1rem] w-[165px] bg-gradient-to-r from-[#D70A8B]/100  to-[#0D0D0D]/5 rounded-full" />
            </span>
        </h4>

        {/* Gradient Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          A Unified <span className="bg-gradient-to-r from-[#E3058A] to-[#0A6195] text-transparent bg-clip-text">for SME Success</span>
        </h2>

        {/* Description */}
        <div className="max-w-lg text-center mx-auto">
          <p className="text-black text-sm sm:text-base leading-relaxed">
            The UNIEST Platform's ecosystem includes a range of stakeholders and partnerships 
            to ensure scalability, trust, and operational efficiency.
          </p>
        </div>
      </div>
        {/* Ecosystems Grid */}
        <ul className="mt-20 grid gap-6 sm:gap-8 md:gap-10 lg:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full">
        {Ecosystems.map((ecosystem) => (
          <EcosystemCard
            key={ecosystem.title}
            title={ecosystem.title}
            icon={ecosystem.icon}
            description={ecosystem.description}
          />
        ))}
      </ul>

    </div>
  );
};
