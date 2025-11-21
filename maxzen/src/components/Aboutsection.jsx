import React from 'react'
import BusinessIntro from './BusinessIntro'
import Header from './Header'
import About from './About'
import ServicesSection from './ServicesSection'
import VisionMissionSection from './VisionMissionSection'
import TeamSection from './TeamSection'
import Footer from './Footer'
import GlobalBrandSection from './GlobalBrandSection'
import WorkflowSection from './WorkflowSection'

function Aboutsection() {
  return (
    <div>
        <Header/>
      {/* <BusinessIntro/> */}
      <About/>
    
      
       <GlobalBrandSection/>
         <WorkflowSection/>


       <TeamSection/>
       <Footer/>

    </div>
  )
}

export default Aboutsection
