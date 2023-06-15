"use client";

import "./globals.css";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Link from "next/link";
import Burger from "@/components/Burger";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Footer from "@/components/footer";
import Modal from "@/components/Modal";

const sofia = Sofia_Sans({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <html lang="en">
      <body className={open ? "openModal" : ""}>
      <div className="cursor-pointer m-7 fixed top-0 z-50" onClick={() => {
            setOpen(false)
          }}>
            <Link href="/">
              <Image 
                src="/logo2.png"
                alt="technature logo"
                height="80"
                width="80"
              ></Image>
            </Link>
          </div>

  
          <nav className={`${sofia.className} text-2xl right-40 top-10 z-20 mr-5  fixed hidden md:flex md:flex-row`}>

            <div className={"text-gray-800 hover:text-lime-600 font-extrabold mr-6  "}>
              <Link href="/work">Work</Link>
            </div>

            <div className="text-gray-800 hover:text-lime-600 font-extrabold">
              <Link href="/contact">Contact </Link>
            </div>
          </nav>
   
        <Burger openModal={openModal} opened={open}></Burger>

        <Modal openModal={openModal} opened={open}></Modal>

        <div className={`hideMain ${open ? "close" : ""}`}>{children}</div>

        <div className={`hideMain ${open ? "close" : ""}`}>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
