import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Button from "./Button";
import router from "next/router";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const handleGetStarted = () => {
  closeNav();
  router.push("/contact"); 
};
const MobileNavbar = ({ showNav, closeNav }: Props) => {
  const navVisibility = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <>
      {/* Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 z-[1001] bg-black/70 backdrop-blur-sm"
          onClick={closeNav}
        />
      )}

      {/* Mobile Navigation */}
      <nav
        className={`fixed ${navVisibility} top-0 left-0 h-full z-[1050] w-[80%] sm:w-[60%] transform transition-transform duration-500 ease-in-out bg-white flex flex-col justify-between shadow-xl`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header: Logo + Close */}
        <div className="flex items-center justify-between px-6 pt-6">
          <Link href="/" onClick={closeNav}>
            <Image
              src="/uniest-logo-Mobile-Nav.svg"
              alt="Uniest logo"
              width={141}
              height={42.68}
              priority
            />
          </Link>
          <button onClick={closeNav} aria-label="Close navigation menu">
            <Image
              src="/closeButton.svg"
              alt="Close"
              width={22}
              height={22}
            />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col gap-6 px-6 py-32 md:py-48 md:text-xl text-lg text-black flex-1">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="flex justify-between items-center w-full  p-2"
            >
              <Image src={link.icon} alt={link.label} width={24} height={24} />
              <Link
                href={link.href}
                className="flex-1 ml-4 text-transparent bg-clip-text bg-gradient-multiColor font-medium tesxt-[20px]"
                onClick={closeNav}
              >
                {link.label}
              </Link>
              <Image
                src="/NavArrowIcon.svg"
                alt="Arrow icon"
                width={14}
                height={17}
              />
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="px-6 pb-8">
          {/* <Button
            type="button"
            title="Get Started"
            icon="/getStartBtnIcon.svg"
            variant="bg-gradient"
            textColor="text-white"
            className="w-full py-4 border-0 rounded-xl shadow-lg"
            onClick={handleGetStarted}
          /> */}
          <Link href="/contact" 
          className="text-white font-semibold px-8 py-4 border-0 
           flexCenter gap-3 rounded-xl shadow-lg bg-gradient w-full"
           onClick={closeNav}
           >
            Get Started
          <Image src="/getStartBtnIcon.svg" alt="getStartBtn" width={24} height={24} />
        </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
function closeNav() {
  throw new Error("Function not implemented.");
}

