import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(true); // Initialize with a default value

  return (
    <div className="bg-black h-auto">
      <nav className=" bg-opacity-90 shadow-lg py-4 px-8 rounded-3xl">
        <div className="flex items-center justify-between h-auto text-white">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <img
                className="w-52 h-12 animate-pulse"
                src={assets.logo}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-lg font-semibold">
            <Link
              to="/"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              <p>Home</p>
            </Link>
            <Link
              to="/service"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              <p>Services</p>
            </Link>
            <Link
              to="/"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              <p>Stock</p>
            </Link>
            <Link
              to="/about"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              <p>About us</p>
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              <p>Conatct us</p>
            </Link>
          </div>

          {/* Login/Signup Button */}
          <div>
            <button
              onClick={() => {
                if (isLogin) {
                  navigate("/login"); // Corrected route
                } else {
                  navigate("/signup"); // Corrected route
                }
              }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 px-6 rounded-full transition duration-300 shadow-md"
            >
              {isLogin ? "Login" : "Signup"} {/* Toggle button text */}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
