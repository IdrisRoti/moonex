import { PiPlus } from "react-icons/pi"
import { accordions } from "../constants"
import { useState } from "react"
import { BiChevronDown } from "react-icons/bi";

const FAQs = () => {
    const [index, setIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="my-20 md:my-24 pb-12 md:pb-16 relative px-2">
        {/* GRADIENTS */}
        <div className="absolute -bottom-[10%] lg:-bottom-1/4 left-0 bg-[#EDD955] w-[150px] md:w-[200px] aspect-square rounded-[50%] blur-[250px] -z-10" />
        <div className="absolute top-0 -right-1/2 lg:right-0 bg-[#EDD955] w-[150px] md:w-[200px] aspect-square rounded-[50%] blur-[250px] -z-10" />
        {/* CONTENT */}
        <div className="relative py-6 max-w-[62.5rem] rounded-[1.25rem] mx-auto boxShadow bg-[rgba(237_217_85/0.01)]">
            <h2 className="text-center border-b border-[#BBBBBB1A] pb-6 font-fira-code text-3xl md:text-5xl font-extrabold text-primary">FAQs</h2>
            {
                accordions.map(({id, question, answer}, i) => {
                    return (
                        <article 
                            onClick={() => setIndex((prev) => (prev === i ? null : i))}
                            className="px-3 md:px-6 py-5 md:py-6 border-b border-[#BBBBBB1A] cursor-pointer" key={id}>
                            <div className="w-full flex items-center justify-between gap-3">
                                <h3 className="font-medium text-sm md:text-lg max-md:w-[80%]">{question}</h3>
                                <div className="grid place-items-center bg-[#D9D9D91A] w-[1.8rem] md:w-[2.8rem] aspect-square rounded-full">
                                    {index === i ? <BiChevronDown className="size-4 md:size-6" /> : <PiPlus className="size-3 md:size-4" /> }     
                                </div>
                            </div>
                            <p className={`text-[#BAB8B8] font-[400] text-xs md:text-sm max-md:w-[80%] ${index === i ? "block" : "hidden"}`}>
                                {answer}
                            </p>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default FAQs