import React from "react";
import contactImage from "../Image/contact-image.png";

const ContactUs = () => {
  return (
    <section className="max-w-6xl mt-20 mb-20 mx-auto py-12 px-4 md:px-8">
      <h2 className="text-center text-3xl  text-gray-500 mb-8">
        CONTACT <span className="font-semibold text-gray-700">US</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center w-full">
        <div>
          <img
            src={contactImage}
            alt="Doctor Consultation"
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-600 mb-8">OUR OFFICE</h3>
          <p className="text-gray-600 mt-2 mb-8">
            00000 Willms Station <br />
            Suite 000, Washington, USA
          </p>
          <p className="text-gray-600 mt-2 mb-8">
            Tel: (000) 000-0000 <br />
            Email: greatstackdev@gmail.com
          </p>

          <h3 className="text-xl font-bold text-gray-600 mt-6 mb-8">
            CAREERS AT PRESCRIPTO
          </h3>
          <p className="text-gray-600 mt-2 font-sm">
            Learn more about our teams and job openings.
          </p>

          <button className="mt-4 px-6 py-2 border border-[#2a7fba] text-[#2a7fba] rounded-md hover:bg-[#2a7fba] hover:text-white transition">
            Explore Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
