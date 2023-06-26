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
      <section className=" h-[100vh] relative width-full flex items-center justify-center flex-col md:flex-row bgImage  shadow-bgFade">
        <ImageDistort src={"/services.svg"}></ImageDistort>

        <div className=" w-[90%] md:w-1/2 sm:w-1/2 lg:w-[37%] sm:ml-5 md:ml-10 lg:ml-40 mt-10 sm:mt-0 text-center sm:text-start flex flex-col  items-center sm:items-start ">
          <h2 className={`${sofia.className} text-xl`}>

            Through<span className="text-tech"> strategic thinking</span> and captivating digital elements, we skillfully take over social media, we design exceptional websites and branding that make an immediate impression and evoke powerful emotions. To witness the true extent of our capabilities, explore our comprehensive array of services offered by our digital creative agency.
          </h2>

          <ul className="w-[200px] grid grid-rows-3 xl:grid-cols-[repeat(3,minmax(180px,200px))] grid-cols-[repeat(1,minmax(180px,200px))] sm:grid-cols-[repeat(2,minmax(180px,200px))] mt-10 gap-2 font-bold">
            {servicesArray.map((service)=>{
              return(
                <li className="text-start" key={service.title} >
                <a className="hover:text-tech" href={`#${service.title}`}>
                <span className="text-blue-600">{`> `}</span>{`${service.title}`}
                </a>
              </li>
              )
            })}
        
          </ul>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className=" relative width-full flex flex-col items-center justify-start mt-5 sm:mt-10">
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
            <h1 className="text-white text-md xs:text-lg sm:text-5xl font-extrabold tracking-wide mb-10 lg:mb-0">
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
