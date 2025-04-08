'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathName = usePathname()

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href='/'>
        <Image src="/uniest-logo.svg" alt="uniest logo" width={185} height={56} />
      </Link>

      <ul className="hidden lg:flex h-full gap-12 bg-[#808080] rounded-full px-4 py-2">
        {NAV_LINKS.map((link) => {
          const isActive = pathName === link.href;
          return (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 flexCenter cursor-pointer transition-all"
            >
              <span className={`px-4 py-2 rounded-full transition-all ${
                isActive
                  ? 'bg-white'
                  : 'text-white hover:text-primary'
              }`}>
                <span className={`${
                  isActive
                    ? 'bg-gradient-to-r from-[#E3058A] to-[#0A6195] text-transparent bg-clip-text font-semibold'
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
        />
      </div>
    </nav>
  )
}
