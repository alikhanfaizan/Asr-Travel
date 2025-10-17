import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

const logos = [
  { src: logo1, alt: 'Expedia Logo' },
  { src: logo2, alt: 'Qantas Logo' },
  { src: logo3, alt: 'Alitalia Logo' },
  { src: logo4, alt: 'Axion Logo' },
  { src: logo5, alt: 'Jetstar Logo' },
  { src: logo1, alt: 'Expedia Logo' },
  { src: logo2, alt: 'Qantas Logo' },
  { src: logo3, alt: 'Alitalia Logo' },
  { src: logo4, alt: 'Axion Logo' },
  { src: logo5, alt: 'Jetstar Logo' },
  { src: logo1, alt: 'Expedia Logo' },
  { src: logo2, alt: 'Qantas Logo' },
  { src: logo3, alt: 'Alitalia Logo' },
  { src: logo4, alt: 'Axion Logo' },
  { src: logo5, alt: 'Jetstar Logo' },
  { src: logo1, alt: 'Expedia Logo' },
  { src: logo2, alt: 'Qantas Logo' },
  { src: logo3, alt: 'Alitalia Logo' },
  { src: logo4, alt: 'Axion Logo' },
  { src: logo5, alt: 'Jetstar Logo' },
];

const Logos = () => {
  return (
    <div className="overflow-hidden bg-white py-6">
      {/* Wrapper that moves */}
      <div className="flex animate-scroll space-x-10 w-max">
        {[...logos, ...logos].map((logo, index) => ( // duplicated for seamless loop
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-20 w-20 object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:scale-150"
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;
