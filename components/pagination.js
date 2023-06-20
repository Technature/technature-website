"use client"
import React, { useState } from 'react';

const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Pagination({ postsPerPage, totalPosts,active,setActive,indexOfLastPost }) {



    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

 return (
        <div className="flex items-center justify-center  bg-white px-4 py-3 sm:px-6">

            <div className="flex-col sm:flex-row sm:flex sm:flex-1 sm:items-center sm:justify-center">
         
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">

                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {pageNumbers.map((idx) => {
                         
                          return (
                          <>
                          {
                            idx==active?
                            <div
                            key={"qwefd"+idx}
                            divria-current="page"
                            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                         {idx}
                        </div>
                            :
                            <div
                            onClick={setActive(idx)}
                            key={"vdrfsgbre"+idx}
                            divria-current="page"
                            className=" cursor-pointer relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                         {idx}
                        </div>
                          }  
                            </>)
                        })}



                    </nav>
                </div>
            </div>
        </div>
    )
}