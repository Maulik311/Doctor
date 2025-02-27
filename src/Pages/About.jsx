import React from "react";
import Aboutimg from "../Image/about.png";

function About() {
  return (
    <section className="max-w-6xl MT-20 mx-auto py-12 px-4 md:px-8">
      <h2 className="text-center text-3xl  text-gray-400 mb-8">
        ABOUT <span className="font-semibold text-gray-600">US</span>
      </h2>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <div >
          <img
            src={Aboutimg}
            alt="Doctor Consultation"
            className=" shadow-md  h-full w-[850px]"
          />
        </div>
        <div>
          <p className="text-gray-600 mt-2 mb-2">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-gray-600 mt-2 mb-2">
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
          <p className="text-gray-600  font-sm">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
