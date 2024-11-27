import { Link } from "react-router-dom"

import LogoIcon from "../assets/moonex-icon.png"
import Moonex from "../assets/moonex.png"
import { NavLinks } from "../constants"

import social1 from "../assets/social1.png"
import social2 from "../assets/social2.png"
import social3 from "../assets/social3.png"

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#051422]">
        <div className="contain py-14 md:py-20 flex flex-col md:flex-row items-center justify-between max-md:gap-10">
            {/* LOGO */}
          <Link className="" to="/">
            <div className="flex flex-col items-center">
                <img src={LogoIcon} />
                <img className="w-[155px]" src={Moonex} />
                <span className="sr-only">Moonex</span>
            </div>
          </Link>
          {/* LINKS */}
            <ul className="flex flex-col md:flex-row items-center md: gap-3 md:gap-8 lg:gap-14">
           {
            NavLinks.slice(1).map((link) => {
              return (
                <li>
                  <Link 
                    className={"font-bold hover:text-primary transition text-white"} 
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })
           }
          </ul>
          {/* SOCIALS */}
          <div className="flex flex-col gap-3 md:gap-5 items-center">
            <h2 className="text-xl md:text-3xl font-extrabold">Contact <span className="text-primary">Us</span></h2>
            <div className="flex items-center gap-6 lg:gap-12">
                <img className="hover:opacity-70 transition cursor-pointer" src={social2} />
                <img className="hover:opacity-70 transition cursor-pointer" src={social3} />
                <img className="hover:opacity-70 transition cursor-pointer" src={social1} />
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer