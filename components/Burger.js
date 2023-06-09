"use client";

import { Controller, animated, useSpring } from '@react-spring/web'

export default function Burger({openModal,opened}) {
    
     console.log(opened)

    const TopLineAnimation = new Controller({ marginBottom: "8px" })
    const BottomLineAnimation = new Controller({ marginTop: "8px" })
  
    const onEnter=()=>{
   
      TopLineAnimation.start({ marginBottom: "14px" })
      BottomLineAnimation.start({ marginTop: "14px" })
    }
    
    const onLeave=()=>{
   
        TopLineAnimation.start({ marginBottom: "8px" })
        BottomLineAnimation.start({ marginTop: "8px" })
      }
  
    return (

              <div className={`cursor-pointer active:bg-gray-100 fixed  top-10 z-50 right-[86px]`} onClick={openModal} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <animated.div className='bg-gray-900 w-[50px] h-[3px]' style={TopLineAnimation.springs}></animated.div>
                <div className='bg-gray-900 w-[50px] h-[3px] mb-2' ></div>
                <animated.div className='bg-gray-900 w-[30px] h-[3px]'  style={BottomLineAnimation.springs}></animated.div>
              </div>
      
    )
  }
  