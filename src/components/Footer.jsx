import React from "react";
import insta from "../images/insta.svg";
import fb from "../images/fb.svg";
import twitter from "../images/twitter.svg";

const Footer = () => {
  return (
    <footer className="text-white bg-[#08010f] p-4 relative min-w-[100%] h-full  mx-auto ">
      <div className="flex">
        <div className="w-[60%] h-full sm:min-w-[60%] ">
          <h1 className="text-3xl fonat-semibold text-blueGray-700 mt-2">
            Lets Keep In Touch
          </h1>
          <h3 className="text-lg mt-2 mb-2 text-blueGray-600 ">
            Find us on any of these platforms, we respond 1-2 business days.
          </h3>
          <div className="sm:inline">
            <img
              src={insta}
              alt=""
              className="w-10 h-10 inline mx-3 drop-shadow-xl hover:scale-125 ease-in-out duration-300 my-4 justify-center items-center cursor-pointer"
            />
            <img
              src={twitter}
              alt=""
              className="w-10 h-10 inline mx-3 drop-shadow-xl hover:scale-125 ease-in-out duration-300 my-4 justify-center items-center cursor-pointer"
            />
            <img
              src={fb}
              alt=""
              className="w-10 h-10 inline mx-3 drop-shadow-xl hover:scale-125 ease-in-out duration-300 my-4 justify-center items-center cursor-pointer"
            />
          </div>
        </div>
        <div className="flex max-w-[50%] h-[100%] hover:scale-[2px] ml-1 duration-700 ease-in-out">
          <div className="p-4  mx-auto">
            <ul className="mx-auto">
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                Useful-links
              </li>
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                About-Us
              </li>
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                Blog
              </li>
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                Github
              </li>
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                Free-Products
              </li>
            </ul>
          </div>
          <div className="p-4 pr-2 ml-3 mx-auto">
            <ul className="mx-auto">
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                Other-Resourses
              </li>
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                MIT-license
              </li>
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                Privacy-Policy
              </li>
              <li className="hover:text[#fee] hover:font-semibold  duration-300 ml-3  ease-in-out  cursor-pointer">
                Contact-Us
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="w-full py-2 mx-auto text-center">
        <span className="hover:text-[#fee] hover:font-semibold cursor-pointer relative duration-300 ease-in ">
          Copyright
        </span>{" "}
        <span className="hover:text-[#fee] hover:font-semibold cursor-pointer relative duration-300 ease-in ">
          ©
        </span>{" "}
        <span className="hover:text-[#fee] hover:font-semibold cursor-pointer relative duration-300 ease-in ">
          2021
        </span>
        <span className="hover:text-[#fee] hover:font-semibold cursor-pointer relative duration-300 ease-in ">
          {" "}
          Notus
        </span>{" "}
        <span className="hover:text-[#fee] hover:font-semibold cursor-pointer relative duration-300 ease-in ">
          JS by
        </span>{" "}
        <span className="hover:text-[#fee] hover:font-semibold cursor-pointer relative duration-300 ease-in ">
          Cart-Bae
        </span>
      </div>
    </footer>
  );
}; 

export default Footer;
