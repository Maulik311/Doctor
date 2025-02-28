import React, { useState } from "react";
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

const DoctorCard = ({ name, specialty, image, available }) => (
  <div className="p-4 rounded-lg shadow-md bg-blue-50 w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-xs flex flex-col items-center text-center">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 object-cover rounded-full mb-4"
    />
    <p className="text-lg font-semibold text-gray-800">{name}</p>
    <p className="text-sm text-gray-600">{specialty}</p>
    <p
      className={`text-sm mt-2 ${
        available ? "text-green-600" : "text-red-600"
      }`}
    >
      {available ? "• Available" : "• Not Available"}
    </p>
  </div>
);

const doctors = [
  {
    name: "Dr. Richard James",
    specialty: "General physician",
    image: doc1,
    available: true,
  },
  {
    name: "Dr. Emily Larson",
    specialty: "Gynecologist",
    image: doc2,
    available: true,
  },
  {
    name: "Dr. Sarah Patel",
    specialty: "Dermatologist",
    image: doc3,
    available: true,
  },
  {
    name: "Dr. Christopher Lee",
    specialty: "Pediatrician",
    image: doc4,
    available: true,
  },
  {
    name: "Dr. Jennifer Garcia",
    specialty: "Neurologist",
    image: doc5,
    available: true,
  },
  {
    name: "Dr. Andrew Williams",
    specialty: "Gastroenterologist",
    image: doc6,
    available: true,
  },
  {
    name: "Dr. Christopher Davis",
    specialty: "General physician",
    image: doc7,
    available: true,
  },
  {
    name: "Dr. Timothy White",
    specialty: "Gynecologist",
    image: doc8,
    available: true,
  },
  {
    name: "Dr. Ava Mitchell",
    specialty: "Dermatologist",
    image: doc9,
    available: true,
  },
  {
    name: "Dr. Jeffrey King",
    specialty: "Pediatrician",
    image: doc10,
    available: true,
  },
  {
    name: "Dr. Zoe Kelly",
    specialty: "Neurologist",
    image: doc12,
    available: true,
  },
  {
    name: "Dr. Patrick Harris",
    specialty: "Gastroenterologist",
    image: doc13,
    available: true,
  },
  {
    name: "Dr. Chloe Evans",
    specialty: "General physician",
    image: doc14,
    available: true,
  },
  {
    name: "Dr. Ryan Martinez",
    specialty: "Gynecologist",
    image: doc15,
    available: true,
  },
  {
    name: "Dr. Amelia Hill",
    specialty: "Dermatologist",
    image: doc16,
    available: true,
  },
];

const specialties = [
  "All",
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
];

function AllDoctor() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  const filterDoctors = () => {
    if (selectedSpecialty === "All") return doctors;
    return doctors.filter((doctor) => doctor.specialty === selectedSpecialty);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 mt-20 flex flex-col md:flex-row gap-6">
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

      <div className="md:hidden w-full">
        <button
          className="bg-[#2a7fba] text-white px-4 py-2 rounded-md w-full mb-4"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedSpecialty} ▼
        </button>
        {showDropdown && (
          <div className="p-4 rounded-md shadow-md bg-white">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                className={`w-full text-left px-4 py-2 rounded-md mb-2 transition ${
                  selectedSpecialty === specialty
                    ? "bg-[#2a7fba] text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => {
                  setSelectedSpecialty(specialty);
                  setShowDropdown(false);
                }}
              >
                {specialty}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
        {filterDoctors().map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
}

export default AllDoctor;
