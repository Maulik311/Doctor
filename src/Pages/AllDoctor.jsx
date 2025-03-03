import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doc1 from "../Image/Doc1.png";
import doc2 from "../Image/Doc2.png";
import doc3 from "../Image/Doc3.png";
import doc4 from "../Image/Doc4.png";
import doc5 from "../Image/Doc5.png";
import doc6 from "../Image/Doc6.png";
import doc7 from "../Image/Doc7.png";
import doc8 from "../Image/Doc8.png";
import doc9 from "../Image/Doc9.png";
import doc10 from "../Image/Doc10.png";
import doc12 from "../Image/doc12.png";
import doc13 from "../Image/doc13.png";
import doc14 from "../Image/doc14.png";
import doc15 from "../Image/doc15.png";
import doc16 from "../Image/doc16.png";

// DoctorCard Component
const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/appointment/${doctor.id}`, { state: { doctor } });
  };

  return (
    <div
      className="p-4 rounded-lg shadow-md bg-blue-50 flex flex-col items-center text-center cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <p className="text-lg font-semibold text-gray-800">{doctor.name}</p>
      <p className="text-sm text-gray-600">{doctor.specialty}</p>
      <p
        className={`text-sm mt-2 ${
          doctor.available ? "text-green-600" : "text-red-600"
        }`}
      >
        {doctor.available ? "• Available" : "• Not Available"}
      </p>
    </div>
  );
};

// Doctors Data
const Doctor = [
  {
    id: "1",
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: doc1,
    available: true,
  },
  {
    id: "2",
    name: "Dr. Emily Larson",
    specialty: "Gynecologist",
    image: doc2,
    available: true,
  },
  {
    id: "3",
    name: "Dr. Sarah Patel",
    specialty: "Dermatologist",
    image: doc3,
    available: true,
  },
  {
    id: "4",
    name: "Dr. Christopher Lee",
    specialty: "Pediatrician",
    image: doc4,
    available: true,
  },
  {
    id: "5",
    name: "Dr. Jennifer Garcia",
    specialty: "Neurologist",
    image: doc5,
    available: true,
  },
  {
    id: "6",
    name: "Dr. Andrew Williams",
    specialty: "Gastroenterologist",
    image: doc6,
    available: true,
  },
  {
    id: "7",
    name: "Dr. Christopher Davis",
    specialty: "General Physician",
    image: doc7,
    available: true,
  },
  {
    id: "8",
    name: "Dr. Timothy White",
    specialty: "Gynecologist",
    image: doc8,
    available: true,
  },
  {
    id: "9",
    name: "Dr. Ava Mitchell",
    specialty: "Dermatologist",
    image: doc9,
    available: true,
  },
  {
    id: "10",
    name: "Dr. Jeffrey King",
    specialty: "Pediatrician",
    image: doc10,
    available: true,
  },
  {
    id: "11",
    name: "Dr. Zoe Kelly",
    specialty: "Neurologist",
    image: doc12,
    available: true,
  },
  {
    id: "12",
    name: "Dr. Patrick Harris",
    specialty: "Gastroenterologist",
    image: doc13,
    available: true,
  },
  {
    id: "13",
    name: "Dr. Chloe Evans",
    specialty: "General physician",
    image: doc14,
    available: true,
  },
  {
    id: "14",
    name: "Dr. Ryan Martinez",
    specialty: "Gynecologist",
    image: doc15,
    available: true,
  },
  {
    id: "15",
    name: "Dr. Amelia Hill",
    specialty: "Dermatologist",
    image: doc16,
    available: true,
  },
];

const specialties = [
  "All",
  "General Physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
];

function AllDoctor() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filterDoctors = () =>
    selectedSpecialty === "All"
      ? Doctor
      : Doctor.filter((d) => d.specialty === selectedSpecialty);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 mt-20">
      <div className="md:hidden mb-4">
        <label
          htmlFor="specialty"
          className="block text-gray-700 font-semibold"
        >
          Filter by Specialty:
        </label>
        <select
          id="specialty"
          className="w-full p-2 border rounded-md"
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="hidden md:flex flex-col w-64">
          <h3 className="text-lg font-semibold mb-4">Filter by Specialty</h3>
          {specialties.map((specialty) => (
            <button
              key={specialty}
              className={`w-full text-left px-4 py-2 rounded-md mb-2 transition ${
                selectedSpecialty === specialty
                  ? "bg-[#2a7fba] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Doctor List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
          {filterDoctors().map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllDoctor;
