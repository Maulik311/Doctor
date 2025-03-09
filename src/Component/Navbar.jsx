import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../Image/navbarlogo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // Fetch loggedInUser directly in render to always get the latest data
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/"); // Redirect to home page after logout
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200">
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
          <Link to="/" className="text-gray-900 hover:text-[#2a7fba]">
            HOME
          </Link>
          <Link to="/AllDoctor" className="text-gray-900 hover:text-[#2a7fba]">
            ALL DOCTORS
          </Link>
          <Link to="/contact" className="text-gray-900 hover:text-[#2a7fba]">
            CONTACT
          </Link>
          <Link to="/about" className="text-gray-900 hover:text-[#2a7fba]">
            ABOUT
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-gray-700 text-gray-900 px-4 py-2 rounded-3xl hover:text-[#2a7fba]">
            Admin Panel
          </button>

          {loggedInUser ? (
            <div className="flex items-center space-x-4">
              <Link to="/UserProfile" className="flex items-center">
                <img
                  src={
                    loggedInUser.profilePic || "https://via.placeholder.com/40"
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
              </Link>
              <button
                onClick={handleLogout}
                className="border border-red-600 text-red-600 px-4 py-2 rounded-3xl hover:bg-red-600 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/Register"
              className="bg-[#2a7fba] text-white px-6 py-2 rounded-full hover:opacity-90"
            >
              Create account
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white w-full p-4 space-y-4 border-t border-gray-200">
          <Link to="/" className="block text-gray-900 hover:text-[#2a7fba]">
            HOME
          </Link>
          <Link
            to="/AllDoctor"
            className="block text-gray-900 hover:text-[#2a7fba]"
          >
            ALL DOCTORS
          </Link>
          <Link
            to="/About"
            className="block text-gray-900 hover:text-[#2a7fba]"
          >
            ABOUT
          </Link>
          <Link
            to="/Contact"
            className="block text-gray-900 hover:text-[#2a7fba]"
          >
            CONTACT
          </Link>
          <button className="w-full border border-gray-700 text-gray-900 px-4 py-2 rounded-3xl hover:text-[#2a7fba]">
            Admin Panel
          </button>

          {loggedInUser ? (
            <div className="space-y-4">
              <Link to="/UserProfile" className="flex items-center space-x-2">
                <img
                  src={
                    loggedInUser.profilePic || "https://via.placeholder.com/40"
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
                <span className="text-gray-900 hover:text-[#2a7fba]">
                  Profile
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full border border-red-600 text-red-600 px-4 py-2 rounded-3xl hover:bg-red-600 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/Register"
              className="block text-center bg-[#2a7fba] text-white px-6 py-2 rounded-full hover:opacity-90"
            >
              Create account
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
