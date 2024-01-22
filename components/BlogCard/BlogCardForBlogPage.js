"use client"
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import styles from "./blogcard.module.css"
import Link from "next/link";


const{image,imageGrow,blogTag,blogTagHover,blogDescr,blogDescrHover,bg,bgHover}=styles

const sofia = Sofia_Sans({ subsets: ["latin"] });

const BlogCard = ({title,tags,photoPath,id}) => {

    const [touched, setTouched] = useState(false);

    const handleMouseEnter=()=>{
        setTouched(!touched)
    }

    return (
        <>
         
           
            <Link href={`/blog/${id}`}  className={`w-full sm:w-[46%] lg:w-[30%]  relative border-[1px] border-black cursor-pointer mb-10 ${sofia.className} ${touched?bgHover:bg} `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>

                <div id="imageWrapper" className=" w-full  h-[150px] md:h-[200px] lg:h-[250px]   relative  overflow-hidden">
                    <Image  alt="blogPost"className={`${touched?imageGrow:image}`} src={photoPath} fill="true" style={{ objectFit: "cover" }}></Image>
                </div>


                <div id="description" className={`p-5 `}>
                    {tags.map((tag,idx)=>{
                        return   <span key={`${idx}-${tag}`} className={`uppercase text-xs font-bold tracking-wider mb-3 mr-2 ${touched?blogTagHover:blogTag}`}>{tag}</span>
                    })}
                  
                    <p className={`text-xl sm:text-xl md:text-xl  lg:text-[1.8rem] mt-3 font-extrabold ${touched?blogDescrHover:blogDescr} `}>{title}</p>
                </div>
                </Link>
           
          
        </>
    )
}


export default BlogCard