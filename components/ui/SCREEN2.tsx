import Image from "next/image";
import Products from "@/app/UTILS/PRODUCTS";
import { Button } from "./button";

let discount1 =  Products.filter(product=>product[6]=='discount1')
let discount2 =  Products.filter(product=>product[6]=='discount2')
let discount3 =  Products.filter(product=>product[6]=='discount3')

export default function Screen2() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-[85%] h-[80%] mx-auto my-auto ">
                <div className="w-full h-[20%] flex flex-col items-center justify-center">
                    <h6 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">
                        Promotions
                    </h6>
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                         Our Promotion Events
                    </h2>
                </div>
                <div className="w-full h-[80%] flex">
                    <div className="w-[52%] h-full  items-stretch">
                        <div className="bg-slate-300 h-[45%] flex">
                            <div className=" w-[40%] ml-[7%] h-full flex flex-col justify-center">
                                <h6 className="scroll-m-20 text-xsm md:text-xl lg:text-3xl font-bold tracking-LOOSE">
                                    GET UPTO 60%
                                </h6>
                                <h6 className="scroll-m-20 text-xs md:text-xl font-semibold tracking-[0.15em] leading-9">
                                    FOR SUMMER SEASON
                                </h6>
                            </div>
                            <div className=" w-[25%] ml-auto h-full">
                            <Image src={discount1[0][0]} width={600} height={600} alt="sc4i" style={{ width: '100%', height: '80%'}} className="mt-[25%]">
                            </Image>
                            </div>
                        </div>
                        <div className="h-[10%]"></div>
                        <div className="bg-neutral-900 h-[45%] flex flex-col justify-center items-center">
                            <h6 className="scroll-m-20 text-xl md:text-4xl font-bold tracking-LOOSE text-white">
                                GET 30% OFF
                            </h6>
                            <h6 className="scroll-m-20 text-sm md:text-xl font-semibold tracking-[0.15em] leading-9 text-white">
                                USE PROMO CODE
                            </h6>
                            <Button variant={'secondary'} className="hover:text-black"><div className="md:tracking-[0.3em] text-xsm md:text-lg  hover:text-black">DINEWEEKENDSALE</div></Button>
                        </div>
                    </div>
                    <div className="bg-orange-200 mx-auto w-[22%] h-full flex flex-col justify-between">
                        <div className="h-[15%] w-full my-auto">
                            <h6 className="scroll-m-20 text-sm md:text-xl font-thin tracking-[0.15em] leading-9 ml-[4%]">
                                Flex Sweatshirt
                            </h6>
                            <div className="flex">
                                <p className="scroll-m-20 text-xs md:text-xl font-thin tracking-[0.15em] leading-9 ml-[4%] flex line-through">$100.00</p>
                                <h6 className="scroll-m-20 text-xs md:text-xl font-bold tracking-[0.15em] leading-9 ml-[4%] flex">
                                    $75.00
                                </h6>
                            </div>
                        </div>
                        <div className="h-[60%] w-full">
                            <Image src={discount2[0][0]} width={600} height={600} alt="sc4i" style={{ width: '100%', height: '100%'}} className="mt-">
                            </Image>
                        </div>
                    </div>
                    <div className="bg-gray-400 mx-auto w-[22%] h-full flex flex-col justify-between">
                    <div className="h-[15%] w-full my-auto">
                            <h6 className="scroll-m-20 text-sm md:text-xl font-thin tracking-[0.11em] leading-9 ml-[4%]">
                                Flex Push Button Bomber
                            </h6>
                            <div className="flex">
                                <p className="scroll-m-20 text-xs md:text-lg font-thin tracking-[0.15em] leading-9 ml-[4%] flex line-through">$225.00</p>
                                <h6 className="scroll-m-20 text-xs  md:text-lg font-bold tracking-[0.15em] leading-9 ml-[4%] flex">
                                    $190.00
                                </h6>
                            </div>
                        </div>
                        <div className="h-[60%] w-full">
                            <Image src={discount3[0][0]} width={600} height={600} alt="sc4i" style={{ width: '100%', height: '100%'}} className="mt-">
                            </Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
