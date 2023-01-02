import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { GiShoppingCart } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/userSlice'
const Navbar = () => {
  //========================datas in the store==================//
  const { isLoggedIn } = useSelector((state) => state.user)
  const { totalQuantity } = useSelector(state => state.products)
  //========================datas in the store==================//
  const dispatch = useDispatch()
  const logoutUsers = () => {
    dispatch(logoutUser())
  }
  return (
    <div className='w-full bg-[#07010a] h-[56px] fixed top-0 justify-between text-[#fee] items-center flex z-30 '>
      <div className='left-section my-auto min-w-[120px] mr-1'>
        <Link to='/'>
          <h1 className='ml-4 cursor-pointer  font-bold text-xl'>Cart-<span className='text-[#fffb00] underline'>Bae</span></h1>
        </Link>
      </div>
      <div className='search-bar w-full flex'>
        <input type="search" name="" id="" className='w-full outline-none text-[#000300] text-center' />
        <span className='min-w-[25px] rounded-sm items-center bg-yellow-400 '><HiSearch color='#000300' size={23} className="cursor-pointer" /></span>
      </div>
      <div className="flex justify-between w-[20%] ml-4 mx-auto items-center">
        <div>
          <Link to='/'>
            <h1 className='cursor-pointer uppercase  text-xs '>Home</h1>
          </Link>
        </div >
        <div className='flex w-full'>
          {
            isLoggedIn ? (<div className='flex justify-evenly w-full my-auto items-center'>
              <p onClick={logoutUsers} className='cursor-pointer text-xs uppercase'>Logout</p>
              <Link to='viewcart'>
                <div className='min-w-[35px] ml-2 -mt-2'>
                  <span className='text-[#fee] '><GiShoppingCart size={25} className="-mb-1 inline" color="#fee" /><p className='inline ml-[1px]'>{totalQuantity}</p></span>
                </div>
              </Link>
            </div>) : (
              <div className='flex'>
                <Link to='signin'>
                  <h1 className='cursor-pointer ml-6 mr-6 uppercase  text-xs'>Sign in</h1>
                </Link>
                <Link to='login'>
                  <h1 className='cursor-pointer uppercase text-xs'>Login</h1>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </div >
  )
}
export default Navbar