import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-full max-h-[40px] drop-shadow-lg bg-[#000300] z-30 h-24 fixed top-0 items-center px-4 justify-between flex text-[#fee] mx-auto font-bold">
      <Link to="/">
        <h1 className="p-4 text-green-600 top-0  text-3xl m-4">CART-BAE</h1>
      </Link>{" "}
      <ul className="uppercase md:flex hidden">
        <Link className="font-thin" to="/">
          <li className="link-underline  link-underline-black drop-shadow-lg  l-2 pr-2 flex font-thin">
            Home
          </li>
        </Link>
        <li className="link-underline link-underline-black drop-shadow-lg  pl-2 pr-2 flex font-thin">
          About
        </li>
        <li className="link-underline link-underline-black drop-shadow-lg  pl-2 pr-2 flex font-thin">
          Company
        </li>
        <li className="link-underline  link-underline-black drop-shadow-lg  l-2 pr-2 flex font-thin">
          Resources
        </li>
        <Link className="font-thin" to="/signin">
          <li className="link-underline  link-underline-black drop-shadow-lg  l-2 pr-2 flex font-thin">
            Sign-in
          </li>
        </Link>
      </ul>
      <div onClick={() => setNav(!nav)} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[45%] md:hidden  h-full bg-[#000300] ease-in-out duration-300"
            : "fixed left-[-100%] bg-[#000300]"
        }
      >
        <div className="border-r">
          <Link to="/">
            <h1 className="p-4  text-green-600 top-0  text-3xl m-4">CART-BAE</h1>
          </Link>
          <ul className="uppercase  justify-center mx-auto block px-4 md:hidden">
            <li className="p-4 font-thin border-b border-b-gray-500 hover:text-yellow-500 hover:font-semibold link-underline duration-300 ease-in-out cursor-pointer">Home</li>
            <li className="p-4 font-thin border-b border-b-gray-500 hover:text-yellow-500 hover:font-semibold link-underline duration-300 ease-in-out cursor-pointer">About</li>
            <li className="p-4 font-thin border-b border-b-gray-500 hover:text-yellow-500 hover:font-semibold link-underline duration-300 ease-in-out cursor-pointer">
              Company
            </li>
            <li className="p-4 font-thin border-b border-b-gray-500 hover:text-yellow-500 hover:font-semibold link-underline duration-300 ease-in-out cursor-pointer">
              Resources
            </li>
            <Link to="/signin">
              <li className="p-4 font-thin">Sign-in</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
