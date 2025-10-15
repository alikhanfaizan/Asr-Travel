import React from "react";
import ig from "../assets/images.jpeg";
const destinations = [
  { name: "Barcelona", price: "$840", img: ig },
  { name: "Switzerland", price: "$840", img: ig },
  { name: "Rio de Jenero", price: "$840", img: ig },
  { name: "Barcelona", price: "$840", img: ig },
  { name: "Tommorow land", price: "$840", img: ig },
  { name: "Los Angelas", price: "$840", img: ig },
  { name: "India", price: "$840", img: ig },
  { name: "Barcelona", price: "$840", img: ig },
  { name: "Maldives", price: "$840", img: ig },
  { name: "Pakistan", price: "$840", img: ig },
  { name: "Maldives", price: "$840", img: ig },
];

const Explore = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-50 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-2xl font-semibold text-orange-500 mb-3">
          EXPLORE MORE
        </h2>
        <h2 className="text-gray-600 text-4xl">Our International Packages</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-lg">
        {destinations.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden shadow-md group ${
              index === 2 ? "row-span-2" : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex justify-between text-white text-sm font-semibold">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
