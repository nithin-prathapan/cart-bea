import React from "react";
import "./styles.css";
import ruffle from "../images/ruffle.png";
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import Card from "./Card";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getProducts();

  }, []);

  return (


    <div className="mx-auto grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-[56px]">
      {products.map((product, id) => (
        <Card  key={id} product={product} />
      ))}


    </div>


  );
};

export default ProductList;
