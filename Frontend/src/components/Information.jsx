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
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      {/* Title and Rating Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-[#5660ae] mb-2">Switzerland</h2>
        <div className="flex items-center">
          <Star className="text-yellow-400 mr-1" />
          <Star className="text-yellow-400 mr-1" />
          <Star className="text-yellow-400 mr-1" />
          <Star className="text-yellow-400 mr-1" />
          <Star className="text-yellow-400 mr-1" />
          <span className="text-sm text-gray-500 ml-2">(5 reviews)</span>
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-2 text-xl font-bold text-[#D64E36]">
        <span>$1,000</span> / Per Couple
      </div>

      {/* Description Section */}
      <p className="text-sm text-gray-600 mt-4">
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
      <div className="mt-6">
        <div className="flex justify-between text-md text-[#5B5B5B]">
          <span className="text-amber-600 text-md">Destination</span>
          <span className="font-semibold">Zurich, Switzerland</span>
        </div>

        <div className="flex justify-between text-md text-[#5B5B5B] mt-2">
          <span className="text-amber-600">Departure</span>
          <span className="font-semibold">Main Square New City</span>
        </div>

        <div className="flex justify-between text-md text-[#5B5B5B] mt-2">
          <span className="text-amber-600">Departure Time</span>
          <span className="font-semibold">Approximately 08:10 AM</span>
        </div>

        <div className="flex justify-between text-md text-[#5B5B5B] mt-2">
          <span className="text-amber-600">Return Time</span>
          <span className="font-semibold">Approximately 07:20 PM</span>
        </div>

        <div className="flex justify-between text-md text-[#5B5B5B] mt-2">
          <span className="text-amber-600">Dress Code</span>
          <span className="font-semibold">Casual, comfortable and light</span>
        </div>
      </div>

      {/* Included and Not Included Section */}
      <div className="mt-6">
        <div>
          <h3 className="text-lg font-semibold text-[#0C1C8C]">Not Included</h3>
          <ul className="mt-2 text-sm text-[#5B5B5B]">
            <li className="flex items-center">
              <XCircle className="mr-2 text-[#D64E36]" /> Gallery Ticket
            </li>
            <li className="flex items-center">
              <XCircle className="mr-2 text-[#D64E36]" /> Lunch
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#0C1C8C]">Included</h3>
          <ul className="mt-2 text-sm text-[#5B5B5B]">
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-[#63D69F]" /> 5 Star
              Accommodation
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-[#63D69F]" /> Airport Transfer
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-[#63D69F]" /> Breakfast
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-[#63D69F]" /> Personal Guide
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mt-5 mb-5">
          <h1 className="text-3xl font-bold text-[#5660ae]">
            From our gallery
          </h1>
        </div>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ex
          similique dolorem fugit harum deleniti, voluptates eos eligendi
          nesciunt recusandae reprehenderit ut incidunt quidem, laborum in
          maxime. Similique blanditiis culpa harum ab perferendis, quidem
          explicabo, quia excepturi ipsa porro quae numquam dolore tempora
          veritatis! Libero necessitatibus nostrum non repellendus veniam.
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
