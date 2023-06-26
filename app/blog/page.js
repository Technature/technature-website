import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import ImageDistort from "@/components/imageDistort/imageDistort";
import BlogCardForBlogPage from "@/components/BlogCard/BlogCardForBlogPage";
import axios from "axios"
import { blogPosts } from "@/helpers/dummyData";
import Pagination from "@/components/pagination";
import BlogPosts from "@/components/BlogPosts";


const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });



export default async function Blog() {

  const blogs = await axios.get(`${process.env.NEXT_PUBLIC_URL}/blog/getAll`).then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err)
  })

  const tags = await axios.get(`${process.env.NEXT_PUBLIC_URL}/blog/getTags`).then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err)
  })
  
  return (
    <main className={`${inter.className} `}>



      {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row  bgImage shadow-bgFade">

        <ImageDistort src={"/blog.svg"}></ImageDistort>

        <div className=" w-[90%] md:w-1/2 sm:w-1/2 lg:w-1/3 sm:ml-5 md:ml-10 lg:ml-40 mt-10 sm:mt-0 text-center sm:text-start">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-6xl text-4xl mb-5   font-extrabold`}
          >Stay ahead of the curve with our engaging blog
          </h1>

        </div>
      </section>

      <section className=" relative width-full  flex items-center justify-center flex-col sm:flex-row ">

        <figure className="w-full lg:w-4/5 aspect-[4/3] sm:aspect-[6.5/3] relative">
          <div id="gradient" className="absolute bottom-0 z-10 w-full h-1/2" style={{ background: "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)" }} ></div>
          <Image src={blogs[0].pathName} alt="blog-pic" fill="true" className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>

          <div className={`absolute bottom-5 md:bottom-20 z-30 left-5 md:left-20`}>
            {blogs[0].tags.map((tag, idx) => {
              return (
                <span key={idx} className={`uppercase text-emerald-300 font-extrabold text-sm md:text-xl mr-5 ${sofia.className} `}>{tag}</span>

              )
            })}
            <h1 className={`text-white font-extrabold  text-xl sm:text-4xl md:text-5xl lg:text-6xl z-30 break-words  ${sofia.className} `}>{blogs[0].title}</h1>
          </div>

        </figure>


      </section>


      <section id="blog-posts">
            <BlogPosts blogs={blogs} tags={tags} ></BlogPosts>
      </section>

    </main>
  );
}

