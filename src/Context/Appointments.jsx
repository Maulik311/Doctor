import React from "react";
import { useNavigate } from "react-router-dom";

function Appointments() {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  const navigate = useNavigate();

  const handleAddMoreAppointment = () => {
    navigate("/AllDoctor");
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleAddMoreAppointment}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Add More Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
