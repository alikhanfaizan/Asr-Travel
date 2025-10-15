import React, { useState } from "react";
import t1 from "../assets/test1.jpg";
import t2 from "../assets/test2.jpg";
import t3 from "../assets/test3.jpg";
import t from "../assets/testimonialbg.jpg"; // Placeholder for the image
import { ChevronLeft, ChevronRight } from "lucide-react";
const testimonials = [
  {
    name: "Michael Johnson",
    role: "Developer",
    text:
      "Outstanding service and exceptional quality. The team delivered beyond our expectations and provided innovative solutions that transformed our business processes completely.",
    image: t1, // Placeholder for the image
  },
  {
    name: "Sarah Williams",
    role: "Designer",
    text:
      "A fantastic experience! The creativity and technical expertise provided were exactly what we needed. The team was responsive and easy to collaborate with.",
    image: t2, // Placeholder for the image
  },
  {
    name: "Sarah Williams",
    role: "Designer",
    text:
      "A fantastic experience! The creativity and technical expertise provided were exactly what we needed. The team was responsive and easy to collaborate with.",
    image: t3, // Placeholder for the image
  },
  // Add more testimonials here if needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-[url('src/assets/testimonialbg.jpg')]  bg-cover   bg-no-repeat">
    <div className="py-16 px-40 ">
      <div className="max-w-2xl px-15 mx-auto text-center">
        <p className="text-sm font-semibold text-orange-500 uppercase mb-2">
          Promotion
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-10 leading-tight">
          See What Our Clients Say <br /> About Us
        </h2>

        <div className="relative bg-white rounded-xl shadow-lg py-10 px-6 md:px-10 text-center">
          {/* Client Image */}
          <div className="flex justify-center -mt-20 mb-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full ring-4 ring-white shadow-md object-cover"
            />
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-600 text-lg mb-6 italic leading-relaxed">
            “{testimonials[currentIndex].text}”
          </p>

          {/* Client Info */}
          <p className="font-semibold text-gray-800">
            {testimonials[currentIndex].name} –{" "}
            <span className="text-sm text-gray-500 font-normal">
              {testimonials[currentIndex].role}
            </span>
          </p>

          {/* Navigation Buttons */}
         <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-6 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-orange-500"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
