import React from "react";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div className="text-white bg-black  min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row px-10 py-20 space-y-10 lg:space-y-0 lg:space-x-8 items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-5xl font-bold leading-snug animate-slideUp">
            Drive Home With <br /> Your Perfect Car
          </h1>

          <p className="text-lg leading-relaxed text-gray-300 ">
            Get behind the wheel of your dream car. Explore our extensive
            inventory and take the first step towards your next adventure.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <button className="rounded bg-red-700 px-6 py-2 text-white font-semibold hover:bg-red-800 transition duration-300">
              Explore More
            </button>
            <p className="text-pink-500 cursor-pointer hover:text-pink-600 transition">
              Watch Now
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src={assets.cars} alt="Car" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="max-w-5xl w-full mx-auto animate-slideUp  text-black animate- bg-gray-100 rounded-2xl shadow-md shadow-gray-500 py-8 px-10 mt-10">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-6 ">
          Search Our 3000 Vehicles
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <select
            id="car-select"
            name="cars"
            className="px-4 py-3 rounded-lg border bg-white border-gray-300 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            <option value="default" disabled selected>
              Select your car
            </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <select
            id="city-select"
            name="city"
            className="px-4 py-3 rounded-lg border bg-white border-gray-300 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            <option value="default" disabled selected>
              Choose the city
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Punjab">Punjab</option>
            <option value="Chandigarh">Chandigarh</option>
          </select>

          <select
            id="category-select"
            name="category"
            className="px-4 py-3 rounded-lg border border-gray-300 bg-white w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            <option value="default" disabled selected>
              Choose the category
            </option>
            <option value="simple">Simple</option>
            <option value="luxury">Luxury</option>
            <option value="premium">Premium</option>
          </select>

          <button className="px-8 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition duration-300 focus:ring-2 focus:ring-red-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
