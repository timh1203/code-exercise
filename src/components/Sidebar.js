import React from 'react'

import '../styles/Sidebar.css'
import SidebarItem from './SidebarItem'

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
        <SidebarItem {...props} />
        <SidebarItem {...props}/>
        <SidebarItem {...props}/>
    </div>
  )
}

export default Sidebar
