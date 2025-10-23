import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// ---------------- NavItem Component ----------------
const NavItem = ({
  href,
  children,
  isActive = false,
  onClick,
  hasDropdown = false,
  dropdownItems = [],
  isInternal = true,
  isMobile = false,
  onMobileMenuClose,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      if (onClick) onClick();
      if (isMobile && onMobileMenuClose) onMobileMenuClose();
    }
  };

  const linkContent = (
    <>
      {children}
      {hasDropdown && (
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      )}

      {/* Desktop underline hover */}
      {!isMobile && (
        <>
          {!isActive && (
            <div
              className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full bg-white transition-all duration-300 group-hover:w-full"
            />
          )}
          {isActive && (
            <div
              className="absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: "#DF6951" }}
            />
          )}
        </>
      )}
    </>
  );

  // ✅ WHITE text for desktop, default mobile color scheme remains gray
  const baseClasses = isMobile
    ? `block py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 flex items-center justify-between font-poppins ${
        isActive ? "text-gray-900 bg-gray-50" : ""
      }`
    : `relative text-white  transition-all duration-300 pb-2 flex items-center gap-1 group font-poppins ${
        isActive ? "text-[#DF6951]" : ""
      }`;

  const dropdownContainer = isMobile ? (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isDropdownOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div className="bg-gray-50 border-t border-gray-100">
        {dropdownItems.map((item, index) => (
          <Link
            key={index}
            to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="block py-3 px-8 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-medium text-sm"
            onClick={() => {
              setIsDropdownOpen(false);
              if (onMobileMenuClose) onMobileMenuClose();
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    hasDropdown &&
    isDropdownOpen && (
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
        <div className="w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-3">
          {dropdownItems.map((item, index) => (
            <Link
              key={index}
              to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-3 text-gray-700 hover:text-[#DF6951] hover:bg-gray-50 transition-colors font-medium"
              onClick={() => setIsDropdownOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    )
  );

  return (
    <div
      className={isMobile ? "" : "relative"}
      onMouseEnter={() => {
        if (hasDropdown && !isMobile) setIsDropdownOpen(true);
      }}
      onMouseLeave={() => {
        if (hasDropdown && !isMobile) setIsDropdownOpen(false);
      }}
    >
      {isInternal ? (
        <Link to={href} onClick={handleClick} className={baseClasses}>
          {linkContent}
        </Link>
      ) : (
        <a href={href} onClick={handleClick} className={baseClasses}>
          {linkContent}
        </a>
      )}

      {dropdownContainer}
    </div>
  );
};

// ---------------- Navbar Component ----------------
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMobileMenuOpen]);

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/about") return "About";
    if (path.startsWith("/services")) return "Services";
    if (path === "/upcoming-package") return "Upcoming Package";
    return "Home";
  };

  const navItems = [
    { name: "Home", href: "/", isInternal: true },
    { name: "About", href: "/about", isInternal: true },
    {
      name: "Services",
      href: "/services",
      isInternal: true,
      hasDropdown: true,
      dropdownItems: ["Landscape"],
    },
    { name: "Upcoming Package", href: "/upcoming-package", isInternal: true },
  ];

  const handleContactClick = () => {
    navigate("/contact");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Transparent Navbar with white text for desktop */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-50 max-w-7xl mx-auto w-full bg-transparent">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="https://res.cloudinary.com/dez8z7xbp/image/upload/v1756232310/logo_1_ousg0a.svg"
              alt="Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-12 flex-1">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              href={item.href}
              isActive={getCurrentPage() === item.name}
              hasDropdown={item.hasDropdown}
              dropdownItems={item.dropdownItems}
              isInternal={item.isInternal}
            >
              {item.name}
            </NavItem>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden sm:block flex-shrink-0">
          <button
            onClick={handleContactClick}
            className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-white font-poppins text-sm lg:text-base font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer "
            style={{ backgroundColor: "#DF6951" }}
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gray-800 p-2 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="https://res.cloudinary.com/dez8z7xbp/image/upload/v1756232310/logo_1_ousg0a.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 hover:text-gray-800 p-2 transition-colors"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="py-4 overflow-y-auto max-h-[calc(100vh-180px)]">
          {navItems.map((item) => (
            <NavItem
              key={`mobile-${item.name}`}
              href={item.href}
              isActive={getCurrentPage() === item.name}
              hasDropdown={item.hasDropdown}
              dropdownItems={item.dropdownItems}
              isInternal={item.isInternal}
              isMobile={true}
              onMobileMenuClose={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </NavItem>
          ))}
        </div>

        {/* Mobile Contact Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={handleContactClick}
            className="w-full py-3 rounded-lg text-white font-poppins text-base font-medium transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: "#DF6951" }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
