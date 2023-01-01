import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { orderBill } from '../redux/productSlice'
const PriceList = () => {
    const { totalAmount } = useSelector(state => state.products)
    const sum = totalAmount.reduce((a, b) => {
        return a + b
    })
    const discount = Math.round((12 / 100) * sum)
    const payAmount = sum - discount
    const dispatch = useDispatch()
    dispatch(orderBill(payAmount))
    return (

        <div className='max-w-[300px] ml-4 mx-auto'>

            <div className='mt-2 ml-1 drop-shadow-xl rounded-sm bg-[#fff] p-6  mx-auto flex-1 mr-2'>
                <div className='border-b'>
                    <h1 className='uppercase font-medium text-[#112636] text-xl'>Price Details</h1>
                </div>
                <div className="text-[#112636] font-semibold">
                    <div className="justify-between flex mt-4  text-[#112636]">
                        <h1>Price</h1>
                        <h1>{sum}</h1>
                    </div>
                    <div className="justify-between flex  mt-4 text-[#112636]">
                        <h1>Discount</h1>
                        <h1 className='text-green-400'>-{discount}</h1>
                    </div>
                    <div className="justify-between flex mt-4  text-[#112636] border-dashed border-b pb-2 border-b-emerald-900">
                        <h1>Delivery Charge</h1>
                        <h1 className='text-green-400'>FREE</h1>
                    </div>
                    <div className="justify-between flex mt-4 border-dashed text-[#112636] border-b pb-2 border-b-emerald-900 text-xl font-bold">
                        <h1>Total Amount</h1>
                        <h1 >{payAmount}</h1>
                    </div>
                    <div className="justify-between flex mt-4  text-[#112636]  pb-2">
                        <h1 className='text-green-400'>You have saved Rs. {discount} with this order</h1>
                    </div>
                    <Link to="checkout">
                        <button className='bg-green-400 pl-2 pr-2 pt-1 pb-1 text-sm rounded-md border border-black text-[#000000]'>Proceed To Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PriceList