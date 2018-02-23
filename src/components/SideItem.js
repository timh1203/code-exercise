import React from 'react'

import '../styles/SideItem.css'
import flame from '../assets/flame.svg'

const SideItem = () => {
  return (
    <div className="SideItem">
      <img src={flame} alt="Flame" />
      <h2>Line item title</h2>
      <h3>Subheader here</h3>
      <p>A detail</p>
    </div>
  )
}

export default SideItem
