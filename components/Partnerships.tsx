import { Partnership } from "@/constants";
import PartnershipCard from "./PartnershipCard";


export const Partnerships = () => {
  return (
    <div  className="max-container padding-container w-full flex flex-col items-center justify-start  py-5  lg:py-10 mb-20 text-center">
        <div className="flex flex-col gap-4 justify-center">
            {/* Title with lines */}
            <h4 className="relative text-black text-base sm:text-lg text-center">
                <span className="flex items-center justify-center gap-3">
                    <span className="h-[0.1rem] w-[165px] bg-gradient-to-r from-[#0D0D0D]/5 to-[#D70A8B]/100  rounded-full" />
                    Strategic Partnerships
                    <span className="h-[0.1rem] w-[165px] bg-gradient-to-r from-[#D70A8B]/100  to-[#0D0D0D]/5 rounded-full" />
                </span>
            </h4>

            {/* Gradient Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Strategic Partnerships That <span className="bg-gradient-to-r from-[#E3058A] to-[#0A6195] text-transparent bg-clip-text">Unlock Value</span>
            </h2>

            {/* Description */}
            <div className="max-w-lg text-center mx-auto">
            <p className="text-black text-sm sm:text-base leading-relaxed">
            We collaborate with financial leaders, accelerators, and tech innovators to deliver smarter funding 
            greater access, and scalable impact for SMEs.
            </p>
            </div>
        </div>
          {/* Partnership Grid */}
        <ul className="mt-20 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {Partnership.map((partner) => (
            <PartnershipCard
                key={partner.title}
                title={partner.title}
                icon={partner.icon}
                description={partner.description}
            />
            ))}
        </ul>
    </div>
  )
}
