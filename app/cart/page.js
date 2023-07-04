"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addToCheckout, decreaseQuantity, increaseQuantity, useCart, useCartStore } from "../Store/cartStore";

const Cart = () => {
  const cart=useCart()

  

  
   const totalPrice=cart
  .filter(product => product.addToCheckout)
  .reduce((sum, product) => sum+parseInt(product.totalPrice), 0)
  

  
  

  
    
  
  
 
  
  


  return (
    <div className="flex-1 mt-2  py-3 flex justify-between gap-x-2 px-6 sm:px-[10rem]">
      {/* --------------------------cart----------------------------------------- */}
      <div className="w-[70%] h-full px-4 py-2  flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Cart</h3>
          <button className="text-sm font-medium border px-4 py-1 flex items-center gap-x-2">
            <RiDeleteBin6Line />
            Remove
          </button>
        </div>
        <div className="border p-2 rounded-md">
          <table className="table ">
            {/* head */}
            <thead >
              <tr className="border-b border-b-gray-200">
                <th>
                Select
                </th>
                <th className="text-sm font-semibold text-gray-600">Product</th>
                <th className="text-sm font-semibold text-gray-600">
                  Quantity
                </th>
                <th className="text-sm font-semibold text-gray-600">Price</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart?.map((item)=>
                <tr className="border-gray-200" key={item.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" checked={item.addToCheckout} onChange={(e)=>{addToCheckout(item.id)}}/>
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-x-2">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={item.image}
                          alt="cart image"
                          height={800}
                          width={800}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <div className="text-sm opacity-50">{item.type}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {/* --------------quantity button-------------- */}
                  <div className="btn-group items-center gap-x-1">
                    <button className="btn btn-sm bg-transparent text-black border-gray-300 hover:text-white" onClick={()=>decreaseQuantity(item.id)} >
                      -
                    </button>
                    <p className="leading-[2rem] bg-base-300 px-6 bg-transparent border ">{item.quantity}</p>
                    <button className="btn btn-sm bg-transparent text-black border-gray-300 hover:text-white" onClick={()=>increaseQuantity(item.id)} >
                      +
                    </button>
                  </div>
                  <br />
                  <button className="flex items-center  gap-x-2 mx-auto mt-1 font-medium ">
                    <RiDeleteBin6Line />
            Remove
                  </button>
                </td>
                <td className="font-bold">৳{item.totalPrice}</td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* -----------------------------checkout--------------------------------- */}
      <div className="w-[30%] border h-full px-4 py-2 rounded-md flex flex-col gap-y-4">
        <div className="flex items-center justify-between text-sm">
          <h5 className="font-[500] text-gray-600">Subtotal</h5>
          <p className="font-bold">৳{totalPrice}</p>
        </div>
        <div className="flex items-center justify-between text-sm ">
          <h5>Discount</h5>
          <p>৳0</p>
        </div>
        <div className="h-[0.05rem] bg-gray-400" />
        <div className="flex items-center justify-between text-sm">
          <h5 className="font-[500] text-gray-600">Total</h5>
          <p className="font-bold">৳{totalPrice}</p>
        </div>
        
        <button className="py-2 bg-black text-white">Checkout now</button>
      </div>
    </div>
  );
};

export default Cart;
