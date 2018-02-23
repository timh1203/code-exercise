import React from 'react'

import '../styles/Navbar.css'
import myappRed from '../assets/myappRed.png'
import face from '../assets/face.jpg'

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={myappRed} alt="My App Red"/>
      <button>Green</button>
      <button>Red</button>
      <img src={face} alt="Face"/>
    </div>
  )
}

export default Navbar
