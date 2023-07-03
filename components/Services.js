"use client";
import useServices from "@/hooks/useServices"
import Image from "next/image";
import servicesArray from "@/app/services/servicesArray";
import Link from "next/link"

const  Services = ({sofia})=>{

    const {services, clickServices}=useServices()


    return(
        <>
         {/* SECTION 5 */}
      <section className=" relative width-full py-40 flex flex-col md:flex-row items-center justify-center bgGradient">
        <div className=" w-full md:w-1/3 lg:mr-40 text-center md:ml-10 md:text-start mb-20 md:md-0">
          <h1
            className={`${sofia.className} text-white  md:text-1xl text-2xl  pb-5 font-semibold `}
          >
            Our services
          </h1>
          <ul className="list-none">
            {servicesArray.map((service,idx)=>{
              return (
                <li>
                <h1
                  onClick={clickServices(idx+1)}
                  className={`${sofia.className} ${
                    services !== idx+1
                      ? "text-black opacity-30 hover:opacity-60"
                      : "text-white opacity 100"
                  }  tracking-tighter lg:text-5xl text-3xl  mb-5 font-extrabold cursor-pointer `}
                >
                 {service.title}
                </h1>
              </li>
              )
            })}
        
          </ul>
          <Link href="/services">
          <button  className=" mt-5 border-white rounded-3xl border-[3px] p-2 font-bold text-white hover:text-zinc-600 hover:bg-white active:opacity-70 ">
            VIEW ALL SERVICES
          </button>
          </Link>
        </div>
        <div className="w-[90%]  md:w-1/2 lg:w-1/3 relative  aspect-square shadow-lg  ">
          {servicesArray.map((service,idx)=>{
            return(
              <Image
              style={{ objectFit: "cover" }}
              key={service.title}
              className={`rounded  ${services == idx+1 ? "show" : "show close"}`}
              src={service.pathName}
              fill={true}
              alt={service.title}
            ></Image>
            )
          })}
       
        
        </div>
      </section>


        </>
    )
}


export default Services