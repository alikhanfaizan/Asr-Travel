import React, { useState } from "react";
import { Calendar, ArrowUp, ArrowDown, Edit, Users, Star } from "lucide-react";
import i1 from "../assets/img1.png";
import i2 from "../assets/img2.png";
import i3 from "../assets/img3.png";
import i4 from "../assets/img4.png";
import b from "../assets/273.jpg";

const tripsData = [
  {
    id: 1,
    image: i1,
    title: "Switzerland",
    date: "June 15 - June 25",
    people: 8,
    price: "$899",
    rating: 4.9,
    description:
      "The Land of the Alps and Scenic Beauty that will take your breath away with stunning mountain views.",
  },
  {
    id: 2,
    image: i2,
    title: "Berlin",
    date: "July 10 - July 18",
    people: 12,
    price: "$650",
    rating: 4.8,
    description:
      "The Heart of European Culture and modern architecture with rich historical heritage and vibrant atmosphere.",
  },
  {
    id: 3,
    image: i3,
    title: "Maldives",
    date: "Aug 5 - Aug 15",
    people: 6,
    price: "$1250",
    rating: 4.9,
    description:
      "Pure Paradise and Tropical Bliss with crystal clear waters and pristine beaches for ultimate relaxation.",
  },
  {
    id: 4,
    image: i4,
    title: "Toronto",
    date: "Sep 12 - Sep 20",
    people: 15,
    price: "$750",
    rating: 4.7,
    description:
      "Modern City with Cultural Diversity and stunning skyline offering world-class dining and entertainment.",
  },
];

const Sorting = () => {
  const [trips, setTrips] = useState(tripsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (criteria) => {
    let sortedTrips;
    if (criteria === "date") {
      sortedTrips = [...trips].sort(
        (a, b) =>
          new Date(a.date.split(" - ")[0]) - new Date(b.date.split(" - ")[0])
      );
    } else if (criteria === "priceLowToHigh") {
      sortedTrips = [...trips].sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    } else if (criteria === "priceHighToLow") {
      sortedTrips = [...trips].sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    } else if (criteria === "name") {
      sortedTrips = [...trips].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }
    setTrips(sortedTrips);
    setSortBy(criteria);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTrips = trips.filter(
    (trip) =>
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fefefe] px-4 sm:px-8 md:px-12 lg:px-24 py-8">
      {/* Sorting Bar */}
      <div className="bg-gray-100 p-4 flex flex-wrap justify-center sm:justify-between gap-3 rounded-lg mt-4 shadow-sm">
        <button
          onClick={() => handleSort("date")}
          className={`flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition ${
            sortBy === "date" ? "text-[#e85a34]" : "text-gray-700 hover:text-[#e85a34]"
          }`}
        >
          <Calendar className="mr-2" size={16} />
          Date
        </button>

        <button
          onClick={() => handleSort("priceLowToHigh")}
          className={`flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition ${
            sortBy === "priceLowToHigh"
              ? "text-[#e85a34]"
              : "text-gray-700 hover:text-[#e85a34]"
          }`}
        >
          <ArrowUp className="mr-2" size={16} />
          Price Low To High
        </button>

        <button
          onClick={() => handleSort("priceHighToLow")}
          className={`flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition ${
            sortBy === "priceHighToLow"
              ? "text-[#e85a34]"
              : "text-gray-700 hover:text-[#e85a34]"
          }`}
        >
          <ArrowDown className="mr-2" size={16} />
          Price High To Low
        </button>

        <button
          onClick={() => handleSort("name")}
          className={`flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition ${
            sortBy === "name" ? "text-[#e85a34]" : "text-gray-700 hover:text-[#e85a34]"
          }`}
        >
          <Edit className="mr-2" size={16} />
          Name (A-Z)
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        {/* Cards Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="h-48 sm:h-52 w-full object-cover"
              />

              <div className="bg-[#e85a34] text-white text-xs sm:text-sm flex justify-between items-center px-3 py-2">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{trip.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>{trip.people} people</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-2">
                  {trip.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-snug">
                  {trip.description}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-[#e85a34] font-bold text-sm sm:text-base">
                    {trip.price}
                  </p>
                  <div className="flex items-center text-[#f9b233]">
                    <Star className="w-4 h-4 fill-[#f9b233]" />
                    <span className="text-gray-700 ml-1 text-xs sm:text-sm font-medium">
                      {trip.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/3 bg-white rounded-xl p-5 h-fit shadow-md">
          <h2 className="text-lg sm:text-xl font-bold text-[#002147] mb-2">
            Plan Your Trip
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 leading-relaxed">
            Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? 
            Quo quidem neque iste expedita est dolo.
          </p>

          <input
            type="text"
            placeholder="Search"
            className="w-full mb-2 p-2 border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e85a34]"
            value={searchTerm}
            onChange={handleSearch}
          />
          <input
            type="text"
            placeholder="Where To"
            className="w-full mb-2 p-2 border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e85a34]"
          />
          <input
            type="text"
            placeholder="Date (e.g., June, July)"
            className="w-full mb-4 p-2 border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e85a34]"
          />

          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Filter By Price
            </label>
            <input
              type="range"
              min="12"
              max="3596"
              className="w-full accent-[#e85a34]"
            />
            <p className="text-xs text-gray-600 mt-1">Price: $12 - $3596</p>
          </div>

          <button className="w-full bg-[#e85a34] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#d24d2f] transition">
            Book Now
          </button>

          <div className="mt-6">
            <img
              src={b}
              alt="Travel"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
