import React from 'react'
import Sorting from '../components/Sorting'

const UpcomingPackage = () => {
  return (
    <div>
      <section
              className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(src/assets/bg3.jpg)` }}
            >
              
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
              <div className="relative text-center text-white px-4">
                <p className="text-sm tracking-[4px] uppercase font-semibold mb-2">
                  Search Tour
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold italic">
                  Travel With Us
                </h1>
              </div>
            </section>
      <Sorting/>
    </div>
  )
}

export default UpcomingPackage