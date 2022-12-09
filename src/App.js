import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Login from "./components/Login";

const App = () => {
  return (
    
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
   
  );
};

export default App;
