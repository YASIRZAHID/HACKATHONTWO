import Image from "next/image";
import Products from "@/app/DB/PRODUCTS";
import { Button } from "./button";
import Link from "next/link";

let brandFace = Products[7]
console.log(brandFace);
export default function Screen4() {
  return (
    <div className="max-h-screen flex  justify-center items-center ">
      <div className=" h-[80%] w-[90%] mt-[5%] ">
        <div className="a z-0 bg-slate-300 opacity-10 h-[90%] mt-[9%] flex items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-widest lg:text-8xl lg:leading-[1.3] lg:-tracking-loose w-[60%] md:w-[40%] mx-[4%] text-black ">
            Different From Others
          </h1>
        </div>
        <div className="opacity-80 relative -translate-y-[100%] z-10  h-full w-full">
          <div className=" h-[30%] w-[45%] ml-[55%]">
            <h1 className="scroll-m-20 md:text-3xl md:leading-5 font-bold text-xl md:text-2xl  lg:text-4xl xl:text-5xl  lg:leading-[1.2] mx-[4%] text-black ">
              Unique and Authentic Vintage Designer Jewellery
            </h1>
          </div>
          <div className=" h-[70%] w-full flex ">
            <div className=" h-[80%] w-[45%] mx-auto mt-[1%]">
              <div className=" h-[45%] w-[45%] inline-flex">
                <div>
                  <h4 className="scroll-m-20 w-[80%] text-xs md:text-xl font-semibold md:font-bold md:tracking-widest">
                    Using Good Quality Materials
                  </h4>
                  <p className=" md:tracking-wide text-xs md:text-md sm:font-bold [&:not(:first-child)]:mt-2  md:w-[80%]">
                    Crafted with care, our products are meticulously made using
                    only the finest.
                  </p>
                </div>
              </div>
              <div className=" h-[45%] w-[45%]  ml-[10%] inline-flex">
                <div>
                  <h4 className="scroll-m-20 w-[80%] text-xs md:text-xl font-semibold md:font-bold md:tracking-widest">
                    100% Handmade Products
                  </h4>
                  <p className=" md:tracking-wide text-xs md:text-md sm:font-bold [&:not(:first-child)]:mt-2  md:w-[80%]">
                    Experience the artistry of handcrafted perfection in every
                    piece.
                  </p>
                </div>
              </div>
              <div className=" h-[45%] w-[45%] mt-[30%] md:mt-[30%] lg:mt-[3%]  inline-flex">
                <div>
                  <h4  className="scroll-m-20 w-[80%] text-xs md:text-xl font-semibold md:font-bold md:tracking-widest">
                    Modern Fashion Design
                  </h4>
                  <p className=" md:tracking-wide text-xs md:text-md sm:font-bold [&:not(:first-child)]:mt-2  md:w-[80%]">
                    Embrace the latest trends with our fashion-forward designs
                    that seamlessly.
                  </p>
                </div>
              </div>
              <div className=" ml-[10%] h-[45%] w-[45%] inline-flex">
                <div>
                  <h4  className="scroll-m-20 w-[80%] text-xs md:text-xl font-semibold md:font-bold md:tracking-widest">
                    Discount for Bulk Orders
                  </h4>
                  <p className=" sm:tracking-wide text-xs sm:text-md sm:font-bold [&:not(:first-child)]:mt-2  md:w-[80%]">
                    Unlock exclusive savings when you place bulk orders. Enjoy
                    unbeatable.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[90%] w-[50%] my-auto  flex">
              <div className="bg-slate-400 w-[40%] h-full -translate-y-[10%] shadow-lg hover:shadow-xl hover:w-[39%] hover:h-[98%] transition-all duration-500 ease-in-out">
                <Image src={brandFace[0]} width={600} height={600} alt="sc4i" style={{ width: '100%', height: '100%'}}>
                </Image>
              </div>
              <div className=" w-[50%] mx-auto my-auto h-[60%]">
                <p className=" md:tracking-wide md:leading-7 md:font-semibold text-justify text-xs md:text-sm [&:not(:first-child)]:mt-6">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <Link href={'/All'}>
                <Button className="mt-[5%] text-xs md:text-base">See All Products </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
