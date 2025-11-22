import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import BusinessIntro from './components/BusinessIntro.jsx';
import BlogSection from './components/BlogSection.jsx';
import MarqueeText from './components/MarqueeText.jsx';
import Testimonials from './components/Testimonals.jsx';
import TeamSection from './components/TeamSection.jsx';
import OurProcess from './components/OurProcess.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import GoalsSection from './components/GoalSection.jsx';
import ContactUs from './components/ContactUs.jsx'
import MapSection from './components/MapSection.jsx';
import CartPage from './components/CartPage.jsx';
import CheckoutPage from './components/CheckoutPage.jsx'
import ServicesSection from './components/ServicesSection.jsx';
import AboutAndServices from './components/AboutAndServices.jsx';
import GlobalBrandSection  from './components/GlobalBrandSection.jsx';
import WorkflowSection from './components/WorkflowSection.jsx';
import VisionMissionSection from './components/VisionMissionSection.jsx';
import LoginPage from './components/LoginPage.jsx';
import Dammi from './components/Dammi.jsx';
import ChipCards from './components/ChipCards.jsx';
import Section from './components/Section.jsx';
import SemiconductorSections from './components/SemiconductorSections.jsx';
import ContactSection from './components/ContactSection.jsx';
import Group from './components/Group.jsx';
import Team from './components/Team.jsx';
import WhyChooseSection from './components/WhyChooseSection.jsx';
import BlogZigzagPage from './components/BlogZigzagPage.jsx';
import ScrollCardStack from './components/ScrollCardStack.jsx';
import DigitalMarketingFAQ from './components/DigitalMarketingFAQ.jsx';
import Goalss from './components/Goalss.jsx';

import Home from './components/Home.jsx';
import ContactPage from './components/ContactPage.jsx';
import Blog from './components/Blog.jsx';
import Teampage from './components/Teampage.jsx';
import Aboutsection from './components/Aboutsection.jsx';
import Blog1 from './components/Blog1.jsx';
import Blog2 from './components/Blog2.jsx';
import Blog3 from './components/Blog3.jsx';
import Services1 from './components/Services1.jsx';
import Home2 from './components/Home2.jsx';
import Home3 from './components/Home3.jsx';
import Services9exp from './components/Services9exp.jsx';
import Services9 from './components/Services9.jsx';
import Services8 from './components/Services8.jsx';
// import Services8page from './components/Services8page.jsx';




// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services8page from './components/Services8page.jsx';
import Services7 from './components/Services7.jsx';
import Services6 from './components/Services6.jsx';
import Services5 from './components/Services5.jsx';
import Services4 from './components/Services4.jsx';
import Services3 from './components/Services3.jsx';
import Serviceswoo from './components/Serviceswoo.jsx';
import Servicesdm from './components/Servicesdm.jsx';
// import Countdown from './components/Countdown.jsx';
// import Servicesdms from './components/Servicesdms.jsx';
import Serviceswd from './components/Serviceswd.jsx';
// import Flip from './components/Flip.jsx';
import Privacypolicy from './components/Privacypolicy.jsx';
import TermsAndConditions from './components/Termsandconditions.jsx';

import ThreeD from './components/ThreeD.jsx';





function App() {
  return (
    <div className="App">
     
        {/* <Header /> */}

      {/* ✅ Routes (no <Router> here) */}
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutsection />} />
        <Route path="/Services" element={<Services1 />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/blog" element={<BlogZigzagPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/blogs" element={<BlogZigzagPage />} />
        <Route path="/serviceswoo" element={<Serviceswoo />} />
        <Route path="/servicesdm" element={<Servicesdm />} />
        <Route path="/serviceswd" element={<Serviceswd />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />

        <Route path="/services1" element={<Services1 />} />
        <Route path="/services3" element={<Services3 />} />
        <Route path="/services4" element={<Services4 />} />
        <Route path="/services5" element={<Services5/>} />
        <Route path="/services9" element={<Services9 />} />
        <Route path="/services7" element={<Services7 />} />
        <Route path="/services6" element={<Services6 />} />
        <Route path="/services8" element={<Services8 />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />

      
      </Routes>

      {/* ✅ Common footer */}
      {/* <Footer /> */}
    
     
    {/* <Headers /> */}
   
       
    {/* The rest of your commented-out components */}
    {/*
    <Footer/>
    <BusinessIntro/>
   <About/>
   
    <ServicesSection/>
    <VisionMissionSection/> */}
    {/* <GlobalBrandSection/> */}
    {/* <WorkflowSection/> */}
    {/* <TeamSection/>
    <Testimonials/>
    <BlogSection/>
    <MarqueeText/>
    <OurProcess/>
    <ProjectsSection/>
    <GoalsSection/>
    <ContactUs/>
    <MapSection/>
    <ContactSection/>
     <ContactUs/>
     <MapSection/>
      <MarqueeText/>
      <BusinessIntro/>
      <Group/>
      <Team/>
      <WhyChooseSection/>
       <Goalss/> */}
       {/* <BlogZigzagPage/> */}
      {/* <BusinessIntro/> */}
      {/* <DigitalMarketingFAQ/> */}
      {/* <ScrollCardStack/> */}
      {/* <ServicesSection/>
    <AboutAndServices/>
    <GlobalBrandSection/> */}
    {/* <WorkflowSection/>
    <VisionMissionSection/> */}
    {/* <Footer/> */}
    {/* <LoginPage/>
    <CartPage/>
    <CheckoutPage/> */}
     {/* <Dammi/>
    <ChipCards/>
    <SemiconductorSections/>
    <ContactUs/> */}
   {/* <Section/> */}
   {/* <Aboutsection/> */}
       {/* <BlogZigzagPage/>
       <Blog1/>
       <Blog2/>
      <Blog3/> */}
      {/* <Home2/>. */}
      {/* <Home3/> */}
 {/* <Flip/> */}
     
        {/* ------------------------------------------------------------------------------------------------------ */}

       {/* <Home/> */}
       {/* <Aboutsection/> */}
       {/* <Teampage/> */}
       {/* <Blog/> */}
      {/* <ContactPage/> */}
      {/* <Blog/> */}
      {/* <BlogZigzagPage/> */}
       {/* <About/> */}
       {/* <Team/> */}
       {/* <Services1/> */}
       {/* <Services9exp/> */}
       {/* <Services9/> */}
       {/* <Services8/> */}
       {/* <Services8page/> */}
       {/* <Services7/> */}
       {/* <Services6/> */}
       {/* <Services5/> */}
       {/* <Services4/> */}
       {/* <Services3/> */}
       {/* <Serviceswoo/> */}
       {/* <Servicesdm/> */}
       {/* <Countdown/> */}
       {/* <Servicesdms/> */}
       {/* <Serviceswd/> */}
       {/* <Privacypolicy/> */}
       {/* <TermsAndConditions/> */}
       {/* <ThreeD/> */}
    
      </div>
   );
}

export default App;
// import './App.css';
// import BlogZigzagPage from './components/BlogZigzagPage.jsx';
// import Blog1 from './components/Blog1.jsx';
// import Blog2 from './components/Blog2.jsx';
// import Blog3 from './components/Blog3.jsx';
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<BlogZigzagPage />} />
//         <Route path="/blog1" element={<Blog1 />} />
//         <Route path="/blog2" element={<Blog2 />} />
//         <Route path="/blog3" element={<Blog3 />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

