import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the Terms of Service";

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Store user data in localStorage
      localStorage.setItem("registeredUser", JSON.stringify(formData));

      alert("Registration successful!");
      console.log("Registered Data:", formData);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
      });

      navigate("/Login"); // Redirect to Login page
    }
  }

  return (
    <div className="flex min-h-screen mt-14 p-4 items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-start text-2xl font-bold text-gray-800">
          CREATE ACCOUNT
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Please sign up to book an appointment
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Your Name"
            />
            {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Your Email"
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}
            <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
              👁
            </span>
          </div>

          <div className="mb-4 relative">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Confirm Password"
            />
            {error.confirmPassword && (
              <p className="text-red-500 text-sm">{error.confirmPassword}</p>
            )}
            <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
              🔒
            </span>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 text-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">
              I agree to all statements in{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Terms of Service
              </Link>
            </span>
          </div>
          {error.termsAccepted && (
            <p className="text-red-500 text-sm">{error.termsAccepted}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#2a7fba] p-3 text-white hover:opacity-90"
          >
            SIGN UP
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/Login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
