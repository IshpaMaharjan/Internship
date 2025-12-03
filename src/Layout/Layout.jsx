import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex-1 flex flex-col bg-appbg">
        <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
