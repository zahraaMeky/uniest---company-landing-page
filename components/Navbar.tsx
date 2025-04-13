'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { usePathname} from 'next/navigation'
import router from "next/router";
type Props = {
  openNav: () => void
}

export const Navbar = ({ openNav }: Props) => {
  const pathName = usePathname()


  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href='/'>
        <Image
          src="/uniest-logo.svg"
          alt="uniest logo"
          width={185}
          height={56}
          className="w-auto h-10 sm:h-14 md:h-16 lg:h-16" // Responsive logo
        />
      </Link>

      <ul className="hidden lg:flex h-full gap-12 bg-[#808080] rounded-full px-4 py-2">
        {NAV_LINKS.map((link) => {
          const isActive = pathName === link.href;
          return (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 font-semibold flexCenter cursor-pointer transition-all"
            >
              <span className={`px-4 py-2 rounded-full transition-all ${
                isActive
                  ? 'bg-white'
                  : 'text-white hover:text-primary'
              }`}>
                <span className={`${
                  isActive
                    ? 'text-transparent bg-clip-text bg-gradient-multiColor font-bold'
                    : ''
                }`}>
                  {link.label}
                </span>
              </span>
            </Link>
          )
        })}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button 
          type="button"
          title="Get Started"
          icon="/getStartBtnIcon.svg"
          variant="bg-gradient"
          textColor="text-white"
          className="px-8 py-4 border-0 rounded-2xl"
          onClick={() => router.push("/contact")}
        />
      </div>

      {/* responsive hamburger menu button */}
      <svg 
        onClick={openNav}
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="url(#gradient)"
        className="w-8 h-8 cursor-pointer lg:hidden"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E3058A" />
            <stop offset="100%" stopColor="#0A6195" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
      </svg>
    </nav>
  )
}
