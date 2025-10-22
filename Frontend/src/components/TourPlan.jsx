import React from "react";
import { MapPin } from "lucide-react";

const tourData = [
  {
    day: "01",
    title: "Day 1: Departure",
    description:
      "We begin our journey with a comfortable departure and scenic views ahead. Relax and enjoy your flight as we embark on a memorable experience together.",
    points: ["5 Star Accommodation", "Breakfast", "Welcome Dinner"],
  },
  {
    day: "02",
    title: "Day 2: Visiting Zurich, Geneva And Zermatt",
    description:
      "Explore the beauty of Zurich’s architecture, the elegance of Geneva’s lakeside, and the charm of Zermatt’s mountain views. Experience culture, food, and nature all in one day.",
    points: [
      "5 Star Accommodation",
      "Breakfast",
      "Guided City Tour",
      "Evening Leisure Walk",
    ],
  },
  {
    day: "03",
    title: "Day 3: Rest",
    description:
      "Take a day to unwind and recharge. Enjoy hotel amenities, a relaxed breakfast, or an optional spa session to rejuvenate your senses.",
    points: ["5 Star Accommodation", "Breakfast"],
  },
  {
    day: "04",
    title: "Day 4: Historical Tour",
    description:
      "Discover the rich history and heritage of Switzerland. Visit ancient landmarks, museums, and cultural sites that showcase the nation’s fascinating past.",
    points: [
      "5 Star Accommodation",
      "Breakfast",
      "Guided Historical Walk",
      "Cultural Dinner",
    ],
  },
  {
    day: "05",
    title: "Day 5: Return",
    description:
      "As our wonderful journey concludes, we prepare for departure. Enjoy a hearty breakfast before heading to the airport with unforgettable memories.",
    points: ["Breakfast", "Airport Drop", "End of Tour"],
  },
];

const TourPlan = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-10 py-10 font-sans">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5660ae] mb-12 ">
        Tour Plan
      </h2>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-dashed border-[#f37a46] pl-8 sm:pl-12 space-y-12">
        {tourData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col sm:flex-row sm:items-start sm:gap-6"
          >
            {/* Day Badge and Icon */}
            <div className="absolute -left-[2.8rem] sm:-left-[3.5rem] top-1 flex flex-col items-center">
              <div className="bg-[#f37a46] text-white font-bold rounded-md w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md text-sm sm:text-base">
                {item.day}
              </div>
              <MapPin
                size={14}
                className="text-[#f37a46] mt-1 sm:mt-2"
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition duration-300 w-full">
              <h3 className="text-[#0a2342] text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                {item.description}
              </p>
              <ul className="list-disc pl-5 text-gray-800 text-sm sm:text-base space-y-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPlan;
