import React from 'react'
import Category from '../components/Category'
import TopDestinations from '../components/TopDestinations'
import Testimonial from '../components/Testimonial'
import EasyAndFast from '../components/EasyAndFast'
import Logos from '../components/Logos'
import Subsctibe from '../components/Subsctibe'
// import traveller from '../assets/traveller.png'
// import plane from '../assets/plane.png'
import { Play } from 'lucide-react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
     <div className="xl:min-h-screen bg-white relative overflow-hidden">
        <Navbar />

        {/* Background Decorative Image - Hidden on mobile/tablet */}
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 hidden lg:block">
          <img
            src="https://res.cloudinary.com/dez8z7xbp/image/upload/v1756153407/Decore_xzhmey.png"
            alt="Decorative background"
            className="w-full h-full object-cover object-left"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center xl:min-h-[calc(100vh-88px)] relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-0 lg:px-4 xl:px-8 pt-8 lg:pt-0">
            {/* Best Destinations Tag */}
            <div className="text-[#DF6951] font-bold font-poppins text-xs sm:text-sm md:text-base lg:text-xl mb-4 lg:mb-6 tracking-wide">
              BEST DESTINATIONS AROUND THE WORLD
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-volkhov text-[#181E4B] mb-6 lg:mb-8 leading-tight">
              <span className="relative inline-block">
                Travel, enjoy
                {/* Decorative element - only show on desktop */}
                <img
                  src="https://res.cloudinary.com/dez8z7xbp/image/upload/v1756269674/Decore_1_fjdtad.svg"
                  alt="Decorative element"
                  className="absolute -bottom-0 -right-20 w-66 h-auto hidden lg:block"
                />
              </span>
              <br />
              and live a new
              <br />
              and full life
            </h1>

            {/* Description */}
            <p className="text-[#5E6282] font-poppins font-medium text-sm sm:text-base mb-8 lg:mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <button className="w-full sm:w-auto bg-[#F1A501] cursor-pointer hover:bg-yellow-500 font-googlesanscode text-sm sm:text-base text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors shadow-lg">
                Find out more
              </button>

              <div className="flex items-center space-x-3">
                <button className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors shadow-lg">
                  <Play
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-1"
                    fill="white"
                  />
                </button>
                <span className="text-[#686D77] font-poppins text-sm sm:text-base font-medium">
                  Play Demo
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Person Image */}
          <div className="w-full lg:w-1/2 relative z-20 mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-none mx-auto">
              <img
                src="https://res.cloudinary.com/dez8z7xbp/image/upload/v1756153409/Image_mhygop.png"
                alt="Traveler with backpack"
                className="w-full h-auto lg:ml-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
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