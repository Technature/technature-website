"use client";
import Link from 'next/link';
import { Controller, animated, useSpring } from '@react-spring/web'
import { useState } from 'react';
import Socials from './Socials';

export default function Modal({openModal,opened}) {

    const [show, setShow] = useState(false);
    
const showServices=(link)=>(e)=>{
    if(link=="services"){
        setShow(true)
    }else{
        setShow(false)
    }
    
}
    return (

        <div
        id="modal"
        className={` flex items-center justify-start w-screen h-screen bg-lime-600  z-20 fixed top-[0px] left-[0px] right-0 m-0 block ${
            opened ? "modalAnimationClose" : "modalAnimation"
        }`}
      >

<div className='w-1/4 ml-60'>
<ul className="font-extrabold text-neutral-200 text-6xl  ">
          <li className={`mb-2 item1 ${opened?"":"slide"}`}  >
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " onMouseEnter={showServices("")} href="/work">
              Work
            </Link>
          </li>
          <li className={`mb-2 item2 ${opened?"":"slide"}`} >
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " onMouseEnter={showServices("services")} href="/services">
              Services
            </Link>
          </li>
          <li className={`mb-2 item3 ${opened?"":"slide"}`}  >
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " onMouseEnter={showServices("")} href="/agency">
              Agency
            </Link>
          </li>
          <li className={`mb-2 item4 ${opened?"":"slide"}`}  >
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " onMouseEnter={showServices("")} href="/blog">
              Blog
            </Link>
          </li>
          <li className={`mb-2 item4 ${opened?"":"slide"}`}  >
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " onMouseEnter={showServices("")} href="/contact">
              Contact
            </Link>
          </li>
    
        </ul>
</div>

<div className='w-1/3 ml-10'>
<ul className="font-semibold text-neutral-200 text-3xl  ">
          <li className={`mb-2 subItem1 ${opened && show?"":"slide"}`}>
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " href="/work">
            Web Development
            </Link>
          </li>
          <li className={`mb-2 subItem2 ${opened && show?"":"slide"}`}>
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " href="/services">
            Digital Marketing
            </Link>
          </li>
          <li className={`mb-2 subItem3 ${opened && show?"":"slide"}`}>
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " href="/agency">
            WordPress
            </Link>
          </li>
          <li className={`mb-2 subItem4 ${opened && show?"":"slide"}`}>
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " href="/blog">
              Blog
            </Link>
          </li>
          <li className={`mb-2 subItem5 ${opened && show?"":"slide"}`}>
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " href="/contact">
              Contact
            </Link>
          </li>
    
        </ul>
</div>

<div id="socialsWrapper " className='left-10 bottom-[1rem] absolute'><Socials opened={opened} color="white"></Socials></div>

      </div>
      
    )
  }
  