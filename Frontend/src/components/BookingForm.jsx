import React from "react";
import { Calendar } from "lucide-react";
import b from "../assets/273.jpg";


export default function BookingForm() {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col justify-between">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-[#1a265c] mb-2">
        Book This Tour
      </h2>
      <p className="text-sm text-gray-700 mb-6 text-center">
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt?
        <br />
        Quo quidem neque iusto expedita est dolo.
      </p>

      {/* Form */}
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="tel"
            placeholder="Phone"
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-orange-400 outline-none pr-10"
            />
            <Calendar size={16} className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-orange-400 outline-none">
          <option>Number of Guests</option>
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4+ Guests</option>
        </select>

        <textarea
          placeholder="Message"
          rows={3}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none resize-none"
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <button
            type="button"
            className="bg-[#e86446] hover:bg-[#dd5538] text-white text-sm font-semibold py-3 rounded-lg w-1/2 transition-all"
          >
            Check Availability
          </button>
          <button
            type="submit"
            className="bg-[#e86446] hover:bg-[#dd5538] text-white text-sm font-semibold py-3 rounded-lg w-1/2 transition-all"
          >
            Book Now
          </button>
        </div>
      </form>

      {/* Image section */}
      <div className="mt-15 bg-white">
        <img
          src={b}
          alt="Travel illustration"
          className="rounded-xl w-full object-contain"
        />
      </div>
    </div>
  );
}
