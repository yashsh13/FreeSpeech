import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SigninPage from './pages/SigninPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
