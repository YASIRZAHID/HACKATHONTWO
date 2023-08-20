import Image from "next/image";
import Products from "@/app/DB/PRODUCTS";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

let main = Products.filter(product=>product[6]=='main')

export default function Screen1() {
  return (
    <div className=" w-full min-h-screen  flex flex-row">
      <div className="w-[50%] h-full">
        <Button
          className="text-purple-600 bg-purple-100 mx-[15%] mt-[20%] animate-bounce"
          variant="outline"
        >
          Sale 70%
        </Button>
        <h1 className="scroll-m-20 md:text-4xl font-bold tracking-tight lg:text-7xl mx-8 md:mx-20 mt-10">
             An Industrial Take on Streetwear
        </h1>
        <h3 className="scroll-m-20 text-xs md:text-2xl md:font-semibold tracking-tight md:mt-10 ml-[13%] mr-[10%]">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </h3>
        <Link href={'/All'}>
        <Button className="ml-[13%] mt-[5%] h-[8%] w-40 text-xs md:text-sm">
             <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
        </Button>
        </Link>
        <div className="ml-[13%] opacity-60">
            <Image src={"/BAZAAR1.png"} alt="logo1" width={100} height={100} className="icon inline-flex justify-center items-center mr-10 mt-10">
            </Image>
            <Image src={"/ELLE1.png"} alt="logo1" width={100} height={100} className="icon inline-flex justify-center items-center mr-10 mt-10">
            </Image>
            <Image src={"/STYLE1.png"} alt="logo1" width={100} height={100} className="icon inline-flex justify-center items-center mr-10 mt-10">
            </Image>
            <Image src={"/VOGUE1.png"} alt="logo1" width={100} height={100} className="icon inline-flex justify-center items-center mr-10 mt-10">
            </Image>
        </div>
      </div>

      <div className="w-[50%] translate-y-[10%]  ">
        <div
          className="absolute h-[450px] w-[450px] inset-0 flex items-center justify-center -z-20 translate-x-[15%] translate-y-[22%] rounded-full bg-violet-300"
          style={{ width: "75%", height: "75%" }}
        >
          .
        </div>
        <Image
          src={main[0][0]}
          width={850}
          height={850}
          alt="model"
          style={{ width: "65%", height: "85%" }}
          className="translate-y-[9%] translate-x-[25%]"
        ></Image>
      </div>
    </div>
  );
}
