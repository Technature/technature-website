"use client"
import { useState } from "react";

function TagFilter({ tags,filter,handleFilter }) {

    return (
    <div className="m-[auto] w-[100%] flex flex-row justify-center mt-10" >
        <button
        onClick={handleFilter("all")} 
        className={`bg-white py-[9px] px-[12px]  lg:py-[13px] lg:px-[15px] text-lime-600 font-bold hover:text-lime-500 capitalize ${filter!=="all"?"hover:border-white border-2 border-white":"hover:border-lime-500 border-2 border-lime-600"}`} >All</button>
        {tags.map((tag,idx)=>{
            return(
                <button 
                key={"tagfilter"+idx}
                onClick={handleFilter(tag.name)} 
                className={`bg-white   py-[9px] px-[12px]  lg:py-[13px] lg:px-[15px] text-lime-600 font-bold hover:text-lime-500 capitalize ${filter!==tag.name?"hover:border-white border-2 border-white":"hover:border-lime-500 border-2 border-lime-600"}`} >{tag.name}</button>
            )
        })}
    </div>
    
    );
}

export default TagFilter;