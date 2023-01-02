import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config'
import { storage } from "../firebase/config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const Dashboard = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [auther, setAuther] = useState('')
    const [pages, setPages] = useState('')
    const [price, setPrice] = useState('')
    const [releaseDate, setREleaseDate] = useState('')
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState('')
    const data = {
        title: title,
        price: price,
        category: category,
        auther: auther,
        description: description,
        imageURL: file,
        pages: pages

    }
    //==============ADD PRODUCTS ====================//
    const addProducts = e => {
        e.preventDefault();
        try {
            const docRef = collection(db, 'products')
            const storageRef = ref(storage, `images/${file.name}`)
            uploadBytes(storageRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    addDoc(docRef, {
                        title: title,
                        price: price,
                        pages: pages,
                        category: category,
                        auther: auther,
                        release_date: releaseDate,
                        description: description,
                        imageURL: downloadURL,
                    })
                    console.log('document succesfully added');
                })
            })
        } catch (error) {

        }
    }
    //=================================================================//

    return (
        <div className='mt-[56px] text-center'>
            <div className='w-full max-h-[50px] drop-shadow-lg mt-[50px] bg-[#ff1b6721] z-30 min-h-[70px]  mb-5 items-center px-4 justify-evenly flex text-[#24033f] uppercase  mx-auto font-bold text-center'>
                <Link to="/adminp/dashboard"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Dashboard</h1></Link>
                <Link to="/adminp/allproducts"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>all products</h1></Link>
                <Link to="/adminp/orders"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Orders</h1></Link>
                <Link to="/adminp/userlist"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>User's List</h1></Link>
            </div>
            <h1 className='text-start w-[80%] mx-auto font-bold font-mono tracking-wider text-lg mb-2 uppercase underline '>Add Products to the database</h1>
            <form className='mb-8'>
                <p className='text-left mx-auto w-[80%]'> Product Title</p>
                <input type="text" name="title" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto w-[80%] h-8 rounded-md p-4  '
                    placeholder='One Hundred Years Of Solitude' value={title} onChange={e => setTitle(e.target.value)} />
                <p className='text-left mx-auto w-[80%]'>Auther</p>
                <input type="text" name="" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto w-[80%] h-8 rounded-md p-4  '
                    placeholder='Gabriel Garcia Marquez' value={auther} onChange={e => setAuther(e.target.value)} />
                <p className='text-left mx-auto w-[80%]'>Pages</p>
                <input type="text" name="" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto w-[80%] h-8 rounded-md p-4  '
                    placeholder='Pages Number' value={pages} onChange={e => setPages(e.target.value)} />
                <p className='text-left mx-auto w-[80%]'>Release Date</p>
                <input type="text" name="" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto w-[80%] h-8 rounded-md p-4  '
                    placeholder='23 February 2023' value={releaseDate} onChange={e => setREleaseDate(e.target.value)} />
                <p className='text-left mx-auto w-[80%]'>Description</p>
                <input type="text" name="" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto w-[80%] h-8 rounded-md p-4  '
                    placeholder='Description...' value={description} onChange={e => setDescription(e.target.value)} />
                <div className="grid grid-cols-2 w-[80%] mx-auto">
                    <div className='min-w-[40%]'>
                        <p className=' mx-auto text-start min-w-[100%]'>Price</p>
                        <input type="text" name="" id="" className='outline-none border-[#f00] border-[.1px] block mb-4 mt-2 mx-auto max-w-[95%] md:min-w-full h-8 rounded-md p-4  '
                            placeholder='Rs. 100' value={price} onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div className='min-w-[40%] ml-2 '>
                        <p className=' mx-auto text-start min-w-[100%]'>Category</p>
                        <select className=' outline-none h-8 mt-2 my-auto text-center pb-1 bg-gray-200 uppercase border border-[#f00] w-full rounded-md '
                            name="" id="" value={category} onChange={e => setCategory(e.target.value)}>
                            <option>Fiction</option>
                            <option>Adventre</option>
                            <option>Fantacy</option>
                            <option>Motivational</option>
                            <option>Biography</option>
                            <option>Novels</option>
                        </select>
                    </div>
                </div>
                <p className='text-left mx-auto w-[80%]'>Product Image</p>
                <input type="file" className='justify-start mt-2 p-2 w-[80%] border-[1px] bg-white  border-[#f00] rounded-md'
                    onChange={e => setFile(e.target.files[0])} />
                <div className='w-[80%] mx-auto mt-4'>
                    <input onClick={addProducts} type="button" value="Add Products"
                        className='text-xs uppercase bg-[#0f140f] text-white w-[40%] mx-auto  drop-shadow-lg pl-2 pr-2 pt-2 pb-2 rounded-md block' />
                </div>
            </form>
        </div>
    )
}

export default Dashboard