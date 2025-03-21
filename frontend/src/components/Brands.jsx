import React from "react";
import { assets } from "../assets/assets";

const Brands = () => {
  return (
    <div className="flex flex-wrap justify-center mt-20 space-x-10">
      <img
        className="border border-gray-500 rounded-xl p-8 h-40 w-52 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-600 transform hover:scale-105 transition duration-300 ease-in-out mb-8 sm:mb-0"
        src={assets.audi}
        alt="Audi"
      />
      <img
        className="border border-gray-500 rounded-xl p-8 h-40 w-52 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-600 transform hover:scale-105 transition duration-300 ease-in-out mb-8 sm:mb-0"
        src={assets.mercedes}
        alt="Mercedes"
      />
      <img
        className="border border-gray-500 rounded-xl p-8 h-40 w-52 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-600 transform hover:scale-105 transition duration-300 ease-in-out mb-8 sm:mb-0"
        src={assets.volkswagen}
        alt="Volkswagen"
      />
      <img
        className="border border-gray-500 rounded-xl p-8 h-40 w-52 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-600 transform hover:scale-105 transition duration-300 ease-in-out mb-8 sm:mb-0"
        src={assets.bmw}
        alt="BMW"
      />
    </div>
  );
};

export default Brands;
