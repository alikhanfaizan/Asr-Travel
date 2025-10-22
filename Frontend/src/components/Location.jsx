import React from "react";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-10 font-sans">
      {/* Heading */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <MapPin className="text-[#f37a46]" size={28} />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5660ae]">
          Location
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
        Our journey begins in the vibrant city of Los Angeles, known for its
        sunny beaches, cultural diversity, and modern lifestyle. Explore the
        heart of California, from scenic drives to famous landmarks, all filled
        with unforgettable experiences.
      </p>

      {/* Google Map Embed */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-md mb-10">
        <div className="aspect-[16/9] w-full">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740540132!2d-118.6919205805736!3d34.020161306569814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c3d3b1df87%3A0x35e5f0d90f7b94c!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1677072134560!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>

      {/* Additional Info */}
      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
        Whether you’re exploring downtown, strolling along the beaches, or
        enjoying the local cuisine, Los Angeles offers a perfect balance of
        adventure and relaxation. This location serves as the starting point of
        our unforgettable tour experience. Our journey begins in the vibrant
        city of Los Angeles, known for its sunny beaches, cultural diversity,
        and modern lifestyle. Explore the heart of California, from scenic
        drives to famous landmarks, all filled with unforgettable experiences.
      </p>
    </section>
  );
};

export default Location;
