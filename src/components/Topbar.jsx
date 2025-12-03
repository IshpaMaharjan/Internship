import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Topbar({setCollapsed }) {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-gray-800 text-white">
      <div className="flex items-center gap-4">
        <button onClick={() => setCollapsed(prev => !prev)} className="sm:hidden px-2 py-1 rounded-md">☰</button>
        <div>
          <h1 className="text-xl font-semibold">Welcome back, {user?.fullName}</h1>
          <p className="text-xs text-gray-400">{user?.userType}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </header>
  );
}
