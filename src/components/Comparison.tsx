import MoonexIcon from "../assets/moonex-icon.png";
import Moonex from "../assets/moonex.png";
import Uniswap from "../assets/uniswap.png";
import Check from "../assets/check_bold.png";
import X from "../assets/close_small.png";

import { comparisons } from "../constants";

const Comparison = () => {
  return (
    <section className="contain mt-[10rem] md:mt-[18rem] lg:mt-[28rem]">
        <h1 className="font-fira-code text-3xl md:text-5xl font-extrabold">Why <span className="text-primary">MoonEX </span>?</h1>
        <div className="boxShadow relative grid grid-cols-10 mt-10 md:mt-16 px-4 md:px-8 py-3 md:py-6 rounded-[1.25rem]">
          {/* GRADIENT */}
          <div className="absolute bottom-0 left-1/4 bg-[#EDD955] w-[300px] h-[200px] rounded-[50%] blur-[240px] -z-10" />
          {/* CONTENT */}
          <div className="col-span-4">
            <h3 className="text-primary grid place-items-center font-semibold h-[3.5rem] md:h-[5rem] w-full border-b border-borderGray md:text-3xl font-fira-code">Comparison</h3>
            {
              comparisons.map((comparison) => (
                <p className="h-[4.3rem] w-full border-b border-borderGray flex items-center gap-2 md:pl-8 font-medium text-sm   md:text-xl text-textGray" key={comparison.id}>
                  <span>{comparison.id}.</span>
                  <span>{comparison.label}</span>
                </p>
              ))
            }
          </div>
          <div className="col-span-3 border-r border-l border-borderGray">
            <div className="flex items-center justify-center border-b border-borderGray h-[3.5rem] md:h-[5rem] w-full">
              <img src={MoonexIcon} alt="moonex icon" className="max-md:scale-[.5]" />
              <img src={Moonex} alt="moonex wordmark" className="-mb-4 md:-mb-9 -ml-12 md:-ml-16" />
            </div>
            {
              comparisons.map((comparison) => {
                if(comparison.moonex) {
                  return (
                    <div key={comparison.id} className="h-[4.3rem] w-full border-b border-borderGray grid place-items-center">
                      <img src={Check} alt="Check icon" className="max-md:scale-75" />
                    </div>
                  )
                }
              })
            }
          </div>
          <div className="col-span-3">
            <div className="h-[3.5rem] md:h-[5rem] grid place-items-center w-full border-b border-borderGray">
              <img src={Uniswap} alt="uniswap" className="max-md:scale-75"  />
            </div>
            {
              comparisons.map((comparison) => {
                if(!comparison.uniswap) {
                  return (
                    <div key={comparison.id} className="h-[4.3rem] w-full border-b border-borderGray grid place-items-center">
                      <img src={X} alt="X-mark icon" className="max-md:scale-75" />
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
    </section>
  )
}

export default Comparison