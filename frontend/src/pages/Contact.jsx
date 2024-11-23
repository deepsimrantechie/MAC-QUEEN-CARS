import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.contact})` }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-red-900 opacity-80"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <h2 className="text-5xl font-bold text-white mb-8">
          Get in <span className="text-red-500">Touch</span>
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center text-white">
          <p className="text-lg font-semibold">Or reach out via:</p>
          <p className="text-sm mt-2">
            Email:{" "}
            <a href="mailto:example@example.com" className="text-red-300">
              example@example.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-red-300">
              +1 234 567 890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
