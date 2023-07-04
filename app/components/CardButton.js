"use client";
import { useState,useMemo } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { addToCart, useCart } from "../Store/cartStore";

const CardButton = ({ image, title, type, price }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const cart=useCart()

   const findProduct = useMemo(() => cart?.find((p) => p.title === title) , [cart]);


  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      //add to cart function
      addToCart({
        id: Math.ceil(Math.random() * 1000000),
        image: image,
        title: title,
        type: type,
        quantity: 1,
        price: price,
        totalPrice:price,
        addToCheckout: false,
      });

      setIsLoading(false);

      setIsAdded(true);
    }, 2000);
  };
  return (
    <button
      className="p-1 bg-green-400 my-auto rounded-md text-white text-xs md:text-sm hidden group-hover:block"
      disabled={isAdded || findProduct}
      onClick={handleClick}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs  "></span>
      ) :isAdded ||findProduct  ? (
        <span className="flex items-center justify-center gap-x-1">
          <AiOutlineCheck size={20} /> Added
        </span>
      ) : (
        <span>Add to cart</span>
      )}
    </button>
  );
};

export default CardButton;
