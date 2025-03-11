import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tickmark from "../Image/tickmark.svg";
import cashIcon from "../Image/cash.png";
import gpayIcon from "../Image/g-pay.png";

function Appointment() {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [appointmentType, setAppointmentType] = useState("In-Person");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      patientName.trim() &&
      patientPhone.length === 10 &&
      /\S+@\S+\.\S+/.test(patientEmail) &&
      selectedDate &&
      selectedTime &&
      paymentMethod &&
      appointmentType;
    setIsFormValid(isValid);
  }, [
    patientName,
    patientPhone,
    patientEmail,
    selectedDate,
    selectedTime,
    paymentMethod,
    appointmentType,
  ]);

  if (!doctor) {
    return (
      <p className="text-center text-red-500 text-lg">
        Doctor details not available.
      </p>
    );
  }

  const dates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const times = [
    "05:00 pm",
    "05:30 pm",
    "06:00 pm",
    "06:30 pm",
    "07:00 pm",
    "07:30 pm",
    "08:00 pm",
    "08:30 pm",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!patientName.trim()) {
      newErrors.patientName = "Full name is required";
    } else if (patientName.length < 2) {
      newErrors.patientName = "Name must be at least 2 characters";
    }

    if (!patientPhone) {
      newErrors.patientPhone = "Phone number is required";
    } else if (!/^\d{10}$/.test(patientPhone)) {
      newErrors.patientPhone = "Phone number must be exactly 10 digits";
    }

    if (!patientEmail) {
      newErrors.patientEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(patientEmail)) {
      newErrors.patientEmail = "Email is invalid";
    }

    if (!selectedDate) {
      newErrors.selectedDate = "Please select a date";
    }

    if (!selectedTime) {
      newErrors.selectedTime = "Please select a time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPatientPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const appointment = {
        doctorName: doctor.name,
        date: selectedDate,
        time: selectedTime,
        patientName,
        patientPhone,
        patientEmail,
        appointmentType,
        paymentMethod,
        status: "Confirmed",
        createdAt: new Date().toISOString(),
      };

      const existingAppointments =
        JSON.parse(localStorage.getItem("appointments")) || [];
      existingAppointments.push(appointment);
      localStorage.setItem(
        "appointments",
        JSON.stringify(existingAppointments)
      );

      setIsConfirmed(true);
    }
  };

  const resetForm = () => {
    setSelectedDate("");
    setSelectedTime("");
    setPatientName("");
    setPatientPhone("");
    setPatientEmail("");
    setAppointmentType("In-Person");
    setPaymentMethod("Cash");
    setIsConfirmed(false);
    setErrors({});
  };

  const handleClosePopup = () => {
    setIsConfirmed(false);
    navigate("/Appointments");
  };

  return (
    <div className="container mx-auto mt-10 p-4 sm:mt-20">
      {isConfirmed && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-6">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-semibold text-green-600 mb-4 text-center">
              Appointment Confirmed!
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Your appointment has been booked successfully.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={resetForm}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Book Another
              </button>
              <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition w-full sm:w-auto"
              >
                View Appointments
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className={isConfirmed ? "opacity-50" : ""}>
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <img
            className="w-full sm:w-72 rounded-lg bg-[#2a7fba] object-cover"
            src={doctor.image}
            alt={doctor.name}
          />
          <div className="flex-1 border border-[#ADADAD] rounded-lg p-4 sm:p-8 bg-white">
            <p className="flex items-center gap-2 text-2xl sm:text-3xl font-medium text-gray-700">
              {doctor.name}{" "}
              <img className="w-5" src={tickmark} alt="Verified" />
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              {doctor.specialty}
            </p>
            <p className="text-gray-600 font-medium mt-4 text-sm sm:text-base">
              Appointment fee: <span className="text-gray-800">$50</span>
            </p>
          </div>
        </div>

        {/* Date & Time Selection */}
        <div className="mt-10">
          <h2 className="text-lg sm:text-xl font-semibold">
            Select Date & Time
          </h2>
          <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
            {dates.map((date) => (
              <button
                key={date}
                type="button"
                className={`px-3 py-2 rounded-full text-sm sm:text-base whitespace-nowrap ${
                  selectedDate === date
                    ? "bg-[#2a7fba] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedDate(date)}
                disabled={isConfirmed}
              >
                {date}
              </button>
            ))}
          </div>
          {errors.selectedDate && (
            <p className="text-red-500 text-sm mt-2">{errors.selectedDate}</p>
          )}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {times.map((time) => (
              <button
                key={time}
                type="button"
                className={`px-3 py-2 rounded-full text-sm sm:text-base whitespace-nowrap ${
                  selectedTime === time
                    ? "bg-[#2a7fba] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedTime(time)}
                disabled={isConfirmed}
              >
                {time}
              </button>
            ))}
          </div>
          {errors.selectedTime && (
            <p className="text-red-500 text-sm mt-2">{errors.selectedTime}</p>
          )}
        </div>
      </form>
      <form method="POST" className="shadow-lg mb-6 w-auto">
        {/* Patient Details */}
        <div className="mt-6 text-center ">
          <h2 className="text-lg font-semibold">Your Details</h2>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Full Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full max-w-md p-2 border rounded-md text-sm sm:text-base"
              disabled={isConfirmed}
            />
            {errors.patientName && (
              <p className="text-red-500 text-sm mt-1">{errors.patientName}</p>
            )}
          </div>

          <div className="mt-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={patientPhone}
              onChange={handlePhoneChange}
              maxLength="10"
              className="w-full max-w-md p-2 border rounded-md text-sm sm:text-base"
              disabled={isConfirmed}
            />
            {errors.patientPhone && (
              <p className="text-red-500 text-sm mt-1">{errors.patientPhone}</p>
            )}
          </div>

          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              className="w-full max-w-md p-2 border rounded-md text-sm sm:text-base"
              disabled={isConfirmed}
            />
            {errors.patientEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.patientEmail}</p>
            )}
          </div>
        </div>

        {/* Appointment Type */}
        <div className="text-center">
          <div className="mt-6 ">
            <h2 className="text-lg font-semibold">Appointment Type</h2>
            <div className="mt-2 flex flex-row flex-wrap sm:flex-row gap-4 justify-center">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="In-Person"
                  checked={appointmentType === "In-Person"}
                  onChange={(e) => setAppointmentType(e.target.value)}
                  className="mr-2"
                  disabled={isConfirmed}
                />
                In-Person
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Video Call"
                  checked={appointmentType === "Video Call"}
                  onChange={(e) => setAppointmentType(e.target.value)}
                  className="mr-2"
                  disabled={isConfirmed}
                />
                Video Call
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6 ">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="flex flex-row flex-wrap sm:flex-row gap-4 mt-2 justify-center">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Cash"
                  checked={paymentMethod === "Cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                  disabled={isConfirmed}
                />
                <img src={cashIcon} alt="Cash" className="w-10 h-8 mr-2" />
                Cash
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="G-Pay"
                  checked={paymentMethod === "G-Pay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                  disabled={isConfirmed}
                />
                <img src={gpayIcon} alt="G-Pay" className="w-10 h-8 mr-2" />
                G-Pay
              </label>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className={` mb-6 w-full max-w-xs py-3 rounded-md text-white text-sm sm:text-base ${
              isFormValid && !isConfirmed
                ? "bg-[#2a7fba] hover:bg-[#2a628a]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid || isConfirmed}
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Appointment;
