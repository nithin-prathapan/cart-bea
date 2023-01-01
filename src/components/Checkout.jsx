import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import boyReading from '../images/boyReading.png'
import { useState } from 'react'
import { placeOrder } from '../redux/productSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [state, setState] = useState('')
    const [landMark, setLandMark] = useState('')
    const [addres, setAddres] = useState('')
    const [pinCode, setPincode] = useState('')
    //==================Data from store=======================//
    const { totalQuantity } = useSelector((state) => state.products)
    const { orderBill } = useSelector((state) => state.products)
    const { orderItem } = useSelector((state) => state.products)
    //==================Data from store=======================//
    const billingData = {
        name: name,
        email: email,
        number: number,
        state: state,
        landMark: landMark,
        address: addres,
        pinCode: pinCode
    }
    const placeOrders = (e) => {
        e.preventDefault()
        if (billingData.address === "" && billingData.email === "" && billingData.name === "") {
            toast.warning('please add your contact details')
            return
        } else {
            dispatch(placeOrder(billingData))
            toast.success('Your order has been successfully placed')
            navigate('/')
        }


    }
    return (
        <div className='mt-[56px]'>
            <div className='bg-gray-900 w-[98%] sm:w-[96%] max-h-[200px] min-h-[200px] mb-4 mx-auto mt-[60px] flex'>
                <h1 className='justify-center flex mx-auto my-auto
                font-mono text-[35px] font-semibold z-30 text-[#eeff00] p-3 rounded-md pl-5 bg-[#ffeeee1a] uppercase tracking-[10px]
                '>Checkout</h1>
                <img className='absolute w-[250px] right-[10%] z-10' src={boyReading} alt="" />
            </div>
            <div className='mt-4 mr-3 ml-3 bg-gray-600 h-full p-3'>
                <h1 className='text-black font-semibold font-mono underline uppercase text-xl leading-3 ml-6'>Billing Information</h1>
            </div>
            <div className='mr-3 ml-3 bg-gray-600 h-full p-3 mb-1 flex' >
                <div className='w-full'>
                    <form className='w-full '>
                        <input className='block ml-6 m-3 rounded-md outline-none text-center min-w-[50%] max-w-[300px] h-8  text-[#000300]' placeholder='Enter Your Name' type="text" name="" id="" value={name} onChange={e => setName(e.target.value)} />
                        <input className='block ml-6 m-3 rounded-md outline-none text-center min-w-[50%] max-w-[300px] h-8  text-[#000300]' placeholder='Enter Your Email' type="text" name="" id="" value={email} onChange={e => setEmail(e.target.value)} />
                        <input className='block ml-6 m-3 rounded-md outline-none text-center min-w-[50%] max-w-[300px] h-8  text-[#000300]' placeholder='Enter Your Phone number' type="text" name="" id="" value={number} onChange={e => setNumber(e.target.value)} />
                        <input className='block ml-6 m-3 rounded-md outline-none text-center min-w-[50%] max-w-[300px] h-8  text-[#000300]' placeholder='Enter Your State' type="text" name="" id="" value={state} onChange={e => setState(e.target.value)} />
                        <input className='block ml-6 m-3 rounded-md outline-none text-center min-w-[50%] max-w-[300px] h-8  text-[#000300]' placeholder='Enter Your Home Address' type="text" name="" id="" value={addres} onChange={e => setAddres(e.target.value)} />
                        <input className='block ml-6 m-3 rounded-md outline-none text-center min-w-[50%] max-w-[300px] h-8  text-[#000300]' placeholder='Enter Your Land-Mark' type="text" name="" id="" value={landMark} onChange={e => setLandMark(e.target.value)} />
                        <input className='block ml-6 m-3 rounded-md outline-none text-center min-w-[50%] max-w-[300px] h-8  text-[#000300]' placeholder='Enter Your Pin-Code' type="text" name="" id="" value={pinCode} onChange={e => setPincode(e.target.value)} />
                    </form>
                    <button className='mt-4 ml-6 bg-green-400 text-[#060a1f] font-semibold p-1 pl-1 pr-1 w-[50%] rounded-md' onClick={placeOrders}>Place an order</button>
                </div>

            </div>
        </div>
    )
}

export default Checkout