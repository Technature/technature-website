"use client";
import useServices from "@/hooks/useServices"
import Image from "next/image";


const  Services = ({sofia})=>{

    const {services, clickServices}=useServices()


    return(
        <>
         {/* SECTION 5 */}
      <section className=" relative width-full py-40 flex flex-col md:flex-row items-center justify-center sectionGradient">
        <div className=" w-full md:w-1/3 md:mr-40 text-center md:ml-10 md:text-start mb-20 md:md-0">
          <h1
            className={`${sofia.className} text-white  md:text-1xl text-2xl  pb-5 font-semibold `}
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
        <div className="w-[90%]  md:w-1/2 lg:w-1/3 relative  aspect-square   ">
          <Image
            className={services == 1 ? "show" : "show close"}
            src="/pic1.webp"
            fill={true}
            alt="services"
          ></Image>
          <Image
            className={services == 2 ? "show" : "show close"}
            src="/pic1.png"
            fill={true}
            alt="services"
          ></Image>
          <Image
            className={services == 3 ? "show" : "show close"}
            src="/pic3.png"
            fill={true}
            alt="services"
          ></Image>
        </div>
      </section>


        </>
    )
}


export default Services