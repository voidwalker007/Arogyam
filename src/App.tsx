import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './components/pages/LandingPage'

function App() {


  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/sign-up' element = {''}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

