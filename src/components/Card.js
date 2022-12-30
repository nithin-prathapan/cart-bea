import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { increment } from '../redux/productSlice'
const Card = ({ product, id }) => {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector((state) => state.user)
    const addToCart = () => {
        if (isLoggedIn) {
            dispatch(increment(product))
            toast.success('Added to cart', {
                toastId: 'success1',
            })
        } else {
            toast.info("Please Login First")
        }
    }
    return (
        <div key={id} className='bg-[#ffffff] min-w-[300px] max-w-[300px] mt-16 drop-shadow-lg min-h-[400px] max-h-[400px] border-b rounded-md mx-auto'>
            <div className=" min-h-[220px] max-h-[220px]" >
                <img src={product.imageURL} alt="product-image" className='min-w-[150px] max-w-[150px] drop-shadow-lg z-30 hover:scale-105 duration-300 -translate-y-6 mx-auto ' />
            </div>
            <div className="p-2 bg-[#eeff007c] min-h-[120px] max-h-[120px]">
                <h1 className='text-center font-mono font-semibold underline text-lg uppercase leading-6 tracking-tighter '>{product.title}</h1>
                <p className='text-center line-clamp-1 font-medium text-sm leading-4 uppercase'><span className='normal-case font-normal'>Auther : </span>{product.auther}</p>
                <p className='mt-1 text-center text-ellipsis line-clamp-3 leading-3 font-normal text-xs '>{product.description}</p>
            </div>
            <input type="button" value="Add To Cart" onClick={e => addToCart(product)}
                className='fixed text-center ml-[35%] text-xs uppercase font-semibold text-[#fee] bg-[#000000] pl-2 pr-2 pt-2 pb-2 cursor-pointer hover:text-[#ef0] rounded-lg translate-y-4 z-30 ' />

            <div className="flex text-xs items-center p-1 justify-between rounded-b-md h-10  border-t-[1px] border-t-[#000300]  drop-shadow-md max-w-[300px]">
                <p><span>Rs. </span>{product.price}</p>
                <p>{product.category}</p>
            </div>
        </div>
    )
}
export default Card