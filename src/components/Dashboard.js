import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    return (
        <div className='mt-[56px] text-center'>
            <div className='w-full max-h-[50px] drop-shadow-lg mt-[50px] bg-[#ff1b6721] z-30 min-h-[70px]  mb-5 items-center px-4 justify-evenly flex text-[#24033f] uppercase  mx-auto font-bold text-center'>
                <Link to="/adminp/dashboard"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Dashboard</h1></Link>
                <Link to="/adminp/allproducts"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>all products</h1></Link>
                <Link to="/adminp/orders"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Add Products</h1></Link>
                <Link to="/adminp/userlist"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>User's List</h1></Link>
            </div>
            <h1 className='text-start w-[80%] mx-auto font-bold font-mono tracking-wider text-lg mb-2 uppercase underline '>Add Products to the database</h1>
            <form className='mb-8'>
                <p className='text-left mx-auto w-[80%]'> Product Title</p>
                <input type="text" name="title" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto w-[80%] h-8 rounded-md p-4  ' placeholder='One Hundred Years Of Solitude' />
                <p className='text-left mx-auto w-[80%]'> Short Description</p>
                <input type="text" name="" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto w-[80%] h-8 rounded-md p-4  ' placeholder='One Hundred Years Of Solitude' />
                <p className='text-left mx-auto w-[80%]'>Description</p>
                <input type="text" name="" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto w-[80%] h-8 rounded-md p-4  ' placeholder='One Hundred Years Of Solitude' />
                <div className="grid grid-cols-2 w-[80%] mx-auto">
                    <div className='min-w-[40%]'>
                        <p className=' mx-auto text-start min-w-[100%]'>Price</p>
                        <input type="text" name="" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto max-w-[95%] md:min-w-full h-8 rounded-md p-4  ' placeholder='One Hundred Years Of Solitude' />
                    </div>
                    <div className='min-w-[40%] ml-2 '>
                        <p className=' mx-auto text-start min-w-[100%]'>Category</p>
                        <input type="text" name="" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto max-w-[95%] md:min-w-full h-8 rounded-md p-4  ' placeholder='One Hundred Years Of Solitude' />
                    </div>

                </div>
                <input type="file" className='justify-start mt-2 p-2 w-[80%] border-[1px]  border-[#f00] rounded-md' />
                <div className='w-[80%] mx-auto mt-4'>
                    <input type="button" value="Add Products" className='text-xs uppercase bg-[#0f140f] text-white w-[40%] mx-auto  drop-shadow-lg pl-2 pr-2 pt-2 pb-2 rounded-md block' />
                </div>
            </form>
        </div>
    )
}

export default Dashboard