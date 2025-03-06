import React from 'react'
import './About.css'
import Navbar from '../Home/Navbar/Navbar'
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='aboutContainer'>
        <h1>
          About Me
        </h1>
        <h3 className='aboutSubheading'>
          Vishal Gusain - MERN Stack Developer
        </h3>
        <p>
        Welcome to my Text-to-Speech (TTS) website! I'm Vishal Gusain, a passionate MERN Stack Developer with approximately three years of experience in web development. My expertise lies in building scalable and efficient web applications using MongoDB, Express.js, React.js, and Node.js.
        </p>

        <h3>
          My Experience & Skills
        </h3> 
        <ul>
          <li>
            MERN Stack Development: Expertise in building dynamic and high-performance web applications.
          </li>
          <li>
            JavaScript & Frameworks: Strong proficiency in JavaScript, along with hands-on experience in React.js, Node.js, and Express.js.

          </li>
          <li>
            E-commerce Development: Worked extensively with BigCommerce and Shopify, helping businesses create custom themes, integrate third-party apps, and optimize storefront performance.

          </li>
          <li>
          API Development & Integration: Skilled in building and integrating RESTful APIs for seamless communication between front-end and back-end services.

          </li>
        </ul>



        <h3>
          About This Website
        </h3>
        <p>
          This website is designed to provide an easy-to-use Text-to-Speech (TTS) conversion service. Whether you need to generate speech from text for accessibility, content creation, or personal use, this tool is built to deliver high-quality audio output efficiently.

        </p>
        <h3>
        Let's Connect
        </h3>
        <p>
          If you're interested in collaborating, have questions, or just want to connect, feel free to reach out. I'm always open to discussing new projects and ideas!
          Thanks for visiting my website!
        </p>
        <ul className='socialMedia'>
          <li><a href="https://www.linkedin.com/in/vishal-gusain9315472844"><img src="/Linkedin.png" alt="linked" /></a></li>
          <li><a href=""><img src="/Facebook.png" alt="linked" /></a></li>
          <li><a href=""><img src="/Instagram.png" alt="linked" /></a></li>
          <li><a href=""><img src="/Twitter.png" alt="linked" /></a></li>
          <li><a href=""><img src="/Youtube.png" alt="linked" /></a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default About