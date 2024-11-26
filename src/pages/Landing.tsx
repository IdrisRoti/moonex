import Comparison from "../components/Comparison"
import FAQs from "../components/FAQs"
import Features from "../components/Features"
import Hero from "../components/Hero"

const Landing = () => {
  return (
    <div className="overflow-hidden">
        <Hero />
        <Comparison />
        <Features />
        <FAQs />
    </div>
  )
}

export default Landing