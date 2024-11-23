import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Services = () => {
  // Store the index of the currently active card
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  return (
    <div className="bg-gray-50 py-16">
      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-10">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold leading-snug text-gray-800">
              We are dedicated <br /> to provide quality Service.
            </h1>
            <p className="text-lg text-gray-600">
              At our car marketplace, we bring you the best vehicles from top
              brands. Find the one that suits your style and budget.
            </p>
          </div>
          <Link to="/">
            <img
              src={assets.car}
              alt="Car"
              className="mt-8 rounded-lg shadow-lg"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Service Cards */}
          <ServiceCard
            title="Certified Mechanics"
            description="Skilled experts for quality vehicle care"
            imgSrc={assets.mechanism}
            isActive={activeCardIndex === 0}
            onClick={() => setActiveCardIndex(0)}
          />
          <ServiceCard
            title="Popular Brands"
            description="Top trusted brands"
            imgSrc={assets.popular}
            isActive={activeCardIndex === 1}
            onClick={() => setActiveCardIndex(1)}
          />
          <ServiceCard
            title="Reasonable Price"
            description="Quality service at an affordable price"
            imgSrc={assets.price}
            isActive={activeCardIndex === 2}
            onClick={() => setActiveCardIndex(2)}
          />
          <ServiceCard
            title="Best Quality Care"
            description="Premium care for lasting results"
            imgSrc={assets.best}
            isActive={activeCardIndex === 3}
            onClick={() => setActiveCardIndex(3)}
          />
        </div>
      </div>
    </div>
  );
};

// ServiceCard component
const ServiceCard = ({ title, description, imgSrc, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`shadow-md hover:shadow-lg rounded-2xl p-6 text-center transition duration-300 border border-gray-200 ${
      isActive ? "bg-black text-white" : "bg-white text-gray-800"
    }`}
  >
    <div className="w-12 h-12 mx-auto mb-4 border border-gray-300 rounded-full flex items-center justify-center overflow-hidden">
      {imgSrc ? (
        <img src={imgSrc} alt="Icon" className="w-full h-full object-cover" />
      ) : (
        <div className="bg-gray-300 w-full h-full" /> // Placeholder for missing image
      )}
    </div>

    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-sm mt-2">{description}</p>
  </div>
);

export default Services;
