import Image from 'next/image';
import Link from 'next/link';
import { SOCIALS, NAV_LINKS } from '@/constants';

export const Footer = () => {
  return (
    <footer className="max-container padding-container relative w-full bg-gradient-to-r from-[#9B248E]/90 via-[#4A4792]/90 to-[#2D5393]/90 py-10 lg:-mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-8 items-center">
        
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image src="/uniest-white-logo.svg" alt="Uniest logo" width={200} height={65} className="w-48 md:w-56" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="text-white text-sm md:text-base transition-all hover:text-gray-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Grid */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-center gap-6">
          
          {/* Terms & Conditions - Left */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-base">
            <Link className="text-white hover:text-gray-300" href="/TermsConditions">Terms & Conditions</Link>
            <span className="hidden md:block border-l border-white h-4"></span>
            <Link className="text-white hover:text-gray-300" href="/privacy">Privacy Policy</Link>
          </div>

          {/* Social Links - Center */}
          <div className="flex justify-center">
            <ul className="flex gap-4 md:gap-6">
              {SOCIALS.map((social) => {
                let href = social.link;

                if (social.title.toLowerCase() === 'email') {
                  href = `mailto:${social.link}`;
                } else if (social.title.toLowerCase() === 'whatsapp') {
                  href = `https://wa.me/${social.link.replace(/\D/g, '')}`;
                }

                return (
                  <li key={social.title} className="transition-transform duration-300 hover:scale-105">
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={social.icon}
                        alt={social.title}
                        width={40}
                        height={40}
                        className="w-10 h-10 md:w-14 md:h-14"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Copyright - Right */}
          <div className="text-white text-sm md:text-base">
            © UNIEST 2025. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
