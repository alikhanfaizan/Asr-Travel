import React from "react";
import { MapPin } from "lucide-react";
import romeImg from "../assets/Destination1.png";
import londonImg from "../assets/Destination2.jpg";
import europeImg from "../assets/Destination3.png";

const TopDestinations = () => {
  const destinations = [
    {
      image: romeImg,
      title: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
    },
    {
      image: londonImg,
      title: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
    },
    {
      image: europeImg,
      title: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Background pattern (right side lines) */}
      <div className="absolute top-40 right-0 hidden md:block opacity-40">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Heading Section */}
      <div className="text-center mb-16">
        <p className="text-md font-semibold text-gray-500 tracking-wide">
          Top Selling
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a40] mt-2">
          Top Destinations
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center px-25">

        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-[320px] cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-t-2xl w-full h-60 object-cover transform transition-transform duration-500 hover:scale-105"
            />
            <div className="flex justify-between items-center px-5 py-4">
              <h3 className="text-lg font-semibold text-[#1a1a40]">
                {item.title}
              </h3>
              <p className="text-gray-700 font-semibold">{item.price}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 px-5 pb-5">
              <MapPin size={16} />
              <span className="text-sm">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
