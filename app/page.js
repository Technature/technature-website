"use client";
import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Technature",
  description: "Technature company website",
};

export default function Home() {
  const [services, setServices] = useState(1);

  const clickServices = (serviceNumber) => (e) => {
    console.log(serviceNumber);
    setServices(serviceNumber);
  };

  return (
    <main className={`${inter.className} `}>

    {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row sm:mt-[40px] mt-[50px]">
        <div className=" w-1/3 relative mr-[60px] ml-[30px] ">
          <Image src="/pic1.webp" width={500} height={500}></Image>
        </div>
        <div className=" w-1/3 ">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-7xl text-4xl  mb-5 font-extrabold`}
          >
            Rebel against boring
          </h1>
          <h2>
            We’re a creative web design agency based in London that crafts
            beautiful and original websites for brands who refuse to blend in.
          </h2>
        </div>
      </section>

  {/* SECTION 2 */}
      <section className=" relative width-full py-40 flex flex-row items-center justify-between">
        <div className=" w-1/2 relative h-[50vw] ">
          <Image src="/pic1.webp" fill={true}></Image>
        </div>
        <div className=" w-1/3 mr-40">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-5 font-extrabold `}
          >
            Making brands a damn site better
          </h1>
          <h2>
            Let’s face it, first impressions matter. Your website’s an
            opportunity to wow your audience, so why waste it with bad design?
            Because brands win new fans when they’re brave enough to go beyond
            their creative comfort zone.
          </h2>
        </div>
      </section>

  {/* SECTION 3 */}
      <section className=" relative width-full flex flex-row items-center justify-center">
        <div className=" w-2/3 mr-40">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-5 font-extrabold `}
          >
            Our creative digital agency designs and develops bespoke websites
            with <span className="text-lime-600">three things in mind;</span>
          </h1>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className=" relative width-full flex flex-row items-center justify-start mt-40">
        <div id="leftSide" className=" w-1/3 ml-40">
          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">01</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Beauty
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
              Developing stunning one-of-a-kind digital design that catches
              people’s eye and brings your brand to life online.
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">02</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Thought
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
              As a web design agency, we love to deliver meaningful and
              intuitive user experiences that build trust with your target
              audience.
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-lime-600">03</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Impact
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
              Designing tailor made solutions that resonate with your customers
              and drives them to act.
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className=" relative width-full py-40 flex flex-row items-center justify-center sectionGradient">
        <div className=" w-1/3 mr-40">
          <h1
            className={`${sofia.className} text-white  md:text-1xl text-2xl  mb-5 font-semibold `}
          >
            Our services
          </h1>
          <ul>
            <li>
              <h1
                onClick={clickServices(1)}
                className={`${sofia.className} ${
                  services !== 1
                    ? "text-black opacity-20 hover:opacity-70"
                    : "text-white opacity 100"
                }  tracking-tighter md:text-5xl text-3xl  mb-5 font-extrabold cursor-pointer `}
              >
                Website Design & Development
              </h1>
            </li>
            <li>
              <h1
                onClick={clickServices(2)}
                className={`${sofia.className} ${
                  services !== 2
                    ? "text-black opacity-20 hover:opacity-70"
                    : "text-white opacity 100"
                } tracking-tighter md:text-5xl text-3xl  mb-5 font-extrabold cursor-pointer `}
              >
                Digital Marketing
              </h1>
            </li>
            <li>
              <h1
                onClick={clickServices(3)}
                className={`${sofia.className} ${
                  services !== 3
                    ? "text-black opacity-20 hover:opacity-70"
                    : "text-white opacity 100"
                }  tracking-tighter md:text-5xl text-3xl  mb-5 font-extrabold cursor-pointer `}
              >
                Branding
              </h1>
            </li>
          </ul>
          <button className="border-white rounded-3xl border-[3px] p-2 text-white hover:text-zinc-600 hover:bg-white active:opacity-70">
            VIEW ALL SERVICES
          </button>
        </div>
        <div className=" w-1/3 relative h-[500px]  ">
          <Image
            className={services == 1 ? "show" : "show close"}
            src="/pic1.webp"
            fill={true}
          ></Image>
          <Image
            className={services == 2 ? "show" : "show close"}
            src="/pic1.png"
            fill={true}
          ></Image>
          <Image
            className={services == 3 ? "show" : "show close"}
            src="/pic3.png"
            fill={true}
          ></Image>
        </div>
      </section>


                  {/* SECTION 6 */}
      <section className=" relative width-full py-40 flex flex-col items-center justify-center bg-zinc-900">
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

      <section className=" relative width-full py-40 flex flex-row items-center justify-center">
       
     
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-5 font-extrabold `}
          >
           Our Clients
          </h1>
     

      </section>
    </main>
  );
}
