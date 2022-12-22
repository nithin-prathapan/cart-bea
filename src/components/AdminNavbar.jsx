import React from 'react'
import shopImg from '../images/shopimg.png'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'

const AdminNavbar = () => {
    return (
        <div className='w-full max-h-[50px] drop-shadow-lg bg-[#cacacaa2] z-30 h-24 rounded-md fixed top-0 items-center px-4 justify-between flex text-[#fee] mx-auto font-bold'>
            <Link to="/">
                <h1 className=" text-[#000300] top-0  text-xl ml-8 mt-2 font-serif ">Cart<span className="text-[#f2ff36] bg-black">Bae</span></h1>
                <img className="flex max-w-[40px] absolute top-0" src={shopImg} alt="logo" />
            </Link>
            <div className='flex'>
                <input className='md:w-[500px] bg-[#f1f1f1] border rounded-md sm:min-w-[250px] ml-3 drop-shadow-md outline-none text-[#000300] font-mono text-center font-light min-w-[300px]' type="search" placeholder='Search here...' name="" id="" />
                <span className='bg-[#f1f1f1] border rounded-md w-[30px] mx-auto justify-center p-1 drop-shadow-lg ml-1' ><FiSearch size={20} color="#007 " /></span>
            </div>
            <FaUserAlt size={20} className="text-[#2e115e] "/>
           
        </div>
    )
}

export default AdminNavbar