import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import tickmark from "../Image/tickmark.svg";
import abouticon from "../Image/abouticon.svg";
import AllDoctor from "../Pages/AllDoctor"; // Ensure this points to a data file, not a component.

function Appointment() {
  const location = useLocation();
  const doctor = location.state?.doctor;
  const [selectedDate, setSelectedDate] = useState("Mon 3");
  const [selectedTime, setSelectedTime] = useState("05:30 pm");

  if (!doctor) {
    return (
      <p className="text-center text-red-500 text-lg">
        Doctor details not available.
      </p>
    );
  }

  const dates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const times = [
    "05:00 pm", "05:30 pm", "06:00 pm", "06:30 pm", 
    "07:00 pm", "07:30 pm", "08:00 pm", "08:30 pm"
  ];

  return (
    <div className="container mx-auto mt-20 p-4">
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="w-72 rounded-lg bg-[#2a7fba]" src={doctor.image} alt={doctor.name} />
        </div>
        <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 bg-white">
          <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
            {doctor.name} <img className="w-5" src={tickmark} alt="Verified" />
          </p>
          <div className="flex items-center gap-2 mt-1 text-gray-600">
            <p>{doctor.specialty}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">4 Years</button>
          </div>
          <p className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
            About <img className="w-3" src={abouticon} alt="info" />
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Dr. {doctor.name} is an expert in {doctor.specialty}. He/She has a strong commitment to delivering comprehensive medical care.
          </p>
          <p className="text-gray-600 font-medium mt-4">
            Appointment fee: <span className="text-gray-800">$50</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-10 container">
        <h2 className="text-xl font-semibold">Booking slots</h2>
        <div className="flex gap-2 mt-2 overflow-x-auto">
          {dates.map((date) => (
            <button
              key={date}
              className={`px-4 py-2 rounded-full ${
                selectedDate === date ? "bg-[#2a7fba] text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedDate(date)}
            >
              {date}
            </button>
          ))}
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {times.map((time) => (
            <button
              key={time}
              className={`px-4 py-2 rounded-full ${
                selectedTime === time ? "bg-[#2a7fba] text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
        <button className="mt-4 px-6 py-2 bg-[#2a7fba] text-white rounded-lg" >
          Book an appointment
        </button>
      </div>

      {/* Related Doctors */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center">Related Doctors</h2>
        <p className="text-center text-gray-600 mb-6">
          Browse our list of trusted doctors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AllDoctor && AllDoctor.length > 0 ? (
            AllDoctor.slice(0, 4).map((doc) => (
              <div
                key={doc.id}
                className="border p-4 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-32 h-32 object-cover rounded-full mb-2"
                />
                <p className="text-lg font-semibold text-gray-800">{doc.name}</p>
                <p className="text-sm text-gray-600">{doc.specialty}</p>
                <p
                  className={`text-sm mt-2 ${
                    doc.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {doc.available ? "• Available" : "• Not Available"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No related doctors available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appointment;
