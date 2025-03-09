import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tickmark from "../Image/tickmark.svg";
import visaIcon from "../Image/visa.png";
import cashIcon from "../Image/cash.png";
import netbankingIcon from "../Image/netbankking.png";
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
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const [isConfirmed, setIsConfirmed] = useState(false);

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

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPatientPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedDate &&
      selectedTime &&
      patientName &&
      patientPhone &&
      patientPhone.length === 10 &&
      patientEmail &&
      paymentMethod
    ) {
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
    } else {
      alert(
        "Please fill all required fields correctly. Phone number must be exactly 10 digits."
      );
    }
  };

  const resetForm = () => {
    setSelectedDate("");
    setSelectedTime("");
    setPatientName("");
    setPatientPhone("");
    setPatientEmail("");
    setAppointmentType("In-Person");
    setPaymentMethod("Visa");
    setIsConfirmed(false);
  };

  const handleClosePopup = () => {
    setIsConfirmed(false);
    navigate("/Appointments");
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      {isConfirmed && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-6 relative">
            {/* Close Button */}
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

            {/* Popup Content */}
            <h2 className="text-xl font-semibold text-green-600 mb-4 text-center">
              Appointment Confirmed!
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Your appointment has been booked successfully.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={resetForm}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Book Another
              </button>
              <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
              >
                View Appointments
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className={isConfirmed ? "opacity-50" : ""}>
        <div className="flex flex-col sm:flex-row gap-4">
          <img
            className="w-72 rounded-lg bg-[#2a7fba]"
            src={doctor.image}
            alt={doctor.name}
          />
          <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 bg-white">
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {doctor.name}{" "}
              <img className="w-5" src={tickmark} alt="Verified" />
            </p>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-gray-600 font-medium mt-4">
              Appointment fee: <span className="text-gray-800">$50</span>
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Select Date & Time</h2>
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {dates.map((date) => (
              <button
                key={date}
                type="button"
                className={`px-4 py-2 rounded-full ${
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
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {times.map((time) => (
              <button
                key={time}
                type="button"
                className={`px-4 py-2 rounded-full ${
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
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Your Details</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
            className="w-full p-2 border rounded-md mb-3"
            disabled={isConfirmed}
          />
          <input
            type="tel"
            placeholder="Phone Number (10 digits)"
            value={patientPhone}
            onChange={handlePhoneChange}
            maxLength="10"
            pattern="\d{10}"
            required
            className="w-full p-2 border rounded-md mb-3"
            disabled={isConfirmed}
          />
          <input
            type="email"
            placeholder="Email"
            value={patientEmail}
            onChange={(e) => setPatientEmail(e.target.value)}
            required
            className="w-full p-2 border rounded-md mb-3"
            disabled={isConfirmed}
          />
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Appointment Type</h2>
          <label className="mr-4">
            <input
              type="radio"
              value="In-Person"
              checked={appointmentType === "In-Person"}
              onChange={(e) => setAppointmentType(e.target.value)}
              disabled={isConfirmed}
            />{" "}
            In-Person
          </label>
          <label>
            <input
              type="radio"
              value="Video Call"
              checked={appointmentType === "Video Call"}
              onChange={(e) => setAppointmentType(e.target.value)}
              disabled={isConfirmed}
            />{" "}
            Video Call
          </label>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="Visa"
                checked={paymentMethod === "Visa"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
                disabled={isConfirmed}
              />
              <img src={visaIcon} alt="Visa" className="w-12 h-10 mr-2" />
              Visa
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Cash"
                checked={paymentMethod === "Cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
                disabled={isConfirmed}
              />
              <img src={cashIcon} alt="Cash" className="w-12 h-10 mr-2" />
              Cash
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Net Banking"
                checked={paymentMethod === "Net Banking"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
                disabled={isConfirmed}
              />
              <img
                src={netbankingIcon}
                alt="Net Banking"
                className="w-12 h-10 mr-2"
              />
              Net Banking
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
              <img src={gpayIcon} alt="G-Pay" className="w-12 h-10 mr-2" />
              G-Pay
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400"
          disabled={isConfirmed}
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Appointment;
