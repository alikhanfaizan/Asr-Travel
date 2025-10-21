import React from 'react'
import Category from '../components/Category'
import TopDestinations from '../components/TopDestinations'
import Testimonial from '../components/Testimonial'
import EasyAndFast from '../components/EasyAndFast'
import Logos from '../components/Logos'
import Subsctibe from '../components/Subsctibe'
import traveller from '../assets/traveller.png'
import plane from '../assets/plane.png'
import { Play } from 'lucide-react'

const Home = () => {
  return (
    <div>
      <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg z-10">
          <p className="text-[#f37a46] font-semibold uppercase tracking-wide text-sm mb-3">
            Best destinations around the world
          </p>

          <h1 className="text-[#1b2559] text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Travel,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">enjoy</span>
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#f37a46] -z-0 rounded"></span>
            </span>{" "}
            and live a new
            <br /> and full life
          </h1>

          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-[#f4b400] hover:bg-[#e0a600] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Find out more
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-[#f37a46] hover:bg-[#f37a46] hover:text-white transition">
                <Play size={20} fill="currentColor" />
              </div>
              <p className="text-[#1b2559] font-medium">Play Demo</p>
            </div>
          </div>
        </div>
        <div className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <div className="absolute -top-10 -right-24 w-[800px] h-[700px] bg-[#fff0d8] rounded-l-[50%]"></div>

          {/* Plane icons */}
          <img
            src={plane}
            alt="plane"
            className="absolute top-10 left-6 w-24 animate-float-slow"
          />
          <img
            src={plane}
            alt="plane"
            className="absolute bottom-32 right-16 w-24 animate-float-reverse"
          />

          {/* Traveller image */}
          <img
            src={traveller}
            alt="Traveller"
            className="relative z-10 w-[420px] md:w-[480px] lg:w-[520px] mx-auto"
          />
        </div>
      </div>
    </section>
      <Category/>
      <TopDestinations/>
      <EasyAndFast/>
      <Testimonial/>
      <Logos/>
      <Subsctibe/>

    </div>
  )
}

export default Home