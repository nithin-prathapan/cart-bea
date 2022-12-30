import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import PriceList from './PriceList'

const ViewCart = () => {
    const { cartItems } = useSelector((state) => state.products)
    console.log(cartItems);
    return (
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
export default ViewCart