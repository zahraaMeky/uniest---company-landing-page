// components/AboutHero.tsx

import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="w-full relative bg-[url('/aboutbg.svg')] bg-cover bg-center bg-no-repeat max-container padding-container mb-20">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-[#585858] text-xl font-medium">About Us</h4>
          <h3 className="text-black text-3xl md:text-5xl font-bold leading-tight">
            Building <span className="bg-gradient-multiColor text-transparent bg-clip-text">a Smarter</span>
          </h3>
          <h3 className="text-black text-3xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient text-transparent bg-clip-text">Investment</span> Ecosystem
          </h3>
          <p className="text-[#585858] mt-4 max-w-2xl text-base leading-relaxed">
            UNIEST is a cutting-edge technology company based in Oman with a multinational culture and global resources. It’s a promising fintech venture targeting SMEs by offering alternative funding solutions. UNIEST provides faster, more accessible, and flexible financing options to help SMEs scale efficiently.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-black text-sm sm:text-base font-semibold px-5 py-3 rounded-xl mt-6
            transition-all duration-500 ease-in-out group
            hover:bg-gradient-to-r hover:from-[#9B248E]/90 hover:via-[#4A4792]/90 hover:to-[#2D5393]/90
            hover:text-white hover:border-transparent mb-6 md:mb-8"
          >
            Join Our Ecosystem
            <MoveRight className="ml-2 transition-all duration-500 text-black group-hover:text-white" />
          </Link>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <Image
            src="/abouthero.svg"
            alt="UNIEST Fintech Illustration"
            width={804}
            height={798}
            className="w-full max-w-[700px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};
