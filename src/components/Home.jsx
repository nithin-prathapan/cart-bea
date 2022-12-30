import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './styles.css'
import ProductList from "./ProductList";
import Banner from "./Banner";
import { useSelector } from "react-redux";



const Home = () => {
  const { name } = useSelector((state) => state.user)
  return (
    <div className="h-full w-full my-auto  mx-auto mt-[80px]">
      <ProductList />
    </div>
  );
};

export default Home;
