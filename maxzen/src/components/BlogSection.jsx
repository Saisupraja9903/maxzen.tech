// import React from "react";
// import { ArrowRight } from "lucide-react";
// import blog1 from "../assests/logoo3.jpg"



// const blogs = [
//   {
//     id: 1,
//     image: blog1, // replace with your image path
//     date: "July 28, 2025",
//     categories: ["Formulas"],
//     title:
//       "Top 5 Affordable SEO Packages for Small Business Growth – Maxzen.tech",
//     comments: "0 Comment",
//   },
//   {
//     id: 2,
//     image: "/images/blog2.jpg", // replace with your image path
//     date: "November 23, 2023",
//     categories: ["Formulas", "Strategy Genius", "Uncategorized"],
//     title:
//       "Top 7 Content Marketing Advantages Every Business Should Know",
//     comments: "0 Comment",
//   },
//   {
//     id: 3,
//     image: "/images/blog3.jpg", // replace with your image path
//     date: "September 23, 2023",
//     categories: ["Formulas", "Strategy Genius", "Uncategorized"],
//     title:
//       "SEO Agency Near Me Boost Your Local Rankings with Maxzen.tech",
//     comments: "0 Comment",
//   },
// ];

// const BlogSection = () => {
//   return (
//     <section className="py-16 bg-white text-center">
//       <p className="text-sm text-red-500 tracking-widest font-semibold mb-2">
//         CURRENT NEWS & BLOGS
//       </p>
//       <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
//         Digital World News
//       </h2>

//       <div className="max-w-6xl mx-auto space-y-12">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="flex flex-col md:flex-row items-center gap-6 border-b pb-10"
//           >
//             {/* Image */}
//             <div className="relative w-full md:w-1/2">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full rounded-lg object-cover"
//               />
//               <div className="absolute top-4 left-4 bg-black text-white text-sm px-4 py-1 rounded-md font-semibold uppercase">
//                 {blog.date}
//               </div>
//             </div>

//             {/* Content */}
//             <div className="w-full md:w-1/2 text-left space-y-3">
//               {/* Tags */}
//               <div className="flex flex-wrap gap-3">
//                 {blog.categories.map((cat, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full uppercase text-sm font-medium"
//                   >
//                     {cat}
//                   </span>
//                 ))}
//               </div>

//               {/* Title */}
//               <h3 className="text-2xl font-bold text-gray-900 leading-snug hover:text-orange-600 cursor-pointer transition">
//                 {blog.title}
//               </h3>

//               {/* Comments */}
//               <p className="text-sm text-red-500">{blog.comments}</p>

//               {/* Arrow Button */}
//               <button className="bg-black hover:bg-orange-600 transition text-white p-3 rounded-full">
//                 <ArrowRight size={20} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All Blogs Button */}
//       <div className="mt-12">
//         <button className="border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition text-lg font-medium">
//           View All Blogs
//         </button>
//       </div>
//     </section>
//   );
// };
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import blog1 from "../assests/logoo3.jpg";
import blog2 from "../assests/logoo4.jpg";
import blog3 from "../assests/logoo5.jpg";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image: blog1,
    date: "July 28, 2025",
    categories: ["Formulas"],
    title:
      "Top 5 Affordable SEO Packages for Small Business Growth – Maxzen.tech",
    // comments: "0 Comment",
  },
  {
    id: 2,
    image: blog2,
    date: "November 23, 2023",
    categories: ["Formulas", "Strategy Genius", "Uncategorized"],
    title: "Top 7 Content Marketing Advantages Every Business Should Know",
    // comments: "0 Comment",
  },
  {
    id: 3,
    image: blog3,
    date: "September 23, 2023 ",
    categories: ["Formulas", "Strategy Genius", "Uncategorized"],
    title: "SEO Agency Near Me Boost Your Local Rankings with Maxzen.tech",
    // comments: "0 Comment",
  },
];

const BlogSection = () => {

  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white text-center">
      {/* Section Header */}
      <p className="text-sm text-orange-600 tracking-widest font-semibold mb-2">
        CURRENT NEWS & BLOGS
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Digital World News
      </h2>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto space-y-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row items-center gap-6 border-b pb-8 group transition-all duration-300 hover:bg-gradient-to-r hover:from-[#fff8f0] hover:to-[#ffe9d6] rounded-2xl px-4"
          >
            {/* Image Container */}
            <div
              className="relative w-full md:w-1/2 overflow-hidden rounded-xl cursor-pointer"
              onClick={() => {
                if (blog.id === 1) navigate("/blog1");
                if (blog.id === 2) navigate("/blog2");
                if (blog.id === 3) navigate("/blog3");
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[240px] md:h-[260px] object-cover rounded-xl transform transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-black text-white text-sm px-4 py-1 rounded-md font-semibold uppercase">
                {blog.date}
              </div>
            </div>

            {/* Blog Content */}
            <div className="w-full md:w-1/2 text-left space-y-3 transform transition-all duration-500 ease-in-out group-hover:-translate-y-2">

              <div className="flex flex-wrap gap-3">
                {blog.categories.map((cat, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full uppercase text-sm font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 leading-snug hover:text-orange-600 cursor-pointer transition">
                {blog.title}
              </h3>

              <div className="flex items-center justify-between mt-10">
                <p className="text-sm text-orange-600">{blog.comments}</p>
                <button className="bg-black hover:bg-orange-600 transition text-white p-3 rounded-full">
                  <ArrowRight size={20} />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="mt-12">
        <button 
        onClick={() => navigate("/blogs")}
        className="relative border border-black text-black px-8 py-3 rounded-full overflow-hidden text-lg font-medium group">
          <span className="absolute inset-0 bg-orange-600 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
          <span className="relative group-hover:text-white transition-colors duration-500">
            View All Blogs
          </span>
        </button>
      </div>

    </section>
  );
};

export default BlogSection;
