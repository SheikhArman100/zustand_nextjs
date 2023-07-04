"use client"
import React from 'react'
import { useCart } from '../Store/cartStore'

const CartNumber = () => {
    const cart=useCart()
  return (
    <>
    <span className="absolute py-0.5 px-1.5 rounded-full text-[0.5rem] bg-black text-white -top-2 -right-2">
            {!cart?0:cart.length}
    </span>
    </>
  )
}

export default CartNumber