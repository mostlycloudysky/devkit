import React from 'react'

function Sidebaricon({icon, text='tooltip'}) {
  return (
    <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
    {text}
    </span>
    </div>
  )
}

export default Sidebaricon