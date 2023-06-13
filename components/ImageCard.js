
"use client"
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Image from "next/image";

const sofia = Sofia_Sans({ subsets: ["latin"] });


const ImageCard=(props)=> {

    console.log(props)


    return ( 
        <div id="imageCard" className="   m-6">
        <div id="image-wrapper" className="w-full relative pt-[100%]  mb-6">
     <Image src={props.src} fill="true" className="w-full h-full top-0 left-0 object-cover"></Image>
     </div>
     <p className={`${sofia.className} text-lime-500 font-semibold mb-5`}>BRANDING &nbsp; &nbsp; E-COMMERCE &nbsp; &nbsp; MARKETING</p>
     <h1
 className={`${sofia.className} text-white  md:text-3xl text-4xl  mb-2 font-extrabold `}
>
 Our services
</h1>
<p className={`${sofia.className} text-white font-medium`}>We completely transformed the image of Bristol's finest coffee company.</p>
     </div>
     );
}

export default ImageCard;