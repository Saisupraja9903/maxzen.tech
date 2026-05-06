import './App.css';
import BlogZigzagPage from './components/BlogZigzagPage.jsx';
import Home from './components/Home.jsx';
import ContactPage from './components/ContactPage.jsx';
import Teampage from './components/Teampage.jsx';
import Aboutsection from './components/Aboutsection.jsx';
import Blog1 from './components/Blog1.jsx';
import Blog2 from './components/Blog2.jsx';
import Blog3 from './components/Blog3.jsx';

import Services9 from './components/Services9.jsx';
import Services8 from './components/Services8.jsx';
// import Services8page from './components/Services8page.jsx';
import Blog5 from './components/Blog5.jsx';

// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Services7 from './components/Services7.jsx';
import Services6 from './components/Services6.jsx';
import Services5 from './components/Services5.jsx';
import Services4 from './components/Services4.jsx';
import Services3 from './components/Services3.jsx';
import DigitalMarketingServices   from './components/DigitalMarketingServices.jsx';
import Serviceswoo from './components/Serviceswoo.jsx';
import Servicesdm from './components/Servicesdm.jsx';
// import Countdown from './components/Countdown.jsx';
import Serviceswd from './components/Serviceswd.jsx';
import Privacypolicy from './components/Privacypolicy.jsx';
import TermsAndConditions from './components/Termsandconditions.jsx';
import Blog4 from './components/Blog4.jsx';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";





function App() {

   const location = useLocation();

   useEffect(() => {
    if (location.hash === "#home2") {
      setTimeout(() => {
        document.getElementById("home2-start")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location]);

  return (
    <div className="App">
     <div className="mt-16"></div>

      <Routes>
         
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutsection />} />
        {/* <Route path="/Services" element={<DigitalMarketingServices   />} /> */}
        <Route path="/digitalmarketingservices" element={<DigitalMarketingServices />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/blog" element={<BlogZigzagPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogZigzagPage />} />
        <Route path="/serviceswoo" element={<Serviceswoo />} />
        <Route path="/DigitalMarketing" element={<Servicesdm />} />
        <Route path="/websitedesignCompanyinHyderabad" element={<Serviceswd />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />

        
        <Route path="/webdevelopement" element={<Services3 />} />
        <Route path="/seoservicesinhyderabad" element={<Services4 />} />
        <Route path="/socialmediamarketing" element={<Services5 />} />
        <Route path="/services9" element={<Services9 />} />
        <Route path="/cloudcomputingservicesinhyderabad" element={<Services7 />} />
        <Route path="/services6" element={<Services6 />} />
        <Route path="/mobileappdevelopementservicesinhyderabad" element={<Services8 />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
          <Route path="/blog5" element={<Blog5 />} />

      
      </Routes>

      </div>
   );
}

export default App;
