// app/sitemap.js
import fs from "fs";
import axios from "axios"


 
export default async function sitemap() {


  const blogs = await axios.get(`https://technature.gr/blog/getAll`).then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err)
  })

  const posts = blogs.map(({ _id, createdAt }) => ({
    url: `https://technature.gr/blog/${_id}`,
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
    url: `${"https://technature.gr"}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...posts];
}