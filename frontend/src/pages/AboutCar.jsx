import React, { useState } from "react";
import { assets } from "../assets/assets";

const AboutCar = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen mt-24 flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-6 lg:px-20 py-10">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            World’s Largest Car <br /> Brands Marketplace
          </h1>
          <p className="text-lg lg:text-xl max-w-xl mx-auto">
            At our car marketplace, we bring you the best vehicles from top
            brands. Find the car that suits your style.
          </p>
          <div className="space-y-3">
            <p>We offer a secure payment system.</p>
            <p>A large collection of cars is available.</p>
            <p>We have the best drivers in the world.</p>
          </div>
          <button className="bg-red-700 px-8 py-3 rounded-full text-white font-semibold mt-6 transition duration-300 ease-in-out hover:bg-red-800">
            Read More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <img
          src={assets.car}
          alt="Car Image"
          className=" object-cover rounded-lg  item-center justify-center mt-20 w-90 shadow-2xl shadow-gray-900"
        />
      </div>
    </div>
  );
};

export default AboutCar;
