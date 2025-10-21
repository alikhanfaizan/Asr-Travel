import React from 'react'
import Landscpae from '../components/Landscape'
import bg1 from '../assets/bg1.jpg';


const ServicesLandscape = () => {
  return (
    
    <div>
      <section
        className="relative w-full h-[90vh]  flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}>
      
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

        <div className="relative text-center text-white px-4">
          <p className="text-sm tracking-[4px] uppercase font-semibold mb-2">
            Explore
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold italic">
            Landscapes
          </h1>
        </div>
      </section>
      <Landscpae/>
    </div>
  )
}

export default ServicesLandscape