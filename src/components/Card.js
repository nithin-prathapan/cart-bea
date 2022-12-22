import React from 'react'
import Nike from '../images/Nike.jpeg'

const Card = ({ product, id }) => {
    return (
        <div key={id} className='bg-[#ffffff] w-96 mt-10 ml-6  rounded-md mb-6 drop-shadow-lg grid grid-cols-1'>
            <div className=" h-full relative" >
                <img src={product.imageURL} alt="product-image" className='max-w-96  max-h-56 mx-auto rounded-lg -translate-y-6 drop-shadow-xl bg-[#ffffff] hover:scale-110 duration-500 ease-in-out' />
            </div>
            <div className="headerText p-2 bg-[#fffece00] border-b">
                <h1 className='text-center font-mono font-semibold text-xl'>{product.title}</h1>
                <p className='text-center font-mono '>{product.description}</p>
            </div>
            <div className="flex items-center justify-between p-3 uppercase text-xs bg-[#ffffff50] ">
                <h6 className='font-semibold'>{product.price}</h6>
                <button className=' cursor-pointer uppercase font-bold'>Add to wishlist</button>
                <h6 className='font-semibold'>{product.ratings}</h6>
            </div>
        </div>
    )
}

export default Card