import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../Image/navbarlogo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={img1} className="h-8" alt="Logo" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-200 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="text-sm hidden md:flex space-x-6">
          <Link to="/" className=" text-gray-900 hover:text-blue-600">
            HOME
          </Link>
          <Link to="/AllDoctor" className="text-gray-900 hover:text-blue-600">
            ALL DOCTORS
          </Link>
          <Link to="/contact" className="text-gray-900 hover:text-blue-600">
            CONTACT
          </Link>
          <Link to="/about" className="text-gray-900 hover:text-blue-600">
            ABOUT
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-gray-700 text-gray-900 px-4 py-2 rounded-3xl hover:text-blue-600">
            Admin Panel
          </button>
          <Link
            to="/Register"
            className="bg-[#2a7fba] text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Create account
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white w-full p-4 space-y-4 border-t border-gray-200">
          <Link to="/" className="block text-gray-900 hover:text-blue-600">
            HOME
          </Link>
          <Link
            to="/Doctors"
            className="block text-gray-900 hover:text-blue-600"
          >
            ALL DOCTORS
          </Link>
          <Link to="/About" className="block text-gray-900 hover:text-blue-600">
            ABOUT
          </Link>
          <Link
            to="/Contact"
            className="block text-gray-900 hover:text-blue-600"
          >
            CONTACT
          </Link>
          <button className="w-full border border-gray-700 text-gray-900 px-4 py-2 rounded-3xl hover:text-blue-600">
            Admin Panel
          </button>
          <Link
            to="/Register"
            className="block text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Create account
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
