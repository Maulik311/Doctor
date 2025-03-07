import React, { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    phone: "",
    profilePic: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
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
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
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

        <div className="mt-4 space-y-3">
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
            <label className="text-gray-600 font-medium">Gender:</label>
            <select
              name="gender"
              value={user.gender}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
            <label className="text-gray-600 font-medium">Marital Status:</label>
            <select
              name="maritalStatus"
              value={user.maritalStatus}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600 font-medium">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full mt-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Save
        </button>

        {showPopup && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
            Your profile is saved!
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
