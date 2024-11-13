import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 mt-32">
      {/* Sign-Up Section */}
      <div className="text-center mt-20">
        <h1 className="text-3xl font-semibold">
          Sign Up to Join First Experience
        </h1>
        <div className="flex items-center justify-center mt-8 space-x-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-red-700 px-8 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <button className="bg-red-700 px-8 py-2 rounded-md hover:bg-red-800 transition duration-300">
            Send Now
          </button>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="mt-16 flex items-start justify-between px-10 lg:px-32 space-y-8 lg:space-y-0 flex-wrap lg:flex-nowrap">
        {/* Logo and About Section */}
        <div className="w-full lg:w-1/4 space-y-6">
          <img
            src={assets.logo}
            alt="Auto Haven Logo"
            className="w-48 h-10 mx-auto lg:mx-0"
          />
          <p className="text-lg text-center lg:text-left">
            Auto Haven is your one-stop destination for hassle-free car buying.
            Find, compare, and try.
          </p>
          <div className="flex space-x-2 justify-center lg:justify-start">
            <img
              src={assets.twitter}
              alt="Facebook"
              className="w-10 h-10 rounded-full border border-red-700"
            />
            <img
              src={assets.facebook}
              alt="Twitter"
              className="w-10 h-10 rounded-full border border-red-700"
            />
            <img
              src={assets.instagram}
              alt="Instagram"
              className="w-10 h-10 rounded-full border border-red-700"
            />
            <img
              src={assets.linkdin}
              alt="LinkedIn"
              className="w-10 h-10 rounded-full border border-red-700"
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-around w-full lg:w-3/4">
          {/* Shop Column */}
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-2xl font-semibold">Shop</h1>
            <p>Sports Car</p>
            <p>Classic Car</p>
            <p>Old Model Car</p>
            <p>Luxury Brand</p>
          </div>
          {/* Support Column */}
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-2xl font-semibold">Support</h1>
            <p>3-Month Free Service</p>
            <p>Product Manual</p>
            <p>Privacy Policy</p>
            <p>Product FAQ</p>
          </div>
          {/* Contact Column */}
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-2xl font-semibold">Contact</h1>
            <p>+99 458 555 4785</p>
            <p>info@luxu.com</p>
            <p>Contact Us</p>
            <p>Terms and Services</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="border-t-2 border-gray-700 mt-16 mx-6" />
      <div className="text-center py-4">
        <p>© 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
