import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Button from "./Button"

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNavbar = ({ showNav, closeNav }: Props) => {
    const openNav = showNav ? 'translate-x-0':'translate-x-[-100%]'
  return (
    <>
      {/* Overlay */}
        <div
          className={`fixed ${openNav} inset-0 z-[1002] bg-black opacity-70 w-full h-screen`}
        />
    

      {/* Mobile Nav */}
      <nav
        className={`fixed  ${openNav} top-0 left-0 h-full z-[1050] w-[80%] sm:w-[60%] transform transition-transform duration-500 ease-in-out
        bg-gradient-to-r from-[#9B248E]/90 via-[#4A4792]/90 to-[#2D5393]/90
        flex flex-col justify-between`}
      >
        {/* Header: Logo & Close Button */}
        <div className="flex justify-between items-center px-6 pt-6">
          <Link href='/'  onClick={closeNav}>
            <Image 
              src="/uniest2.svg"
              alt="uniest logo"
              width={185}
              height={56}
              className="h-10 sm:h-14 md:h-16 lg:h-20"
            />
          </Link>

          <button
            onClick={closeNav}
            className="text-white sm:w-8 sm:h-8 w-6 h-6 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col items-start justify-center px-6 py-12 gap-6 text-lg text-white flex-1">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="hover:text-pink-200 transition-colors"  onClick={closeNav}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Button */}
        <div className="px-6 pb-8">
          <Button 
            type="button"
            title="Get Started"
            icon="/getStartBtnIcon.svg"
            variant="glass"
            textColor="text-white"
            className="w-full py-4 border border-white/30 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all"
          />
        </div>
      </nav>
    </>
  )
}

export default MobileNavbar
