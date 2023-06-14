"use client";
import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import { useEffect, useState } from "react";
import Socials from "@/components/Socials";
import { useFormik } from "formik";
import { debounce } from "lodash";
import * as Yup from "yup";
import axios from "axios"
import Toaster from "@/components/Toaster/toaster";

const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });

export default function Contact() {

  //state for the toaster to open or close
  const [open, setOpen] = useState(false);
  const [toasterType, setToasterType] = useState("");

  //function to pass as prop for toaster
  const handleToaster=(type)=>{
    setOpen(true)
    setToasterType(type)
  }
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      from: "",
      message: "",
    },

    validationSchema: Yup.object().shape({
      from: Yup.string()
        .email("Η ηλεκτρονική διεύθυνση δεν είναι εγκυρή")
        .required("Το πεδίο Email είναι υποχρεωτικό"),
      firstName: Yup.string().required("Το πεδίο Όνομα είναι υποχρεωτικό"),
      lastName: Yup.string().required("Το πεδίο Επώνυμο είναι υποχρεωτικό"),
      message: Yup.string()
        .max(250)
        .required("Το πεδίο Μήνυμα είναι υποχρεωτικό"),
    }),

    onSubmit: async (values) => {
      const form = {
        firstName: values.firstName,
        lastName: values.lastName,
        from: values.from,
        message: values.message,
      };
      await axios
        .post(`${process.env.NEXT_PUBLIC_URL}/api/sendForm`, form)
        .then((res) => {
          handleToaster("success")
          formik.resetForm();
        })
        .catch((err) => {
          console.log(err)
          handleToaster("error")
        });
    },
  });

  //we use debounce from lodash to limmit the amount of clicks on submit button
  const debounced = debounce(() => {

    formik.submitForm()
  
}, 1000);

  const handleSubmit = (e) => {
    e.preventDefault()
  debounced();
  };



  useEffect(() => {
   
    var global_r = 255;
    var global_g = 250;
    var global_b = 254;

    var segment_counter = 0;
    var bg_color =
      "rgba(" + global_r + "," + global_g + "," + global_b + ",0.05)";

    var testbody = document.querySelector("body");
    var c = document.querySelector("#mousetrail"),
      ctx = c.getContext("2d"),
      colors = [
        { r: 204, g: 51, b: 255 },
        { r: 255, g: 153, b: 0 },
        { r: 51, g: 153, b: 255 },
      ],
      cIndex = 0,
      maxColors = colors.length,
      total = 0,
      segment = 10000,
      isDown = true,
      px,
      py;

    setSize();

    testbody.onmousemove = testbody.ontouchmove = function (e) {
      plot(e);
    };

    function getPos(e) {
      // e.preventDefault();
      if (e.touches) e = e.touches[0];
      var r = c.getBoundingClientRect();

      return {
        x: e.clientX - r.left,
        y: e.clientY - r.top,
      };
    }

    function plot(e) {
      var pos = getPos(e);
      plotLine(ctx, px, py, pos.x, pos.y);
      px = pos.x;
      py = pos.y;
    }
    function plotLine(ctx, x1, y1, x2, y2) {
      // Fade the previous frame by covering the canvas with a semi-transparent rectangle
      ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
      ctx.fillRect(0, 0, c.width, c.height);

      var diffX = Math.abs(x2 - x1),
        diffY = Math.abs(y2 - y1),
        dist = Math.sqrt(diffX * diffX + diffY * diffY),
        step = dist / 50,
        i = 0,
        t,
        b,
        x,
        y;

      while (i < dist) {
        t = Math.min(1, i / dist);

        x = x1 + (x2 - x1) * t;
        y = y1 + (y2 - y1) * t;

        ctx.fillStyle = getColor();
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);
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
          if (++cIndex >= maxColors) cIndex = 0;
        }

        global_r = c1.r + (c2.r - c1.r) * t;
        global_g = c1.g + (c2.g - c1.g) * t;
        global_b = c1.b + (c2.b - c1.b) * t;

        r = c1.r + (c2.r - c1.r) * t;
        g = c1.g + (c2.g - c1.g) * t;
        b = c1.b + (c2.b - c1.b) * t;

        return "rgb(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + ")";
      }
    }
    window.onresize = setSize;
    function setSize() {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }
  }, []);

  return (
    <div
      className={`min-h-screen ${sofia.className} flex justify-start items-center cursor-crosshair `}
    >
      <canvas id="mousetrail" className="absolute z-10 w-full"></canvas>
      <div className="w-1/3 ml-40 z-40">
        <h2 className="text-lime-600 text-6xl font-extrabold mb-10">Marousi</h2>
        <h3 className="text-zinc-700 text-xl font-extrabold">Technature</h3>
        <h3 className="text-zinc-700 text-xl font-extrabold">Panathineon 9</h3>
        <h3 className="text-zinc-700 text-xl font-extrabold mb-5">Marousi</h3>
        <h3 className="text-lime-600 text-xl font-extrabold mb-20">
          +30 210 806 4614
        </h3>

        <Socials color={"black"}></Socials>
      </div>
<Toaster state={open} close={setOpen} type={toasterType}></Toaster>
      <form id="form" className="w-1/3   p-10 frostedGlass z-40">
        <div id="firstName-wrapper" className=" mb-6">
          <input
            className="w-full border-zinc-400 border-b-2 bg-transparent"
            name="firstName"
            placeholder="Όνομα"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          ></input>
          <div className="h-[13px] w-full text-red-500">
            {formik.errors.firstName}
          </div>
        </div>

        <div id="lastName-wrapper" className=" mb-10">
          <input
            className="w-full border-zinc-400 border-b-2 bg-transparent"
            name="lastName"
            placeholder="Επώνυμο"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          ></input>
            <div className="h-[13px] w-full text-red-500">
            {formik.errors.lastName}
          </div>
        </div>

        <div id="email-wrapper" className=" mb-10">
          <input
            className="w-full border-zinc-400 border-b-2 bg-transparent "
            name="from"
            placeholder="Email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.from}
          ></input>
            <div className="h-[13px] w-full text-red-500">
            {formik.errors.from}
          </div>
        </div>

        <div id="text-area-wrapper" className=" mb-10">
          <textarea
            className="w-full border-zinc-400 border-2 bg-transparent "
            name="message"
            placeholder="Μήνυμα"
            onChange={formik.handleChange}
            value={formik.values.message}
          ></textarea>
            <div className="h-[13px] w-full text-red-500">
            {formik.errors.message}
          </div>
        </div>
        <button
          className="border-lime-600 rounded-3xl border-2 px-9 py-2 text-lime-600 hover:text-white hover:bg-lime-600 active:opacity-70 text-sm"
          onClick={handleSubmit}
        >
          ΑΠΟΣΤΟΛΗ
        </button>
      </form>
    </div>
  );
}
