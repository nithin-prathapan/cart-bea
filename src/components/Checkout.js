import React from 'react'
import bag from '../images/bag.png'
import { BiPlusCircle } from 'react-icons/bi'
import { BiMinusCircle } from 'react-icons/bi'
import './styles.css'

const Checkout = () => {
    return (

        <div className='bg-[#1cfdcc71] md:flex sm:grid min-h-[1280px] sm:grid-cols-1'>
            <div className='w-[95%] sm:min-w-[95%] drop-shadow-lg max-h-[100%] mt-[66px] ml-2 border rounded-md mb-4 text-[#fee] md:max-w-[60%]'>
                <div className='m-2 flex bg-[#2d2052d8] border-b border-t p-3 rounded-md'>
                    <div className="image-container h-[100px]">
                        <h1 className='mx-auto text-center mb-2 -mt-2 font-extrabold underline'>Item</h1>
                        <img className='max-w-[70px] border rounded-xl mt-auto p-1' src={bag} alt="" />
                    </div>
                    <div className='description justify-items-start'>
                        <h1 className='text-center -mt-2 mb-2 font-extrabold underline '>Description</h1>
                        <h1 className='text-center text-sm font-semibold  mx-auto p-1'>Lorem ipsum dolor sit amet.</h1>
                        <p className='text-xs text-center sm:text-center p-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='quantity justify-items-start ml-2  '>
                        <h1 className='text-center -mt-2 mb-6 font-extrabold underline '>Quantity</h1>
                        <div className='flex items-center my-auto'>
                            <BiMinusCircle className=" hover:scale-110 cursor-pointer duration-500 ease-in-out" color='#fee' size={40} />
                            <h2 className="w-[35%] button ml-1 mr-1 h-[100%] mx-auto text-[#fffcfc] text-center border-[100%] bg-[#e6ebea3d]  rounded-full drop-shadow-lg text-lg font-md">0</h2>
                            <BiPlusCircle className="mr-2 hover:scale-110 cursor-pointer duration-500 ease-in-out" color='#fee' size={40} />
                        </div>

                    </div>
                    <div className='description justify-items-start ml-2'>
                        <h1 className='text-center -mt-2 mb-2hbjn  font-extrabold underline ml-4 '>Total Price</h1>
                        <h1 className='text-center my-auto mt-8 sm:mt-2 font-serif font-semibold'><span> $  </span> 400</h1>
                    </div>
                </div>
            </div>
            <div className='mt-[66px] max-h-[400px] drop-shadow-2xl max-w-[350px]  bg-[#101b1185] rounded-md p-4 border m-4 '>
                <div className='border-b uppercase max-w-[50%]'>
                    <h1 className='font-mono font-bold tracking-[10px] text-[30px] text-[#ff8800f6]'>
                        summary
                    </h1>

                </div>
                <div className='border-b uppercase mt-4 mb-2 max-w-[100%] flex'>
                    <h1 className=' mb-2 font-mono font-bold tracking-[4px] w-[50%] text-[15px] text-[#ff8800f6]'>
                        Do you have a coupen code ?
                    </h1>
                    <input type="text" name="" id="" placeholder='Enter your coupen code' className='h-[25px] placeholder:text-xs placeholder:font-semibold tracking-[4px] text-[#ff8800f6] p-4 w-[205px] items-center my-auto rounded-lg outline-none border bg-[#ffeeee27]' />
                </div>
                <div className='uppercase mt-4 mb-2 max-w-[100%] flex justify-between'>
                    <h1 className=' mb-2 font-mono font-bold tracking-[1px] text-[15px] text-[#ff8800f6]'>
                        Sub Total
                    </h1>
                    <h1 className=' font-mono font-bold tracking-[4px] text-[15px] text-[#ff8800f6]'> <span>$ </span> 4000</h1>
                </div>
                <div className=' uppercase mt-4 mb-2 max-w-[100%] flex justify-between'>
                    <h1 className=' mb-2 font-mono font-bold tracking-[1px]  w-[60%] text-[15px] text-[#ff8800f6]'>
                        Estimated Shipping and Handling fee
                    </h1>
                    <h1 className=' font-mono font-bold tracking-[4px] text-[15px]  text-[#ff8800f6]'> <span>$ </span>___</h1>

                </div>
                <div className=' uppercase max-w-[100%] flex justify-between'>
                    <h1 className='font-mono font-bold tracking-[1px] text-[15px] text-[#ff8800f6]'>
                        Tax
                    </h1>
                    <h1 className=' font-mono font-bold tracking-[4px] my-auto text-[15px] text-[#ff8800f6]'> <span>$ </span>___</h1>

                </div>
                <div className=' uppercase max-w-[100%] flex justify-between'>
                    <h1 className='font-mono font-bold tracking-[6px] text-[25px] text-[#ff8800f6]'>
                        Total
                    </h1>
                    <h1 className=' font-mono font-bold tracking-[4px] my-auto text-[15px] text-[#ff8800f6]'> <span>$ </span> 4000</h1>

                </div>
                <div className='mx-auto w-[80%] justify-center flex'>
                    <input type="button" value="Checkout" className='w-[60%] h-[30px] rounded-md border border-emerald-200 hover:scale-95 duration-300 drop-shadow-lg  ease-out mx-auto justify-center bg-[#ff8800f6]' />

                </div>
            </div>
        </div>

    )
}

export default Checkout