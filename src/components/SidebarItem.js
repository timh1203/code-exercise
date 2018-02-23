import React from 'react'

import '../styles/SidebarItem.css'
import flameGreen from '../assets/flameGreen.svg'
import flameRed from '../assets/flameRed.svg'

const SidebarItem = (props) => {
  return (
    <div className="SidebarItem">
      <div className="innerSidebarItem">
      {props.theme === "green" ? <img className="flameGreen" src={flameGreen} alt="flameGreen" /> : null}
      {props.theme === "red" ? <img className="flameRed" src={flameRed} alt="flameRed" /> : null}
        
        <div className="SidebarItem_description">
          <h2>Line item title</h2>
          <h3>Subheader here</h3>
        </div>

        <p>A detail</p>
      </div>
    </div>
  )
}

export default SidebarItem
