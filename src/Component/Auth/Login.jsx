import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Check if user exists and password matches
    const validUser = registeredUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      alert("Login Successful!");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <div className="mb-4 text-right">
            <button
              type="button"
              className="text-blue-600 hover:underline text-sm"
              onClick={() => navigate("/ForgotPassword")}
            >
              Forgot Password?
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#2a7fba] p-3 text-white rounded-lg hover:opacity-90"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
