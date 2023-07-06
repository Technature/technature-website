"use client";
import Link from "next/link";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Socials from "./Socials";
import servicesArray from "@/app/services/servicesArray";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export default function Footer({}) {
  return (
    <footer
      className={`relative width-full p-20 bg-zinc-900 ${sofia.className} flex justify-center md:justify-evenly flex-col sm:flex-row`}
    >
      <div className="m-2 hidden md:block ">
        <ul className="font-extrabold text-neutral-200 list-none ">
          <li>
            <Link className="hover:text-tech" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-tech" href="/services">
              Services
            </Link>
          </li>
          {/* <li>
            <Link className="hover:text-tech" href="/Aboutus">
             About us
            </Link>
          </li> */}
          <li>
            <Link className="hover:text-tech" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-tech" href="/contact">
              Contact
            </Link>
          </li>
          {/* <li>
            <Link className="hover:text-tech" href="/faqs">
              FAQs
            </Link>
          </li> */}
          <li>
            <Link className="hover:text-tech" href="/privacyPolicy">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <div className="font-extrabold text-neutral-200 m-2   hidden md:block ">
        <p className="text-tech">EXPERTS IN</p>
        <div>
          <ul className="list-none">
            {servicesArray.map((service,idx)=>{

              return(  <li key={"s"+idx}>
                <Link className="hover:text-tech" href="/services">
                {service.title}
                </Link>
              </li>)
            })}
          </ul>
        </div>
      </div>

      <div className="font-extrabold text-neutral-200 m-2   hidden md:block ">
        <p className="text-tech">OFFICE</p>
        <div>
          <ul className="list-none">
            <li>
              <a className="hover:text-tech" target="_blank" href="https://goo.gl/maps/ZoVhwxYpsMM21zXV9">
                Marousi
              </a>
            </li>
            <li>
              <a className="hover:text-tech" target="_blank" href="https://goo.gl/maps/ZoVhwxYpsMM21zXV9">
              Panathineon 9
              </a>
            </li>
             <li>
              <a className="hover:text-tech" href="tel:+30 210 806 4614">
              +30 210 806 4614
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div id="social" className=" flex flex-col m-2  items-center md:items-end">
        <p className="text-tech font-extrabold mb-10">FOLLOW</p>
        <div className="flex mb-6">
        <Socials color={"white"} hover={"opacity-70"}></Socials>
        </div>
        {/* <p className="text-neutral-200 font-extrabold mb-5 hover:text-tech cursor-pointer">
          Sign up to our newsletter
        </p> */}
        <a href = "mailto: info@technature.gr" className="text-neutral-200 font-extrabold mb-5 text-xl sm:text-2xl hover:text-tech cursor-pointer">
          info@technature.gr
        </a>
      </div>
    </footer>
  );
}


