import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <Navbar />

      <h3>This is About Page</h3>
      <Link to="/netflix">This is Home</Link>
    </section>
  );
};

export default About;