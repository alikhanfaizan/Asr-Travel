import React from "react";
import bg from '../assets/promotionbg.png';
import circular from '../assets/circular.jpg';
const Promotion = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-4 p-8 bg-white rounded-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center space-y-6">
            <span className="text-red-500 text-sm font-bold uppercase">
              Promotion
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              We Provide You Best Europe Sightseeing Tours
            </h2>
            <p className="text-lg sm:text-xl text-gray-700">
              Et labore lorem ipsum dolor lorem ipsum consectetur et tempore
              consectetur. Ex beatibus similique, non quis quae eligendi veniam
              et fugiat natus qui soluta consequatur ex molestias quasi nihil
              nemo.
            </p>
            <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200">
              View Packages
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {/* Background Image for the image container */}
            {/* import bg2 from 'src/assets/promotionbg.png'; import circular from
            'src/assets/circular.jpg'; */}
            <div
              className="relative w-80 h-80 sm:w-72 sm:h-72 md:w-[25rem] md:h-[25rem] rounded-full  border-white shadow-lg overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <img
                src={circular}
                alt="Tour"
                className="absolute inset-0 w-[85%] h-[85%] object-cover rounded-full m-auto top-0 bottom-0 left-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
