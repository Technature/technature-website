"use client"
import { useState } from "react";

function TagFilter({ tags }) {

    const [state, setState] = useState(-1)

    const handleClick=(idx)=>(e)=>{
        setState(idx)
    }

    return (
    <div className="m-[auto] w-[100%] flex flex-row justify-center mt-10" >
        <button
        onClick={handleClick(-1)} 
        className={`bg-white py-[9px] px-[12px]  lg:py-[13px] lg:px-[15px] text-lime-600 font-bold hover:text-lime-500 capitalize ${state>=0?"hover:border-white border-2 border-white":"hover:border-lime-500 border-2 border-lime-600"}`} >All</button>
        {tags.map((tag,idx)=>{
            return(
                <button 
                onClick={handleClick(idx)} 
                className={`bg-white   py-[9px] px-[12px]  lg:py-[13px] lg:px-[15px] text-lime-600 font-bold hover:text-lime-500 capitalize ${state!==idx?"hover:border-white border-2 border-white":"hover:border-lime-500 border-2 border-lime-600"}`} >{tag.name}</button>
            )
        })}
    </div>
    
    );
}

export default TagFilter;