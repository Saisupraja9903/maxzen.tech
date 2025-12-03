import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BusinessIntro from './BusinessIntro'
import BlogSection from './BlogSection'
import MarqueeText from './MarqueeText'
import Testimonials from './Testimonals'
import OurProcess from './OurProcess'
import ProjectsSection from './ProjectsSection'
import GoalsSection from './GoalSection'
import TeamSection from './Group'
import Home1AndSolutions from './Home1AndSolutions'
import Home5 from './Home5'
import Home4 from './Home4'
import Home2 from './Home2'
import Home3 from './Home3'




function Home() {
  return (
    <div>
      <Header/>
      {/* <Home1AndSolutions/> */}
      <Home2/>
      {/* <Home3/> */}
      <Home4/>
      <Home5/>
      <GoalsSection/>
      <ProjectsSection/>
      <OurProcess/>
      {/* <TeamSection/> */}
     <Testimonials/>
      <BlogSection/>
       <MarqueeText/>
     <BusinessIntro/>
     <Footer/>
    </div>
  )
}

export default Home
