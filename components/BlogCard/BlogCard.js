"use client"
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import styles from "./blogcard.module.css"
import Link from "next/link";

const{image,imageGrow,blogTag,blogTagHover,blogDescr,blogDescrHover,bg,bgHover}=styles

const sofia = Sofia_Sans({ subsets: ["latin"] });

const BlogCard = ({title,tags,photoPath}) => {

    const [touched, setTouched] = useState(false);

    const handleMouseEnter=()=>{
        setTouched(!touched)
    }

    return (
        <>
         
            <div className={`w-[25%] min-w-[250px] min-h-[300px]  relative mx-[1%] border-2 border-black cursor-pointer ${sofia.className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
            <Link href="/">

                <div id="imageWrapper" className="w-full h-[200px]  relative  overflow-hidden">
                    <Image  alt="blogPost"className={`${touched?imageGrow:image}`} src={photoPath} fill="true" style={{ objectFit: "cover" }}></Image>
                </div>


                <div id="description" className={`p-5 ${touched?bgHover:bg}`}>
                    {tags.map((tag,idx)=>{
                        return   <span key={`${idx}-${tag}`} className={`text-xs font-bold tracking-wider mb-3 mr-2 ${touched?blogTagHover:blogTag}`}>{tag}</span>
                    })}
                  
                    <p className={` sm:text-xl md:text-xl  lg:text-[1.8rem] font-extrabold ${touched?blogDescrHover:blogDescr} `}>{title}</p>
                </div>
                </Link>
            </div>
          
        </>
    )
}


export default BlogCard