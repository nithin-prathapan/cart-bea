import React from 'react'
import ReactTyped from 'react-typed'
import { FcGoogle } from 'react-icons/fc'

const Signin = () => {
  return (
    <div className='h-full w-full mt-6 py-3 m-2 justify-center items-center mx-auto px-4'>
      <h1 className="text-[#fee] text-3xl text-center justify-center items-center">Welcome To Cart-Bae</h1>
      <p className='text-green-400 font-semibold uppercase text-center my-2'>Lorem amet consectetur ? <span>
        <ReactTyped
          className="tracking-[6px]  text-gray-300 duration-600 ease-in-out"
          strings={['Official']}
          typeSpeed={80}
          backSpeed={70}
          loop={true}

        ></ReactTyped>
      </span>
      </p>
      <p className='text-[#f1f1f1] font-semibold uppercase text-xs text-center my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad!</p>
      <h1 className='text-[#fee] m-4 p-5 text-3xl  text-center justify-center items-center'>
        <ReactTyped
          className="tracking-[6px]  text-gray-300 duration-600 ease-in-out"
          strings={['Sign-UP']}
          typeSpeed={80}
          backSpeed={70}
          loop={true}


        ></ReactTyped>
      </h1>
      <form action="" className=' m-4 justify-center items-center'>
        <input className='block justify-center items-center mx-auto w-[300px] h-8 m-4 p-1.5 rounded-md' type="text" name="" id="" placeholder='Name' />
        <input className='block justify-center items-center mx-auto w-[300px] h-8 m-4 p-1.5 rounded-md' type="text" name="" id="" placeholder='Email' />
        <input className='block justify-center items-center mx-auto w-[300px] h-8 m-4 p-1.5 rounded-md' type="text" name="" id="" placeholder='Password' />
        <button className='block justify-center items-center mx-auto bg-green-400 text-center rounded-lg w-[300px] h-8 m-4 text-[#000] hover:font-medium hover:scale-105 duration-300 ease-in-out '>Submit</button>
      </form>
      <p className='text-[#f1f1f1] mx-auto font-semibold uppercase text-xs text-center mb-6 mt-6 max-w-[300px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <h4 className='text-[#f1f1f1] max-w-[300px] mx-auto font-semibold uppercase text-xs text-center mb-6 mt-6 bg-[#eeeeff5d] rounded-md p-2 cursor-pointer '>Sign In With Google <FcGoogle size={20} className='inline ml-1 my-auto bg-[#ffeeee] mx-auto rounded-full'/></h4>

    </div>
  )
}

export default Signin
