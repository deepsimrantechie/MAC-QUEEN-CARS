import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Run only on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setLoggedIn(!!token);

    const storedName = localStorage.getItem("username");
    setUsername(storedName || "user");
  }, []); // Empty dependency array ensures this runs once

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setLoggedIn(false); // Set loggedIn to false immediately
    setUsername(""); // Reset the username
    navigate("/login");
  };

  // Function to handle login button click
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bg-black h-auto">
      <nav className="bg-opacity-90 shadow-lg py-4 px-8 rounded-3xl">
        <div className="flex items-center justify-between h-auto text-white">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <span className="btn btn-ghost text-2xl">MacQueen</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-lg font-semibold">
            <Link
              to="/"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/service"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="/"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              Stock
            </Link>
            <Link
              to="/about"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-500 transition duration-300 ease-in-out cursor-pointer"
            >
              Contact us
            </Link>
          </div>

          {/* Login/Logout Button */}
          <div>
            {loggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 px-6 rounded-full transition duration-300 shadow-md"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 px-6 rounded-full transition duration-300 shadow-md"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
