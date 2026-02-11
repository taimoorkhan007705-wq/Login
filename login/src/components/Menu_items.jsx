import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu_items({ setsidebarOpen, menuItemsData }) {
  return (
    <div className="px-6 text-gray-600">
      {menuItemsData.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          onClick={() => setsidebarOpen(false)}
          className={({ isActive }) =>
            `px-3.5 py-2 flex items-center gap-3 rounded
             ${isActive ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`
          }
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </NavLink>
      ))}
    </div>
  )
}

export default Menu_items
