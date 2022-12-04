import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./styles.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-full max-w[1240px] h-24 items-center px-4 justify-between flex text-[#fee] mx-auto font-bold font-sans">
      <h1 className="p-3.8 m-4 text-[#00df9a] text-3xl">CART-BAE</h1>
      <ul className="uppercase md:flex hidden">
        <li className="link-underline pl-2 pr-2   flex font-thin">Home</li>
        <li className="link-underline pl-2 pr-2 flex font-thin">About</li>
        <li className="link-underline pl-2 pr-2 flex font-thin">Company</li>
        <li className="link-underline pl-2 pr-2 flex font-thin">Resources</li>
        <li className="link-underline pl-2 pr-2 flex font-thin">Signin</li>
      </ul>
      <div onClick={() => setNav(!nav)} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[45%] md:border-none border-r border-r-grey-900 h-full bg-[#000300] ease-in-out duration-200"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="p-4 text-[#00df9a] text-3xl m-4">CART-BAE</h1>
        <ul className="uppercase  justify-center mx-auto block px-4 md:hidden">
          <li className="p-4 font-thin border-b border-b-gray-500">Home</li>
          <li className="p-4 font-thin border-b border-b-gray-500">About</li>
          <li className="p-4 font-thin border-b border-b-gray-500">Company</li>
          <li className="p-4 font-thin border-b border-b-gray-500">
            Resources
          </li>
          <li className="p-4 font-thin">Sign-in</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
