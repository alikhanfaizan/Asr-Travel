import { Linkedin, MessageCircle, Infinity, TwitterIcon } from "lucide-react";
import footerbg from "../assets/footerbg.jpg";
export default function Footer() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat border-t border-gray-200"
      style={{
        backgroundImage: `url(${footerbg})`, // footerbg should be the imported image
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-white/85"></div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#0f172a] flex items-center gap-1">
            Travel
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Travel helps companies manage payments easily.
          </p>

          <div className="flex items-center gap-4 mt-6 text-orange-500">
            <Linkedin size={22} />
            <MessageCircle size={22} />
            <Infinity size={22} />
            <TwitterIcon size={22} />
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-700">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Destinations Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Destinations
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Maldives</li>
            <li>Los Angeles</li>
            <li>Las Vegas</li>
            <li>Toronto</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Join Our Newsletter
          </h3>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md border border-gray-300 bg-[#f5f5ff] text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md">
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            * We'll send you weekly updates for your better tour packages.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-200 py-6 text-center text-gray-700 text-sm bg-white/70">
        Copyright © Xpro 2025. All Rights Reserved.
      </div>
    </section>
  );
}
