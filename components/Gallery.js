import Image from "next/image";


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
          <h1
            className={`${sofia.className} text-white tracking-tighter md:text-7xl text-5xl  mb-5 font-extrabold `}
          >
            Shit-hot work for hot-shot brands
          </h1>
        </div>
      </div>
      
                <div id="imageGallery" className="flex mt-20">
                <div id="imageCard" className="w-[500px] m-12">
                <Image src="/pic1.webp" width={500} height={500}></Image>
                <p className={`${sofia.className} text-lime-500 font-semibold mb-5`}>BRANDING &nbsp; &nbsp; E-COMMERCE &nbsp; &nbsp; MARKETING</p>
                <h1
            className={`${sofia.className} text-white  md:text-3xl text-4xl  mb-2 font-extrabold `}
          >
            Our services
          </h1>
          <p className={`${sofia.className} text-white font-medium`}>We completely transformed the image of Bristol's finest coffee company.</p>
                </div>  
                
                
                
                   <div id="imageCard" className="w-[500px]  m-6">
                <Image src="/pic1.webp" width={500} height={500}></Image>
                <p className={`${sofia.className} text-lime-500 font-semibold mb-5`}>BRANDING &nbsp; &nbsp; E-COMMERCE &nbsp; &nbsp; MARKETING</p>
                <h1
            className={`${sofia.className} text-white  md:text-3xl text-4xl  mb-2 font-extrabold `}
          >
            Our services
          </h1>
          <p className={`${sofia.className} text-white font-medium`}>We completely transformed the image of Bristol's finest coffee company.</p>
                </div>
                
                
            
                </div>
       
      </section>
        </>
    )
}


export default Gallery