import { useState } from "react";
import { Link } from "react-router-dom"

import { BiMenu, BiX } from "react-icons/bi"

import { NavLinks } from "../constants"

type TMobileNav = {
    activeLink: string; 
    setActiveLink: React.Dispatch<React.SetStateAction<string>>
}

const MobileNav = ({activeLink, setActiveLink}: TMobileNav) => {
    const [showNav, setShowNav] = useState(false);

    const handleRouting = (href: string) => {
        setActiveLink(href);
        setShowNav(false)
    }

  return (
    <div className="lg:hidden">
        <button onClick={() => setShowNav(true)}>
            <BiMenu className="size-10 opacity-70" />
        </button>
            {showNav && <ul className="lg:hidden flex flex-col items-start gap-12 absolute top-0 inset-0 bg-background h-screen px-10 py-20 md:px-20">
                {
                    NavLinks.map((link) => {
                    return (
                        <li
                        onClick={() => handleRouting(link.href)}
                        >
                            <Link 
                                className={`font-bold font-fira-code text-5xl hover:text-primary transition
                                    ${activeLink === link.href ? "text-primary" : "text-white"}`} 
                                to={link.href}
                            >
                                {link.label}
                            </Link>
                        </li>
                    )
                    })
                }
                <button 
                    onClick={() => setShowNav(false)}
                    className="absolute right-3 md:right-10 top-10">
                        <BiX className="size-10 text-white/70 hover:text-white transition"/>
                </button>
            </ul>}
    </div>
  )
}

export default MobileNav