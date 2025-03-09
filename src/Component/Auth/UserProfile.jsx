import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    countryCode: "+91", // Default country code
    phone: "",
    profilePic: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser({
        ...storedUser,
        countryCode: storedUser.countryCode || "+91", // Default to +91 if not present
        phone: storedUser.phone || "",
      });
    } else {
      navigate("/"); // Redirect to home if no user is logged in
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Restrict phone number to digits only and max 10 characters
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, ""); // Allow only numbers
      if (numericValue.length <= 10) {
        setUser((prevUser) => ({
          ...prevUser,
          [name]: numericValue,
        }));
      }
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    Swal.fire({
      title: "Success!",
      text: "Profile saved successfully!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/"); // Redirect to Home page after clicking OK
    });
  };

  // List of country codes (you can expand this as needed)
  const countryCodes = [
    { code: "+91", label: "India (+91)" },
    { code: "+1", label: "USA/Canada (+1)" },
    { code: "+44", label: "UK (+44)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+81", label: "Japan (+81)" },
  ];

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          User Profile
        </h2>

        <div className="flex flex-col items-center">
          <label className="relative cursor-pointer">
            <img
              src={user.profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full border border-gray-300 object-cover"
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          <p className="text-sm text-gray-500 mt-2">
            Click to change profile picture
          </p>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label className="text-gray-600 font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium block mb-2">
              Gender:
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={user.gender === "Male"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={user.gender === "Female"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={user.gender === "Other"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Other
              </label>
            </div>
          </div>

          <div>
            <label className="text-gray-600 font-medium">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={user.dob}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium block mb-2">
              Marital Status:
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="maritalStatus"
                  value="Married"
                  checked={user.maritalStatus === "Married"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Married
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="maritalStatus"
                  value="Unmarried"
                  checked={user.maritalStatus === "Unmarried"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Unmarried
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="maritalStatus"
                  value="Committed"
                  checked={user.maritalStatus === "Committed"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Committed
              </label>
            </div>
          </div>

          <div>
            <label className="text-gray-600 font-medium block mb-2">
              Phone:
            </label>
            <div className="flex space-x-2">
              <select
                name="countryCode"
                value={user.countryCode}
                onChange={handleInputChange}
                className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
                maxLength="10" // Restrict to 10 digits
                className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full mt-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
