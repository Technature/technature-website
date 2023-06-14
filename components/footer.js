"use client";
import Link from "next/link";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export default function Footer({}) {
  return (
    <footer
      className={`relative width-full p-20 bg-zinc-900 ${sofia.className} flex justify-start`}
    >
      <div className="w-1/5">
        <ul className="font-extrabold text-neutral-200  ">
          <li>
            <Link className="hover:text-lime-600" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-lime-600" href="/work">
              Work
            </Link>
          </li>
          <li>
            <Link className="hover:text-lime-600" href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:text-lime-600" href="/agency">
              Agency
            </Link>
          </li>
          <li>
            <Link className="hover:text-lime-600" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-lime-600" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:text-lime-600" href="/faqs">
              FAQs
            </Link>
          </li>
          <li>
            <Link className="hover:text-lime-600" href="/privacy-policy-2">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <div className="font-extrabold text-neutral-200 w-2/5 ">
        <p className="text-lime-600">EXPERTS IN</p>
        <div>
          <ul>
            <li>
              <Link className="hover:text-lime-600" href="/">
                Hospitality{" "}
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime-600" href="/">
                Property and Architecture{" "}
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime-600" href="/">
                Film and Television{" "}
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime-600" href="/">
                Business to Business{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="font-extrabold text-neutral-200 w-1/5 ">
        <p className="text-lime-600">OFFICE</p>
        <div>
          <ul>
            <li>
              <Link className="hover:text-lime-600" href="/">
                Marousi{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="social" className="flex flex-col items-end">
        <p className="text-lime-600 font-extrabold mb-10">FOLLOW</p>
        <div className="flex mb-6">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <svg className="ml-4 " width="48" height="48" viewBox="0 0 48 48">
              <g
                id="Group_385"
                data-name="Group 385"
                transform="translate(-239 -664)"
              >
                <g
                  className="fill-transparent stroke-white  hover:stroke-lime-600"
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  transform="translate(239 664)"
                  fill="#fff"
                  stroke="#878787"
                  stroke-width="1"
                >
                  <circle cx="24" cy="24" r="24" stroke="none"></circle>
                  <circle cx="24" cy="24" r="23.5" fill="none"></circle>
                </g>
                <path
                  className="fill-white hover:fill-lime-600"
                  id="Path_162"
                  data-name="Path 162"
                  d="M7054.868,2739.071a9.672,9.672,0,0,0,6.874-1.969,4.826,4.826,0,0,1-4.4-3.288,5.059,5.059,0,0,0,2.085-.089,4.729,4.729,0,0,1-3.707-4.672,4.955,4.955,0,0,0,2.095.556,4.717,4.717,0,0,1-2.042-3.385,4.566,4.566,0,0,1,.605-2.891,13.517,13.517,0,0,0,9.717,4.925c-.03-.278-.071-.534-.082-.791a4.6,4.6,0,0,1,2.322-4.365,4.686,4.686,0,0,1,5.579.61.542.542,0,0,0,.586.155,9.971,9.971,0,0,0,2.6-1.039,4.913,4.913,0,0,1-1.882,2.563c.277-.05.555-.091.829-.154.291-.067.58-.146.865-.237s.544-.2.816-.295l.046.048c-.376.44-.733.9-1.134,1.315a12.332,12.332,0,0,1-1.046.918.363.363,0,0,0-.147.322,13.662,13.662,0,0,1-2.91,8.8,12.52,12.52,0,0,1-7.932,4.821,13.6,13.6,0,0,1-7.255-.608A11.651,11.651,0,0,1,7054.868,2739.071Z"
                  transform="translate(-6803.229 -2044.228)"
                  fill="#878787"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <svg className="ml-4 " width="46" height="48" viewBox="0 0 46 48">
              <g
                id="Group_383"
                data-name="Group 383"
                transform="translate(-300 -664)"
              >
                <g
                  className="fill-transparent stroke-white  hover:stroke-lime-600"
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  transform="translate(300 664)"
                  fill="#fff"
                  stroke="#878787"
                  stroke-width="1"
                >
                  <ellipse
                    cx="23"
                    cy="24"
                    rx="23"
                    ry="24"
                    stroke="none"
                  ></ellipse>
                  <ellipse
                    cx="23"
                    cy="24"
                    rx="22.5"
                    ry="23.5"
                    fill="none"
                  ></ellipse>
                </g>
                <g
                  className="fill-transparent stroke-white  hover:stroke-lime-600"
                  id="Group_263"
                  data-name="Group 263"
                  transform="translate(313.975 678.233)"
                >
                  <path
                    className="fill-white hover:fill-lime-600"
                    id="Path_158"
                    data-name="Path 158"
                    d="M3574.027,2717.078h4.151a5.134,5.134,0,0,1,5.106,4.165,4.75,4.75,0,0,1,.092.933q.01,4.252,0,8.5a5.137,5.137,0,0,1-4.267,5.019,5.656,5.656,0,0,1-.908.076q-4.184.009-8.369,0a5.144,5.144,0,0,1-5.091-4.343,5.025,5.025,0,0,1-.061-.775q-.006-4.231,0-8.463a5.135,5.135,0,0,1,4.274-5.039,5.49,5.49,0,0,1,.881-.075C3571.233,2717.074,3572.63,2717.078,3574.027,2717.078Zm-7.949,9.343q0,2.068,0,4.138a4.171,4.171,0,0,0,.029.536,3.744,3.744,0,0,0,3.733,3.284q4.192.005,8.383,0a3.762,3.762,0,0,0,3.756-3.783q0-4.165,0-8.329a3.994,3.994,0,0,0-.028-.5,3.738,3.738,0,0,0-3.687-3.288c-2.821-.01-5.643,0-8.463,0a3.579,3.579,0,0,0-1.325.251,3.743,3.743,0,0,0-2.4,3.527Q3566.075,2724.339,3566.079,2726.421Z"
                    transform="translate(-3564.68 -2717.077)"
                    fill="#878787"
                  ></path>
                  <path
                    className="fill-white hover:fill-lime-600"
                    id="Path_159"
                    data-name="Path 159"
                    d="M3956.853,3114.268a4.988,4.988,0,1,1,4.985,5A5,5,0,0,1,3956.853,3114.268Zm8.571.012a3.583,3.583,0,1,0-3.58,3.58A3.581,3.581,0,0,0,3965.424,3114.281Z"
                    transform="translate(-3952.49 -3104.927)"
                    fill="#878787"
                  ></path>
                  <path
                    className="fill-white hover:fill-lime-600"
                    id="Path_160"
                    data-name="Path 160"
                    d="M4784.772,3006.435a.971.971,0,1,1,.976-.966A.963.963,0,0,1,4784.772,3006.435Z"
                    transform="translate(-4770.245 -3001.296)"
                    fill="#878787"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <svg className="ml-4 " width="47" height="48" viewBox="0 0 47 48">
              <g
                id="Group_384"
                data-name="Group 384"
                transform="translate(-360 -664)"
              >
                <g
                  className="fill-transparent stroke-white  hover:stroke-lime-600"
                  id="Ellipse_4"
                  data-name="Ellipse 4"
                  transform="translate(360 664)"
                  fill="#fff"
                  stroke="#878787"
                  stroke-width="1"
                >
                  <ellipse
                    cx="23.5"
                    cy="24"
                    rx="23.5"
                    ry="24"
                    stroke="none"
                  ></ellipse>
                  <ellipse
                    cx="23.5"
                    cy="24"
                    rx="23"
                    ry="23.5"
                    fill="none"
                  ></ellipse>
                </g>
                <path
                  className="fill-white hover:fill-lime-600"
                  id="Path_161"
                  data-name="Path 161"
                  d="M5529.384,2740.733v-8.52h2.859l.428-3.321h-3.287v-2.12c0-.961.267-1.616,1.646-1.616h1.758v-2.97a23.519,23.519,0,0,0-2.562-.131,4,4,0,0,0-4.271,4.389v2.449h-2.867v3.32h2.867v8.52Z"
                  transform="translate(-5144.55 -2043.811)"
                  fill="#878787"
                ></path>
              </g>
            </svg>
          </a>

          <a href="/" target="_blank" rel="noopener noreferrer">
            <svg className="ml-4 " height="48" viewBox="0 0 47 48" width="47">
              <g
                className="fill-transparent stroke-white  hover:stroke-lime-600"
                fill="#fff"
                stroke="#878787"
              >
                <ellipse
                  cx="23.5"
                  cy="24"
                  rx="23.5"
                  ry="24"
                  stroke="none"
                ></ellipse>
                <ellipse
                  cx="23.5"
                  cy="24"
                  fill="none"
                  rx="23"
                  ry="23.5"
                ></ellipse>
              </g>
              <path
                className="fill-white hover:fill-lime-600"
                d="m1133.061 2728.41v7.152h-4.146v-6.673c0-1.676-.6-2.82-2.1-2.82a2.268 2.268 0 0 0 -2.127 1.517 2.833 2.833 0 0 0 -.138 1.011v6.965h-4.15s.056-11.3 0-12.473h4.147v1.768l-.027.04h.027v-.04a4.118 4.118 0 0 1 3.738-2.061c2.73.004 4.776 1.783 4.776 5.614zm-17-11.333a2.161 2.161 0 1 0 -.055 4.311h.028a2.162 2.162 0 1 0 .027-4.311zm-2.1 18.485h4.146v-12.473h-4.146z"
                fill="#878787"
                transform="translate(-1099.396 -2704.053)"
              ></path>
            </svg>
          </a>
        </div>
        <p className="text-neutral-200 font-extrabold mb-5 hover:text-lime-600 cursor-pointer">
          Sign up to our newsletter
        </p>
        <a href = "mailto: info@technature.gr" className="text-neutral-200 font-extrabold mb-5 text-3xl hover:text-lime-600 cursor-pointer">
          info@technature.gr
        </a>
      </div>
    </footer>
  );
}
