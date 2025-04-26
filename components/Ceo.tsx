import React from 'react'

export const Ceo = () => {
  return (
    <div className="max-container padding-container w-full flex flex-col items-center justify-start py-5 lg:py-10 mb-10 text-center">
          {/* Heading Section */}
      <div className="flex flex-col gap-4 justify-center">
        
        {/* Title with lines */}
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
          At UNIEST, we’re redefining funding empowering SMEs to grow, innovate, and lead.
          </p>
        </div>
      </div>
    </div>
  )
}
