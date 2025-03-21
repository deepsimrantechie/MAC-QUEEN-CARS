import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { assets } from "../assets/assets";

const InputField = ({ type, placeholder, id, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {placeholder}
    </label>
    <input
      id={id}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      placeholder={placeholder}
      onChange={onChange} // Added this line
    />
  </div>
);

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Fixed typo

    if (!username || !email || !password) {
      setMessage("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/user/register`, {
        username,
        email,
        password,
      });

      if (data.success) {
        window.localStorage.setItem("username", data.user || "user");
        window.localStorage.setItem("authToken", data.token); // Fixed token storage
        navigate("/"); // Use navigate() correctly
      } else {
        setMessage(data.message || "User not created");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false); // Ensure loading is stopped
    }
  };

  return (
    <main className="flex flex-col bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="relative">
        <Link
          to="/"
          className="rounded-full border border-blue-500 w-16 h-16 flex items-center justify-center hover:bg-blue-500 transition duration-300 mt-6 ml-6"
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
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <InputField
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                />
                <InputField
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Your Email"
                  id="email"
                />
                <InputField
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                />
              </div>
              <button
                type="submit"
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
            {message && <p className="mt-4 text-red-800">{message}</p>}
            <p className="mt-4 text-gray-500 text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
