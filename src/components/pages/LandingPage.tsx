import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { HeroSection } from "../landing/HeroSection"
import HowToSection from "../landing/HowToSection"
import ServicesSection from "../landing/ServicesSection"

const LandingPage = () => {
  return (
    <>
        <div className=' relative flex '>
            <Header/> 
        </div>
        <HeroSection/>
        <HowToSection/>
        <ServicesSection/>
        <Footer/>
    </>
  )
}

export default LandingPage