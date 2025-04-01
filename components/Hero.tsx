import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 py-10 pb-20 md:gap-16 lg:py-20 justify-center items-center text-center">
      <div className="relative z-20 flex flex-1 flex-col xl:w-2/3 lg:w-3/4 w-full">
        <h2 className="text-black font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Unlock Growth with
        </h2>
        <h2 className="bg-gradient text-[#FFF1F9] font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Smarter Investments
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl  text-black md:my-5 ">
          Empowering SMEs & Investors with innovative equity-based solutions.
          Experience seamless funding, strategic partnerships, and scalable
          opportunities—all in one platform.
        </p>
        <div className="mt-6 flex justify-center items-center w-full overflow-hidden">
        <Image
            className="max-w-full h-auto"
            src="/uniest-hero.svg"
            alt="uniest hero section"
            width={1004}
            height={548}
            priority
          />
        </div>
      </div>
    </section>
  )
}
