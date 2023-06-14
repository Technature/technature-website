import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import ImageDistort from "@/components/imageDistort/imageDistort";
import BlogCard from "@/components/BlogCard/BlogCard";
import MainButton from "@/components/MainButton";
import ImageCard from "@/components/ImageCard";
import axios from "axios"

const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Technature blog",
  description: "Technature company website",
};



export default async function Blog() {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/blog/getAll`,{
    method: 'GET',
  })
  const blogs =await res.json()


  return (
    <main className={`${inter.className} `}>

      {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row ">

        <ImageDistort src={"/BLOG.png"}></ImageDistort>

        <div className=" w-1/2 ">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-7xl text-4xl ml-40  font-extrabold`}
          >Stay ahead of the curve with our engaging blog
          </h1>

        </div>

      </section>

      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row ">

        <figure className="w-4/5 h-[50vh] relative">
          <div id="gradient" className="absolute bottom-0 z-10 w-full h-1/2" style={{ background: "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)" }} ></div>
          <Image src={blogs[0].pathName} alt="blog-pic" fill="true" className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
          <div className={`absolute bottom-20 z-30 left-20 w-full`}>
            {blogs[0].tags.map((tag,idx) => {
              return (
                <span key={idx} className={`text-lime-400 font-extrabold text-3xl mr-5 ${sofia.className} `}>{tag}</span>

              )
            })}
            <h1 className={`text-white font-extrabold text-3xl z-30 ${sofia.className} `}>{blogs[0].title}</h1>
          </div>
          
        </figure>


      </section>


      <section id="blog-posts">

      <div id="image-card-wrapper" className="w-1/3">
            <ImageCard  src={"/pic1.webp"}></ImageCard>
      </div>

      </section>

    </main>
  );
}

