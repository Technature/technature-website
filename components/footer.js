"use client";
import Link from "next/link";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Socials from "./Socials";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export default function Footer({}) {
  return (
    <footer
      className={`relative width-full p-20 bg-zinc-900 ${sofia.className} flex justify-center md:justify-start flex-col sm:flex-row`}
    >
      <div className="w-1/5 hidden md:block ">
        <ul className="font-extrabold text-neutral-200  ">
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
          <li>
            <Link className="hover:text-tech" href="/Aboutus">
             About us
            </Link>
          </li>
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
          <li>
            <Link className="hover:text-tech" href="/faqs">
              FAQs
            </Link>
          </li>
          <li>
            <Link className="hover:text-tech" href="/privacy-policy">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <div className="font-extrabold text-neutral-200 w-2/5  hidden md:block ">
        <p className="text-tech">EXPERTS IN</p>
        <div>
          <ul>
            <li>
              <Link className="hover:text-tech" href="/services">
              SEO
              </Link>
            </li>
            <li>
              <Link className="hover:text-tech" href="/services">
              Paid Advertising -PPC
              </Link>
            </li>
            <li>
              <Link className="hover:text-tech" href="/services">
              Content Marketing
              </Link>
            </li>
            <li>
              <Link className="hover:text-tech" href="/services">
              Social Media
              </Link>
            </li>
            <li>
              <Link className="hover:text-tech" href="/services">
              Branding + Design
              </Link>
            </li>
            <li>
              <Link className="hover:text-tech" href="/services">
              Video+ Photography
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="font-extrabold text-neutral-200 w-1/5  hidden md:block ">
        <p className="text-tech">OFFICE</p>
        <div>
          <ul>
            <li>
              <Link className="hover:text-tech" href="/contact">
                Marousi
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="social" className="flex flex-col  items-center md:items-end">
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


