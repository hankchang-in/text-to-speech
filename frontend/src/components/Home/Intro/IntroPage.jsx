import React from 'react'
import './Intro.css'
import { Link } from 'react-router-dom'
const IntroPage = () => {
  return (
    <div className='introPage'>
        
        <div className='introText'>
            <p className='introTitle'>
            ProjectX     
            </p>
            <p className='introSubTitle'>
            Convert Text to Realistic Speech Instantly!
            </p >
            <p className='introText'>Type or paste any text, choose your preferred voice, and get high-quality speech output in seconds. Perfect for content creators, educators, and anyone who wants to bring text to life!</p>
        </div>
         <div class="getStarted">
                <Link to={'/product'}>
                Get Started
                </Link>
        </div>
    </div>

  ) 
}

export default IntroPage