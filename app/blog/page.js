import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import ImageDistort from "@/components/imageDistort/imageDistort";

import BlogCard from "@/components/BlogCard/BlogCard";
import { blogPosts } from "@/helpers/dummyData";
import MainButton from "@/components/MainButton";

const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Technature blog",
  description: "Technature company website",
};

export default function Blog() {


  return (
    <main className={`${inter.className} `}>

      {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row ">
        <ImageDistort></ImageDistort>
        <div className=" w-1/3 relative mr-[60px] ml-[30px] ">
          <Image src="/pic1.webp" width={500} height={500}></Image>
        </div>
        <div className=" w-1/3 ">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-7xl text-4xl  mb-5 font-extrabold`}
          >Stay ahead of the curve with our engaging blog
          </h1>
     
        </div>
      </section>

    


    </main>
  );
}
