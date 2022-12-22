import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './styles.css'
import ProductList from "./ProductList";
import Banner from "./Banner";



const Home = () => {
  return (
    <div className="h-full w-full my-auto  mx-auto ">
      <Banner />
      <ProductList />
    </div>
  );
};

export default Home;
