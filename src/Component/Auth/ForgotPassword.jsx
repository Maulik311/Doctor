import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const validUser = registeredUsers.find((user) => user.email === email);

    if (validUser) {
      const otp = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("resetOTP", otp);
      localStorage.setItem("resetEmail", email); // ✅ Store email for password reset
      alert(`Your OTP for password reset: ${otp}`);

      navigate("/VerifyOTP");
    } else {
      setError("Email not registered.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="Enter your registered email"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#2a7fba] p-3 text-white rounded-lg hover:opacity-90"
          >
            Send OTP
          </button>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="mt-4 text-blue-600 hover:underline text-sm w-full text-center"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
