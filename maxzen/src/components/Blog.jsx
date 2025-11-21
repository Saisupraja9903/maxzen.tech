import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // Import Outlet to render child routes
import BlogZigzagPage from './BlogZigzagPage';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';



function Blog() {
  return (
    <div>
   <Header/>
   <BlogZigzagPage/>
   <Blog1/>
   <Blog2/>
   <Blog3/>
   <Footer/>
    </div>
  )
}

export default Blog
