// app/sitemap.js
import fs from "fs";
import axios from "axios"


 
export default async function sitemap() {


  const blogs = await axios.get(`${process.env.NEXT_PUBLIC_URL}/blog/getAll`).then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err)
  })

  const posts = blogs.map(({ _id, createdAt }) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${_id}`,
    lastModified: createdAt,
  }));
 

  const staticPages = fs
  .readdirSync("app")
  .filter((staticPage) => {
    return ![
      "not-found.js",
      "globals.css",
      "error.js",
      "favicon.ico",
      "page.js",
      "layout.js",
      "sitemap.js",
      "api",
      "robots.txt"
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `/${staticPagePath}`;
  });



  const routes = staticPages.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...posts];
}