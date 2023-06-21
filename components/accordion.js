"use client"
import {useState} from "react"

function Accordion({sofia}) {

    const [state, setState] = useState(-1);

    const handleAccordion=(idx)=>(e)=>{
        console.log(idx==state)
       if(idx==state){
        setState(-1)
        return
       }
setState(idx)
    }

    return (<>
    
    <section className="flex flex-col px-40 pb-40 ">

<article className="w-full  flex flex-col items-start ">

    <div className="flex flex-row cursor-pointer " onClick={handleAccordion(0)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[50px] h-[50px]">
            <path className="fill-lime-600 stroke-white" strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <h1
            className={`${sofia.className} text-gray-800  lg:text-4xl md:text-2xl text-xl mt-[6px] ml-3 font-extrabold `}
        >
            Δουλεύοντας με την Technature;
        </h1>
    </div>

    <div className={`w-full  ml-[50px] mb-10 ${state==0?"accordion":"accordion close"}`}>
        Our projects vary in size often dictated by the service types. Projects we love are rooted in deep strategic thinking that drives real business impact, always led by beautiful design.
        Example 1: Brand positioning Tone of voice / Copywriting Brand identity Web design, UX and development Ongoing SiteCare partnership.
        Example 2: You might have already been through a brand process and looking for  KOTA to bring it to life online through our web design and development process.
    </div>





    <div className="flex flex-row cursor-pointer" onClick={handleAccordion(1)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[50px] h-[50px]">
            <path className="fill-lime-600 stroke-white" strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <h1
            className={`${sofia.className} text-gray-800  lg:text-4xl md:text-2xl text-xl mt-[6px] ml-3 font-extrabold `}
        >
            Δουλεύοντας με την Technature;
        </h1>
    </div>

    <div className={`w-full  ml-[50px] accordion ${state==1?"":"close"} bg-white`}>
        Our projects vary in size often dictated by the service types. Projects we love are rooted in deep strategic thinking that drives real business impact, always led by beautiful design.
        Example 1: Brand positioning Tone of voice / Copywriting Brand identity Web design, UX and development Ongoing SiteCare partnership.
        Example 2: You might have already been through a brand process and looking for  KOTA to bring it to life online through our web design and development process.
    </div>


</article>
</section>
    </>  );
}

export default Accordion;