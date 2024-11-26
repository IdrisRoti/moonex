import Comparison from "../components/Comparison"
import Hero from "../components/Hero"

const Landing = () => {
  return (
    <div className="overflow-hidden">
        <Hero />
        <Comparison />
        {/* <div className="h-screen"></div> */}
    </div>
  )
}

export default Landing