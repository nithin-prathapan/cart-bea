import React from "react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cart/>
    </div>
  );
};

export default App;
