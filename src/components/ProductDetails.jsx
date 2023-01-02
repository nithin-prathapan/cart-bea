import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../firebase/config'
import image from '../images/bag.png'


const ProductDetails = () => {
    const { productId } = useSelector(state => state.products)
    console.log(productId);

    //=============get product with id===============//
    const [products, setProducts] = useState([]);
    const productsCollectionRef = doc(db, "products", productId);
    useEffect(() => {
        const getProducts = async () => {
            const data = await getDoc(productsCollectionRef);
            console.log(data.data());
            setProducts(data.data())
        }
        getProducts();

    }, []);
    return (
        < div className='mt-[56px] text-[#ffffff] flex sm:block' >
            <div className='md:w-[60%] sm:w-[full]'>
                <img className='p-4 w-[500px]' src={products.imageURL} alt="" />
                <h1 className='mt-4 text-left m-4 mb-4'>{products.description}</h1>
            </div>
            <div className='md:w-[40%] h-[100%] sm:min-w-[full] uppercase border m-2 p-3 rounded-sm '>
                <div className='flex justify-between mt-6 pl-1 pr-1'>
                    <h1>Title  </h1>
                    <h1>{products.title}</h1>
                </div>
                <div className='flex justify-between mt-6 pl-1 pr-1'>
                    <h1>Release Date  </h1>
                    <h1>{products.release_date}</h1>
                </div>
                <div className='flex justify-between mt-6 pl-1 pr-1'>
                    <h1>Price</h1>
                    <h1>{products.price}</h1>
                </div>
                <div className='flex justify-between mt-6 pl-1 pr-1'>
                    <h1>Category</h1>
                    <h1>{products.category}</h1>
                </div>
                <div className='flex justify-between mt-6 pl-1 pr-1 mb-6'>
                    <h1>Pages</h1>
                    <h1>{products.pages}</h1>
                </div>
                <div className='flex justify-between mt-6 pl-1 pr-1 mb-6'>
                    <h1>Auther</h1>
                    <h1>{products.auther}</h1>
                </div>
                <button className='text-[15px] text-black mb-1 p-1 w-[100%] rounded-sm drop-shadow-2xl hover:scale-105 duration-300 ease-in-out mt-1 font-semibold bg-yellow-600 uppercase'>Add to Cart</button>

            </div>
        </div >
    )
}

export default ProductDetails