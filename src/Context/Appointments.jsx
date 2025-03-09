import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

function Appointments() {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );
  const [showPopup, setShowPopup] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const navigate = useNavigate();

  const handleAddMoreAppointment = () => {
    navigate("/AllDoctor");
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setShowPopup(true);
  };

  const confirmDelete = () => {
    const updatedAppointments = appointments.filter(
      (_, i) => i !== deleteIndex
    );
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setShowPopup(false);
    setDeleteIndex(null);
  };

  const cancelDelete = () => {
    setShowPopup(false);
    setDeleteIndex(null);
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Your Appointments
      </h2>

      {appointments.length === 0 ? (
        <div>
          <p className="text-gray-600 mb-6">No appointments booked yet.</p>
          <button
            onClick={handleAddMoreAppointment}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add More Appointment
          </button>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Doctor
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Date
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Time
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Patient Name
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Phone
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Email
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Type
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Payment
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Status
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b text-gray-700">
                      {appointment.doctorName}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {appointment.date}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {appointment.time}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {appointment.patientName}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {appointment.patientPhone}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {appointment.patientEmail}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {appointment.appointmentType}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {appointment.paymentMethod}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {appointment.status}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700 flex items-center space-x-2">
                      <button
                        onClick={() => handleDelete(index)}
                        className="px-3 py-1 text-white bg-red-600 rounded-md hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                      <FaTrash
                        className="text-red-600 hover:text-red-700 cursor-pointer"
                        onClick={() => handleDelete(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleAddMoreAppointment}
              className="px-4 py-2 bg-[#2a7fba] text-white rounded-md hover:opacity-85 transition"
            >
              Add More Appointment
            </button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Cancel Appointment
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Are you sure you want to Cancel this appointment?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
