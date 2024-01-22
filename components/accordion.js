"use client"
import { useState, useRef } from "react"
import faqsArray from "../app/faqs/faqsArray"

function Accordion({ sofia }) {

    const filters = useRef(null);
    const accordionContent = []

    const [toggle, setToggle] = useState({});


    const handleOpen = (key)=>(e) => {

        const element=accordionContent[key]
   
      var isCollapsed = element.getAttribute('data-collapsed')==="false";
     
    
  if(isCollapsed) {
    expandSection(element)
    
  } else {
    collapseSection(element)
  }
    }




    function collapseSection(element) {
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight;

        // temporarily disable all css transitions
        var elementTransition = element.style.transition;
        element.style.transition = '';

        // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we 
        // aren't transitioning out of 'auto'
        requestAnimationFrame(function () {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;

            // on the next frame (as soon as the previous style change has taken effect),
            // have the element transition to height: 0
            requestAnimationFrame(function () {
                element.style.height = 0 + 'px';
            });

            element.setAttribute('data-collapsed', 'false');
        });


    }

    function expandSection(element) {
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight;

        // have the element transition to the height of its inner content
        element.style.height = sectionHeight + 'px';

        // when the next css transition finishes (which should be the one we just triggered)
        element.addEventListener('transitionend', function (e) {
            // remove "height" from the element's inline styles, so it can return to its initial value
            element.style.height = null;
        }, { once: true });

         // mark the section as "currently not collapsed"
  element.setAttribute('data-collapsed', 'true');

    }
    return (<>

        <section className="flex flex-col px-5 md:px-40 pb-40 mt-20 ">

        
        {faqsArray.map((faq,idx)=>{
            return(
                <article className="w-full  flex flex-col items-start " key={faq.title+idx}>
                <div  className="flex flex-row cursor-pointer " onClick={handleOpen(`${idx}-collapsable`)} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[50px] h-[50px]">
                        <path className="fill-tech stroke-white" strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <h1
                        className={`${sofia.className} text-gray-800  lg:text-4xl md:text-2xl text-xl mt-[10px] ml-3 font-extrabold `}
                    >
                       {faq.title}
                    </h1>
                </div>

                <div
                 key={`${idx}-collapsable`}
                 ref={ref => (accordionContent[`${idx}-collapsable`] = ref)}
                 data-collapsed="false"
                 style={{ overflow:"hidden",transition:"height 0.3s ease-out",height:0}}
                  className={` w-2/3 hd:w-full ml-[20px] xs:ml-[50px] mb-10 `}>
           {faq.text}
                </div>

            </article>
            )
        })}
           
        </section>
    </>);
}


export default Accordion;