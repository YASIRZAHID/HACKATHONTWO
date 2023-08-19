"use client";
import Headermain from "@/components/ui/HEADER";
import "./globals.css";
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
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
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
