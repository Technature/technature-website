"use client"
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import styles from "./blogcard.module.css"
import Link from "next/link";


const{image,imageGrow,blogDescr,blogDescrHoverVariant}=styles

const sofia = Sofia_Sans({ subsets: ["latin"] });

const BlogCard = ({title,tags,photoPath,id}) => {

    console.log(id)
    const [touched, setTouched] = useState(false);

    const handleMouseEnter=()=>{
        setTouched(!touched)
    }

    return (
        <>
         
           
            <Link href={`/blog/${id}`}  className={`block w-[250px] sm:w-[350px] lg:w-[380px] relative cursor-pointer mb-10 ${sofia.className} bg-white `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>

                <div id="imageWrapper" className=" w-full  h-[150px] md:h-[200px] lg:h-[250px]   relative  overflow-hidden">
                    <Image  alt="blogPost"className={`${touched?imageGrow:image}`} src={photoPath} fill="true" style={{ objectFit: "cover" }}></Image>
                </div>


                <div id="description" className={`p-5 `}>
                    {tags.map((tag,idx)=>{
                        return   <span key={`${idx}-${tag}`} className={`uppercase text-xs font-bold tracking-wider mb-3 mr-2 text-lime-600`}>{tag}</span>
                    })}
                  
                    <p className={`text-xl sm:text-xl md:text-xl  lg:text-[1.8rem] mt-3 font-extrabold ${touched?blogDescrHoverVariant:blogDescr} `}>{title}</p>
                </div>
                </Link>
           
          
        </>
    )
}


export default BlogCard