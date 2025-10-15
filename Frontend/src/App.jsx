import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ServicesLandscape from './pages/ServicesLandscape'
import UpcomingPackage from './pages/UpcomingPackage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services-landscape" element={<ServicesLandscape />} />
          <Route path="/upcoming-package" element={<UpcomingPackage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App