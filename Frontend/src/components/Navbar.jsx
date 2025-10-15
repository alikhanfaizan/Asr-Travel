import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/destinations", label: "Destinations" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#0f172a] flex items-center gap-1"
        >
          Travel<span className="text-orange-500 text-3xl -mt-1">↗</span>
        </Link>

        {/* Middle: Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-orange-500 transition ${
                  isActive ? "text-orange-500" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: Get in Touch Button */}
        <div className="hidden md:block">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-md transition">
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-gray-700 font-medium hover:text-orange-500 ${
                    isActive ? "text-orange-500" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-md transition">
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
