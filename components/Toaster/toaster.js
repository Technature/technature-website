"use client"
import XSvg from "../X";
import styles from "./toaster.module.css"
import { useEffect } from 'react';

import { Inter, Sofia_Sans, Prompt } from "next/font/google";
const sofia = Sofia_Sans({ subsets: ["latin"] });

function Toaster({close,state,type}) {

    return (
    <div className={`z-40  rounded fixed bottom-20 right-40 transition-all cursor-pointer  shadow-lg p-4 flex flex-col `+`${state?styles.closeToaster:styles.openToaster} ${type=="error"?styles.error:styles.success}`}>
        <XSvg click={()=>{close(false)}} fill="#FFFFFF" width="15px" height="15px"></XSvg>
        <p className={`text-white tracking-wider mt-2 font-bold ${sofia.className}`}>{type=="error"?"Παρουσιάστηκε κάποιο πρόβλημα!":"Το μήνυμα στάλθηκε με επιτυχία!"}</p>
    </div> );
}

export default Toaster;