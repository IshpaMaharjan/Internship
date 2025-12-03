import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const items = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/connections', label: 'Connections', icon: '👥' },
  { to: '/add', label: 'Add Connection', icon: '➕' },
  { to: '/profile', label: 'Profile', icon: '👤' }
];

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside className={classNames('bg-gray-800 border-r border-gray-700 text-white transition-all duration-200', { 'w-20': collapsed, 'w-64': !collapsed })}>
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 p-4">
            <button onClick={() => setCollapsed(prev => !prev)} className="text-sm py-1 px-2 rounded-md hover:bg-gray-700">{collapsed ? '➡' : '⬅'}</button>
            {!collapsed && <h2 className="font-semibold text-lg">Let's Connect</h2>}
          </div>
          <nav className="mt-4">
            {items.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => classNames('flex items-center gap-3 px-4 py-3 rounded-r-lg mx-2 my-1 hover:bg-gray-700', { 'bg-gray-700': isActive })}
              >
                <span className="text-lg">{item.icon}</span>
                {!collapsed && <span className="font-medium">{item.label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4">
          {!collapsed && <p className="text-xs text-gray-400">© {new Date().getFullYear()} ConnectApp</p>}
        </div>
      </div>
    </aside>
  );
}
