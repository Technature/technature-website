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
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row ">
        <ImageDistort src={"/services.png"}></ImageDistort>

        <div className=" w-[90%] md:w-1/2 sm:w-1/2 lg:w-1/3 sm:ml-5 md:ml-10 lg:ml-40 mt-10 sm:mt-0 text-center sm:text-start">
          <h2 className={`${sofia.className}`}>
            Στη Technature <span className="text-lime-600">δίνουμε λύση </span>
            σε όλα τα θέματα που απασχολούν την εικόνα του brand σας στο
            διαδίκτυο. Προσφέρουμε υπηρεσίες όπως: SEO, Paid Advertising,
            Content Marketing, Social Meida, Branding + Design, Video &
            Photography.
          </h2>

          <ul className="grid grid-rows-3 grid-cols-3 mt-10 gap-2 font-bold">
            {servicesArray.map((service)=>{
              return(
                <li >
                <a className="hover:text-lime-600" href={`#${service.title}`}>
                <span className="text-blue-600">{`> `}</span>{`${service.title.substring(0, 17)}`}
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
              <div id={`${service.title}`} className="flex flex-col lg:flex-row justify-between items-center w-full mb-40">
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
          className={`${sofia.className} w-full flex flex-col lg:flex-row items-center  bg-gradient-to-r from-cyan-400 to-blue-700 p-10 lg:p-20 xl:p-40`}
        >
          <div className="w-1/2">
            <h1 className="text-white text-5xl font-extrabold tracking-wide">
              Who we help
            </h1>
            <h1 className="text-white text-3xl font-extrabold tracking-wide mb-10 lg:mb-0">
              Σε ποιους κλάδους απευθυνόμαστε!
            </h1>
         
          </div>

          <div className="w-1/2 flex flex-col">
            <h1 className="text-zinc-700 text-4xl font-extrabold tracking-wide mb-10" >Healthcare & Wellbeing</h1>
            <h1 className="text-zinc-700 text-4xl font-extrabold tracking-wide mb-10">Tourism & Hospitality</h1>
            <h1 className="text-zinc-700 text-4xl font-extrabold tracking-wide mb-10">Medical Tourism</h1>
          </div>
        </article>
      </section>
    </>
  );
}

export default ServicesPage;
