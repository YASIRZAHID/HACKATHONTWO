"use client";
import Headermain from "@/components/ui/HEADER";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/END";
import { CartCountProvider } from "./CONTEXT/CONTEXT";
import { CartProvider } from "./CONTEXT/CARTCONTEXT";
import { ProductsProvider } from "./CONTEXT/productsContext";
import { SessionProvider } from "./CONTEXT/USER";
import { GProvider } from "@/components/ui/provider";

export const metadata = {
  title: "HACKATHON",
  description: "PANAVERSE CHALLEGE 1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <GProvider>
          <SessionProvider>
          <ProductsProvider>
            <CartProvider>
              <CartCountProvider>
                <div className="flex min-h-screen">
                  {false && (
                    <div className="w-1/5 bg-lightgray">
                      <Navbar />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col">
                    <Headermain />
                    {children}
                    <Footer />
                  </div>
                </div>
              </CartCountProvider>
            </CartProvider>
          </ProductsProvider>
          </SessionProvider>
          </GProvider>
        </body>
      </html>
    </>
  );
}
