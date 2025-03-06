import { useState } from 'react'
import './App.css'
import {Routes , BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Product from './components/ConvertComponent/ConvertComponent.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
        
      </Routes>
    </BrowserRouter>    
  )
}

export default App
