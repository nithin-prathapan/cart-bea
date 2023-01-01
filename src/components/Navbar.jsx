import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { GiShoppingCart } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Navbar = () => {
  //========================datas in the store==================//
  const { isLoggedIn } = useSelector((state) => state.user)
  const { totalQuantity } = useSelector(state => state.products)
  //========================datas in the store==================//
  return (
    <div className='w-full bg-[#1d0227] h-[56px] fixed top-0 justify-between text-[#fee] items-center flex z-30 '>
      <div className='left-section my-auto min-w-[130px]'>
        <h1 className='ml-4 font-bold text-xl uppercase'>Cart-Bae</h1>
      </div>
      <div className='search-bar w-full flex'>
        <input type="search" name="" id="" className='w-full outline-none text-[#000300] text-center' />
        <span className='min-w-[25px] rounded-sm items-center bg-yellow-400 '><HiSearch color='#000300' size={23} className="cursor-pointer" /></span>
      </div>
      <div className='right-section flex w-full font-medium items-center my-auto mx-auto p-2 justify-evenly uppercase text-xs '>
        <div className='flex justify-evenly w-full -flex-1'>
          <Link to='/'>
            <h1 className='cursor-pointer'>Home</h1>
          </Link>
          <Link to='about'>
            <h1 className='cursor-pointer sm:hidden'>About</h1>
          </Link>
        </div>
        {
          isLoggedIn ? (<div className='flex justify-evenly w-full my-auto items-center'>
            <p className=''>Welcome</p>
            {
              totalQuantity > 0 ? (
                <Link to='viewcart'>
                  <div>
                    <span className='text-[#fee] '><GiShoppingCart size={25} className="-mb-1 inline" color="#fee" /><p className='inline'>{totalQuantity}</p></span>
                  </div>
                </Link>
              ) : (<div>
                <p></p>
              </div>)
            }
          </div>) : (
            <div className='flex justify-evenly w-full'>
              <Link to='signin'>
                <h1 className='cursor-pointer'>Sign in</h1>
              </Link>

              <Link to='login'>
                <h1 className='cursor-pointer'>Login</h1>
              </Link>
            </div>
          )
        }

      </div >

    </div >
  )
}

export default Navbar