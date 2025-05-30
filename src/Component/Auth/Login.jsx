import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Swal from "sweetalert2";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const userExists = registeredUsers.find((user) => user.email === formData.email);
    const validUser = registeredUsers.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (!userExists) {
      Swal.fire({
        title: "Please Register First",
        text: "No account found with this email. Please register to continue.",
        icon: "warning",
        confirmButtonText: "Go to Register",
      }).then(() => {
        navigate("/Register");
      });
      return;
    }

    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome back!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); // ✅ Changed to navigate to Home
      });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a7fba]"
              placeholder="Email"
            />
          </div>
          <div className="mb-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a7fba]"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600"
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
          <div className="mb-4 text-right">
            <button
              type="button"
              className="text-[#2a7fba] hover:underline text-sm"
              onClick={() => navigate("/ForgotPassword")} // Correctly navigates to ForgotPassword
            >
              Forgot Password?
            </button>
          </div>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#2a7fba] text-white p-3 rounded-lg hover:bg-[#2a7fba] transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-[#2a7fba] hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;