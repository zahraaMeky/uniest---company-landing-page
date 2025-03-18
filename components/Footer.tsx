import Image from 'next/image';
import Link from 'next/link';
import { SOCIALS, NAV_LINKS } from '@/constants';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#9B248E]/90 via-[#4A4792]/90 to-[#2D5393]/90">
      <div className="padding-container max-container flex flex-col gap-8 items-center justify-center py-10 pb-10 lg:py-15">
        
        {/* Logo */}
        <div className="uniest-logo-image">
          <Link href="/" className="mb-6 block">
            <Image src="/uniest-white-logo.svg" alt="Uniest logo" width={235} height={75} />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="text-white regular-18 transition-all">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Grid */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-center gap-6">
          
          {/* Terms & Conditions - Left */}
          <div className="flex items-center gap-4">
            <Link className="text-white regular-20" href="/">
              Terms & Conditions
            </Link>
            <span className="border-l border-white h-4"></span>
            <Link className="text-white regular-20" href="/">
              Privacy Policy
            </Link>
          </div>

          {/* Social Links - Center */}
          <div className="flex justify-center">
            <ul className="flex gap-6">
              {SOCIALS.map((social) => (
                <li key={social.title}>
                  <Link href={social.link}>
                    <Image src={social.icon} alt={social.title} width={56} height={56} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright - Right */}
          <div className="text-white regular-20">
            © UNIEST 2025. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
