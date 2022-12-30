import React from 'react'
import { Link } from 'react-router-dom'
const Orders = () => {
  return (
    <div className='mt-[56px]'>
      <div className='w-full max-h-[50px] drop-shadow-lg mt-[50px] bg-[#ff1b6721] z-30 min-h-[70px]  mb-5 items-center px-4 justify-evenly flex text-[#24033f] uppercase  mx-auto font-bold'>
        <Link to="/adminp/dashboard"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Dashboard</h1></Link>
        <Link to="/adminp/allproducts"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>all products</h1></Link>
        <Link to="/adminp/orders"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Orders</h1></Link>
        <Link to="/adminp/userlist"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>User's List</h1></Link>
      </div>
     
      </div>
  )
}

export default Orders