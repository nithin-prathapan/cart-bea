import React, { useEffect } from 'react'
import { useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebase/config'
import { useNavigate } from 'react-router-dom';
import EditProduct from './EditProduct';
import { useRef } from 'react';
import { storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const AdminPanel = () => {
    const refer = useRef()
    const navigate = useNavigate()
    const dbRef = collection(db, "products");
    const [title, setTitle] = useState('')
    const [ratings, setRatings] = useState()
    const [price, setPrice] = useState('')
    const [id, setId] = useState(null)
    const [products, setProducts] = useState([])
    const [description, setDescription] = useState('')
    const [percent, setPercent] = useState(0);
    const [file, setFile] = useState("");
    const [urlPic, setUrlPic] = useState("")
    useEffect(() => {
        getProducts()
    }, [])
    const Link = scroll.Link

    //upload image
    const imageUpload = async () => {
        const storageRef = ref(storage, `/images/${file.name}`)
        await uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            console.log(snapshot.ref);
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
                setUrlPic(url)
            })
        });
    }
    console.log(urlPic);
    //edit item function
    const editItem = (id) => {
        console.log(id);
        setId(id)
        ref.current?.scrollIntoView({ behaviour: 'smooth' })
    }
    //delete item
    const deleteItem = async (id) => {
        await deleteDoc(doc(db, "products", id)).then(() => {
            console.log('document deleted');
        }).catch(error => console.log(error.message))
    }
    //get data in the firestore
    const getProducts = () => {
        getDocs(dbRef)
            .then((response) => {
                // console.log(response.docs);
                const proData = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
                setProducts(proData)
            })
            .catch(error => console.log(error.message))
    }
    console.log(products);
    const data = {
        title: title,
        ratings: ratings,
        price: price,
        description: description,
        imageUrl: urlPic
    };
    const addDocument = async (e) => {
        e.preventDefault()
        imageUpload()
        addDoc(dbRef, data)
            .then(dbRef => {
                console.log("Document has been added successfully", dbRef);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='mt-[50px] bg-[#ffffffb9] p-6 border border-black'>
            <div className="heading mx-auto text-center font-mono font-bold text-2xl tracking-widest text">
                <h1 className=''>Admin Dashboard Cart-Bae</h1>
            </div>
            <div className="form flex text-center bg-gray-900 w-full min-h-[500px] mx-auto justify-center items-center text-[#fee]">
                <form onSubmit={addDocument} className='block'>
                    <h1 className='mb-2 font-semibold uppercase mt-2 border'>Title</h1>
                    <input className='bg-[#ffffff1a] rounded-md min-w-[300px]' type="text" onChange={(e) => setTitle(e.target.value)} />
                    <h1 className='mb-2 font-semibold uppercase mt-2 border'>Price</h1>
                    <input className='bg-[#ffffff1a] rounded-md min-w-[300px]' type="text" onChange={(e) => setPrice(e.target.value)} />
                    <h1 className='mb-2 font-semibold uppercase mt-2 border'>Ratings</h1>
                    <input className='bg-[#ffffff1a] rounded-md min-w-[300px]' type="text" onChange={(e) => setRatings(e.target.value)} />
                    <h1 className='mb-2 font-semibold uppercase mt-2 border'>Product Description</h1>
                    <input className='bg-[#ffffff1a] rounded-md min-w-[300px]' type="text" onChange={(e) => setDescription(e.target.value)} />
                    <div className='flex'>

                        <input onChange={(e) => setFile(e.target.files[0])} className='cursor-pointer mt-4  mb-2 ' type="file" />

                        {/* <button onClick={imageUpload}>upload image</button> */}
                    </div>
                    <div className='block'>
                        <button type='Submit' className='mb-2 font-semibold uppercase mt-2 border p-2 w-[100px] rounded-md '>Submit</button>
                    </div>
                </form>
            </div>
            <div className="h-[100%] mx-auto grid gap-y-2 gap-x-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#080000]">
                {products.map((product) => (
                    <div key={product.id}
                        id="border-right"
                        className="text-[#fee] justify-center py-4 px-4 items-center m-5 mx-auto 
                                       bg-[#000300d2] hover:bg-[#00030057] hover:drop-shadow-xl h-full max-w-[240px] border
                                         ease-in-out duration-500 hover:-translate-y-3
                                             border-r rounded-r-md border-r-gray-50 {border-b}after:50% ">
                        <div
                            id="image-container"
                            className="max-w-[240px] h-[100%] mx-auto grid "
                        >
                            <img
                                id="img"
                                src=''
                                alt=""
                                className="h-36 w-36 mx-auto hover:scale-105 duration-300 transform hover:-translate-y-1 cursor-pointer"
                            />

                            <h1 className="mx-auto items-center justify-center text-center uppercase hover:text-yellow-500 cursor-pointer">
                                {product.data.title}
                            </h1>
                            <h3 className="mx-auto items-center justify-center text-center hover:text-yellow-500 cursor-pointer">
                                Price : <span>$ {product.data.price}</span>
                            </h3>
                            <h1 className="mx-auto items-center justify-center text-center hover:text-yellow-500 cursor-pointer">
                                Rating :<span>⭐⭐⭐⭐⭐</span>
                            </h1>
                            <p className="mx-auto items-center max-w-[90%] object-contain text-centere justify-center text-center w-full hover:text-yellow-500 cursor-pointer">
                                {product.data.description}
                            </p>
                            <div className="flex">
                                <button onClick={(e) => { deleteItem(product.id) }}
                                    className="bg-[#1fff1700] hover:bg-[#00000077] 
                                             ease-in-out duration-200 hover:scale-105 text-sm  uppercase py-1 font-medium w-[100%] max-w-[80px] max-h-8
                                             mx-auto mt-3 rounded-md text-[#fee] border-none">
                                    Delete
                                </button>
                                <button
                                    className="bg-[#3609fd00] hover:bg-[#00000077] 
                                             ease-in-out duration-200 hover:scale-105 text-sm uppercase  py-1 font-medium w-[100%] max-w-[80px] max-h-8
                                             mx-auto mt-3 rounded-md text-[#fee] border-none"
                                    onClick={(e) => { editItem(product.id) }}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <EditProduct id={id} ref={ref} />
        </div>
        // admi addproduct
        //     <form className='grid grid-cols-1 w-96 m-8 mx-auto' >
        //     <input type="text" name="" id="" placeholder='ENTER TITLE' className='text-center mt-4 mb-1 rounded-sm' value={title} onChange={e => setTitle(e.target.value)} />
        //     <input type="text" name="" id="" placeholder='ENTER RATINGS' className='text-center mt-4 mb-1 rounded-sm' value={ratings} onChange={e => setRatings(e.target.value)} />
        //     <input type="text" name="" id="" placeholder='ENTER PRICE' className='text-center mt-4 mb-1 rounded-sm' value={price} onChange={e => setPrice(e.target.value)} />
        //     <input type="text" name="" id="" placeholder='ENTER DESCRIPTION' className='text-center mt-4 mb-1 rounded-sm' value={description} onChange={e => setDEscription(e.target.value)} />
        //     <input type="file" onChange={e => setFile(e.target.files[0])} />
        //     <button type="submit" onClick={addProducts}>Add Products</button>
        // </form>
    )
}
export default AdminPanel
