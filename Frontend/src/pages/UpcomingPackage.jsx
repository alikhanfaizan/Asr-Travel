import React from 'react'
import Sorting from '../components/Sorting'
import bg3 from '../assets/bg3.jpg';
import Navbar2 from '../components/Navbar2';

const UpcomingPackage = () => {
  return (
    <div>
      <div className="xl:min-h-screen relative overflow-hidden">
        {/* Navbar */}
        <Navbar2 />

        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={bg3}
            alt="Decorative background"
            className="w-full h-full object-cover object-center"
          />
        </div>
              
              {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div> */}
              <div className="relative z-20 flex flex-col items-center justify-center text-center text-white min-h-[60vh] px-4">
                <p className="text-sm tracking-[4px] uppercase font-semibold mb-2">
                  Search Tour
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold italic">
                  Travel With Us
                </h1>
              </div>
      </div>
      <Sorting/>
    </div>
  )
}

export default UpcomingPackage