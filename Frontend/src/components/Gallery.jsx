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

export default function GalleryTab() {
  const galleryImages = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e5, e6];

  return (
    <div className="bg-white p-8 rounded-xl shadow-md text-gray-700">
      <div>
        <div className="flex justify-between items-center mt-2 mb-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5660ae]">
            Photo Gallery
          </h2>
        </div>
        <p className="text-gray-600 mb-8">
          Explore our complete collection of stunning photographs from
          Switzerland. These images showcase the breathtaking landscapes,
          charming cities, and memorable moments that await you on this
          incredible journey.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-50 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
