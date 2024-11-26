
import { Link } from "react-router";

import LogoWithName from "../assets/logo.png";
import LogoImage from "../assets/logo-design.png";

import { NavLinks } from "../constants";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition({x: window.scrollX, y: window.scrollY})
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <nav className={`w-full fixed top-0 pt-6 md:pt-12 z-[999] ${scrollPosition.y > 0 && "px-2 lg:px-0"}`}>
        <div className={`contain flex items-center justify-between gap-3 ${scrollPosition.y > 0 && "bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.25rem] px-4 py-3"}`}>
          {/* LOGO */}
          <Link className="hidden md:block" to="/">
            <img src={LogoWithName} alt="Moonex Logo" className="w-[12rem] h-[4.5rem] object-cover" />
            <span className="sr-only">Moonex</span>
          </Link>
          <Link className="md:hidden" to="/">
            <img src={LogoImage} alt="Moonex Logo" className="w-[3rem] object-cover" />
            <span className="sr-only">Moonex</span>
          </Link>
          {/* LINKS */}
          <ul className="hidden lg:flex items-center gap-14">
           {
            NavLinks.map((link) => {
              return (
                <li
                onClick={() => setActiveLink(link.href)}
                >
                  <Link 
                    className={`font-bold hover:text-primary transition
                        ${activeLink === link.href ? "text-primary" : "text-white"}`} 
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })
           }
          </ul>
          <CustomButton className="ml-auto lg:ml-0" label= "Connect Wallet" />
          {/* TABLET AND MOBILE NAVIGATION */}
          <MobileNav activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
    </nav>
  )
}

export default Navbar;