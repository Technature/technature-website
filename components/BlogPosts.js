"use client"
import React, { useState } from 'react';
import BlogCardForBlogPage from './BlogCard/BlogCardForBlogPage';
import Pagination from './pagination';
import TagFilter from './TagFilter';


function BlogPosts({ blogs,tags }) {
    const [active, setActive] = useState(1);

    const handelActive = (number) => (e) => {

        setActive(number)
    }

    const postsPerPage = 6
    var totalPosts = blogs.length
    const indexOfLastPost = active * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    console.log(tags)
 

      //then we have this function as an intermidiate to get the total posts length after search filtering
    //by assigning it to total posts, I cant use state because infinite rerenders
    function getTotalPosts(blogs) {

        let total = blogs
            //category filter
            .filter((provisioner) => {
                if (activeFilter.categoryName == undefined || activeFilter.categoryName == "") return true
                let categories = provisioner.categories
                for (let i = 0; i < categories.length; i++) {
                    const category = categories[i];
                    if (category.name === activeFilter.categoryName) { return true }
                }
            })
            //subcategory filterr
            .filter((provisioner) => {
                console.log(provisioner);
                if (activeFilter.subcategoryName == undefined || activeFilter.subcategoryName == "") return true
                let subcategories = provisioner.subcategories
                for (let i = 0; i < subcategories.length; i++) {
                    const subcategory = subcategories[i];
                    if (subcategory.name === activeFilter.subcategoryName) { return true }
                }
            })
            //search filter
            .filter((provisioner) => {
  
                if (term == undefined) return true
                return (normalizeGreek(provisioner?.name.toLowerCase()).includes(term.toLowerCase())
                    || normalizeGreek(provisioner?.location.readable.toLowerCase()).includes(term.toLowerCase())
                )
  
            })
  
        totalPosts = total.length
  
  
        return total
  
  
    }
  

    return (
        <>
            <TagFilter tags={tags}></TagFilter>

            <div className="w-[80%] m-[auto] flex flex-row flex-wrap   justify-between  py-10">
                {blogs.slice(indexOfFirstPost, indexOfLastPost).map((blog) => {
                    return (<BlogCardForBlogPage photoPath={blog.pathName} title={blog.title} tags={blog.tags} ></BlogCardForBlogPage>
                    )
                })}
            </div>

            <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} active={active} indexOfLastPost={indexOfLastPost} setActive={handelActive}></Pagination>

        </>

    );
}

export default BlogPosts;