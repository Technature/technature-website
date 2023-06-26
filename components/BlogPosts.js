"use client"
import React, { useState } from 'react';
import BlogCardForBlogPage from './BlogCard/BlogCardForBlogPage';
import Pagination from './pagination';
import TagFilter from './TagFilter';


function BlogPosts({ blogs,tags }) {
    const [active, setActive] = useState(1);
    const [filter, setFilter] = useState("all");

    const handelActive = (number) => (e) => {
        setActive(number)
    }

    const handleFilter=(filter)=>(e)=>{
        setFilter(filter)
        setActive(1)
        console.log(filter)
    }

    const postsPerPage = 6
    var totalPosts = blogs.length
    const indexOfLastPost = active * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

  
 

      //then we have this function as an intermidiate to get the total posts length after search filtering
    //by assigning it to total posts, I cant use state because infinite rerenders
    function getTotalPosts(blogs) {

        let total = blogs.filter((blog) => {
        
                if (filter == undefined || filter == "all") return true
        
                return blog.tags.includes(filter)

                // for (let i = 0; i < blog.tags.length; i++) {
                //     const tag = blog.tags[i];
                //     if (tag.name === filter) { return true }
                // }
            })
  
            totalPosts=total.length
        return total
  
  
    }
  

    return (
        <>
            <TagFilter tags={tags} filter={filter} handleFilter={handleFilter}></TagFilter>

            <div className="w-[80%] m-[auto] flex flex-row flex-wrap   justify-flex-start gap-[5%]   py-10">
                {getTotalPosts(blogs).slice(indexOfFirstPost, indexOfLastPost).map((blog) => {
                    return (<BlogCardForBlogPage key={blog._id} id={blog._id} photoPath={blog.pathName} title={blog.title} tags={blog.tags} ></BlogCardForBlogPage>
                    )
                })}
            </div>

            <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} active={active} indexOfLastPost={indexOfLastPost} setActive={handelActive}></Pagination>

        </>

    );
}

export default BlogPosts;