import React from "react";
import weatherIcon from "../assets/Group 48.png";
import flightIcon from "../assets/Plane.png";
import micIcon from "../assets/Group 50.png";
import gearIcon from "../assets/Group 49.png";

const Category = () => {
  const services = [
    {
      icon: weatherIcon,
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      icon: flightIcon,
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      icon: micIcon,
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Prefer to men it engrossed listening.",
    },
    {
      icon: gearIcon,
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Top Right Cross Pattern (optional decoration) */}
      <div className="absolute top-10 right-10 opacity-30 hidden md:block">
        <svg width="100" height="100">
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 10 20 M 0 10 L 20 10"
                fill="none"
                stroke="#ccc"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#smallGrid)" />
        </svg>
      </div>

      {/* Heading Section */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-gray-500 tracking-[0.15em]">
          CATEGORY
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a40] mt-2">
          We Offer Best Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center px-6 sm:px-12 lg:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-sm hover:shadow-2xl transition-shadow duration-500 transform hover:bg-white cursor-pointer"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="h-16 w-16 object-contain mb-6 transition-transform duration-300 group-hover:scale-150"
            />
            <h3 className="text-lg font-semibold text-[#1a1a40] mb-3 transition-colors duration-300 group-hover:text-orange-500">
              {service.title}
            </h3>
            <p className="text-gray-500 text-md leading-relaxed max-w-xs mx-auto">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
