import React from 'react'
import Navbar from './Navbar/Navbar'
import './Home.css'
import IntroPage from './Intro/IntroPage'
import ConvertComponent from './ConvertComponent/ConvertComponent'
import About from '../About/About'
const Home = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        <IntroPage></IntroPage>

    </div>
  )
}

export default Home