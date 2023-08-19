import React from 'react';
import Image from "next/image";
import Products from '../UTILS/PRODUCTS';

let FemaleProducts = Products.filter(product => product[5] === 'female');

export default function FemaleSection() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='h-full w-[88%] flex flex-wrap mx-auto mt-[5%]'>
        {FemaleProducts.map((product, index) => (
          <div key={index} className='w-[22%] h-[45%] mx-auto mt-[3%]'>
            <div className='mx-[9%] h-full '>
                <div className='h-[70%] w-full bg-gray-500 flex'>
                        <Image src={product[0]} width={600} height={600} alt="sc4i" style={{ width: '100%', height: '100%'}} >
                        </Image>
                </div>
                <h6 className="scroll-m-20 text-xs md:text-lg lg:text-xl font-bold tracking-[0.02em] mt-[2%] flex">
                {product[1]}
                </h6>
                <h6 className="scroll-m-20 opacity-75 text-xs md:text-lg lg:text-lg font-semibold tracking-[0.02em] mt-[2%] flex">
                {product[2]}
                </h6>
                <h6 className="scroll-m-20 opacity-75 text-xs md:text-lg lg:text-2xl font-bold tracking-[0.02em] mt-[2%] flex">
                {product[3]}
                </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

