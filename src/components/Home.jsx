import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './styles.css'
import Cart from "./Cart";
const Home = () => {
  return (
    <div className="h-full w-full my-auto  mx-auto ">
      <div className="h-full w-full my-[42px] relative ">
        <Carousel
          infiniteLoop={false}
          useKeyboardArrows={true}
          autoPlay
          transitionTime={500}
          showThumbs={false}
          className="max-w-[1280px] justify-center flex items-center
      ease-in-out duration-500 mx-auto sm:w-full text-white"
        >
          <div>
            <img
              className="min-w-[100%] md:max-w-[100%] md:min-h-[400px] sm:max-h-[400px] sm:object-contain md:object-contain md:mx-auto  "
              src="https://cdn.homeshopping.pk/templates/ResGarden/images/womenfashionlanding/Topmainbanner.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="min-w-[100%] md:max-w-[100%] md:min-h-[400px] sm:max-h-[400px] sm:object-contain md:object-contain md:mx-auto  "
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="min-w-[100%] md:max-w-[100%] md:min-h-[400px] sm:max-h-[400px] sm:object-contain md:object-contain md:mx-auto  "
              src="https://4kwallpapers.com/images/wallpapers/beautiful-girl-woman-monochrome-dark-background-portrait-3840x1080-2965.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="min-w-[100%] md:max-w-[100%] md:min-h-[400px] sm:max-h-[400px] sm:object-contain md:object-contain md:mx-auto  "
              src="https://w0.peakpx.com/wallpaper/577/926/HD-wallpaper-amateur-model-in-red-dress-abstract-model-red-dress-brunette.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="min-w-[100%]  md:max-w-[100%] md:min-h-[400px] sm:max-h-[400px] sm:object-contain md:object-scale-down md:mx-auto "
              src="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <div className="text-[#fee] font-medium  min-w-full my-10 items-center justify-center flex">
        
      </div>
      <Cart />
    </div>
  );
};

export default Home;
