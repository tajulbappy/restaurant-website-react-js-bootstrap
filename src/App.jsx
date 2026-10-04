import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/HOME/Home";
import Menu from "./pages/MENU/Menu";
import About from "./pages/ABOUT/About";
import Contact from "./pages/CONTACT/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "76px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
