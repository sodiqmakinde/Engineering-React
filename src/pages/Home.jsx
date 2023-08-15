import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Link to="/netflix">
        <h5>This is Home</h5>
      </Link>
    </div>
  );
};

export default Home;
