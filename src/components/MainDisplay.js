import React from 'react'

import '../styles/MainDisplay.css'

const MainDisplay = (props) => {
  return (
    <div className="MainDisplay">
      <h1>Main Display Area</h1>
      <p>Render {props.columns} columns of {props.height}px each.</p>
    </div>
  )
}

export default MainDisplay
