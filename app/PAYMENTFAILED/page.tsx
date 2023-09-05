"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartCount } from "../CONTEXT/CONTEXT";
import { useCart } from "../CONTEXT/CARTCONTEXT";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";

// const stripePromise = loadStripe(
//     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
//   )

export default function CartSection() {
  toast.error('Could Not Place Order');
  return (
    <div className="min-h-screen flex flex-col item-center justify-center">
      <div className=" text-center text-red-500 text-3xl flex flex-col my-auto">
        PAYMENT FAILED
      </div>
      <Link href={'/'} className="mx-auto">
      <Button className="mt-[9%]">
        BACK HOME
      </Button>
      </Link>
    </div>
  );
}
