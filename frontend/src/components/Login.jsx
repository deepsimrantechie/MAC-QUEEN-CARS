import React from "react";
import { Link } from "react-router-dom"; // For navigation
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="rounded-full border border-blue-500 w-16 h-16 flex items-center justify-center hover:bg-blue-500 transition duration-300"
        >
          <img
            src={assets.back}
            alt="Back to Home"
            className="w-8 h-8 object-contain animate-bounce"
          />
        </Link>
      </div>

      {/* Main Login Content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col md:flex-row overflow-hidden w-full max-w-4xl shadow-lg rounded-lg">
          {/* Left Side */}
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${assets.cars})` }}
          ></div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Login to Your Account
            </h2>
            <form>
              <div className="space-y-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </div>

              <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300">
                Login
              </button>
            </form>
            <p className="mt-4 text-gray-500 text-sm text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
