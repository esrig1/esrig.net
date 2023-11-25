import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactHero from "../components/OtherImg"


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ContactHero heading="Contact Me" text = "Lets Chat!"/>
      <Footer/>
    </div>
  )
}

export default Contact
