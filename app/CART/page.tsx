"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartCount } from "../CONTEXT/CONTEXT";
import { useCart } from "../CONTEXT/CARTCONTEXT";

export default function CartSection() {
  const { cartItems, updateCart } = useCart();
  const { setNewCartCount } = useCartCount();
  const [price, setPrice] = useState(0);
  const handleDecrease = (index: any) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index] && Number(updatedCart[index].quantity) > 1) {
      updatedCart[index].quantity = String(Number(updatedCart[index].quantity) - 1);
      updateCart(updatedCart);
    }
  };

  const handleIncrease = (index: any) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index]) {
      updatedCart[index].quantity =  String(Number(updatedCart[index].quantity) + 1);
      updateCart(updatedCart);
    }
  };

  const handleRemove = (index: any) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };
  const calculateTotalPrice = (cart:any) => {
    const totalPrice = cart.reduce((total:any, product:any) => {
      const productPrice = Number(product.price);
      const productQuantity = Number(product.quantity);
      return total + productPrice * productQuantity;
    }, 0);
    return totalPrice;
  };
  const calculateItems = (cart: any[]) => {
    return cart.length;
  };
  useEffect(() => {
    setPrice(calculateTotalPrice(cartItems));
    setNewCartCount(calculateItems(cartItems));
  }, [cartItems]);

  return (
    <div className="min-h-screen flex">
      <div className="h-full w-[88%] flex flex-wrap mx-auto mt-[5%]">
      <div className="w-[90%] max-h-[50%] flex mx-auto mt-[3%] border-b">
            <div className=" h-full w-full flex flex-row">
            <h6 className="w-[25%] flex items-center justify-center scroll-m-20 text-xs md:text-lg lg:text-xl font-bold tracking-[0.02em] mt-[2%] ">
              IMAGE
              </h6>
              <h6 className="w-[15%] flex items-center justify-center scroll-m-20 text-xs md:text-lg lg:text-xl font-bold tracking-[0.02em] mt-[2%] ">
              PRODUCT
              </h6>
              <h6 className="w-[15%] flex items-center justify-center scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%]">
              CATEGORY
              </h6>
              <h6 className="w-[15%] flex items-center justify-center scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%]">
              PRICE
              </h6>
              <h6 className="w-[15%] flex items-center justify-center scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%]">
              QUANTITY
              </h6>
              <div className="w-[15%] flex items-center justify-center">
                <Button
                  className="mt-[9%] "
                >
                  CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        {cartItems.map((product: any, index: any) => (
          <div key={index} className="w-[90%] max-h-[50%] flex mx-auto mt-[3%]">
            <div className=" h-full w-full flex flex-row">
              <div className="h-f w-[25%] flex bg-slate-400 shadow-sm hover:shadow-xl transition-all duration-100 ease-in-out  mix-blend-multiply cursor-pointer rounded-sm hover:rounded-lg hover:ring-2 ring-rose-800 ">
                <Image
                  src={product.picture}
                  width={600}
                  height={600}
                  alt="sc4i"
                  style={{ width: "100%", height: "100%" }}
                ></Image>
              </div>
              <h6 className="w-[15%] ml-[2%] flex items-center justify-center scroll-m-20 text-xs md:text-lg lg:text-xl font-bold tracking-[0.02em] mt-[2%] ">
                {product.name}
              </h6>
              <h6 className="w-[15%] flex items-center justify-center scroll-m-20 opacity-75 text-xs md:text-lg lg:text-lg font-semibold tracking-[0.02em] mt-[2%]">
                {product.category}
              </h6>
              <h6 className="w-[15%] flex items-center justify-center scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%]">
                ${Number(product.price) * Number(product.quantity)}
              </h6>
              <div className="w-[15%]  flex items-center justify-center scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%]">
                <Button
                  className="mr-[3%]"
                  onClick={() => handleDecrease(index)}
                >
                  -
                </Button>
                {product.quantity}
                <Button
                  className="ml-[3%]"
                  onClick={() => handleIncrease(index)}
                >
                  +
                </Button>
              </div>
              <div className="w-[15%] flex items-center justify-center">
                <Button
                  variant="destructive"
                  className=" "
                  onClick={() => handleRemove(index)}
                >
                  X
                </Button>
              </div>
            </div>
          </div>
        ))}
         <div className="w-[90%] max-h-[50%] flex mx-auto mt-[3%]">
            <div className=" h-full w-full flex flex-row">
              <h6 className="w-[15%] ml-[55%] flex items-center justify-center scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%]">
              NET PRICE
              </h6>
              <div className="w-[15%]  flex items-center justify-center scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%]">
              {price}
              </div>
              <div className="w-[15%] flex items-center justify-center">
                <Button
                  className="mt-[9%] "
                >
                  CHECKOUT
                </Button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
