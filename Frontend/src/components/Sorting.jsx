import React, { useState } from 'react';
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
      "The Land of the Alps and Scenic Beauty that will take your breath away with stunning mountain views",
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
      "The Heart of European Culture and modern architecture with rich historical heritage and vibrant...",
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
      "Pure Paradise and Tropical Bliss with crystal clear waters and pristine beaches for ultimate relaxation",
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
      "Modern City with Cultural Diversity and stunning skyline offering world-class dining and entertainment",
  },
];

const Sorting = () => {
  const [trips, setTrips] = useState(tripsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);

  // Function to sort trips based on selected criteria
  const handleSort = (criteria) => {
    let sortedTrips;
    if (criteria === "date") {
      sortedTrips = [...trips].sort((a, b) => new Date(a.date.split(" - ")[0]) - new Date(b.date.split(" - ")[0]));
    } else if (criteria === "priceLowToHigh") {
      sortedTrips = [...trips].sort((a, b) => parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', '')));
    } else if (criteria === "priceHighToLow") {
      sortedTrips = [...trips].sort((a, b) => parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', '')));
    } else if (criteria === "name") {
      sortedTrips = [...trips].sort((a, b) => a.title.localeCompare(b.title));
    }
    setTrips(sortedTrips);
    setSortBy(criteria);
  };

  // Function to filter trips based on search term
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTrips = trips.filter(
    (trip) =>
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Sorting Bar */}
      <div className="bg-gray-100 p-4 flex justify-center space-x-6 rounded-lg mt-6 shadow-sm">
        <button
          onClick={() => handleSort("date")}
          className="flex items-center px-4 py-2 text-gray-700 hover:text-[#e85a34] transition font-medium"
        >
          <Calendar className="mr-2" size={18} />
          Date
        </button>

        <button
          onClick={() => handleSort("priceLowToHigh")}
          className="flex items-center px-4 py-2 text-gray-700 hover:text-[#e85a34] transition font-medium"
        >
          <ArrowUp className="mr-2" size={18} />
          Price Low To High
        </button>

        <button
          onClick={() => handleSort("priceHighToLow")}
          className="flex items-center px-4 py-2 text-gray-700 hover:text-[#e85a34] transition font-medium"
        >
          <ArrowDown className="mr-2" size={18} />
          Price High To Low
        </button>

        <button
          onClick={() => handleSort("name")}
          className="flex items-center px-4 py-2 text-gray-700 hover:text-[#e85a34] transition font-medium"
        >
          <Edit className="mr-2" size={18} />
          Name (A-Z)
        </button>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-[#fefefe] flex justify-center px-6 md:px-12 lg:px-16 py-10">
        <div className="w-full max-w-[1000px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left section - Cards */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-10">
              {filteredTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                >
                  {/* Image */}
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="h-70 w-full object-cover"
                  />

                  {/* Orange Info Bar */}
                  <div className="bg-[#e85a34] text-white text-s flex justify-between items-center px-3 py-1.5">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{trip.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{trip.people} people</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <h3 className="text-2xl font-bold text-[#002147] mb-1">
                      {trip.title}
                    </h3>
                    <p className="text-gray-600 text-s leading-snug mb-3">
                      {trip.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <p className="text-[#e85a34] font-bold text-s">
                        {trip.price}
                      </p>
                      <div className="flex items-center text-[#f9b233]">
                        <Star className="w-4 h-4 fill-[#f9b233]" />
                        <span className="text-gray-700 ml-1 text-s font-medium">
                          {trip.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right section - Sidebar */}
            <div className="bg-white rounded-xl  p-5 self-start w-90">
              <h2 className="text-xl font-bold text-[#002147] mb-2">Plan Your Trip</h2>
              <p className="text-gray-500 text-s mb-5 leading-relaxed">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
              </p>

              <input
                type="text"
                placeholder="Search"
                className="w-full mb-2.5 p-2 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#e85a34]"
              />
              <input
                type="text"
                placeholder="Where To"
                className="w-full mb-2.5 p-2 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#e85a34]"
              />
              <input
                type="text"
                placeholder="Date (e.g., June, July)"
                className="w-full mb-4 p-2 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#e85a34]"
              />

              <div className="mb-3">
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

              <button className="w-full bg-[#e85a34] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#d24d2f] transition">
                Book Now
              </button>

              <div className="mt-6 flex justify-center">
                <img
                  src={b}
                  alt="Travel"
                  className="w-70 h-50 object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorting;
