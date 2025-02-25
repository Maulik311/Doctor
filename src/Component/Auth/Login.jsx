import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setError(newErrors);

    if (!formData.email) {
      emailRef.current.focus();
    } else if (!formData.password) {
      passwordRef.current.focus();
    } else {
      alert("Login successful!");
      console.log("Login Data:", formData);
      setFormData({ email: "", password: "" });
      setError({ email: "", password: "" });
      navigate("/Register");
    }
  }

  return (
    <div className="flex min-h-screen mt-20  p-4 items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="mb-6 text-start text-2xl font-bold text-gray-800">
          Login
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Please log in to book an appointment
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              ref={passwordRef}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}
          </div>
          <p className="text-end">
            <Link
              to="/ForgotPassword"
              className="text-blue-500 hover:underline"
            >
              ForgotPassword ?
            </Link>
          </p><br />
          <button
            type="submit"
            className="w-full rounded-lg bg-[#2a7fba] p-2 text-white hover:opacity-90 transition-shadow duration-200 shadow-lg hover:shadow-xl"
          >
            Login
          </button>
          <p className="mt-4 text-start text-sm text-gray-600">
            Create a new account?{" "}
            <Link to="/Register" className="text-blue-500 hover:underline">
              Click here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
