import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import about from "./../images/images/about-us-page-heading.jpg";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div className="h-full w-full py-50 my-16 mx-auto ">
      <div className="h-full w-full my-[42px] relative">
        <Carousel
          infiniteLoop
          useKeyboardArrows={true}
          autoPlay
          showThumbs={false}
          className="max-w-[1280px] justify-center flex items-center hover:scale-105
      ease-in-out duration-500 mx-auto sm:w-full text-white"
        >
          <div>
            <img
              className="min-w-[1200px] max-w-[100%] min-h-[400px] max-h-[400px]"
              src="https://4kwallpapers.com/images/wallpapers/beautiful-girl-woman-monochrome-dark-background-portrait-3840x1080-2965.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="min-w-[1200px] max-w-[100%] min-h-[400px] max-h-[400px] object-contain"
              src="https://w0.peakpx.com/wallpaper/577/926/HD-wallpaper-amateur-model-in-red-dress-abstract-model-red-dress-brunette.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="min-w-[1200px] max-w-[100%] min-h-[400px] object-contain max-h-[400px]"
              src={about}
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <div className="text-[#fee] font-medium  min-w-full my-10 items-center justify-center flex">
        <ReactTyped
          className="tracking-[6px] duration-300 ease-in-out"
          strings={["“It’s shop o’clock somewhere! 🥰”"]}
          typeSpeed={80}
          backSpeed={70}
          loop
        ></ReactTyped>
      </div>
    </div>
  );
};

export default Home;
