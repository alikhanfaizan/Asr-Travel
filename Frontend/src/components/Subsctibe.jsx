import { Mail } from "lucide-react";

const Subscribe = () => {
  return (
    <section className="flex justify-center py-16 sm:py-20 md:py-24 lg:py-28 bg-white px-4">
      <div
        className="relative bg-[#f8f4ff] rounded-lg shadow-lg px-6 sm:px-10 md:px-16 py-10 sm:py-16 text-center w-full max-w-4xl bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/Group 78.png')" }}
      >
        {/* Floating Paper Plane Icon */}
        <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 z-20">
          <img
            src="https://res.cloudinary.com/dez8z7xbp/image/upload/v1756280607/Group_77_jmqcpf.svg"
            alt="Send icon"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed">
            Subscribe to get information, latest news and other
            <br className="hidden sm:block" />
            interesting offers about <span className="text-gray-800">Jadoo</span>
          </h2>

          {/* Input and Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow-md w-full sm:w-80">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>

            <button className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
