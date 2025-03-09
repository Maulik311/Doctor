import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Swal from "sweetalert2";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: null, // Changed to null to store file object
    termsAccepted: false,
  });

  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
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
      let registeredUsers =
        JSON.parse(localStorage.getItem("registeredUsers")) || [];

      if (registeredUsers.some((user) => user.email === formData.email)) {
        Swal.fire({
          title: "Error!",
          text: "Email already registered. Please login.",
          icon: "error",
          confirmButtonText: "OK",
        });
        navigate("/Login");
        return;
      }

      const profilePicUrl = formData.profilePic
        ? URL.createObjectURL(formData.profilePic)
        : "https://via.placeholder.com/150";

      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        profilePic: profilePicUrl,
      };

      registeredUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
      localStorage.setItem("loggedInUser", JSON.stringify(newUser));

      Swal.fire({
        title: "Success!",
        text: "Registration successful! Redirecting to login...",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/Login");
      });
    }
  }

  return (
    <div className="flex min-h-screen mt-20 p-4 items-center justify-center ">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-start text-2xl font-bold text-gray-800">
          CREATE ACCOUNT
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500"
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
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500"
              placeholder="Your Email"
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3"
            >
              {showConfirmPassword ? (
                <EyeOffIcon size={20} />
              ) : (
                <EyeIcon size={20} />
              )}
            </button>
            {error.confirmPassword && (
              <p className="text-red-500 text-sm">{error.confirmPassword}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">
              Profile Picture (Optional)
            </label>
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
            />
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
              I agree to the{" "}
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
