import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-90 shadow-lg py-4 px-8 rounded-3xl">
      <div className="flex items-center justify-between h-20 text-white">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="w-52 h-12 animate-pulse"
            src={assets.logo}
            alt="Logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 text-lg font-semibold">
          {["Home", "About us", "Services", "Contact us", "Stock"].map(
            (item) => (
              <p
                key={item}
                className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <img
            className="h-8 w-8 cursor-pointer"
            src={assets.lines}
            alt="Menu Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
