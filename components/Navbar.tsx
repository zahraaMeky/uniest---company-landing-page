import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

export const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/'>
            <Image src="/uniest-logo.svg" alt="uniest logo" width={185} height={56}></Image>    
        </Link>
        <ul className="hidden lg:flex h-full gap-12 bg-[#808080] rounded-full px-8 py-4">
            {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-white flexCenter cursor-pointer transition-all">
                {link.label}
            </Link>
            ))}
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
