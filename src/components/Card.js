import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { increment, showDetails } from '../redux/productSlice'
const Card = ({ product, id }) => {
    const { productDetail } = useSelector(state => state.products)
    console.log(productDetail);
    const navigate = useNavigate()
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
    const proDetails = (e) => {
        e.preventDefault()
        dispatch(showDetails(product))
        navigate('productDetails')
    }
    return (
        <div key={id} className='bg-[#ffffff38] min-w-[210px] max-w-[210px] mt-10 drop-shadow-lg min-h-[310px] max-h-[310px]  rounded-md mx-auto'>
            <div className=" min-h-[120px] max-h-[120px]" >
                <img onClick={proDetails} src={product.imageURL} alt="product-image" className='min-w-[100px] cursor-pointer max-w-[100px] drop-shadow-md  hover:scale-105 duration-300 -translate-y-6 mx-auto ' />
            </div>
            <div className="p-2  min-h-[100px] max-h-[100px] mt-4">
                <h1 className='text-center font-mono font-semibold text-sm uppercase text-[#ffff]  tracking-tighter '>{product.title}</h1>
                <p className='text-center mt-2 line-clamp-1 text-[#ffff] text-sm '><span className='normal-case font-normal'>Auther : </span>{product.auther}</p>
                {/* <p className='mt-1 text-center text-ellipsis line-clamp-3 leading-3 font-normal text-xs '>{product.description}</p> */}
            </div>
            <div className='w-full flex mx-auto justify-center '>
                <button className='text-[10px] mb-1 p-1 w-[100%] rounded-sm drop-shadow-2xl hover:scale-105 duration-300 ease-in-out mt-1 font-semibold bg-yellow-600 uppercase' onClick={e => addToCart(product)}>Add to Cart</button>
            </div>
            <div className="flex text-xs items-center p-1 justify-between rounded-b-md h-10   drop-shadow-md max-w-[300px]">
                <p className='text-[#ffff]'><span>Rs. </span>{product.price}</p>
                <p className='text-[#ffff]'>{product.category}</p>
            </div>
        </div>
    )
}
export default Card