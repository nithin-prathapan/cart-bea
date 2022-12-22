import { doc, updateDoc } from 'firebase/firestore';
import React, { forwardRef, useEffect, useState } from 'react'
import { db } from '../firebase/config';

const EditProduct = ({ id }, ref) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [ratings, setRatings] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id);
        const data = {
            title: title,
            price: price,
            description: description,
            ratings: ratings
        }
        console.log(data);
        const docRef = doc(db, 'products', id)
        updateDoc(docRef, data)
            .then(response => console.log(response))
            .catch(error => console.log(error.message))
        console.log("this is id ", id);
    }


    return (
        <div className='mt-[300px] mb-[200px] my-auto  max-w-[500px] mx-auto'>
            <h1 ref={ref} className='text-center  text-3xl tracking-widest uppercase text-[#fee] font-bold mb-[15px] m-[50px]'>Edit Products</h1>
            <form onSubmit={handleSubmit} className='' >
                <div className=''>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" name="" id="" placeholder='Enter Title' className='block mt-[20px] mb-4 rounded-md min-w-[300px] h-10 mx-auto p-4 outline-none' />
                    <input onChange={(e) => setPrice(e.target.value)} type="text" name="" id="" placeholder='Enter Price' className='block mt-4 mb-4 rounded-md min-w-[300px] h-10 mx-auto p-4 outline-none' />
                    <input onChange={(e) => setRatings(e.target.value)} type="text" name="" id="" placeholder='Enter Ratings' className='block mt-4 mb-4 rounded-md min-w-[300px] h-10 mx-auto p-4 outline-none' />
                    <input onChange={(e) => setDescription(e.target.value)} type="text" name="" id="" placeholder='Enter Description' className='block mt-4 mb-4 rounded-md min-w-[300px] h-10 mx-auto p-4 outline-none' />
                </div>
                <div className='flex m-4 justify-center min-w-[300px] mx-auto'>
                    <button type='submit' className='uppercase text-center font-semibold hover:bg-green-500 duration-300 bg-green-400 rounded-md p-1  min-w-[300px] hover:text-[#fee] h-10 items-center mx-auto justify-center'>Submit</button>
                </div>

            </form>


        </div>
    )
}

export default forwardRef(EditProduct)