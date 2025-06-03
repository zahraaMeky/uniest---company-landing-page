// app/privacy/page.tsx or wherever your Privacy component is located

import PrivacySection from '@/components/PrivacySection';
import Image from 'next/image';
import { sections } from "@/constants";
import { Newsletters } from '@/components/Newsletters';
const Privacy = () => {
  return (
    <>
    <section className="bg-custom max-container padding-container relative w-full  flex flex-col gap-5 justify-start py-5  lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center  gap-5">
        <Image src="/privacy-policy.svg" alt="Privacy Policy Icon" width={118} height={118} />
        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-[#303030]">Privacy Policy</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#303030]">
            Privacy That Powers{' '}
            <span className="bg-gradient-multiColor text-transparent bg-clip-text">Confidence</span>
          </h2>
        </div>
      </div>

      {/* Paragraph Introduction */}
      <p className="text-base md:text-lg text-[#303030] leading-relaxed my-5">
        UNIEST is committed to protecting your personal information in compliance with Oman’s Personal Data Protection Law (Royal Decree No. 6/2022) and applicable Copyright Law.
        This Privacy Policy outlines how we collect, use, disclose, and protect your data when you use our platform to participate in equity-based investment opportunities involving SMEs, venture capital investors, accelerators, and regulatory bodies.
      </p>

      {/* Render Sections */}
      {sections.map((section, index) => (
        <PrivacySection key={index} {...section} />
      ))}
      
    </section>
    <div className='max-container padding-container mb-20'>
        <Newsletters/>
    </div>
    </>
  );
};

export default Privacy;
