import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, User, LogOut, ShoppingCart, Package } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-safety-blue px-3 py-2"
            >
              <ShoppingCart className="w-6 h-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-safety-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Authentication buttons/menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 h-10"
                  >
                    <div className="w-8 h-8 bg-safety-blue rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium">{user?.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Orders</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/manage-products")}>
                    <Package className="mr-2 h-4 w-4" />
                    <span>Manage Products</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" className="text-sm font-medium">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-safety-blue hover:bg-safety-darkBlue text-sm font-medium">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
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
          <Link
            to="/cart"
            className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center justify-between">
              <span>Cart</span>
              {getCartCount() > 0 && (
                <span className="bg-safety-orange text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile Authentication */}
          {isAuthenticated ? (
            <>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center px-4">
                  <div className="w-10 h-10 bg-safety-blue rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user?.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user?.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <button
                    className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue w-full text-left"
                    onClick={() => setMenuOpen(false)}
                  >
                    Profile
                  </button>
                  <button
                    className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue w-full text-left"
                    onClick={() => setMenuOpen(false)}
                  >
                    Orders
                  </button>
                  <button
                    className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue w-full text-left"
                    onClick={() => {
                      navigate("/manage-products");
                      setMenuOpen(false);
                    }}
                  >
                    Manage Products
                  </button>
                  <button
                    className="text-gray-700 hover:bg-safety-lightGray hover:text-safety-blue block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-safety-blue w-full text-left"
                    onClick={() => setMenuOpen(false)}
                  >
                    Settings
                  </button>
                  <button
                    className="text-red-600 hover:bg-red-50 block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-red-600 w-full text-left"
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                  >
                    Log out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="border-t border-gray-200 pt-4 pb-3 px-3 space-y-2">
              <Link
                to="/login"
                className="block w-full"
                onClick={() => setMenuOpen(false)}
              >
                <Button
                  variant="outline"
                  className="w-full justify-center h-11 border-safety-blue text-safety-blue hover:bg-safety-lightGray"
                >
                  Sign In
                </Button>
              </Link>
              <Link
                to="/signup"
                className="block w-full"
                onClick={() => setMenuOpen(false)}
              >
                <Button className="w-full justify-center h-11 bg-safety-blue hover:bg-safety-darkBlue">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
