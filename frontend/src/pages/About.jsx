import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      {/*--the header section----*/}
      <Link
        to="/"
        className="absolute mt-4 ml-4 border border-white  rounded-full"
      >
        <img src={assets.back} alt="" className="w-10 h-10  animate-bounce" />
      </Link>
      <div className="bg-red-900 text-white py-20">
        <div className="relative z-10 text-center opacity-50">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="mt-4 text-lg ">Lern more about our mission and team.</p>
        </div>
      </div>
      {/**-th mission section- */}
      <section className="py-20 px-6 lg:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our mission</h2>
        <p className="text-lg text-gray-600">
          We are committed to providing the best service in the industry. Our
          goal is to make a significant impact through innovation, integrity,
          and a customer-centric approach.
        </p>
      </section>

      {/**--the section--- */}
      <section className="bg-white py-20 px-6 lg:px-24">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src=""
              alt=""
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Founde</p>
          </div>
          <div className="text-center">
            <img
              src=""
              alt=""
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Founde</p>
          </div>
          <div className="text-center">
            <img
              src=""
              alt=""
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Founde</p>
          </div>
        </div>
      </section>
      {/**--core section value--- */}
      <section className="py-20 px-6 lg:px-24 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Our Core Value</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-red-700">Innovation</h3>
            <p className="text-gray-600">
              We strive to push the boundaries of what’s possible, constantly
              innovating to stay ahead of the curve.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-700">Integrity</h3>
            <p className="text-gray-600">
              We conduct our business with honesty and transparency, ensuring
              trust with our customers and partners.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-700">
              {" "}
              Customer Focus
            </h3>
            <p className="text-gray-600">
              We put our customers first, constantly striving to understand
              their needs and provide exceptional service.
            </p>
          </div>
        </div>
      </section>
      {/**--the call to action section------ */}
      <section className="bg-red-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
        <p className="text-lg mb-6">
          Be a part of our growing community! Together, we can achieve great
          things.
        </p>
        <Link to="/contact">
          {" "}
          <a className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
            Get in Touch
          </a>
        </Link>
      </section>
    </div>
  );
};

export default About;
