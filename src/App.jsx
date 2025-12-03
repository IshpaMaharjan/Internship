import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Connections from './pages/Connections';
import AddConnection from './pages/AddConnection';
import ConnectionDetails from './pages/ConnectionDetails';
import Profile from './pages/Profile';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useAuth } from './context/AuthContext';

function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="connections" element={<RequireAuth><Connections /></RequireAuth>} />
        <Route path="add" element={<RequireAuth><AddConnection /></RequireAuth>} />
        <Route path="connection/:id" element={<RequireAuth><ConnectionDetails /></RequireAuth>} />
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
