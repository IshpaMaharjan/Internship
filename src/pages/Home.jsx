import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useConnections } from '../context/ConnectionContext';
import { Link } from 'react-router-dom';
import RecentActivity from "../components/RecentActivity";


export default function Home() {
  const { user } = useAuth();
  const { connections } = useConnections();

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Welcome to the App, Let's Connect</h2>
        <p className="text-gray-400">Hello, {user?.fullName}! You are logged in as a {user?.userType}.</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-white">Dashboard</h3>
        <p className="text-gray-400 mb-6">You are successfully logged in and can access all features.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link to="/connections" className="bg-blue-700 p-6 rounded text-center text-white">Connections<br/><span className="text-sm">Manage your connections</span></Link>
          <Link to="/add" className="bg-green-700 p-6 rounded text-center text-white">Add Connection<br/><span className="text-sm">Create new connections</span></Link>
          <Link to="/profile" className="bg-purple-700 p-6 rounded text-center text-white">Profile<br/><span className="text-sm">View your profile</span></Link>
        </div>
      </div>

      <div className="mt-10">
        <RecentActivity />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded"> 
          <p className="text-sm text-white">Total Connections</p>
          <p className="text-2xl text-white font-bold">{connections.length}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded text-white">
          <p className="text-sm text-white">Pending Requests</p>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-gray-800 p-6 rounded text-white">
          <p className="text-sm text-white">Messages</p>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>
    </div>
  );
}
