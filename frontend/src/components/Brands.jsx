import React from "react";
import { assets } from "../assets/assets";

const Brands = () => {
  return (
    <div className="flex space-x-10 items-center justify-center mt-20">
      <img
        className="border border-gray-500 rounded-xl p-8 h-40 w-52 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-600 transform hover:scale-105 transition duration-300 ease-in-out"
        src={assets.audi}
        alt="Audi"
      />
      <img
        className="border border-gray-500 rounded-xl p-8 h-40 w-52 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-600 transform hover:scale-105 transition duration-300 ease-in-out"
        src={assets.mercedes}
        alt="Mercedes"
      />
      <img
        className="border border-gray-500 rounded-xl p-8 h-40 w-52 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-600 transform hover:scale-105 transition duration-300 ease-in-out"
        src={assets.volkswagen}
        alt="Volkswagen"
      />
      <img
        className="border border-gray-500 rounded-xl p-8 h-40 w-52 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-600 transform hover:scale-105 transition duration-300 ease-in-out"
        src={assets.bmw}
        alt="BMW"
      />
    </div>
  );
};

export default Brands;
