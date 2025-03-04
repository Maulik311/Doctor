import React from "react";
import homeImg from "../Image/home.png";
import p1 from "../Image/p1.jpeg";
import p2 from "../Image/p2.jpeg";
import p3 from "../Image/p3.jpeg";
import img1 from "../Image/img1.svg";
import img2 from "../Image/img2.svg";
import img3 from "../Image/img3.svg";
import img4 from "../Image/img4.svg";
import img5 from "../Image/img5.svg";
import img6 from "../Image/img6.svg";
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
import doc11 from "../Image/Doc11.png";
import { useNavigate } from "react-router-dom";

const specialities = [
  { name: "General Physician", img: img1, bg: "bg-blue-200" },
  { name: "Gynecologist", img: img2, bg: "bg-blue-200" },
  { name: "Dermatologist", img: img3, bg: "bg-blue-200" },
  { name: "Pediatrician", img: img4, bg: "bg-blue-200" },
  { name: "Neurologist", img: img5, bg: "bg-blue-200" },
  { name: "Gastroenterologist", img: img6, bg: "bg-blue-200" },
];

const DoctorCard = ({ name, specialty, image, available }) => (
  <div className="bg-blue-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
    <img
      src={image}
      alt={`${name}`}
      className="w-32 h-32 object-cover rounded-full mb-4"
    />
    <p className="text-lg font-semibold text-gray-800">{name}</p>
    <p className="text-sm text-gray-600">{specialty}</p>
    <p className="text-sm text-green-600 mt-2">
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
    specialty: "Pediatricians",
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
    specialty: "Pediatricians",
    image: doc10,
    available: true,
  },
];

function Home() {
  const navigate = useNavigate();
  navigate("/AllDoctor");

  return (
    <>
      <div className="container mx-auto px-4 mt-6 md:px-16 lg:px-10 pt-12 sm:pt-20 sm:px-10">
        <section className="bg-[#2a7fba] rounded-xl text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-12 xl:px-18 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Book Appointment <br /> With Trusted Doctors
            </h3>
            <div className="bg-[#2a7fba] text-white py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex -space-x-2">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  src={p1}
                  alt="User 1"
                />
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  src={p2}
                  alt="User 2"
                />
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  src={p3}
                  alt="User 3"
                />
              </div>
              <p className="text-xs sm:text-sm text-center sm:text-left flex-1">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </p>
            </div>
            <button className="relative bg-[#ffffff] hover:bg-[#dddddd] text-black font-semibold text-lg px-6 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md before:absolute before:top-0 before:left-[4%] before:w-[92%] before:h-1/2 before:bg-gradient-to-b before:from-white before:to-transparent before:opacity-50 before:rounded-full">
              Bookappointment →
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <img
              className="w-full max-w-[400px] mx-auto md:max-w-full object-contain"
              src={homeImg}
              alt="Doctors"
            />
          </div>
        </section>
      </div>

      <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Find by Speciality
          </h2>
          <p className="text-gray-600 mt-2 gap-4 text-sm sm:text-base">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {specialities.map((speciality, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 ${speciality.bg} rounded-full flex items-center justify-center transition-transform hover:scale-105`}
              >
                <img
                  src={speciality.img}
                  alt={speciality.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <p className="mt-2 text-gray-700 text-center text-sm sm:text-base">
                {speciality.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              onClick={() => navigate("/Appointment", { state: { doctor } })}
              className="cursor-pointer"
            >
              <DoctorCard
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
                available={doctor.available}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          className="px-6 py-2 bg-blue-100 text-[#2a7fba] rounded-full font-medium hover:bg-blue-200 transition-colors"
          onClick={() => navigate("/AllDoctor")}
        >
          More
        </button>
      </div>

      <section className="bg-[#2a7fba] container mx-auto [px-4] mt-20 sm:[px-6] lg:[px-8]  pt-12 rounded-xl text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-12 xl:px-18 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Book Appointment <br /> With 100+ Trusted Doctors
          </h3>
          <br />
          <br />

          <button
            className="relative bg-[#ffffff] hover:bg-[#dddddd] text-black font-semibold text-lg px-6 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md before:absolute before:top-0 before:left-[4%] before:w-[92%] before:h-1/2 before:bg-gradient-to-b before:from-white before:to-transparent before:opacity-50 before:rounded-full"
            onClick={() => navigate("/Register")}
          >
            Create account
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 ">
          <img
            className="w-full max-w-[400px] h-80 mx-auto md:max-w-full object-contain"
            src={doc11}
            alt="Doctors"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
