import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Content from "./Content";
import EditDetails from "./EditDetails";

const Home = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Content />
      <EditDetails />
    </div>
  );
};

export default Home;
