import { features } from "../constants"

const Features = () => {
  return (
    <section className="contain">
        <h2 className="text-center font-fira-code text-3xl md:text-5xl font-extrabold mt-[4rem] mb-[2rem]">Our <span className="text-primary">Features</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                features.map(({id, icon: Icon, title, content}) => (
                    <article key={id} className="group border border-white/5 p-[1.9rem] rounded-[1.15rem] bg-[#0a1d2e] hover:bg-white/5 transition">
                        <div className="bg-[#D9D9D91A] group-hover:bg-white/10 w-14 md:w-20 aspect-square rounded-full grid place-items-center mb-6">
                            <Icon className="size-6 md:size-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#ECF1F0]">{title}</h3>
                        <p className="font-[400] text-[#B6B6B6] mt-4">{content}</p>
                    </article>
                ))
            }
        </div>
    </section>
  )
}

export default Features