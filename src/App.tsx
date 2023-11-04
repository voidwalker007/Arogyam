import './App.css'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-up' element = {<Register/>}/> 
        <Route path='/login' element = {<Login/>}/> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

