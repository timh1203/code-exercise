import React from 'react'

import '../styles/Main.css'
import MainDisplay from './MainDisplay'

const Main = () => {
  return (
    <div className="Main">

      <div className="MainInputs">
        
        <p>Number of columns <input type="text" defaultValue="3" /></p>
        <p>Row height <input type="text" defaultValue="760" />px</p>
      </div>

      <MainDisplay />
    </div>
  )
}

export default Main
