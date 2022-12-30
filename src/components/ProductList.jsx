import "./styles.css";
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from "firebase/firestore";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductList = () => {
  //=============FETCH DATA FROM FIREBASE=================//
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getProducts();

  }, []);
  //==========slider settings=================//
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
    
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
    
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (


    <div className="mb-8 mx-auto ">
      <h1 className="mx-auto text-center text-xl font-semibold font-mono uppercase mt-6 border-b-2 border-b-[#000000] drop-shadow-md">Novels</h1>
      <Slider {...settings} className="sm:max-w-[600px]">
        {products.filter((item) => item.category === "Novels").map((product, id) => (
          <Card key={id} product={product} />
        ))}
      </Slider>
      <h1 className="mx-auto text-center text-xl font-semibold font-mono uppercase mt-6 border-b-2 border-b-[#000000] drop-shadow-md">SElf helping</h1>
      <Slider {...settings} className="sm:max-w-[600px]">
        {products.filter((item) => item.category === "Motivational").map((product, id) => (
          <Card key={id} product={product} />
        ))}
      </Slider>
    </div>
  )

};

export default ProductList;
