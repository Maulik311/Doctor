import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Register from "../src/Component/Auth/Register";
import Login from "../src/Component/Auth/Login";
import ForgotPassword from "../src/Component/Auth/ForgotPassword";
import Footer from "./Component/Footer";
import Home from "../src/Pages/Home";
import ContactUs from "./Pages/Contact";
import About from "./Pages/About";
import AllDoctor from "./Pages/AllDoctor";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/AllDoctor" element={<AllDoctor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
