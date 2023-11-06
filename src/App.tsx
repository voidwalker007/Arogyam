import './App.css'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import { Profile } from './components/profile/profile'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-up' element = {<Register/>}/> 
        <Route path='/login' element = {<Login/>}/> 
        <Route path='/dashboard' element = {<Dashboard/>}/> 
        <Route path='/profile' element = {<Profile/>}/> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

