'use client'
import React from 'react'
import Image from "next/image";
import Products from '../DB/PRODUCTS';
import { useCartCount } from "../CONTEXT/CONTEXT";
import { useCart,CartItem} from '../CONTEXT/CARTCONTEXT';

export default function AllSection() {
  const { addToCart,cartItems } = useCart();
  const { setNewCartCount } = useCartCount();
  const handleAdd = (item: any) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.productNumber === item[7]);
    if (existingCartItem) {
      alert('Item is already added to the cart');
    } else {
      const cartItem: CartItem = {
        picture: item[0],
        name: item[1],
        category: item[2],
        price: item[3],
        discount: item[4],
        gender: item[5],
        priority: item[6],
        productNumber: item[7],
        quantity: '1',
      };
      addToCart(cartItem);
      setNewCartCount(calculateItems(cartItems)+1);
      alert('Item added to cart');
    }
  };
  const calculateItems = (cart: any[]) => {
    return cart.length;
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-full w-[88%] flex flex-wrap mx-auto mt-[5%]">
        {Products.map((product, index) => (
          <div key={index} className="w-[22%] h-[15%] mx-auto mt-[3%]">
            <div className="mx-[9%] h-full ">
              <div className="h-[70%] w-full bg-teal-700 flex shadow-sm hover:shadow-xl hover:w-[98%] hover:h-[68%] transition-all duration-200 ease-in-out  mix-blend-multiply cursor-pointer rounded-sm hover:rounded-lg hover:ring-2 ring-lime-400 " onClick={()=>handleAdd(product)}>
                <Image
                  src={product[0]}
                  width={600}
                  height={600}
                  alt="sc4i"
                  style={{ width: "100%", height: "100%" }}
                ></Image>
              </div>
              <h6 className="scroll-m-20 text-xs md:text-lg lg:text-xl font-bold tracking-[0.02em] mt-[2%] flex">
                {product[1]}
              </h6>
              <h6 className="scroll-m-20 opacity-75 text-xs md:text-lg lg:text-lg font-semibold tracking-[0.02em] mt-[2%] flex">
                {product[2]}
              </h6>
              <h6 className="scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%] flex">
                ${product[3]}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
