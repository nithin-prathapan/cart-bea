import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { db, storage } from '../firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirm } from 'react-confirm-box';
import { Link } from 'react-router-dom'

const Admin = () => {
    


    //================delete products ================//
  
    // const [title, setTitle] = useState('')
    // const [price, setPrice] = useState('')
    // const [description, setDEscription] = useState('')
    // const [ratings, setRatings] = useState('')
    // const [file, setFile] = useState(null)
    // console.log(title, description, ratings, file, price);
    // const data = {
    //     title: title,
    //     price: price,
    //     description: description,
    //     image: file,
    //     ratings: ratings
    // }
    // const handleChange = (event) => {
    //     event.preventDefault()
    //     setFile(event.target.files[0])
    // }
    // const uploadImage = () => {
    //     if (file == '') {
    //         alert('please add any images to upload')
    //     }
    //     const storageRef = ref(storage, `images/${file.name}`)
    //     const uploadTask = uploadBytesResumable(storageRef, file)
    //     uploadTask.on('state_changed', (snapshot) => {
    //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         setUploadProgress(progress)
    //     },
    //         (error) => {
    //             console.log(error);
    //         },
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
    //             })
    //         }
    //     )
    // }
    // const addProducts = e => {
    //     e.preventDefault();
    //     try {
    //         const docRef = collection(db, 'products')
    //         const storageRef = ref(storage, `images/${file.name}`)
    //         uploadBytes(storageRef, file).then((snapshot) => {
    //             console.log(snapshot);
    //             getDownloadURL(snapshot.ref).then((downloadURL) => {
    //                 addDoc(docRef, {
    //                     title: title,
    //                     price: price,
    //                     description: description,
    //                     imageURL: downloadURL,
    //                     ratings: ratings
    //                 })
    //                 console.log('document succesfully added');
    //             })
    //         })
    //     } catch (error) {

    //     }
    // }
    return (
        <div className='mt-[56px] mx-auto text-center'>
            <div className='w-full max-h-[50px] drop-shadow-lg mt-[50px] bg-[#ff1b6721] z-30 min-h-[70px]  mb-5 items-center px-4 justify-evenly flex text-[#24033f] uppercase  mx-auto font-bold'>
                <Link to="/adminp/dashboard"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Dashboard</h1></Link>
                <Link to="/adminp/allproducts"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>all products</h1></Link>
                <Link to="/adminp/orders"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Add Products</h1></Link>
                <Link to="/adminp/userlist"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>User's List</h1></Link>
            </div>
            
        </div>
    )
}

export default Admin