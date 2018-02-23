import React from 'react'

import '../styles/SidebarItem.css'
import flame from '../assets/flame.svg'

const SidebarItem = () => {
  return (
    <div className="SidebarItem">
      <div className="innerSidebarItem">
        {/* <div className="SidebarItem_image"> */}
          <img className="flame" src={flame} alt="flame" />
        {/* </div> */}
        
        <div className="SidebarItem_description">
          <h2>Line item title</h2>
          <h3>Subheader here</h3>
        </div>

        {/* <div className="SidebarItem_detail"> */}
          <p>A detail</p>
        {/* </div> */}
      </div>
    </div>
  )
}

export default SidebarItem
