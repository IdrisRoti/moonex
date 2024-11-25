import CustomButton from "./CustomButton";

import StarBig from "../assets/star-img.png";
import StarSmall from "../assets/star-img-2.png";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="contain relative mt-20 pt-28 md:pt-52 lg:pt-72">
      {/* GRADIENTS */}
        <div className="w-[12rem] md:w-[15rem] lg:w-[20rem] aspect-square rounded-full bg-[#FFE68FD6] bg-opacity-10 absolute -top-1/4 lg:-top-1/3 left-0 blur-[100px] md:blur-[150px]" />
        <div className="w-[14rem] md:w-[20rem] aspect-square rounded-full bg-[#FFE68FD6] bg-opacity-10 absolute -bottom-2/3 right-0 blur-[180px] md:blur-[220px]" />
        {/* STARS */}
        <motion.img 
          initial={{opacity: .4, x: 0, rotate: 0}}
          animate={{opacity: 1, x: 200,  rotate: 180}}
          transition={{duration: 30, repeat: Infinity, repeatType: "mirror"}}
          src={StarBig} 
          alt="star" 
          className="absolute top-5 md:top-1/4" 
        />
        <motion.img 
          initial={{opacity: .4, x: 0}}
          animate={{opacity: 1, x: -200}}
          transition={{duration: 50, repeat: Infinity, delay: 2, repeatType: "mirror"}}
          src={StarBig} 
          alt="star" 
          className="absolute -bottom-28 right-14"
        />
        <motion.img 
          initial={{opacity: .4, scale: .8, }}
          animate={{opacity: 1, scale: 1,}}
          transition={{duration: 1, repeat: Infinity, delay: 2, repeatType: "mirror"}}
          src={StarSmall} 
          alt="star" 
          className="absolute top-[15%] right-14"
        />
        {/* CIRCLES */}
        <div className="border border-white/10 w-[487.08px] md:w-[687.08px] lg:w-[1187.08px] h-[214.99px] md:h-[314.99px] lg:h-[514.99px] absolute top-10 lg:top-24 -left-[50px] md:left-0 lg:-left-[100px] rotate-[14deg] rounded-[50%]" />
        <div className="border border-white/10 w-[874.75px] md:w-[1274.75px] lg:w-[1724.75px] h-[348.24px] md:h-[548.24px] lg:h-[748.24px] absolute -top-3 md:-top-6 -left-[200px] lg:-left-[400px] rotate-[14deg] rounded-[50%]" />
        <div className="border border-white/10 w-[1678.98px] md:w-[2078.98px] lg:w-[2378.98px] h-[582.06px] md:h-[832.06px] lg:h-[1032.06px] absolute -top-20 md:-top-24 -left-[600px] rotate-[14deg] rounded-[50%]" />
        {/* CONTENT */}
        <div className="relative flex flex-col lg:flex-row items-start justify-between lg:gap-10 md:text-center lg:text-left">
              <div className="">
                <h1 className="text-5xl md:text-7xl font-extrabold font-fira-code lg:w-[80%]">Trusted Multi-Chain <span className="text-primary">DEX</span> Platform</h1>
                <p className="text-textGray text-xl md:text-2xl mt-2">Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
                <div className="flex items-center md:justify-center lg:justify-start gap-4 mt-6">
                  <CustomButton label= "Connect Wallet" />
                  <CustomButton variant="outlined" label= "Trade Crypto" />
                </div>
              </div>
              <div className="hidden lg:block w-[16.25rem] aspect-square rounded-full -mt-20 bg-[radial-gradient(100%_100%_at_top_left,#FFF6D7,#E4B40D)]" />
        </div>
    </section>
  )
}

export default Hero;