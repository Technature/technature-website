"use client"
import { useState,useRef } from "react";
import styles from "./TagFilter.module.css"

function TagFilter({ tags, filter, handleFilter }) {

    const{rotate,rotateBack,filterWrapper}=styles

    const filters = useRef(null);
 

    const [toggle, setToggle] = useState(false);

    const handleOpen=()=>{
  
         toggle? collapseSection(filters.current):expandSection(filters.current)
       
          setToggle(!toggle)
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
        requestAnimationFrame(function() {
          element.style.height = sectionHeight + 'px';
          element.style.transition = elementTransition;
          
          // on the next frame (as soon as the previous style change has taken effect),
          // have the element transition to height: 0
          requestAnimationFrame(function() {
            element.style.height = 0 + 'px';
          });
        });
        

      }
      
      function expandSection(element) {
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight;
        
        // have the element transition to the height of its inner content
        element.style.height = sectionHeight + 'px';
      
        // when the next css transition finishes (which should be the one we just triggered)
        element.addEventListener('transitionend', function(e) {
          // remove "height" from the element's inline styles, so it can return to its initial value
          element.style.height = null;
        },{ once: true });

      }
      
     






    return (
        <nav className=" flex justify-center flex-col">

            <div className="m-[auto] w-[100%]  flex-row justify-center mt-10 hidden md:flex" >
                <button
                    onClick={handleFilter("all")}
                    className={`bg-white py-[9px] px-[12px]  lg:py-[13px] lg:px-[15px] text-tech font-bold hover:text-lime-500 capitalize ${filter !== "all" ? "hover:border-white border-2 border-white" : "hover:border-lime-500 border-2 border-tech"}`} >All</button>
                {tags.map((tag, idx) => {
                    return (
                        <button
                            key={"tagfilter" + idx}
                            onClick={handleFilter(tag.name)}
                            className={`bg-white   py-[9px] px-[12px]  lg:py-[13px] lg:px-[15px] text-tech font-bold hover:text-lime-500 capitalize ${filter !== tag.name ? "hover:border-white border-2 border-white" : "hover:border-lime-500 border-2 border-tech"}`} >{tag.name}</button>
                    )
                })}
            </div>

           

            <div className="mt-5 flex justify-center items-center md:hidden">
                <button
                    onClick={handleOpen}
                    className={`bg-white py-[5px] px-[8px] text-tech tracking-wider text-2xl font-bold  text-center`} >Filter</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-6 h-6 stroke-tech ${toggle?rotate:rotateBack}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </div>





            <div id="filter-wrapper" ref={filters} className={`flex flex-col md:hidden mt-5 ${filterWrapper}`} style={{ overflow:"hidden",transition:"height 0.3s ease-out",height:0}}>
            <button
                    onClick={handleFilter("all")}
                    className={`bg-white py-[9px] m-auto  px-[12px] w-[140px]  lg:py-[13px] lg:px-[15px] text-tech font-bold capitalize ${filter !== "all" ? "hover:border-white border-2 border-white" : "border-2 border-tech"}`} >All</button>
               
            {tags.map((tag, idx) => {
                    return (
                        <button
                            key={"tagfilter" + idx}
                            onClick={handleFilter(tag.name)}
                            className={`bg-white m-auto   py-[9px] px-[12px] w-[140px]   lg:py-[13px] lg:px-[15px] text-tech font-bold capitalize ${filter !== tag.name ? "hover:border-white border-2 border-white" : "border-2 border-tech"}`} >{tag.name}</button>
                    )
                })}
            </div>
        </nav>
    );
}

export default TagFilter;