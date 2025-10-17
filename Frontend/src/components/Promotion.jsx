import React from "react";

const Promotion = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center w-full max-w-7xl mx-4 p-8 bg-white rounded-xl ">
        <div className="flex w-full max-w-4xl ">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center space-y-6">
            <span className="text-red-500 text-sm font-bold uppercase">Promotion</span>
            <h2 className="text-4xl font-extrabold text-gray-900">We Provide You Best Europe Sightseeing Tours</h2>
            <p className="text-lg text-gray-700">
              Et labore lorem ipsum dolor lorem ipsum consectetur et tempore consectetur. Ex beatibus similique, non quis quae eligendi veniam et fugiat natus qui
              soluta consequatur ex molestias quasi nihil nemo.
            </p>
            <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200">
              View Packages
            </button>
          </div>

          {/* Image Section */}
          <div className=" ml-30 w-full lg:w-1/2 p-2 flex justify-center items-center">
            {/* Background Image for the image container */}
            <div 
              className="w-72 h-72 bg-cover bg-center rounded-full overflow-hidden border-8 border-white shadow-lg"
              style={{ backgroundImage: 'url(src/assets/promotionbg.png)' }}
            >
              <img 
                src="src/assets/circular.jpg" 
                alt="Tour" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
