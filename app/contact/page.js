
"use client";
import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import { useState } from "react";
import Socials from "@/components/Socials";

const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });



export default function Contact() {

    return(<div className={`min-h-screen ${sofia.className} flex justify-start items-center `}>
        

    <div className="w-1/3 ml-40">
        <h2 className="text-lime-600 text-6xl font-extrabold mb-10">Marousi</h2>
        <h3 className="text-zinc-700 text-xl font-extrabold">Technature</h3>
        <h3 className="text-zinc-700 text-xl font-extrabold">Panathineon 9</h3>
        <h3 className="text-zinc-700 text-xl font-extrabold">Marousi</h3>
        <h3 className="text-lime-600 text-xl font-extrabold">+30 210 806 4614</h3>

        <Socials color={"black"}></Socials>
    </div>

    </div>)

}