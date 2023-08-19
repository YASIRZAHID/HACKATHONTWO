"use client";
import Headermain from "@/components/ui/HEADER";
import Screen1 from "@/components/ui/SCREEN1";
import Screen2 from "@/components/ui/SCREEN2";
import Screen3 from "@/components/ui/SCREEN3";
import Screen4 from "@/components/ui/SCREEN4";
import Footer from "@/components/ui/END";
import Navbar from "@/components/ui/navbar";
import { useState } from "react";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      {/* <div className="flex min-h-screen"> */}
       {/* {showNavbar && <div className="w-1/5 bg-lightgray">
             <Navbar/>
        </div>} */}
        <div className="flex-1 flex flex-col">
            {/* <Headermain showNavbar={showNavbar} setShowNavbar={setShowNavbar} /> */}
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Screen4 />
            <Footer />
        </div>
    {/* </div> */}
    </>
  );
}
