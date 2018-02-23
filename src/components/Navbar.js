import React from 'react'

import '../styles/Navbar.css'
import myappRed from '../assets/myappRed.png'
import myappGreen from '../assets/myappGreen.png'
import face from '../assets/face.jpg'

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="innerNavbar">
      {props.theme === "red" ? <img className="myappRed" src={myappRed} alt="My App Red"/> : null}
      {props.theme === "green" ? <img className="myappGreen" src={myappGreen} alt="My App Green"/> : null}
      
      {props.theme === "green" ? (<div className="buttonsGreen">
          <button className="green" onClick={(e) => props.changeTheme(e, "green")} >Green</button>
          <button className="red" onClick={(e) => props.changeTheme(e, "red")} >Red</button>
        </div>)
        : null}
      
      {props.theme === "red" ? <div className="buttonsRed">
          <button className="green" onClick={(e) => props.changeTheme(e, "green")}>Green</button>
          <button className="red" onClick={(e) => props.changeTheme(e, "red")}>Red</button>
        </div>
        : null}

      <img className="face" src={face} alt="Face"/>
      </div>
    </div>
  )
}

export default Navbar
