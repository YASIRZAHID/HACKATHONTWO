"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";


const sequence = ['w', 'wh', 'wha', 'what', 'what y', 'what yo', 'what you',, 'what you l',, 'what you lo', 'what you loo', 'what you look', 'what you looki', 'what you lookin', 'what you looking', 'what you looking f', 'what you looking fo', 'what you looking for'];

export default function Headermain({ showNavbar, setShowNavbar }) {
  const [valueIndex, setValueIndex] = useState(0);
  const value = sequence[valueIndex];
  useEffect(() => {
    const interval = setInterval(() => {
        const nextIndex = (valueIndex + 1) % sequence.length;
        setValueIndex(nextIndex);
    }, 100);

    return () => clearInterval(interval);
}, [valueIndex]);

  const handleClick = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div>
      <nav className="bg-white opacity-50 hover:opacity-90 fixed w-full z-40">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center  justify-between h-16 mt-[2%] ">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <div className="flex">
                  <div className="text-6xl ml-9" onClick={handleClick}>
                    o
                  </div>
                  <div className="text-2xl font-bold translate-y-6">
                    Dine Market
                  </div>
                </div>
              </div>
              <div className="hidden md:block translate-y-3">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="bg-gray-200 text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Female
                  </a>
                  <a
                    href="#"
                    className="text-black hover:bg-gray-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Male
                  </a>
                  <a
                    href="#"
                    className="text-black hover:bg-gray-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Kids
                  </a>
                  <a
                    href="#"
                    className="text-black hover:bg-gray-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    All Products
                  </a>
                </div>
              </div>
            </div>

            <div className="relative translate-y-1">
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-grey-500  hover:bg-teal-50 text-black px-4 py-2 rounded-md">
                <Image
                  src={"/search.svg"}
                  width={"15"}
                  height={"15"}
                  alt="search-icon"
                ></Image>
              </button>
              <input
                type="text"
                placeholder={value}
                className=" px-4 py-2 text-sm border border-black rounded-md focus:outline-none focus:ring-blue-300 focus:border-blue-300 "
              />
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div className="relative">
                    <button
                      className=" z-10 max-w-xs translate-y-5 bg-gray-300 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="/cart.svg"
                        width={"100"}
                        height={"100"}
                        alt="User Avatar"
                      />
                    </button>
                    <div className="absolute inset-0 flex items-center justify-center z-20 h-5 w-5 translate-y-4 translate-x-5 bg-red-300 rounded-full font text-sm">
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
