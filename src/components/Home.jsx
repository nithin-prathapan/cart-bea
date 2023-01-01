import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css'
import ProductList from "./ProductList";
import boyReading from '../images/boyReading.png'



const Home = () => {
  return (
    <div className="h-full w-full my-auto  mx-auto mt-[52px] bg-gray-900">
      <div className='bg-gray-900 w-[100%] sm:w-[96%] max-h-[200px] min-h-[200px] mb-4 mx-auto mt-[6px] flex'>
        <h1 className='justify-center flex mx-auto my-auto
                font-mono text-[35px] font-semibold z-30 text-[#eeff00] p-3 rounded-md pl-5 bg-[#ffeeee1a] uppercase tracking-[10px]
                '>FIND YOUR BOOK</h1>
        <img className='absolute w-[250px] right-[10%] z-10' src={boyReading} alt="" />
      </div>
      <ProductList />
    </div>
  );
};

export default Home;
