import React from "react";
import Explore from "../components/Explore";
import Testimonial from "../components/Testimonial";
import Trend from "../components/Trend";
import Promotion from "../components/Promotion";
import bg2 from "../assets/bg2.jpg";
import Navbar2 from "../components/Navbar2";
// import Navbar2 from "../components/Navbar2";

const About = () => {
  return (
    <>
      <div className="xl:min-h-screen relative overflow-hidden">
        {/* Navbar */}
        <Navbar2/>

        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={bg2}
            alt="Decorative background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlay Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div> */}

        {/* Hero Text Section */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white min-h-[60vh] px-4">
          <p className="text-sm tracking-[4px] uppercase font-semibold mb-3">
            Read
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold italic">
            About Us
          </h1>
        </div>
      </div>

      {/* Sections below hero */}
      <Promotion />
      <Trend />
      <Explore />
      <Testimonial />
    </>
  );
};

export default About;
