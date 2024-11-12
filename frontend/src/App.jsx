import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./components/Search";
import Services from "./pages/Services";
import Brands from "./components/Brands";
import Luxurious from "./pages/Luxurious";
import AboutCar from "./pages/AboutCar";
import Explore from "./pages/Explore";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <div class="bg-black min-h-screen">
        <Navbar />
        <Home />
      </div>

      <Services />
      <Brands />
      <Luxurious />
      <AboutCar />
      <Explore />
      <Footer />
    </>
  );
};

export default App;
