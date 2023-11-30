import React from 'react'
import "./ContactMain.css"

const ContactMain = () => {
  return (
    <div className='contact-container'>
      <h2>Want to get in touch?</h2>
      <p>As a full-time software developer, I'm always open to new opportunities and collaborations. Whether 
        you have a project in mind, want to discuss a potential partnership, or just want to say hi, feel free to reach out!</p>
      <h3>Best ways to reach out</h3>
      <div className='btn-container'>
        <a href="mailto:joshua.esrig@gmail.com" className='btn'>Email</a> 
        <a href="https://www.linkedin.com/in/esrig/" className='btn'>LinkedIn</a> 
      </div>    
    </div>
  )
}

export default ContactMain
