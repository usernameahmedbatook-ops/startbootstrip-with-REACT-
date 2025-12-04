import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Porjects'
import Skills from './components/Skills'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>



      </div>
    </>
  )

}
export default App
