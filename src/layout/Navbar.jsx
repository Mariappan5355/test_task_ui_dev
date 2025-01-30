import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      {/* Top row with logo and action buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="MAI Logo" className="h-12" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/post-project"
              className="hidden md:inline-flex px-4 py-2 text-sm font-bold text-blue-900 bg-blue-100 hover:bg-blue-200 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors duration-300 ease-in-out rounded-lg"
              >
              Post a Project
            </Link>
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-900 transition-colors duration-200 ease-in-out cursor-pointer" />
            <Link
              to="/login"
              className="text-sm font-bold text-blue-900 hover:text-blue-800"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm font-bold text-blue-900 hover:text-blue-800"
            >
              Sign Up
            </Link>

            <button className="md:hidden rounded-md p-2 text-gray-700 hover:text-blue-900 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom row with navigation links and website text */}
      <div className="bg-[#DBE7F1] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between py-3">
            <Link
              to="/"
              className="font-montserrat text-gray-700 text-lg font-bold primary-blue tracking-wider"
            >
              WWW.MYPROJECT.AI
            </Link>
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-900 font-bold px-3 py-2 relative after:content-['|'] after:absolute after:right-[-1rem] after:text-gray-700"
              >
                Home
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-700 font-bold hover:text-blue-900 px-3 py-2 relative after:content-['|'] after:absolute after:right-[-1rem] after:text-gray-700"
              >
                How it Works
              </Link>
              <Link
                to="/project"
                className="text-gray-700 font-bold hover:text-blue-900 px-3 py-2 relative after:content-['|'] after:absolute after:right-[-1rem] after:text-gray-700"
              >
                Project
              </Link>
              <Link
                to="/blogs"
                className="text-gray-700 font-bold hover:text-blue-900 px-3 py-2 relative after:content-['|'] after:absolute after:right-[-1rem] after:text-gray-700"
              >
                Blogs
              </Link>
              <Link
                to="/diy-worktops"
                className="text-gray-700 font-bold hover:text-blue-900 px-3 py-2"
              >
                DIY Worktops
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-700 hover:text-blue-900"
          >
            Home
          </Link>
          <Link
            to="/how-it-works"
            className="block px-3 py-2 text-gray-700 hover:text-blue-900"
          >
            How it Works
          </Link>
          <Link
            to="/project"
            className="block px-3 py-2 text-gray-700 hover:text-blue-900"
          >
            Project
          </Link>
          <Link
            to="/blogs"
            className="block px-3 py-2 text-gray-700 hover:text-blue-900"
          >
            Blogs
          </Link>
          <Link
            to="/diy-worktops"
            className="block px-3 py-2 text-gray-700 hover:text-blue-900"
          >
            DIY Worktops
          </Link>
          <Link
            to="/post-project"
            className="block px-3 py-2 text-gray-700 hover:text-blue-900"
          >
            Post a Project
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
