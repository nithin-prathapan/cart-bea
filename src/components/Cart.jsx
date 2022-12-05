import React from "react";
import Dress from "../images/d60cae213c52ae8111a55da8ff28e5b8.png";
import "./styles.css";
const Cart = () => {
  return (
    <div className="h-[100%] px-4 grid md:grid-cols-2 gap-y-4 gap-x-4 lg:grid-cols-4">
    
      <div
        id="border-right"
        className="text-[#fee] justify-center py-4 px-4 items-center m-5 mx-auto flex
       bg-[#000300] h-full max-w-[240px] border-b 
       border-r rounded-r-md border-r-gray-50 {border-b}after:50%"
      >
        <div
          id="image-container"
          className="max-w-[240px] h-[100%] mx-auto grid"
        >
          <img
            id="img"
            src={Dress}
            alt=""
            className="h-36 w-36 mx-auto hover:scale-125 duration-300 transform hover:translate-x-7"
          />

          <h1 className="mx-auto items-center justify-center">Ruffle</h1>
          <h3 className="mx-auto items-center justify-center">
            Price : <span>$ 25</span>
          </h3>
          <h1 className="mx-auto items-center justify-center">
            Rating :<span>⭐⭐⭐⭐⭐</span>
          </h1>

          <button
            className="bg-[#09fd90] hover:bg-[#fffb11] hover:scale-105
           ease-in-out duration-500  py-1 font-medium w-[100%] max-w-[120px]
            mx-auto mt-3 rounded-lg text-[#000300] border-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div
        id="border-right"
        className="text-[#fee] justify-center py-4 px-4 items-center m-5 mx-auto flex
       bg-[#000300] h-full max-w-[240px] border-b 
       border-r rounded-r-md border-r-gray-50 {border-b}after:50%"
      >
        <div
          id="image-container"
          className="max-w-[240px] h-[100%] mx-auto grid"
        >
          <img
            id="img"
            src={Dress}
            alt=""
            className="h-36 w-36 mx-auto hover:scale-125 duration-300 transform hover:translate-x-7"
          />

          <h1 className="mx-auto items-center justify-center">Ruffle</h1>
          <h3 className="mx-auto items-center justify-center">
            Price : <span>$ 25</span>
          </h3>
          <h1 className="mx-auto items-center justify-center">
            Rating :<span>⭐⭐⭐⭐⭐</span>
          </h1>

          <button
            className="bg-[#09fd90] hover:bg-[#fffb11] hover:scale-105
           ease-in-out duration-500  py-1 font-medium w-[100%] max-w-[120px]
            mx-auto mt-3 rounded-lg text-[#000300] border-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
