import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Welcome from './pages/Welcome/Welcome.jsx'
import Gender from './pages/Gender/Gender.jsx'
import UserData from './pages/UserData/UserData.jsx'
import Horoscope from './pages/Horoscope/Horoscope.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/horoscope' element={<Horoscope/>} />
        <Route path='/data' element={<UserData/>} />
        <Route path='/gender' element={<Gender/>} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
