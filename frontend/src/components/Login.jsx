import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setMessage("All fields are required ");
    }
    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/user/login`, {
        email,
        password,
      });

      if (data.success) {
        window.localStorage.setItem("username", data.user.userName || "user");
        window.localStorage.setItem("authToken", data.token);

        navigate("/"); // Navigate to homepage
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="rounded-full border border-blue-500 w-16 h-16 flex items-center justify-center hover:bg-blue-500 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
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
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Login
              </button>
            </form>
            {message && <p className="text-red-900 mt-4">{message}</p>}
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
