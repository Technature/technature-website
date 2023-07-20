import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ScrollGallery from "@/components/ScrollGallery";
import BlogCardForBlogPage from "@/components/BlogCard/BlogCardForBlogPage";
import MainButton from "@/components/MainButton";
import ImageDistort from "@/components/imageDistort/imageDistort";
import axios from "axios";
import servicesArray from "./servicesArray";


const sofia = Sofia_Sans({ subsets: ["latin"] });

function ServicesPage() {
  return (
    <>
      {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full flex items-center justify-center flex-col md:flex-row bgImage  shadow-bgFade pt-20 sm:pt-0 mt-5 xs:mt-0">
        <ImageDistort src={"/services.svg"}></ImageDistort>

        <div className=" w-[90%] md:w-1/2 sm:w-1/2 lg:w-[37%] sm:ml-5 md:ml-10 lg:ml-40 mt-10 sm:mt-0 text-center sm:text-start flex flex-col items-center sm:items-start ">
          <h2 className={`${sofia.className} text-xl`}>

            Through<span className="text-tech"> strategic thinking</span> and captivating digital elements, we skillfully take over social media, we design exceptional websites and branding that make an immediate impression and evoke powerful emotions. To witness the true extent of our capabilities, explore our comprehensive array of services offered by our digital creative agency.
          </h2>

          <ul className="w-full grid grid-rows-3 justify-evenly xl:grid-cols-[repeat(2, minmax(0, 1fr))] grid-cols-[repeat(1,minmax(180px,200px))] sm:grid-cols-[repeat(2,minmax(180px,200px))] mt-10 gap-2 font-bold list-none">
            {servicesArray.map((service)=>{
              return(
                <li className="text-start m-1 " key={service.title} >
                <a className="hover:text-tech flex flex-row" href={`#${service.title}`}>
                <Image src="/arrow.webp" height={7} width={10} className="m-1"></Image> <span >{`${service.title}`}</span>
                </a>
              </li>
              )
            })}
        
          </ul>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className=" relative width-full flex flex-col items-center justify-start mt-20 sm:mt-10">
        <div id="leftSide" className="w-full  px-5 sm:px-20">
          {servicesArray.map((service, idx) => {
            return (
              <div id={`${service.title}`} className="flex flex-col lg:flex-row justify-between items-center w-full mb-40" >
                <article
                  className="w-full lg:w-[40%] mb-10 lg:mb-0"
                  key={service.title + idx}
                >
                  <h1
                    className={`${sofia.className} text-gray-800 tracking-tighter md:text-4xl text-3xl  mb-2 font-extrabold  tracking-wider`}
                  >
                    {service.title}
                  </h1>
                  <h2
                    className={`${sofia.className} text-gray-600  font-semibold`}
                  >
                    {service.text}
                  </h2>
                </article>

                <figure className="w-full lg:w-[50%] aspect-[4/3] sm:aspect-[5.5/3] relative ">
                  <Image
                    src={service.pathName}
                    alt="service-pic"
                    fill="true"
                    className="object-cover  rounded-xl"
                  ></Image>
                </figure>
              </div>
            );
          })}
        </div>

        <article
          className={`${sofia.className} w-full flex flex-col lg:flex-row items-center   bg-gradient-to-r from-cyan-400 to-blue-700 py-40 md:py-80 px-10 lg:px-20 xl:px-40`}
        >
          <div className="w-full">
            <h1 className="text-white text-md xs:text-lg sm:text-5xl font-extrabold tracking-wide">
          
            </h1>
            <h1 className="text-white text-md xs:text-lg sm:text-5xl font-extrabold tracking-wide mb-10 lg:mb-0 mr-10">
            Which industries we are specialized on
            </h1>
         
          </div>

          <div className="w-full flex flex-col">
            <h1 className="text-zinc-700 text-md xs:text-xl sm:text-4xl font-extrabold tracking-wide mb-3" >Healthcare & Wellbeing</h1>
            <h1 className="text-zinc-700 text-md xs:text-xl sm:text-4xl font-extrabold tracking-wide mb-3">Tourism & Hospitality</h1>
            <h1 className="text-zinc-700 text-md xs:text-xl sm:text-4xl font-extrabold tracking-wide mb-3">Medical Tourism</h1>
          </div>
        </article>

      </section>
    </>
  );
}

export default ServicesPage;
