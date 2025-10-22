import React from 'react'
import Landscpae from '../components/Landscape'
import bg1 from '../assets/bg1.jpg';
import Navbar from '../components/Navbar';


const ServicesLandscape = () => {
  return (
    
    <div>
      <div className="xl:min-h-screen bg-white relative overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={bg1}
            alt="Decorative background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white min-h-[60vh] px-4">
          <p className="text-sm tracking-[4px] uppercase font-semibold mb-2">
            Explore
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold italic">
            Landscapes
          </h1>
        </div>
      </div>
      <Landscpae/>
    </div>
  )
}

export default ServicesLandscape