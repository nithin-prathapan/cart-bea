import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Checkout from "./components/Checkout";

const App = () => {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
      <Footer />
    </div>

  );
};

export default App;
