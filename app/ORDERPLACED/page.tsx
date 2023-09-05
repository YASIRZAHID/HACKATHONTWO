"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartSection() {
  let [restore,setRestore]=useState(false);
  if(restore==false){
  // Retrieve the JSON string from local storage
  const jsonString2 = localStorage.getItem('CART');
  // send to database
  const myObject2 = JSON.parse(jsonString2 as string);

    setRestore(true);
  }


  return (
    <div className="min-h-screen flex flex-col item-center justify-center">
      <div className=" text-center text-green-500 text-3xl flex flex-col my-auto">
        ORDER PLACED SUCCESSFULLY
      </div>
      <Link href={'/'} className="mx-auto">
      <Button className="mt-[9%]">
        BACK HOME
      </Button>
      </Link>
    </div>
  );
}
