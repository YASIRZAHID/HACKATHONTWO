import {FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="min-h-screen w-full translate-y-[30%] border-b">
            <div className=" w-full h-[80%]  mt-[7%]">
                <div className=" h-[25%] w-full">
                    <h1 className=" scroll-m-20 text-4xl font-bold tracking-wide opacity-10 lg:text-9xl text-center">
                        Newsletter
                    </h1>
                </div>
                <div className=" opacity-80 h-[25%] w-full -translate-y-[100%]">
                    <h2 className="scroll-m-20 text-4xl text-center font-bold tracking-tight transition-colors first:mt-0">
                         Subscribe Our Newsletter
                    </h2>
                    <p className=" [&:not(:first-child)]:mt-3 text-center text-xl">
                        Get the latest information and promo offers directly
                    </p>
                     <div className="flex items-center justify-center mt-[1%]">
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className=" px-4 py-2 text-sm border border-black rounded-md focus:outline-none focus:ring-blue-300 focus:border-blue-300 "
                    />
                    <Button type="submit" className="ml-[1%]">Get Started</Button> 
                    </div>
                </div>
                <div className="w-[75%] h-[40%] mt-[5%] ml-[8%] flex">
                    <div className=" w-[32%] h-full">
                        <div className=" h-[20%] flex">
                            <div className="md:text-6xl  md:-translate-y-[30%]">
                                o
                            </div>
                            <div className="md:text-2xl font-bold translate-y-2">
                                Dine Market
                            </div>
                        </div>
                        <div className=" h-[30%] my-[7%]">
                            <p className="md:leading-6 md:font-semibold text-justify  md:[&:not(:first-child)]:mt-6">
                            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                            </p>
                        </div>
                        <div className="h-[25%] translate-y-[450%] sm:translate-y-[300%] md:translate-y-[200%]  flex items-center">
                            <Button className="inline-flex ml-2 hover:animate-bounce"><TwitterIcon/></Button>
                            <Button className="inline-flex ml-2 hover:animate-bounce"><FacebookIcon/></Button>
                            <Button className="inline-flex ml-2 hover:animate-bounce"><LinkedinIcon/></Button>
                        </div>
                    </div>
                    <div className=" ml-auto w-[10%] h-full">
                        <h4 className="scroll-m-20 md:text-2xl opacity-70 font-semibold">
                            Company
                        </h4>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-6 opacity-70 hover:opacity-95">
                            About
                        </p>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-2 opacity-70 hover:opacity-95">
                            Terms of Use
                        </p>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-2 opacity-70 hover:opacity-95">
                            Privacy Policy
                        </p>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-2 opacity-70 hover:opacity-95">
                            How it Works
                        </p>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-2 opacity-70 hover:opacity-95">
                            Contact Us
                        </p>
                    </div>
                    <div className=" w-[10%] mx-auto h-full">
                    <h4 className="scroll-m-20 md:text-2xl opacity-70 font-semibold">
                            Support
                        </h4>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-6 opacity-70 hover:opacity-95">
                            Careers
                        </p>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-2 opacity-70 hover:opacity-95">
                            24h Service
                        </p>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-2 opacity-70 hover:opacity-95">
                            Quick Chat
                        </p>
                    </div>
                    <div className=" w-[10%] h-full">
                    <h4 className="scroll-m-20 md:text-2xl opacity-70 font-semibold">
                            Contact
                        </h4>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-6 opacity-70 hover:opacity-95">
                            Whatsapp
                        </p>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-2 opacity-70 hover:opacity-95">
                            Social
                        </p>
                        <p className="leading-7 text-xs md:text-lg [&:not(:first-child)]:mt-2 opacity-70 hover:opacity-95">
                            Feedback
                        </p>
                    </div>
                </div>
            </div>
            <p className="leading-7 text-2xl [&:not(:first-child)]:mx-auto text-center opacity-70 hover:opacity-95 translate-y-[500%]">
                Coded By <Link target="_blank" href='https://github.com/YASIRZAHID?tab=repositories' className="text-blue-400 hover:text-blue-600 hover:underline">Yasir Zahid</Link> as <Link target="_blank" href='https://github.com/panaverse/learn-nextjs/tree/main/hackathon_two' className="text-blue-400 hover:text-blue-600 hover:underline">PIAIC Hackathon 2</Link> project for Quarter 3
            </p>
        </div>
    )
}