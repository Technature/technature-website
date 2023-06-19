import Image from "next/image";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery"
import ScrollGallery from "@/components/ScrollGallery";
import BlogCard from "@/components/BlogCard/BlogCard";
import MainButton from "@/components/MainButton";
import ImageDistort from "@/components/imageDistort/imageDistort";
import axios from "axios"
import { blogPosts } from "@/helpers/dummyData";


const inter = Inter({ subsets: ["latin"] });

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Technature",
  description: "Technature company website",
};



export default async function Home() {

 
  // const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/blog/getAll`,{
  //   method: 'GET',
  // })
  const blogs =blogPosts

  return (
    <main className={`${inter.className} `}>

      {/* SECTION 1 */}
      <section className=" h-[100vh] relative width-full  flex items-center justify-center flex-col sm:flex-row ">
     
     <ImageDistort src={"/home.png"}></ImageDistort>
    
     <div className=" w-[90%] md:w-1/2 sm:w-1/2 lg:w-1/3 sm:ml-5 md:ml-10 lg:ml-40 mt-10 sm:mt-0 text-center sm:text-start">
       <h1
         className={`${sofia.className} text-gray-800 tracking-tighter md:text-6xl text-4xl mb-5   font-extrabold`}
       >Δημιουργώντας ψηφιακές εμπειρίες
       </h1>
       <h2>
       Ένα όμορφο ταξίδι προς την ανάπτυξη του brand σας ξεκινάει εδώ!
Θέλετε να ξεχωρίσετε από τα τετρημένα; Είμαστε συνοδοιπόροι σε κάθε βήμα σας και σας οδηγούμε με ασφάλεια στο ψηφιακό κόσμο. Ας ανέβουμε στη κορυφή μαζί!

          </h2>
  
     </div>
   </section>



      {/* SECTION 2 */}
      <section className=" relative width-full py-40 flex flex-col md:flex-row  items-center justify-start">
      <div id="image-wrapper" className="w-full md:w-1/2 aspect-square relative  mb-6">
     <Image alt="section2pic" src="/pic1.webp" fill="true" className="object-cover "></Image>
     </div>
        <div className=" w-[90%] md:w-1/2 lg:w-1/3 md:m-[auto]  p-4 text-center md:text-start">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter lg:text-7xl md:text-5xl text-6xl  mb-5 font-extrabold `}
          >
            Making brands a damn site better
          </h1>
          <h2>
            Let&apos;s face it, first impressions matter. Your website&apos;s an
            opportunity to wow your audience, so why waste it with bad design?
            Because brands win new fans when they&apos;re brave enough to go beyond
            their creative comfort zone.
          </h2>
        </div>
      </section>

      {/* SECTION 3 */}
     <section className=" relative width-full flex flex-row items-center justify-center">
        <div className=" w-2/3 md:mr-40">
          <h1
            className={`${sofia.className} text-gray-800 tracking-tighter md:text-5xl text-3xl  mb-5 font-extrabold `}
          >
            Tο δημιουργικό ψηφιακό μας γραφείο με την εμπείρα του <span className="text-lime-600">προσφέρει ...</span>
          </h1>
        </div>
      </section>

      <ScrollGallery sofia={sofia}></ScrollGallery>
 
      <Services sofia={sofia}></Services>

      <Gallery sofia={sofia}></Gallery> 



      <section className=" relative w-full flex flex-col items-center justify-center pb-60 ">


        <div className=" relative w-full  flex flex-col items-center justify-start  ">


          <h1
            className={`${sofia.className} text-zinc-700 tracking-tighter md:text-5xl text-3xl  my-10 font-extrabold `}
          >
            Latest articles
          </h1>
          <div id="blogWrapper" className="w-[80%] flex justify-center gap-4 flex-wrap mb-20">
            {blogs.map((blogPost,idx) => {
              return <BlogCard key={idx} title={blogPost.title} tags={blogPost.tags} photoPath={blogPost.pathName}></BlogCard>
            })}

          </div>

          <MainButton href={"/blog"}>VIEW ALL BLOG POSTS</MainButton>


        </div>
      </section>


    </main>
  );
}
