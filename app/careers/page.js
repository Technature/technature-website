import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import ImageDistort from "@/components/imageDistort/imageDistort";
import axios from "axios";

const sofia = Sofia_Sans({ subsets: ["latin"] });

function CareersPage() {
  return (
    <>
      {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row  bgImage shadow-bgFade">
        <ImageDistort src={"/join.svg"}></ImageDistort>

        <div className=" w-[90%] md:w-1/2 sm:w-1/2 lg:w-1/3 sm:ml-5 md:ml-10 lg:ml-40 mt-10 sm:mt-0 text-center sm:text-start">
          <h1
            className={`${sofia.className} text-gray-800  lg:text-7xl md:text-5xl text-3xl  mb-5 font-extrabold `}
          >
           Why Technature
          </h1>
          <h2 className={`${sofia.className}`}>
          When you step into our offices, you'll be warmly greeted with a smile. In a prominent area, you'll meet our talented designers crafting innovative designs, logos, and websites. Working alongside them, our specialized marketers offer creative solutions to promote your business. Our team of business analysts and strategists ensures a seamless implementation. And in a dedicated space, our skilled developers transform coffee-fueled ideas into impeccable code.
          </h2>

        </div>
      </section>

      <section className="w-full p-3 xs:p-10 md:p-40 mb-5 xs:mb-0 ">
        <h1
          className={`${sofia.className} text-gray-800 tracking-tighter lg:text-7xl md:text-2xl text-3xl  mb-5 font-extrabold w-1/2`}
        >
        Work / life  <span className="text-blue-600">balance</span> 
        </h1>
        <h2 className={`${sofia.className}  sm:w-2/3 xs:ml-10 md:ml-40 mt-10 text-mdc`}>
        In our fast-paced lives, we often find ourselves caught up in busyness. However, we are increasingly recognizing the value of quality time spent with loved ones and meaningful pursuits. At Technature, we wholeheartedly acknowledge this need. We prioritize the well-being and mental health of our team, ensuring that no one is required to work excessive hours and miss out on significant moments in their lives.
        </h2>

      </section>

      <section className={`${sofia.className} w-full  bg-zinc-800 p-5 xs:p-10 sm:p-20 md:p-30 lg:p-40`}>
        <h1
          className={`${sofia.className} text-white tracking-tighter lg:text-5xl md:text-xl text-2xl  mb-5 font-extrabold `}
        >
          How to<span className="text-blue-600"> apply</span>
        </h1>

        <h1
          className={`${sofia.className} text-white tracking-tighter lg:text-2xl text-lg  mb-5 font-extrabold `}
        >
         Application Process
        </h1>

        <h2 className={`${sofia.className} md:w-2/3 mt-10 text-lg text-white`}>
        We welcome all applications from individuals who believe they align with our style and values and would make a valuable addition to Technature. If you are interested, please send your CV to <a href="mailtio:info@technature.gr" className="text-tech font-bold tracking-wide hover:text-lime-400">career@technature.gr</a>. Rest assured that we review each application with careful consideration. While we do not discard any resumes, kindly understand that we may not be able to respond to every inquiry we receive. For information regarding the handling of your data during the application process, please refer to our job application policy.
   

        </h2>
        <h1
          className={`${sofia.className} text-white tracking-tighter lg:text-4xl text-xl mt-20 mb-5 font-extrabold w-full `}
        >
         Current vacancies

        </h1>

        <ul className={`${sofia.className} text-white  lg:text-xl text-xl font-bold w-full sm:ml-10`}>
          <a href="mailto:info@technature.gr">
            <li className="hover:text-tech mb-4">
             -Even if there isn't an immediate fit, we encourage you to share any interesting content you have. We would love to take a look and appreciate your contribution.
            </li>
          </a>
          {/* <a href="mailto:info@technature.gr">
            <li className="hover:text-tech mb-4">
            -  Web Developer
            </li>
          </a>
          <a href="mailto:info@technature.gr">
            <li className="hover:text-tech mb-4">
            -  Digital Content specialst
            </li>
          </a> */}
        </ul>

      </section>

      {/* <section
        className={`${sofia.className} w-full flex flex-col  items-center  bg-gradient-to-r from-cyan-400 to-blue-700 p-10 lg:p-20 xl:p-40`}
      >

        <h1
          className={`${sofia.className} text-white lg:text-4xl text-xl mt-10 mb-5 font-extrabold w-full `}
        >
          Καθ' όλη τη διάρκεια του έτους, ανοίγουμε θέσεις εργασίας:

        </h1>

        <ul className={`${sofia.className}  lg:text-2xl text-xl  w-full ml-10`}>

          <li className="  mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Development
          </li>

          <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Advertising
          </li>

          <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Project Management
          </li>
          <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Project Management
          </li>
          <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - Client Services
          </li>
          <li className=" mb-4 tracking-wider font-[1000] text-zinc-900 opacity-50  ">
            - SEO
          </li>
        </ul>
      </section> */}
    </>
  );
}

export default CareersPage;
