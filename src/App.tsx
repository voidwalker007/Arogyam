import './App.css'
import { Footer } from './components/common/Footer'
import { Header } from './components/common/Header'
import { HeroSection } from './components/landing/HeroSection'
import HowToSection from './components/landing/HowToSection'
import ServicesSection from './components/landing/ServicesSection'

function App() {


  return (
    <>
      <div className=' relative flex '>
        <div className='fixed top-1 left-1'>
          {/* <img src="./src/assets/3d-logo-2.png" alt="3d-logo" height={200} width={140} className='object-fill'/> */}
        </div>
        <Header/> 
      </div>
      <HeroSection/>
      <HowToSection/>
      <ServicesSection/>
      <Footer/>
    </>
  )
}

export default App
