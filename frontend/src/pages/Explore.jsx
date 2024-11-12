import React from "react";
import { assets } from "../assets/assets";

const Explore = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">Explore Our Vehicles</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Audi Button */}
          <button className="border border-black px-10 py-4 flex items-center rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
            <img
              src={assets.audi}
              alt="Audi"
              className="border border-black rounded-full w-9 h-9 mr-3"
            />
            Audi
          </button>

          {/* BMW Button */}
          <button className="border border-black px-10 py-4 flex items-center rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
            <img
              src={assets.bmw}
              alt="BMW"
              className="border border-black rounded-full w-9 h-9 mr-3"
            />
            BMW
          </button>

          {/* Mercedes Button */}
          <button className="border border-black px-10 py-4 flex items-center rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
            <img
              src={assets.mercedes}
              alt="Mercedes"
              className="border border-black rounded-full w-9 h-9 mr-3"
            />
            Mercedes
          </button>

          {/* Cadillac Button */}
          <button className="border border-black px-10 py-4 flex items-center rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
            <img
              src={assets.volkswagen}
              alt="Volkswagen"
              className="border border-black rounded-full w-9 h-9 mr-3"
            />
            Cadillac
          </button>

          {/* Explore More Button */}
          <button className="border border-black px-10 py-4 flex items-center rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
            <img
              src=""
              alt="Explore More"
              className="border border-black rounded-full w-9 h-9 mr-3"
            />
            Explore 10+
          </button>
        </div>
        {/**-------the grid ----------- */}
        <div className="grid grid-cols-3  mt-20 mr-10 ml-20 items-center justify-center ">
          <div className="border px-10 py-10 w-80 bg-slate-100 shadow-md shadow-gray-200 space-y-2 border-red-200">
            <img src={assets.car} alt="car" />
            <h1 className="text-lg">Audi Q4 sportback e-tron</h1>
            <p className="text-sm">Release 21 Feb 2022</p>
            <div className="flex text-center justify-between">
              <h1 className="text-lg">520000 $</h1>
              <button className="bg-red-800 px-4 py-2 text-white rounded-lg ">
                {" "}
                Discover
              </button>
            </div>
          </div>
          <div className="border px-10 py-10 w-80 bg-slate-100 shadow-md shadow-gray-200 space-y-2 border-red-200">
            <img src={assets.car} alt="car" />
            <h1 className="text-lg">Audi Q4 sportback e-tron</h1>
            <p className="text-sm">Release 21 Feb 2022</p>
            <div className="flex text-center justify-between">
              <h1 className="text-lg">520000 $</h1>
              <button className="bg-red-800 px-4 py-2 text-white rounded-lg ">
                {" "}
                Discover
              </button>
            </div>
          </div>
          <div className="border px-10 py-10 w-80 bg-slate-100 shadow-md shadow-gray-200 space-y-2 border-red-200">
            <img src={assets.car} alt="car" />
            <h1 className="text-lg">Audi Q4 sportback e-tron</h1>
            <p className="text-sm">Release 21 Feb 2022</p>
            <div className="flex text-center justify-between">
              <h1 className="text-lg">520000 $</h1>
              <button className="bg-red-800 px-4 py-2 text-white rounded-lg ">
                {" "}
                Discover
              </button>
            </div>
          </div>

          {/**----the grid ---- */}
        </div>
      </div>
    </div>
  );
};

export default Explore;