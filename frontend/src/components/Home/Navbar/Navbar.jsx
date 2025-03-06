import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'> 
            <ul className='navbarButton'>
                <Link to={'/'}>
                <li to={'/'}>Home</li>
                </Link>
                <Link to={'/product'}>
                <li to={'/product'}>Product</li>
                </Link>
                <Link to={'/about'}>
                <li>About</li>
                </Link>

            </ul>
    </div>
  )
}

export default Navbar