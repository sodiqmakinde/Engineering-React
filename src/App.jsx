import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Netflix from "./pages/Netflix";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/netflix" element={<Netflix />} />
    </Routes>
  );
};

export default App;
