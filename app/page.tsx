"use client";
import Headermain from "@/components/ui/HEADER";
import Screen1 from "@/components/ui/SCREEN1";
import Screen2 from "@/components/ui/SCREEN2";
import Screen3 from "@/components/ui/SCREEN3";
import Screen4 from "@/components/ui/SCREEN4";
import Footer from "@/components/ui/END";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
      </div>
    </>
  );
}
