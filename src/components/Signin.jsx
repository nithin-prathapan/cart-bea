import React from 'react'
import ReactTyped from 'react-typed'

const Signin = () => {
  return (
    <div className='h-full w-full mt-6 py-3 m-2 justify-center items-center mx-auto px-4'>
      <h1 className="text-[#fee] text-3xl text-center justify-center items-center">Welcome To Cart-Bae</h1>
      <p className='text-green-400 font-semibold uppercase text-center my-2'>Lorem amet consectetur ? <span><ReactTyped
        className="tracking-[6px]  text-gray-300 duration-300 ease-in-out"
        strings={['Official']}
        typeSpeed={80}
        backSpeed={70}
        loop={true}

      ></ReactTyped></span></p>
      <form action="" className='flex-wrap text-[#fee] mx-auto'>
        <input className='' type="text" name="" id="" placeholder=' Name' />
        <input className='' type="text" name="" id="" placeholder='Email' />
        <input className='' type="text" name="" id="" placeholder='Password' />
        <button className=''>Submit</button>
      </form>


    </div>
  )
}

export default Signin
