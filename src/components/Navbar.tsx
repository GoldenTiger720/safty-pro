import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-safety-blue font-heading text-2xl font-bold">
                SafetyPro
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-safety-blue px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-safety-blue px-3 py-2 text-sm font-medium"
            >
              Products
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-safety-blue px-3 py-2 text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-safety-blue px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-safety-blue focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${menuOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/categories"
            className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue"
            onClick={() => setMenuOpen(false)}
          >
            Categories
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
