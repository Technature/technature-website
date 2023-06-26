import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import ImageDistort from "@/components/imageDistort/imageDistort";
import axios from "axios";
import Accordion from "@/components/accordion";

const sofia = Sofia_Sans({ subsets: ["latin"] });

function Faqs() {
    

    return (
        <>
            <section className=" h-[80vh] relative width-full  flex items-center justify-center flex-col sm:flex-row  bgImage shadow-bgFade ">
                <ImageDistort src={"/faqs.svg"}></ImageDistort>

                <div className=" w-[90%] md:w-1/2 sm:w-1/2 lg:w-1/3 sm:ml-5 md:ml-10 lg:ml-40 mt-10 sm:mt-0 text-center sm:text-start">
                    <h1
                        className={`${sofia.className} text-gray-800  lg:text-7xl md:text-5xl text-3xl  mb-5 font-extrabold `}
                    >
                        Got questions?
                    </h1>
                    <h2 className={`${sofia.className}`}>
                    Below we provide some helpful guidelines that will save you some time and help you determine if we are right for you or your project.
                    </h2>

                </div>
            </section>

            <Accordion sofia={sofia}></Accordion>

        </>
    );
}

export default Faqs;