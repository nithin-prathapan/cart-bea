import React, { useState } from "react";
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles.css";
import shopImg from '../images/shopimg.png'
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../redux/userSlice'
const Navbar = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
  }
  const { name } = useSelector((state) => state.user)
  console.log(name);
  const [nav, setNav] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user)
  console.log(isLoggedIn);
  return (
    <div className="w-full max-h-[50px] drop-shadow-lg bg-[#000300] z-30 h-24 fixed top-0 items-center px-4 justify-between flex text-[#fee] mx-auto font-bold">
      <Link to="/">
        <h1 className=" text-green-600 top-0  text-xl ml-8 mt-2">CART-BAE</h1>
        <img className="flex max-w-[40px] absolute top-0" src={shopImg} alt="logo" />
      </Link>
      <ul className="absolute uppercase flex right-8 ">
        <Link to="/">
          <li className="link-underline  link-underline-black drop-shadow-lg text-green-600 l-2 pr-2 sm:hidden font-thin">
            Home
          </li>
        </Link>
        <li className="link-underline link-underline-black drop-shadow-lg  pl-2 pr-2 flex  text-green-600 sm:hidden font-thin">
          About
        </li>
        <li className="link-underline link-underline-black drop-shadow-lg  pl-2 pr-2 flex  text-green-600 sm:hidden font-thin">
          Company
        </li>
        <li className="link-underline  link-underline-black drop-shadow-lg  l-2 pr-2 flex  text-green-600 sm:hidden font-thin">
          Resources
        </li>
        {
          isLoggedIn ? (
            <li onClick={handleLogout} className="drop-shadow-lg font-thin  link-underline  link-underline-black text-green-600 l-2 pr-2 flex  sm:show">
              Logout
              <BiShoppingBag className="ml-2 text-green-600" size={20} />
              <div className="rounded-full inline  w-2 h-2  text-green-600">0</div>
            </li>

          ) : (
            <Link className="font-thin" to="/signin">
              <li className="link-underline  link-underline-black drop-shadow-lg  l-2 pr-2 flex font-thin">
                Sign-in
              </li>
            </Link>
          )
        }
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
