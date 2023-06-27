"use client"
import Image from "next/image"
import { useEffect } from "react";
import array from "./array"

const ScrollGallery = ({ sofia }) => {

  useEffect(() => {

    // Source credit: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript
    var leftElement = document.getElementById('left')
    const leftHeight = leftElement.offsetHeight
    console.log(leftHeight)
    var rightElement = document.getElementById('right')

    rightElement.style.height = leftHeight + 'px';

    const img1=document.getElementById('img1')
    const img2=document.getElementById('img2')
    const img3=document.getElementById('img3')


    ; (function () {

      var throttle = function (type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function () {
          if (running) { return; }
          running = true;
          requestAnimationFrame(function () {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
          });
        };
        obj.addEventListener(type, func);
      };

      throttle("scroll", "optimizedScroll");
    })();


    window.addEventListener("optimizedScroll", function () {

      console.log(window.scrollY)

      // // leftItem.style.transform = "translateY(" +( window.scrollY-(2900 ) )+ "px)";
      img1.style.opacity = window.scrollY>2000&&window.scrollY<2600?1:0
      img1.style.transition = "opacity 0.2s"
      img2.style.opacity = window.scrollY>2600&&window.scrollY<3200?1:0
      img2.style.transition = "opacity 0.2s"
      img3.style.opacity = window.scrollY>3200&&window.scrollY<3800?1:0
      img3.style.transition = "opacity 0.2s"
    })
  }, []);

  return (
    <>
      {/* SECTION 4 */}
      <section className=" relative width-full flex flex-row items-center justify-start mt-40 ">

        <div id="left" className="w-full lg:w-[40%] mt-20  p-10 xs:p-20 lg:p-0 lg:pl-40">
          {array.map((item,idx)=>{

            return(
              <div className="mb-80">
              <div className="relative top-[33px] right-8 text-tech">{"0"+(idx+1)}</div>
              <h1
                className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-2 font-extrabold `}
              >
               {item.title}
              </h1>
              <h2 className={`${sofia.className} text-gray-600  font-semibold`}>
              {item.text}
  
              </h2>
              <figure  className="sm:w-full w-[125%] aspect-[4/3] sm:aspect-[5/3] relative left-[-12.5%] sm:left-0 mt-10 lg:hidden ">
              <Image
                src={item.pathName}
                alt="blog-pic"
                fill="true"
                className="object-cover rounded-md "
              ></Image>
     
            </figure>
            </div>
            )
          })}
        
        </div>



        <div id="right" className="  w-1/2 pl-20  relative top-[-150px] hidden lg:block">
          {/* <div id="item0" className="bg-red-500 w-[150px] h-[150px] sticky top-[50px] right-40"></div> */}
          <figure id="item0" className=" w-full aspect-[4/3] sm:aspect-[5/3] relative sticky top-[150px] right-40 ">
            <Image id="img1"
              src="/stock3.webp"
              alt="blog-pic"
              fill="true"
              className="object-cover rounded-3xl  opacity-0"
            ></Image>
            <Image
              id="img2"
              src="/stock2.webp"
              alt="blog-pic"
              fill="true"
              className="object-cover rounded-3xl opacity-0"
            ></Image>
            <Image
              id="img3"
              src="/stock1.webp"
              alt="blog-pic"
              fill="true"
              className="object-cover rounded-3xl opacity-0"
            ></Image>
          </figure>
        </div>
      </section>
    </>
  )
}


export default ScrollGallery