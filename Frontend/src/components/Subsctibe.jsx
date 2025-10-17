import { Mail, Send } from "lucide-react";

const Subscribe = () => {
  return (
    <section className="flex justify-center py-30 bg-white">
      <div
        className="relative bg-[#f8f4ff] rounded-[5px] shadow-lg px-10 py-20 text-center w-full max-w-4xl bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/Group 78.png')" }}
      >
        <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 lg:-top-6 lg:-right-6 z-20">
            <img
              src="https://res.cloudinary.com/dez8z7xbp/image/upload/v1756280607/Group_77_jmqcpf.svg"
              alt="Send icon"
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
            />
          </div>
        {/* Main content */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600 leading-relaxed">
            Subscribe to get information, latest news and other
            <br />
            interesting offers about{" "}
            <span className="text-gray-600">Jadoo</span>
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow-md w-full sm:w-80">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Your email"
                className="outline-none border-none bg-transparent w-full text-sm text-gray-700 placeholder-gray-400"
              />
            </div>

            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Floating paper plane icon */}
       
      </div>
    </section>
  );
};

export default Subscribe;
