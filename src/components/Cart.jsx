import React from "react";
import Dress from "../images/d60cae213c52ae8111a55da8ff28e5b8.png";
const Cart = () => {
  return (
    <div className="py-4 h-[100%] px-4 bg-[#000300] grid md:grid-cols-2 gap-y-4 gap-x-4 lg:grid-cols-4">
      <div className="text-[#fee] justify-center py-4 px-4 items-center m-5 mx-auto flex bg-[#000300] h-full max-w-[240px] border-b border-r rounded-r-md border-b-grey-100 border-r-grey-100">
        <div className="max-w-[240px] mx-auto grid">
          <img src={Dress} alt="" className="" />
          <button className="bg-[#09fd90] text-[#000300] py-1 font-semibold w-[100%] max-w-[120px] mx-auto mt-3 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="text-[#fee] justify-center py-4 px-4 items-center m-5 mx-auto flex bg-[#000300] h-full max-w-[240px] border-b border-r rounded-r-md border-b-grey-100 border-r-grey-100">
        <div className="max-w-[240px] mx-auto grid">
          <img src={Dress} alt="" className="" />
          <button className="bg-[#09fd90] text-[#000300] py-1 font-semibold w-[100%] max-w-[120px] mx-auto mt-3 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="text-[#fee] justify-center py-4 px-4 items-center m-5 mx-auto flex bg-[#000300] h-full max-w-[240px] border-b border-r rounded-r-md border-b-grey-100 border-r-grey-100">
        <div className="max-w-[240px] mx-auto grid">
          <img src={Dress} alt="" className="" />
          <button className="bg-[#09fd90] text-[#000300] py-1 font-semibold w-[100%] max-w-[120px] mx-auto mt-3 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="text-[#fee] justify-center py-4 px-4 items-center m-5 mx-auto flex bg-[#000300] h-full max-w-[240px] border-b border-r rounded-r-md border-b-grey-100 border-r-grey-100">
        <div className="max-w-[240px] mx-auto grid">
          <img src={Dress} alt="" className="" />
          <button className="bg-[#09fd90] text-[#000300] py-1 font-semibold w-[100%] max-w-[120px] mx-auto mt-3 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
