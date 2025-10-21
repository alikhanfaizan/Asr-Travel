import React from 'react'
import Explore from '../components/Explore'
import Testimonial from '../components/Testimonial'
import Trend from '../components/Trend'
import Promotion from '../components/Promotion'

const About = () => {
  return (
    <div>
      <section
              className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(src/assets/bg2.jpg)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      
              <div className="relative text-center text-white px-4">
                <p className="text-sm tracking-[4px] uppercase font-semibold mb-2">
                  Read
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold italic">
                  About Us
                </h1>
              </div>
            </section>
        <Promotion/>
        <Trend/>
        <Explore/>
        <Testimonial/>
    </div>
  )
}

export default About