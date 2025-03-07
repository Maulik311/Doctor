import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    let registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    let email = localStorage.getItem("resetEmail"); 

    if (!email) {
      setError("No email found. Please try again.");
      return;
    }

    let updatedUsers = registeredUsers.map((user) =>
      user.email === email ? { ...user, password: password } : user
    );

    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
    localStorage.removeItem("resetEmail"); 
    alert("Password successfully reset! Please login.");
    navigate("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="New Password"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="Confirm Password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#2a7fba] p-3 text-white rounded-lg hover:opacity-90"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
