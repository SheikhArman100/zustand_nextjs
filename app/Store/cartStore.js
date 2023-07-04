import { create } from "zustand";
import { persist } from "zustand/middleware";

const cartStore = () => {
  cart: [];
};
export const useCartStore = create(
  persist(cartStore, {
    name: "cartValue",
  })
);

//export state----->
export const useCart = () => useCartStore((state) => state.cart);

//create actions and export it
export const addToCart = (product) => {
  useCartStore.setState((state) => ({
    cart: !state.cart?[product]:[product,...state.cart]
  }));
};

export const addToCheckout=(cartId)=>{
    useCartStore.setState((state)=>({
        cart: state.cart.map((item)=>item.id===cartId?{...item,addToCheckout:!item.addToCheckout}:item)
        
    }))

}
export const increaseQuantity=(cartId)=>{
    useCartStore.setState((state)=>({
        cart: state.cart.map((item)=>item.id===cartId?{...item,quantity:item.quantity+1,totalPrice:item.price*(item.quantity+1)}:item)
        
    }))

}
export const decreaseQuantity=(cartId)=>{
    useCartStore.setState((state)=>({
        cart: state.cart.map((item)=>item.id===cartId?{...item,quantity:item.quantity>1?item.quantity-1:1,totalPrice:item.quantity>1?item.price*(item.quantity-1):item.price*1}:item)
        
    }))

}