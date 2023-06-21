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
        <div className="cursor-pointer m-7 fixed top-0 z-50 w-[50px] h-[50px] md:w-[80px] md:h-[80px]" onClick={() => {
          setOpen(false)
        }}>
          <Link href="/">
            <Image
              src="/logo4.png"
              alt="technature logo"
              fill="true"
            ></Image>
          </Link>
        </div>


        <nav className={`${sofia.className} text-lg right-[160px] top-10 z-20   fixed hidden md:flex md:flex-row  mix-blend-exclusion`}>

          <div className={"text-zinc-300 hover:text-violet-600 font-[900] tracking-wider mr-6 "}>
            <Link href="/services">Services</Link>
          </div>

          <div className="text-zinc-300 hover:text-violet-600 font-[900] tracking-wider">
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
