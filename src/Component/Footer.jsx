import React from "react";
import img1 from "../Image/navbarlogo.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-white text-gray-700 py-10 ">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-9">
        <div>
          <div className="flex items-center space-x-2">
            <img src={img1} alt="Logo" className="h-8" />
          </div>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <p to="/" className="hover:text-[#2a7fba]">
                Home
              </p>
            </li>
            <li>
              <p
                className="hover:text-[#2a7fba]"
                onClick={() => navigate("/about")}
              >
                About us
              </p>
            </li>
            <li>
              <p
                className="hover:text-[#2a7fba]"
                onClick={() => navigate("/contact")}
              >
                Delivery
              </p>
            </li>
            <li>
              <p to="/privacy" className="hover:text-[#2a7fba]">
                Privacy policy
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            GET IN TOUCH
          </h3>
          <p className="hover:text-[#2a7fba] text-sm text-gray-600">
            <p>+1 234-567-890</p>
          </p>
          <p className="text-sm text-gray-600 hover:text-[#2a7fba]">
            <p> example002@gmail.com</p>
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
        Copyright 2024 @ Greatstack.dev - All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
