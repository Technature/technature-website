import Image from "next/image";
import ImageCard from "./ImageCard";


const  Gallery = ({sofia})=>{


    return(
        <>
                  {/* SECTION 6 */}
                  <section className=" relative width-full py-40 flex flex-col items-center justify-center bg-zinc-800">
      <div id="Titles" className="flex flex-row items-center justify-center">
      <div className=" w-1/3 relative h-[500px]  ">
          <Image src="/work.svg" fill={true}></Image>
        </div>
        <div className="w-1/3 ml-20 mt-40">
          <h1 className={`${sofia.className} text-white tracking-tighter md:text-7xl text-5xl  mb-5 font-extrabold `}>
            Shit-hot work for hot-shot brands
          </h1>
        </div>
      </div>
      
                <div id="imageGallery" className="w-full flex justify-center mt-20">
                
                   <div id="image-card-wrapper" className="w-1/3   m-8">
                   <ImageCard src={"/pic1.webp"}></ImageCard>
                </div>

                <div id="image-card-wrapper" className="w-1/3">
                   <ImageCard src={"/pic1.webp"}></ImageCard>
                </div>
                </div>
      </section>
        </>
    )
}


export default Gallery