import React from "react";
import { assets } from "../assets/assets";

const Luxurious = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-20 mx-20">
        <h1 className="text-4xl font-semibold">
          Get All Luxurious Brands Cars
        </h1>
        <button className="border border-black rounded-none px-8 py-2 text-red-700 hover:bg-red-700 hover:text-white transition duration-300 ease-in-out">
          View All
        </button>
      </div>

      <div className="border flex mx-20 min-h-screen mt-10 bg-black text-white rounded-3xl p-10">
        {/* Left Sidebar */}
        <div className="w-1/4 pr-6 border-r border-gray-700">
          <div className="flex flex-col space-y-4">
            {[
              "Mercedes-Benz",
              "Rolls-Royce",
              "Bentley",
              "Lamborghini",
              "Maserati",
              "Ferrari",
              "Cadillac",
              "Range Rover",
            ].map((brand, index) => (
              <button
                key={index}
                className="border border-red-700 px-4 py-2 hover:bg-red-700 hover:text-white transition duration-300 ease-in-out"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-3/4 pl-10">
          <div className="space-y-4">
            <img
              src={assets.rolls}
              alt="Rolls Royce"
              className="w-full rounded-lg shadow-lg"
            />
            <h1 className="text-4xl font-bold">Rolls Royce</h1>
            <div className="flex space-x-4 items-start">
              <p className="leading-relaxed">
                Rolls-Royce is a British luxury automobile maker known for its
                ultra-premium vehicles. The brand was founded in 1904 by Charles
                Rolls and Henry Royce. It has since become synonymous with
                top-tier craftsmanship, performance, and exclusivity.
                Rolls-Royce cars are famous for their advanced engineering,
                luxurious interiors, and bespoke customization options, making
                them a symbol of wealth and prestige.
              </p>
              <img
                src={assets.arrow}
                alt="Arrow Icon"
                className="border animate-bounce border-white rounded-full w-10 h-10 p-1 hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxurious;
