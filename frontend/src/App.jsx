import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home.jsx'
import Pricing from './Components/Pricing/Pricing.jsx'
import Title from './Components/Title/Title.jsx'
import Features from './Components/Features/Features.jsx'

import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'



const App = () => {

  
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="container">
        <Title subtitle="Our features" title="Highlighting the Best of Our Offerings"/>
        <Features/>
        <Title subtitle="Pricing" title="Finding the Right Fit for Your Budget"/>
        <Pricing/>
        <Title subtitle="Contact us" title="Get in touch"/>
        <Contact/>
        <Footer/>
        </div>
    </div>
  )
}

export default App