import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Link to="/netflix">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
