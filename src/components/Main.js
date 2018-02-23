import React from 'react'

import '../styles/Main.css'
import MainDisplay from './MainDisplay'

const Main = () => {
  return (
    <div className="Main">
      <p>Number of columns</p>
      <p>Row height</p>
      <MainDisplay />
    </div>
  )
}

export default Main
