import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import PriceList from './PriceList'
import boyReading from '../images/boyReading.png'
import { Link } from 'react-router-dom'


const ViewCart = () => {

    const { cartItems } = useSelector((state) => state.products)
    const { totalQuantity } = useSelector((state) => state.products)
    return (
        <div>
            <div className='bg-gray-900 w-[100%] sm:w-[100%] max-h-[200px] min-h-[200px] mb-4 mx-auto mt-[60px] flex'>
                <h1 className='justify-center flex mx-auto my-auto
                font-mono text-[35px] font-semibold z-30 text-[#eeff00] p-3 rounded-md pl-5 bg-[#ffeeee1a] uppercase tracking-[10px]
                '>Cart Items</h1>
                <img className='absolute w-[250px] right-[10%] z-10' src={boyReading} alt="" />
            </div>
            {
                totalQuantity === 0 ? (
                    <div className='items-center text-center mt-[56px]'>
                        <h1 className='text-3xl uppercase mb-6 mt-6 font-semibold'>Cart is empty</h1>
                        <p className='mb-6 uppercase font-medium'>Please add items for placing an order</p>
                        <Link to='/'><p className='mb-6 font-medium cursor-pointer hover:text-[#0400ff]'>Click here to see products</p>
                        </Link>
                    </div>
                ) :
                    (
                        <div className='flex mt-[60px]  w-full mb-[400px]'>
                            <div className='block max-w-[60%] '>
                                {
                                    cartItems.map((item) => (
                                        <CartItem item={item} id={item.id} />
                                    ))
                                }
                            </div>
                            <div className=''>
                                <PriceList />

                            </div>
                        </div>
                    )
            }
        </div>
    )
}
export default ViewCart