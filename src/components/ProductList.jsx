import React from "react";
import "./styles.css";
import ruffle from "../images/ruffle.png";

const ProductList = () => {
  return (
    <div className="h-[100%] my-10 mx-auto grid md:grid-cols-2 gap-y-4 gap-x-4 lg:grid-cols-4">
      <div
        id="border-right"
        className="text-[#fee] justify-center py-4 px-4 items-center m-5 mx-auto flex
       bg-[#00030036] hover:bg-[#00030057] hover:drop-shadow-xl h-full max-w-[240px] border
       hover:scale-110 ease-in-out duration-500 hover:translate-x-3
       border-r rounded-r-md border-r-gray-50 {border-b}after:50% "
      >
        <div
          id="image-container"
          className="max-w-[240px] h-[100%] mx-auto grid "
        >
          <img
            id="img"
            src={ruffle}
            alt=""
            className="h-36 w-36 mx-auto hover:scale-125 duration-300 transform hover:translate-x-7 cursor-pointer"
          />

          <h1 className="mx-auto items-center justify-center text-center hover:text-yellow-500 cursor-pointer">
            Ruffle
          </h1>
          <h3 className="mx-auto items-center justify-center text-center hover:text-yellow-500 cursor-pointer">
            Price : <span>$ 25</span>
          </h3>
          <h1 className="mx-auto items-center justify-center text-center hover:text-yellow-500 cursor-pointer">
            Rating :<span>⭐⭐⭐⭐⭐</span>
          </h1>
          <p className="mx-auto items-center justify-center text-center w-full hover:text-yellow-500 cursor-pointer">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            dolores asperiores veniam nobis deleniti cumque!
          </p>

          <button 
            className="bg-[#09fd90] hover:bg-[#fffb11] 
           ease-in-out duration-500 hover:scale-110  py-1 font-medium w-[100%] max-w-[120px]
            mx-auto mt-3 rounded-lg text-[#000300] border-none"
          >
            Add to ProductList
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductList;
