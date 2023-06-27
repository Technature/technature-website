import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery"
import ScrollGallery from "@/components/ScrollGallery";
import BlogCardForBlogPage from "@/components/BlogCard/BlogCardForBlogPage";
import MainButton from "@/components/MainButton";
import ImageDistort from "@/components/imageDistort/imageDistort";
import axios from "axios"
import { blogPosts } from "@/helpers/dummyData";
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });




export default async function Home() {


  // const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/blog/getAll`,{
  //   method: 'GET',
  // })
  const blogs = await axios.get(`${process.env.NEXT_PUBLIC_URL}/blog/getAll`).then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err)
  })

  return (
    <main className={`${inter.className} `}>

      {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row  bgImage shadow-bgFade">

        <ImageDistort src={"/tech.svg"}></ImageDistort>

        <div className=" w-[90%] md:w-1/2 sm:w-1/2 lg:w-1/3 sm:ml-5 md:ml-10 lg:ml-40 mt-10 sm:mt-0 text-center sm:text-start">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-6xl text-4xl mb-5   font-extrabold`}
          >Unlocking Your Online Potential.
          </h1>
          <h2>
          Your journey to growth starts here. We assist businesses in standing out when they are stagnant. As you navigate the digital landscape, we're there to support you at every step, bringing you closer to achieving your ultimate success.

          </h2>

        </div>
      </section>



      {/* SECTION 2 */}
      <section className=" relative width-full py-40 flex flex-col md:flex-row  items-center justify-start">
        <div id="image-wrapper" className="w-full md:w-1/2 aspect-square relative  mb-6">
          <video style={{ objectFit: "cover", width: "100%", height: "100%" }} autoplay="true" muted loop>
            <source src="meeting2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className=" w-[90%] md:w-1/2 lg:w-1/3 md:m-[auto]  p-4 text-center md:text-start">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter lg:text-6xl md:text-4xl text-5xl  mb-5 font-extrabold `}
          >
           
           We Generate Interest and Demand for Healthcare Brands.
          </h1>
          <h2>
          By harnessing cutting-edge data-driven digital techniques, we create healthcare marketing initiatives that enhance brand recognition, optimize your online visibility, and produce measurable results.
          </h2>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className=" relative width-full flex flex-row items-center justify-center">
        <div className=" w-2/3 md:mr-40">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-5 font-extrabold `}
          >

            Our creative digital agency with its experience <span className="text-tech">offers ..</span>
          </h1>
        </div>
      </section>

      <ScrollGallery sofia={sofia}></ScrollGallery>

      <Services sofia={sofia}></Services>

      {/* <Gallery sofia={sofia}></Gallery> */}



      <section className=" relative w-full flex flex-col items-center justify-center pb-60 ">


        <div className=" relative w-full  flex flex-col items-center justify-start  ">


          <h1
            className={`${sofia.className} text-zinc-700 tracking-tighter md:text-5xl text-3xl  my-10 font-extrabold `}
          >
            Latest articles
          </h1>
          <div id="blogWrapper" className="w-[80%] flex justify-center gap-4 flex-wrap mb-20">
            {blogs.slice(0, 3).map((blog, idx) => {
              return <BlogCardForBlogPage id={blog._id} key={idx} title={blog.title} tags={blog.tags} photoPath={blog.pathName}></BlogCardForBlogPage>
            })}

          </div>

          <MainButton href={"/blog"}>VIEW ALL BLOG POSTS</MainButton>


        </div>
      </section>


    </main>
  );
}
