import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import { assets } from "../assets/assets";

const InputField = ({ type, placeholder, id }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {placeholder}
    </label>
    <input
      id={id}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      placeholder={placeholder}
    />
  </div>
);

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignup = (event) => {
    event.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <main className="flex flex-col bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="relative">
        <Link
          to="/"
          className="rounded-full border border-blue-500 w-16 h-16 flex items-center justify-center hover:bg-blue-500 transition duration-300 mt-6 ml-6" // Added margin here
        >
          <img
            src={assets.back}
            alt="Go Back"
            className="w-8 h-8 object-contain animate-bounce"
          />
        </Link>
      </div>

      {/* Signup Card */}
      <div className="flex items-center justify-center flex-grow">
        <div className="flex flex-col md:flex-row overflow-hidden w-full max-w-4xl shadow-lg rounded-lg">
          {/* Left Side */}
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${assets.cars})` }}
          ></div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Sign Up to Your Account
            </h2>
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <InputField
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                />
                <InputField
                  type="email"
                  placeholder="Enter Your Email"
                  id="email"
                />
                <InputField
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                />
              </div>
              <button
                disabled={loading}
                className={`mt-6 w-full py-2 rounded-lg transition duration-300 ${
                  loading
                    ? "bg-gray-400"
                    : "bg-red-600 hover:bg-red-700 text-white"
                }`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
            <p className="mt-4 text-gray-500 text-sm text-center">
              Don't have an account?{" "}
              <a href="/login" className="text-blue-500">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
