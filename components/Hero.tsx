import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-15 justify-center items-center">
        <div className='hero-title relative z-20 flex flex-1 flex-col xl:w-1/2 text-center w-full'>
            <h2 className='text-black bold-52 lg:bold-88'>Unlock Growth with </h2>
            <h2 className='bg-gradient text-[#FFF1F9] bold-52 lg:bold-88'>Smarter Investments</h2>
            <p className="regular-20 mt-6 text-black">Empowering SMEs & Investors with innovative equity-based solutions. Experience seamless funding, strategic partnerships, and scalable opportunities—all in one platform.</p>
            <Image className='mt-6' src="/uniest-hero.svg" alt='uniest hero section' width={1004.67} height={548}/>
        </div>
    </section>

  )
}
