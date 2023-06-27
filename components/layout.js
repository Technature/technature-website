"use client";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Link from "next/link";
import Burger from "@/components/Burger";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer";
import Modal from "@/components/Modal";

const sofia = Sofia_Sans({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

const structuredData= {
  "@context": "http://schema.org",
  "@type": "Organization",
    "name": "Jobeat",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Marousi, Athens, Greece",
      "postalCode": "15124",
      "streetAddress": "Panathineon 9"
    },
    "url": "https://www.technature.gr",
        "about":"Building digital experiences",
        "image":"https://technaturegr.fra1.cdn.digitaloceanspaces.com/technature-website/logo4.png"
  }

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (

      <body className={open ? "openModal" : ""}>
          
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
        <div className="cursor-pointer m-10 fixed top-0 z-50 w-[40px] h-[40px] md:w-[60px] md:h-[60px]" onClick={() => {
          setOpen(false)
        }}>
          <Link href="/">
            <Image
              src="/logo5.png"
              alt="technature logo"
              fill="true"
            ></Image>
          </Link>
        </div>


        <nav className={`${sofia.className} text-lg right-[160px] top-10 z-20   fixed hidden md:flex md:flex-row  mix-blend-exclusion`}>

          <div className={"text-zinc-300 hover:text-pink-600 font-[900] tracking-wider mr-6 "}>
            <Link href="/services">Services</Link>
          </div>

          <div className="text-zinc-300 hover:text-pink-600 font-[900] tracking-wider">
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

  );
}
