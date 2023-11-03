import './App.css'
import { Header } from './components/common/Header'
import { HeroSection } from './components/landing/HeroSection'

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
    </>
  )
}

export default App
