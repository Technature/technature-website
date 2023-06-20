import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import ImageDistort from "@/components/imageDistort/imageDistort";
import MainButton from "@/components/MainButton";
import ImageCard from "@/components/ImageCard";
import axios from "axios"

const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Technature blog",
  description: "Technature company website",
};


export default async function Work() {
 



  return (
    <main className={`${inter.className} `}>

      {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row ">

        <ImageDistort src={"/work.png"}></ImageDistort>

        <div className=" w-1/2  ml-40 ">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-7xl text-4xl mb-10 font-extrabold`}
        >Ζούμε και αναπνέουμε για το ψηφιακό μάρκετινγκ.
          </h1>
          <h2>
          Αποτελούμαστε από μια μίξη διαφορετικών ιδιοτήτων στον ψηφιακό κλάδο. Όλοι μαζί συνδυάζουμε τις ικανότητες μας και παράγουμε ιδέες, εικαστικά, κείμενα, designs και ιστοσελίδες προσαρμοσμένες ανάλογα στο κάθε brand. 

          </h2>
  
        </div>

      </section>



      <section id="blog-posts" className="relative width-full  flex items-center justify-center flex-col sm:flex-row ">

      <div id="blogs-wrapper" className="w-4/5">

      
      <div id="image-card-wrapper" className="w-1/3">
            <ImageCard  src={"/pic1.webp"}></ImageCard>
      </div>
      </div>
      </section>

    </main>
  );
}

