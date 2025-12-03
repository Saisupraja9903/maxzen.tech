import React from 'react'
import Header from './Header';
import ContactSection from './ContactSection';
import ContactUs from './ContactUs';
import MapSection from './MapSection';
import MarqueeText from './MarqueeText';
import Goals from './Goalss'
import Footer from './Footer';

function ContactPage() {
  return (
    <div>
      <Header/>
      <ContactSection/>
      <ContactUs/>
      <MapSection/>
      <MarqueeText/>
      <Goals/>
      <Footer/>

    </div>
  )
}

export default ContactPage
