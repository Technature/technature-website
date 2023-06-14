"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Sofia } from "next/font/google";
import Link from "next/link";
import Burger from "@/components/Burger";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Footer from "@/components/footer";
import Modal from "@/components/Modal";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <html lang="en">
      <body className={open ? "openModal" : ""}>
        <header className=" p-2 fixed left-[10px] top-[20px] z-50">
          <div className="cursor-pointer m-5" onClick={() => {
            setOpen(false)
          }}>
            <Link href="/">
              <Image 
                src="/logo2.png"
                alt="technature logo"
                height="60"
                width="60"
              ></Image>
            </Link>
          </div>

          <nav>
            <div className="text-gray-900 hover:text-lime-600 font-bold mr-6 fixed right-60 top-10 z-0">
              {" "}
              <Link href="/work">Work</Link>
            </div>

            <div className="text-gray-900 hover:text-lime-600 font-bold mr-6 fixed right-40 top-10 z-0">
              <Link href="/contact">Contact </Link>
            </div>
          </nav>
        </header>
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
