import React from "react";
import {
  MapPin,
  CreditCard,
  Calendar,
  Leaf,
  Map,
  Send,
  Users,
  Heart,
} from "lucide-react";
import ig from "../assets/Travel.jpg"; 
const EasyAndFast = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 lg:px-40 py-20 bg-white relative overflow-hidden mb-10">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-gray-500 font-semibold text-lg">Easy and Fast</p>
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-[#181E4B] leading-tight">
          Book Your Next Trip <br /> In 3 Easy Steps
        </h2>

        {/* Steps */}
        <div className="space-y-8 mt-10">
          {/* Step 1 */}
          <div className="flex items-start space-x-5">
            <div className="bg-yellow-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#5E6282]">
                Choose Destination
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-5">
            <div className="bg-orange-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
              <CreditCard className="text-white w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#5E6282]">
                Make Payment
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-5">
            <div className="bg-teal-700 w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
              <Calendar className="text-white w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#5E6282]">
                Reach Airport on Selected Date
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center">
        {/* Glowing Background */}
        <div className="absolute -z-10 w-96 h-90 bg-blue-500 rounded-full blur-3xl opacity-70"></div>


        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 w-80 sm:w-96">
          <img
            src={ig}
            alt="Trip to Greece"
            className="w-full h-48 object-cover rounded-2xl"
          />
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-[#5E6282]">
              Trip To Greece
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              <span className="text-gray-600 font-medium">14-29 June</span> | by
              Robbin j
            </p>

            <div className="flex items-center space-x-4 mt-4 text-gray-400">
              <Leaf className="w-5 h-5" />
              <Map className="w-5 h-5" />
              <Send className="w-5 h-5" />
            </div>

            <div className="flex items-center space-x-2 mt-5 text-gray-500">
              <Users className="w-5 h-5" />
              <p className="text-sm">24 people going</p>
            </div>
          </div>

          {/* Heart Icon */}
          <div className="flex justify-end mt-4">
            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Floating Card */}
        <div className="absolute bottom-0 right-0 translate-x-8 translate-y-8 bg-white shadow-xl rounded-2xl px-5 py-4 w-56">
          <div className="flex items-center space-x-3">
            <img
              src= {ig}
              alt="Trip to Rome"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-xs text-gray-400">Ongoing</p>
              <h4 className="text-sm font-semibold text-[#5E6282]">
                Trip to Rome
              </h4>
              <p className="text-xs text-gray-400">
                <span className="text-purple-500 font-semibold">40%</span>{" "}
                completed
              </p>
              <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1">
                <div className="bg-purple-500 h-1.5 rounded-full w-[40%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyAndFast;
