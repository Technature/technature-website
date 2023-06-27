"use client";
import Link from 'next/link';
import { Controller, animated, useSpring } from '@react-spring/web'
import { useState } from 'react';
import Socials from './Socials';


const links = [

  { href: "/services", name: "Services" },
  // { href: "/agency", name: "Agency" },
  { href: "/careers", name: "Careers" },
  { href: "/blog", name: "Blog" },
  { href: "/contact", name: "Contact" }
]

const subLinks=[
  {href:"/WebDevelopment",name:" Web Development"},
  {href:"/DigitalMarketing",name:" Digital Marketing"},
  {href:"/WordPress",name:"  WordPress"}
]
export default function Modal({ openModal, opened }) {

  const [show, setShow] = useState(false);

  const showServices = (link) => (e) => {
    if (link == "Services") {
      setShow(true)
    } else {
      setShow(false)
    }

  }


// onMouseEnter={showServices(link.name)} 
  return (

    <div
      id="modal"
      className={` flex items-center justify-start w-screen h-screen bg-tech  z-20 fixed top-[0px] left-[0px] right-0 m-0 block ${opened ? "modalAnimationClose" : "modalAnimation"
        }`}
    >

      <div className='w-1/2 md:w-1/4  ml-10 md:ml-60'>
        <ul className="font-extrabold text-neutral-200 text-4xl xs:text-6xl list-none ">
          {links.map((link,idx) => {
            return(
            <li key={`${link.name}-${idx}`} className={`mb-2 item${idx+1} ${opened ? "" : "slide"}`}  >
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " onClick={openModal}href={link.href}>
            {link.name}
            </Link>
          </li>

            )
          })}
        </ul>
      </div>

      <div className='w-1/3 ml-10'>
        <ul className="font-semibold text-neutral-200 text-3xl list-none ">

          {subLinks.map((subLink,idx)=>{
            return(
              <li key={`${subLink.name}-${idx}`} className={`mb-2 subItem${idx+1} ${opened && show ? "" : "slide"}`}>
            <Link className="text-black opacity-30 hover:text-white hover:opacity-100 " href={subLink.href}>
             {subLink.name}
            </Link>
          </li>
            )
          })}

        </ul>
      </div>

      <div id="socialsWrapper " className='left-2 xs:left-10 bottom-[5rem] sm:bottom-[1rem] absolute'><Socials hover={"opacity-70"} opened={opened} color="white"></Socials></div>

    </div>

  )
}
