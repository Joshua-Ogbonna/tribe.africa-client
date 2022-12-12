import React from "react";
import Hero from "../../components/HomeComponents/Hero";
import Navbar from "../../components/Navbar";

import "./Home.css";

const Home = () => {
  return (
    <div className="home__component">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
