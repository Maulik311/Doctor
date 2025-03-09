import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../Image/navbarlogo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
    setIsOpen(false);
    setIsProfileOpen(false);
  }

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src={img1} className="h-8" alt="Logo" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 text-sm">
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

        {/* Right Side: Profile Picture/Button, Admin Button, and Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Desktop Admin Button */}
          <div className="hidden md:block">
            <button className="border border-gray-700 text-gray-900 px-4 py-2 rounded-3xl hover:text-[#2a7fba]">
              Admin Panel
            </button>
          </div>

          {/* Profile Picture or Create Account Button */}
          <div className="relative group">
            {loggedInUser ? (
              <img
                src={
                  loggedInUser.profilePic || "https://via.placeholder.com/40"
                }
                alt="Profile"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-gray-300 cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              />
            ) : (
              <Link
                to="/Register"
                className="text-[#2a7fba] text-sm hover:underline"
              >
                Create account
              </Link>
            )}
            {/* Dropdown Menu - Appears on hover (group-hover) and click (isProfileOpen) */}
            {loggedInUser && (
              <div
                className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-200 ease-in-out ${
                  isProfileOpen || "hidden group-hover:block"
                } md:group-hover:block`}
              >
                <Link
                  to="/UserProfile"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/Appointments"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Appointments
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full p-4 space-y-4 border-t border-gray-200">
          <Link
            to="/"
            onClick={closeMenu}
            className="block text-gray-900 hover:text-[#2a7fba]"
          >
            HOME
          </Link>
          <Link
            to="/AllDoctor"
            onClick={closeMenu}
            className="block text-gray-900 hover:text-[#2a7fba]"
          >
            ALL DOCTORS
          </Link>
          <Link
            to="/About"
            onClick={closeMenu}
            className="block text-gray-900 hover:text-[#2a7fba]"
          >
            ABOUT
          </Link>
          <Link
            to="/Contact"
            onClick={closeMenu}
            className="block text-gray-900 hover:text-[#2a7fba]"
          >
            CONTACT
          </Link>
          <button
            className="w-full border border-[#2a7fba] text-[#2a7fba] px-4 py-2 rounded-3xl hover:bg-[#2a7fba] hover:text-white"
            onClick={closeMenu}
          >
            Admin Panel
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
