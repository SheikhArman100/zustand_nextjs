"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  addToCheckout,
  decreaseQuantity,
  increaseQuantity,
  useCart,
  useCartStore,
} from "../Store/cartStore";
import Modal from "../components/Modal";

const Cart = () => {
  const cart = useCart();

  const totalPrice = useMemo(
    () =>
      cart
        ?.filter((product) => product.addToCheckout)
        .reduce((sum, product) => sum + parseInt(product.totalPrice), 0),
    [cart]
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1 mt-2  py-3 flex flex-col-reverse md:flex-row md:justify-between justify-end gap-x-2 px-3 sm:px-[3rem]  lg:px-[6rem]">
      {/* --------------------------cart----------------------------------------- */}
      <div className="md:w-[70%] w-full h-full px-4 py-2  flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Cart</h3>
        </div>
        <div className="border p-2 rounded-md">
          <table className=" table-xs sm:table ">
            {/* head */}
            <thead className="text-xs sm:text-sm">
              <tr className="border-b border-b-gray-200">
                <th>Select</th>
                <th className=" font-semibold text-gray-600">Product</th>
                <th className=" font-semibold text-gray-600">
                  Quantity
                </th>
                <th className=" font-semibold text-gray-600">Price</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart?.map((item) => (
                <tr className="border-gray-200" key={item.id}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs md:checkbox-sm lg:checkbox-md"
                        checked={item.addToCheckout}
                        onChange={(e) => {
                          addToCheckout(item.id);
                        }}
                      />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-x-2">
                      <div className="avatar">
                        <div className=" rounded-lg h-8 w-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
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
                        <div className="font-bold text-xs sm:text-sm">{item.title}</div>
                        <div className="text-xs sm:text-sm opacity-50">{item.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="flex lg:items-center  flex-col lg:flex-row gap-y-1">
                    {/* --------------quantity button-------------- */}
                    <div className="btn-group items-center gap-x-1">
                      <button
                        className="btn btn-xs sm:btn-sm bg-transparent text-black border-gray-300 hover:text-white"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <p className="sm:leading-[2rem] leading-6 text-xs sm:text-sm bg-base-300 px-1 sm:px-3 lg:px-6 bg-transparent border ">
                        {item.quantity}
                      </p>
                      <button
                        className="btn btn-xs sm:btn-sm bg-transparent text-black border-gray-300 hover:text-white"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <Modal
                      heading="Delete the Item"
                      message={item.title}
                      cartId={item.id}
                    />
                  </td>
                  <td className="font-bold text-xs sm:text-sm">৳{item.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* -----------------------------checkout--------------------------------- */}
      <div className="md:w-[30%] w-full  h-full  flex flex-col gap-y-2 items-center">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Checkout</h3>
        </div>
        <div className="px-4 py-2 w-[70%] sm:w-[50%] md:w-full rounded-md border flex flex-col gap-y-4">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <h5 className="font-[500] text-gray-600">Subtotal</h5>
            <p className="font-bold">৳{totalPrice || 0}</p>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm ">
            <h5>Discount</h5>
            <p>৳0</p>
          </div>
          <div className="h-[0.05rem] bg-gray-400" />
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <h5 className="font-[500] text-gray-600">Total</h5>
            <p className="font-bold">৳{totalPrice || 0}</p>
          </div>

          <button className="py-2 bg-black text-white text-sm sm:text-base">Checkout now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
