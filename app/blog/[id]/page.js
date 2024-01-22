import axios from "axios";
import formatDate from "@/helpers/formatDate";
import { Inter, Sofia_Sans, Prompt } from "next/font/google";
import Image from "next/image";
import * as DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import BlogCard from "@/components/BlogCard/BlogCard";
import Link from "next/link";

const sofia = Sofia_Sans({ subsets: ["latin"] });
const window = new JSDOM("").window;
const purify = DOMPurify(window);

export default async function BlogPage({ params, searchParams }) {
  const blog = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/blog/blogById/${params.id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const blogs = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/blog/getAll`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

 
  return (
    <>
      <section id="blog" className={` mb-20 w-full ${sofia.className} `}>
        <header className=" md:px-[15%] pt-20 text-center mb-20">
          <h5 className=" text-sm md:text-xl   text-tech font-bold tracking-wider mb-3">
            {formatDate(blog.createdAt)}
          </h5>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-zinc-800 mb-5 md:mb-10 lg:mb-20">
            {blog.title}
          </h1>

          <figure className=" aspect-[4/3] sm:aspect-[6.5/3] relative">
            <Image
              src={blog.pathName}
              alt="blog-pic"
              fill="true"
              className="object-cover"
            ></Image>
          </figure>
        </header>

        <article>
          <div
            className={`${sofia.className} w-[50%] m-[auto]`}
            dangerouslySetInnerHTML={{
              __html: purify.sanitize(blog.content, {
                ALLOWED_ATTR: ["style"],
              }),
            }}
          ></div>
        </article>
      </section>

      <section className="w-full bg-tech z-0 py-20 ">
        <h1 className=" w-4/5 m-[auto] text-white lg:text-start text-center font-extrabold text-4xl tracking-wide mb-10">
          More from the Blog
        </h1>
        <div className="w-4/5 m-[auto] justify-center lg:justify-start  flex flex-row">

          <div className="flex flex-col  lg:flex-row gap-6 ">
            {blogs.slice(0, 2).map((blog) => {
            
              return (
                <BlogCard
                  title={blog.title}
                  tags={blog.tags}
                  photoPath={blog.pathName}
                  id={blog._id}
                ></BlogCard>
              );
            })}
            <Link className="m-[auto]" href={`/blog`} >
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        className="w-[100px] h-[100px] cursor-pointer fill-white"
	 viewBox="0 0 108.8 108.8"  xmlSpace="preserve">
<g>
	<g>
		<path class="st0" d="M95.54,12.37V93.7H14.21V12.37H95.54 M98.37,9.53h-87v87h87V9.53L98.37,9.53z"/>
	</g>
	<g>
		<rect x="28.79" y="27.95" class="st0" width="11.17" height="11.17"/>
		<path class="st0" d="M38.54,29.37v8.33h-8.33v-8.33H38.54 M41.37,26.53h-14v14h14V26.53L41.37,26.53z"/>
	</g>
	<g>
		<rect x="48.79" y="27.95" class="st0" width="11.17" height="11.17"/>
		<path class="st0" d="M58.54,29.37v8.33h-8.33v-8.33H58.54 M61.37,26.53h-14v14h14V26.53L61.37,26.53z"/>
	</g>
	<g>
		<rect x="68.79" y="27.95" class="st0" width="11.17" height="11.17"/>
		<path class="st0" d="M78.54,29.37v8.33h-8.33v-8.33H78.54 M81.37,26.53h-14v14h14V26.53L81.37,26.53z"/>
	</g>
	<g>
		<rect x="28.79" y="47.95" class="st0" width="11.17" height="11.17"/>
		<path class="st0" d="M38.54,49.37v8.33h-8.33v-8.33H38.54 M41.37,46.53h-14v14h14V46.53L41.37,46.53z"/>
	</g>
	<g>
		<rect x="48.79" y="47.95" class="st0" width="11.17" height="11.17"/>
		<path class="st0" d="M58.54,49.37v8.33h-8.33v-8.33H58.54 M61.37,46.53h-14v14h14V46.53L61.37,46.53z"/>
	</g>
	<g>
		<rect x="68.79" y="47.95" class="st0" width="11.17" height="11.17"/>
		<path class="st0" d="M78.54,49.37v8.33h-8.33v-8.33H78.54 M81.37,46.53h-14v14h14V46.53L81.37,46.53z"/>
	</g>
	<g>
		<rect x="28.79" y="66.95" class="st0" width="11.17" height="11.17"/>
		<path class="st0" d="M38.54,68.37v8.33h-8.33v-8.33H38.54 M41.37,65.53h-14v14h14V65.53L41.37,65.53z"/>
	</g>
	<g>
		<rect x="48.79" y="66.95" class="st0" width="11.17" height="11.17"/>
		<path class="st0" d="M58.54,68.37v8.33h-8.33v-8.33H58.54 M61.37,65.53h-14v14h14V65.53L61.37,65.53z"/>
	</g>
	<g>
		<rect x="68.79" y="66.95" class="st0" width="11.17" height="11.17"/>
		<path class="st0" d="M78.54,68.37v8.33h-8.33v-8.33H78.54 M81.37,65.53h-14v14h14V65.53L81.37,65.53z"/>
	</g>
</g>
</svg>
            <p className="text-white font-bold tracking-wide">ALL BLOGS</p>
          </Link>
          </div>

          
         
        </div>
      </section>
    </>
  );
}
