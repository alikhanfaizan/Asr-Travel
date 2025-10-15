import React from 'react';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import tour from '../assets/trend.png'; // Placeholder for the combined image

const PopularTourPlans = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">

        {/* ==== Left Side (Single Combined Image) ==== */}
        <div className="flex justify-center items-center">
          <img
            src={tour} // <- your single image goes here
            alt="Tour Visual"
            className="max-w-full w-[90%] md:w-[80%] drop-shadow-lg"
          />
        </div>

        {/* ==== Right Side (Text + Progress Circles) ==== */}
        <div>
          <p className="text-orange-500 uppercase font-semibold mb-2 tracking-wide">
            Trend
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Our Popular Tour Plans
          </h2>
          <p className="text-gray-600 mb-10">
            We offer some of the most popular travel experiences loved by our
            clients. Whether you're planning a relaxing vacation, a romantic honeymoon, or a
            musical escape — we’ve got you covered with perfectly curated plans.
          </p>

          {/* Progress Circles */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: 73, label: 'Vacations', color: ['#06b6d4', '#6366f1'] },
              { value: 55, label: 'Honeymoon', color: ['#fb7185', '#facc15'] },
              { value: 30, label: 'Musical Events', color: ['#8b5cf6', '#ec4899'] },
            ].map(({ value, label, color }, idx) => (
              <div key={idx} className="flex flex-col items-center w-24">
                <CircularProgressbar
                  value={value}
                  text={`${value}%`}
                  strokeWidth={10}
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: color[0],
                    trailColor: '#f3f4f6',
                  })}
                />
                <p className="text-sm font-bold mt-2 text-center text-gray-800 uppercase tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTourPlans;
