import React from "react";
import Aboutimg from "../Image/about.png";

function About() {
  return (
    <section className="max-w-6xl MT-20 mx-auto py-12 px-4 md:px-8">
      <h2 className="text-center text-3xl  text-gray-400 mb-8">
        ABOUT <span className="font-semibold text-gray-600">US</span>
      </h2>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <div>
          <img
            src={Aboutimg}
            alt="Doctor Consultation"
            className=" shadow-md  h-full w-[850px]"
          />
        </div>
        <div>
          <p className="text-gray-600 mt-2 mb-2 font-x ">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-gray-600 mt-2 mb-2 font-xs ">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>

          <h5 className="text-lg font-bold text-gray-800 mt-2 mb-2">
            Our Vision
          </h5>
          <p className="text-gray-600  font-xs">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <h2 className="text-start text-3xl  text-gray-400 mb-8">
        Why <span className="font-semibold text-gray-600">CHOOSE US</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-22">
        <div className="border p-12 hover:bg-[#2a7fba] text-gray-600  hover:text-white transition duration-300">
          <h3 className="font-bold text-xs mb-2 mt-6 ">
            <b>EFFICIENCY:</b>
          </h3>
          <p className="text-xs mb-8 ">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border p-12 hover:bg-[#2a7fba]  text-gray-600 hover:text-[#ffffff] transition duration-300">
          <h3 className="font-bold text-xs mb-2 mt-6">CONVENIENCE:</h3>
          <p className="text-xs mb-8">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border p-12 hover:bg-[#2a7fba]  text-gray-600 hover:text-[#ffffff] transition duration-300">
          <h3 className="font-bold text-xs mb-2 mt-6">PERSONALIZATION:</h3>
          <p className="text-xs mb-8">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
