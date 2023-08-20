"use client";
import Headermain from "@/components/ui/HEADER";
import "./globals.css";
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/END";
import { CartCountProvider } from "./CONTEXT/CONTEXT";
import { CartProvider } from "./CONTEXT/CARTCONTEXT";
export const metadata = {
  title: "HACKATHON",
  description: "PANAVERSE CHALLEGE 1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <html lang="en">
        <body>
          <CartProvider>
          <CartCountProvider>
          <div className="flex min-h-screen">
            {showNavbar && (
              <div className="w-1/5 bg-lightgray">
                <Navbar />
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <Headermain
                showNavbar={showNavbar}
                setShowNavbar={setShowNavbar}
              />
              {children}
              <Footer/>
            </div>
          </div>
          </CartCountProvider>
          </CartProvider>
        </body>
      </html>
    </>
  );
}
