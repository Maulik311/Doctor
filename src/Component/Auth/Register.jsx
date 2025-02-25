import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex min-h-screen mt-20  p-4  items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-start text-2xl font-bold text-gray-800">
          CREATE ACCOUNT
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Please sign up to book appointment{" "}
          </label>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
            <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
              👁
            </span>
          </div>

          <div className="mb-4 relative">
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Repeat your password"
            />
            <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
              🔒
            </span>
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-500" />
            <span className="ml-2 text-sm text-gray-600">
              I agree all statements in{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Terms of service
              </Link>
            </span>
          </div>

          <button
            type="submit"
            to="/"
            className="w-full rounded-lg bg-[#2a7fba] p-3 text-white hover:opacity-90"
          >
            SIGN UP
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Have already an account?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
