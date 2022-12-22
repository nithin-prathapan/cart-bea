import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import 'react-toastify/dist/ReactToastify.css';
import { confirm } from 'react-confirm-box';
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");



  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getProducts();

  }, []);
  const deleteItem = async (id) => {
    confirm('Do you want to delete this document from database?')
    if (confirm) {
      await deleteDoc(doc(db, "products", id)).then(() => {
        console.log('document deleted');
      }).catch(error => console.log(error.message))
    }

  }


  return (
    <div className='mt-[56px]'>
      <div className='w-full max-h-[50px] drop-shadow-lg mt-[50px] bg-[#ff1b6721] z-30 min-h-[70px]  mb-5 items-center px-4 justify-evenly flex text-[#24033f] uppercase  mx-auto font-bold'>
        <Link to="/adminp/dashboard"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Dashboard</h1></Link>
        <Link to="/adminp/allproducts"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>all products</h1></Link>
        <Link to="/adminp/orders"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>Add Products</h1></Link>
        <Link to="/adminp/userlist"> <h1 className='duration-300 ease-in hover:bg-[#fee] cursor-pointer p-1 rounded-md'>User's List</h1></Link>
      </div>
      <h1 className='text-start w-[80%] mx-auto font-bold font-mono tracking-wider text-lg mb-2 uppercase underline '>all products</h1>
      <table className='mx-auto justify-center p-2 md:min-w-[800px] md:w-[700px]  sm:min-w-[500px]  max-h-[200px] mb-6 min-w-[500px]'>
        <tr className='bg-yellow-100 border ml-1 uppercase drop-shadow-md rounded-md '>
          <th className='ml-1 mr-1'>Image</th>
          <th className='ml-1 mr-1'>Title</th>
          <th className='ml-1 mr-1'>Rating</th>
          <th className='ml-1 mr-1'>Price</th>
          <th className='ml-1 mr-1'>Description</th>
          <th className='ml-1 mr-1'>Action</th>
        </tr>
        {products.map((product, id) => (
          <tr className='border-b mt-2 p-2 drop-shadow-md'>
            <td className='max-w-[120px] m-2 text-sm hover:scale-105 ease-out duration-300 font-mono drop-shadow-md'><img className='w-[80px] mx-auto' src={product.imageURL} alt="" /></td>
            <td className='max-w-[120px] text-sm font-mono'>{product.title}</td>
            <td className='max-w-[120px] text-sm font-mono'>{product.ratings}</td>
            <td className='max-w-[120px] text-sm font-mono'>{product.price}</td>
            <td className='max-w-[120px] text-sm font-mono'>{product.description}</td>
            <td className='max-w-[120px] text-sm cursor-wait font-mono hover:scale-105 duration-300 drop-shadow-lg'><button onClick={e => deleteItem(product.id)} className='bg-black text-yellow-500 font-semibold uppercase pl-1 pt-1 pb-1 pr-1 w-[70px] text-center my-auto rounded-md text-sm justify-center'>Delete</button></td>
          </tr>
        ))}

      </table>
    </div>
  )
}

export default AllProducts