import React from 'react'

import '../styles/Sidebar.css'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
    </div>
  )
}

export default Sidebar
