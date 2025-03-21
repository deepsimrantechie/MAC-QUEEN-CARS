import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Luxurious from "./pages/Luxurious";
import Brands from "./components/Brands";
import AboutCar from "./pages/AboutCar";
import Explore from "./pages/Explore";
import Footer from "./pages/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-white">
      <Router>
        {/* Navbar */}

        {/* Single-page layout */}
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Services />
                  <Brands />
                  <Luxurious />
                  <AboutCar />
                  <Explore />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/service" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
