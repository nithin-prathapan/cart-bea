import React from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import { BiMinusCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { decrement, increment, removeFromCart } from '../redux/productSlice'
const CartItem = ({ item, id }) => {
    const { totalQuantity } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const increaseQuantity = () => {
        dispatch(increment(item))
    }
    const decreaseQuantity = () => {
        if (totalQuantity > 0) {
            dispatch(decrement(item))
        } 
    }
    const removeItem = () => {
        dispatch(removeFromCart(item))
        toast.success("Removed from cart")
    }
    return (
        <div key={id} className='grid grid-cols-2  w-full min-w-[60%] border border-black p-2 mt-2 ml-2 min-h-[200px] rounded-md bg-[#fee] drop-shadow-md'>
            <div className='w-full block'>
                <img src={item.imageURL} alt={item.title} className='max-w-[80px] ml-4 mt-2' />
                <div className="flex items-center max-w-[100px] justify-evenly ml-1 mt-5 mb-5">
                    <BiPlusCircle size={28} onClick={increaseQuantity} />
                    <h1 className='border rounded-full pl-2 pr-2  bg-black text-white'>{item.quantity}</h1>
                    <BiMinusCircle size={28} onClick={decreaseQuantity} />
                </div>
            </div>
            <div className='mr-4 text-center  '>
                <h1 className='font-semibold uppercase'>{item.title}</h1>
                <p className='mt-2  font-semibold line-clamp-2 text-xs'>{item.description}</p>
                <p className='mt-2  font-semibold line-clamp-2 text-xs'><span>Total : </span>{item.totalPrice}</p>
                <p className='mt-4 text-center'><span>Quantity : </span>{item.quantity}</p>
                <button className='text-xl items-center mx-auto uppercase font-semibold'
                    onClick={removeItem}
                >Remove</button>
            </div>
        </div>
    )
}
export default CartItem