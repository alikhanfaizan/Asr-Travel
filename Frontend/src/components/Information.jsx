import React from "react";
import { CheckCircle, Star, XCircle } from "lucide-react";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";
import e4 from "../assets/e4.jpg";
import e5 from "../assets/e5.png";
import e6 from "../assets/e6.png";

export default function Information() {
  const galleryImages = [e1, e2, e3, e4, e5, e6];

  return (
    <div className="bg-white p-4 sm:p-6 md:p-10 rounded-lg shadow-lg max-w-5xl mx-auto font-sans">
      {/* Title and Rating Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5660ae]">
          Switzerland
        </h2>

        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 mr-1 w-4 h-4 sm:w-5 sm:h-5" />
          ))}
          <span className="text-xs sm:text-sm text-gray-500 ml-2">
            (5 reviews)
          </span>
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-[#D64E36]">
        <span>$1,000</span> <span className="text-gray-700 text-base">/ Per Couple</span>
      </div>

      {/* Description Section */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
        Embark on the journey of a lifetime with our exclusive travel package to
        Switzerland, a country known for its breathtaking landscapes, pristine
        lakes, majestic mountains, and charming villages. This all-inclusive
        trip is tailored for those seeking not only relaxation but also
        adventure and cultural immersion. Your journey begins with a luxurious
        flight and seamless airport transfers, ensuring that you experience the
        utmost convenience from the moment you arrive in Zurich. Once there,
        you’ll be treated to five-star accommodations, where you can unwind and
        rejuvenate after a long day of sightseeing. Switzerland is famed for its
        natural beauty, and this trip offers an immersive experience in its
        world-renowned scenery. From the snow-capped Alps to the serene lakes,
        you'll have the opportunity to witness some of the most awe-inspiring
        views the world has to offer. Our expert guide will take you on an
        unforgettable journey through charming Swiss towns, where history,
        culture, and modernity blend seamlessly. Whether you're strolling
        through the cobbled streets of Zurich, exploring the medieval castles in
        Lucerne, or hiking in the majestic Swiss Alps, there is something for
        every kind of traveler. You’ll also get the chance to experience the
        rich Swiss culture through its world-class cuisine. From chocolate
        tasting tours to savoring the famous Swiss fondue, every meal is an
        experience in itself. The trip includes a delicious daily breakfast to
        energize your day and allow you to explore the beauty of Switzerland at
        your own pace.
      </p>

      {/* Trip Details Section */}
      <div className="mt-6 space-y-3 sm:space-y-4 text-gray-700">
        {[
          ["Destination", "Zurich, Switzerland"],
          ["Departure", "Main Square New City"],
          ["Departure Time", "Approximately 08:10 AM"],
          ["Return Time", "Approximately 07:20 PM"],
          ["Dress Code", "Casual, comfortable and light"],
        ].map(([label, value], i) => (
          <div
            key={i}
            className="flex justify-between flex-wrap text-sm sm:text-base md:text-lg"
          >
            <span className="text-amber-600 font-medium">{label}</span>
            <span className="font-semibold">{value}</span>
          </div>
        ))}
      </div>

      {/* Included and Not Included Section */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Not Included */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C1C8C] mb-2">
            Not Included
          </h3>
          <ul className="space-y-2 text-sm sm:text-base text-[#5B5B5B]">
            <li className="flex items-center">
              <XCircle className="mr-2 text-[#D64E36] w-4 h-4 sm:w-5 sm:h-5" /> Gallery Ticket
            </li>
            <li className="flex items-center">
              <XCircle className="mr-2 text-[#D64E36] w-4 h-4 sm:w-5 sm:h-5" /> Lunch
            </li>
          </ul>
        </div>

        {/* Included */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C1C8C] mb-2">
            Included
          </h3>
          <ul className="space-y-2 text-sm sm:text-base text-[#5B5B5B]">
            {[
              "5 Star Accommodation",
              "Airport Transfer",
              "Breakfast",
              "Personal Guide",
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <CheckCircle className="mr-2 text-[#63D69F] w-4 h-4 sm:w-5 sm:h-5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#5660ae] mb-3">
          From our gallery
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
          Explore the charm and beauty of Switzerland through these exclusive snapshots
          from our travelers’ experiences — every frame tells a story.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-52 sm:h-56 md:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
