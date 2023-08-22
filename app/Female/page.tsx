'use client'
import React from 'react';
import Image from "next/image";
import { useCartCount } from "../CONTEXT/CONTEXT";
import { useCart,CartItem} from '../CONTEXT/CARTCONTEXT';
import { useProducts } from '../CONTEXT/productsContext';
import toast, { Toaster } from 'react-hot-toast';

export default function FemaleSection() {
  const products = useProducts();
  const { addToCart,cartItems } = useCart();
  const { setNewCartCount } = useCartCount();

  let FemaleProducts = products.filter(product => product?.gender === 'female');
  const handleAdd = (item: any) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem?.productNumber === item?.productNumber);
    if (existingCartItem) {
      toast.error('Item already added to cart.');
    } else {
      addToCart({...item,quantity: '1'});
      setNewCartCount(calculateItems(cartItems)+1);
      toast.success('Item added to cart.');
    }
  };
  const calculateItems = (cart: any[]) => {
    return cart.length;
  };
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='h-full w-[88%] flex flex-wrap mx-auto mt-[5%]'>
        {FemaleProducts.map((product, index) => (
          <div key={index} className='w-[22%] h-[45%] mx-auto mt-[3%]'>
            <div className='mx-[9%] h-full '>
                <div className='h-[70%] w-full bg-gray-500 flex shadow-sm hover:shadow-xl hover:w-[98%] hover:h-[68%] transition-all duration-200 ease-in-out mix-blend-multiply cursor-pointer rounded-sm hover:rounded-lg hover:ring-2 ring-rose-800 ' onClick={()=>handleAdd(product)}>
                        <Image src={product?.picture} width={600} height={600} alt="sc4i" style={{ width: '100%', height: '100%'}} >
                        </Image>
                </div>
                <Toaster/>
                <h6 className="scroll-m-20 text-xs md:text-lg lg:text-xl font-bold tracking-[0.02em] mt-[2%] flex">
                {product?.name}
                </h6>
                <h6 className="scroll-m-20 opacity-75 text-xs md:text-lg lg:text-lg font-semibold tracking-[0.02em] mt-[2%] flex">
                {product?.category}
                </h6>
                <h6 className="scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%] flex">
                  ${product?.price}
                </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

