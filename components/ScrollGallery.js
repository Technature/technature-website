"use client"
import Image from "next/image"
import { useEffect } from "react";

const  ScrollGallery = ({sofia})=>{

//   useEffect(() => {
//     // Source credit: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript

// var leftItem = document.getElementById('item0')

// ;(function(){

// var throttle = function(type, name, obj){
// var obj = obj || window;
// var running = false;
// var func = function(){
//   if (running){ return; }
//   running = true;
//   requestAnimationFrame(function(){
//     obj.dispatchEvent(new CustomEvent(name));
//     running = false;
//   });
// };
// obj.addEventListener(type, func);
// };

// throttle("scroll", "optimizedScroll");
// })();


// window.addEventListener("optimizedScroll", function(){

// console.log(window.scrollY)



// // leftItem.style.transform = "translateY(" +( window.scrollY-(2900 ) )+ "px)";
// leftItem.style.opacity = window.scrollY-(2100) 
// leftItem.style.transition="opacity 0.2s" 

// })
//   }, []);

    return(
        <>
            {/* SECTION 4 */}
            <section className=" relative width-full flex flex-row items-center justify-start mt-40 overflow-hidden">  

        <div id="leftSide" className="w-1/2 md:w-1/3 mt-20  ml-20 md:ml-40">
          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-tech">01</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Audience.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            With the right techniques and years of marketing knowledge, we find the right audience to connect.

            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-tech">02</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Visibility.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            We optimize both your appearance and how often you appear on social media and online
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-tech">03</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
              Content.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            Relevant and results driven
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-tech">04</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
            Journey.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            We make sure your audience get all the information they need
            </h2>
          </div>

          <div className="mb-80">
            <div className="relative top-[33px] right-8 text-tech">05</div>
            <h1
              className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
            >
          Result.
            </h1>
            <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
            We aim to attract the right audience and increase traffic to your brand to achieve your goals.
            </h2>
          </div>
        </div>
        <div id="right-side" className=" h-full w-1/2 p-20 fixed top-[25%] right-0">
        {/* <div id="item0" className="bg-red-500 w-[150px] h-[150px] fixed top-[40%] right-40"></div>
        <figure id="item0" className=" w-full aspect-[4/3] sm:aspect-[5/3] relative  ">
            <Image
              src="/stock1.webp"
              alt="blog-pic"
              fill="true"
              className="object-cover"
            ></Image>
          </figure> */}
        </div>
      </section>
        </>
    )
}


export default ScrollGallery