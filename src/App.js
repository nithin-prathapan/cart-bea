import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import AdminPanel from "./components/AdminPanel";
import EditProduct from "./components/EditProduct";
import Admin from "./components/Admin";
import Card from "./components/Card";
import { useLocation } from 'react-router-dom'
import AdminNavbar from "./components/AdminNavbar";
import AllProducts from "./components/AllProducts";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";

const App = () => {
  const location = useLocation()
  return (

    <div>

      {
        location.pathname.startsWith('/adminp') ? <AdminNavbar /> : <Navbar />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/edit" element={<EditProduct />} />
        <Route path="/adminp" element={<Admin />} />
        <Route path="/card" element={<Card />} />
        <Route path="/adminp/allproducts" element={<AllProducts />} />
        <Route path="/adminp/orders" element={<Orders/>} />
        <Route path="/adminp/dashboard" element={<Dashboard/>} />
        <Route path="/card" element={<Card />} />

      </Routes>
      <Footer />


    </div>

  );
};

export default App;
