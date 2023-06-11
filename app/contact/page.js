
"use client";
import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import { useEffect, useState } from "react";
import Socials from "@/components/Socials";

const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });



export default function Contact() {


    
useEffect(() => {
    
    var global_r = 255;
    var global_g = 250;
    var global_b = 254;
    
    var segment_counter = 0;
    var bg_color = "rgba("+ global_r + ","+global_g+","+global_b +",0.05)";
    
    var testbody = document.querySelector("body");
    var c = document.querySelector("#mousetrail"),
        ctx = c.getContext("2d"),
        colors = [
          {r: 255, g:  255, b:  255},
          {r: 255, g: 0, b: 73},
          {r: 104, g: 0, b: 183}
        ],
        cIndex = 0, maxColors = colors.length,
        total = 0, segment = 10000,
        isDown = true, px, py;
    
    setSize();
          
    
    testbody.onmousemove = testbody.ontouchmove = function(e) { plot(e) };
    
    function getPos(e) {
      // e.preventDefault();
      if (e.touches) e = e.touches[0];
      var r = c.getBoundingClientRect();
      return {
        x: e.clientX - r.left,
        y: e.clientY - r.top
      }
    }
    
    function plot(e) {
      var pos = getPos(e);
      plotLine(ctx, px, py, pos.x, pos.y);
      px = pos.x;
      py = pos.y;
    }
    
    function plotLine(ctx, x1, y1, x2, y2) {
  ctx.fillStyle = bg_color; 
        ctx.clearRect(0,0,c.width,c.height);
   
      var diffX = Math.abs(x2 - x1),
          diffY = Math.abs(y2 - y1),
          dist = Math.sqrt(diffX * diffX + diffY * diffY),
          step = dist / 50,
          i = 0,
          t, b, x, y;
      
      while (i < dist) {
        t = Math.min(1, i / dist);
    
        x = x1 + (x2 - x1) * t;
        y = y1 + (y2 - y1) * t;
    
        // ctx.shadowBlur = 500;
        // ctx.shadowOffsetX = 0;
        // ctx.shadowOffsetY = 0;
        // ctx.shadowColor = getColor();
    
        // console.log(getColor())
        ctx.fillStyle = getColor();
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI*2);
        console.log(diffX)
        ctx.fill();
        i += step;
      }

 
   
      function getColor() {
      
        var r, g, b, a, t, c1, c2;
        
        c1 = colors[cIndex];
        c2 = colors[(cIndex + 1) % maxColors];
        t = Math.min(1, total / segment);
        
        if (++total > segment) {
          total = 0;
          segment_counter++;
          // console.log(segment_counter, getColor())
          bg_color = "rgba("+ global_r + ","+global_g+","+global_b +",0.05)";
    
          if (++cIndex >= maxColors) cIndex = 0;
        }
      
        global_r = c1.r + (c2.r - c1.r) * t
        global_g = c1.g + (c2.g - c1.g) * t;
        global_b = c1.b + (c2.b - c1.b) * t;
    
    
        r = c1.r + (c2.r - c1.r) * t
        g = c1.g + (c2.g - c1.g) * t;
        b = c1.b + (c2.b - c1.b) * t;
    
    
        return "rgb(" + (r|0) + "," + (g|0) + "," + (b|0) + ")";
      }
    }
    
    window.onresize = setSize;
    function setSize() {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }
    }, []);
       

    return(<div className={`min-h-screen ${sofia.className} flex justify-start items-center cursor-crosshair `}>
        
        <canvas id="mousetrail" className="absolute z-10 w-full" >  
</canvas>
   <div className="w-1/3 ml-40 z-40">
        <h2 className="text-lime-600 text-6xl font-extrabold mb-10">Marousi</h2>
        <h3 className="text-zinc-700 text-xl font-extrabold">Technature</h3>
        <h3 className="text-zinc-700 text-xl font-extrabold">Panathineon 9</h3>
        <h3 className="text-zinc-700 text-xl font-extrabold mb-5">Marousi</h3>
        <h3 className="text-lime-600 text-xl font-extrabold mb-20">+30 210 806 4614</h3>

        <Socials color={"black"}></Socials>

    </div>

    <div id="form" className="w-1/3   p-10 frostedGlass z-40"> 
    <input className="w-[47%] border-zinc-400 border-b-2 bg-transparent mb-10 mr-5" placeholder="First Name" type="text"></input>
    <input className="w-[47%] border-zinc-400 border-b-2 bg-transparent mb-10" placeholder="Last Name" type="text"></input>
    <input className="w-full border-zinc-400 border-b-2 bg-transparent mb-10" placeholder="Last Name" type="email"></input>
    <textarea  className="w-full border-zinc-400 border-2 bg-transparent mb-10" placeholder="Message"></textarea>
    <button className="border-lime-600 rounded-3xl border-2 px-9 py-2 text-lime-600 hover:text-white hover:bg-lime-600 active:opacity-70 text-sm">SUBMIT</button>
    </div>

    </div>)

}