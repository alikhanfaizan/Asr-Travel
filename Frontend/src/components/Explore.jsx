import React from "react";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";
import e4 from "../assets/e4.jpg";
import e5 from "../assets/e5.png";
import e6 from "../assets/e6.png";
import e7 from "../assets/e7.png";
import e8 from "../assets/e8.png";
import e9 from "../assets/e9.png";
import e10 from "../assets/e10.jpg";
const destinations = [
  { name: "Barcelona", price: "$840", img: e1 },
  { name: "Switzerland", price: "$840", img: e2 },
  { name: "Rio de Jenero", price: "$840", img: e3 },
  { name: "Barcelona", price: "$840", img: e4},
  { name: "Tommorow land", price: "$840", img: e5 },
  { name: "Los Angelas", price: "$840", img: e6 },
  { name: "India", price: "$840", img: e7 },
  { name: "Barcelona", price: "$840", img: e8 },
  { name: "Maldives", price: "$840", img: e9 },
  { name: "Pakistan", price: "$840", img: e10 },
  { name: "Maldives", price: "$840", img: e1 },
];

const Explore = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-12">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">
          EXPLORE MORE
        </h2>
        <h2 className="text-3xl sm:text-4xl text-gray-600">Our International Packages</h2>
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
              className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-300"
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
