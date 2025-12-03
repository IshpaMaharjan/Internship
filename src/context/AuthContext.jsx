import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
const USERS_KEY = 'connectapp_users_v1';
const SESSION_KEY = 'connectapp_session_v1';

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const s = localStorage.getItem(USERS_KEY);
    return s ? JSON.parse(s) : [];
  });

  const [user, setUser] = useState(() => {
    const s = localStorage.getItem(SESSION_KEY);
    return s ? JSON.parse(s) : null;
  });

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(SESSION_KEY);
  }, [user]);

  const signup = ({ fullName, email, password, userType }) => {
    const exists = users.find(u => u.email === email);
    if (exists) return { success: false, message: 'Email already registered' };
    const newUser = { id: Date.now(), fullName, email, password, userType, joined: new Date().toISOString() };
    setUsers(prev => [newUser, ...prev]);
    setUser({ id: newUser.id, fullName: newUser.fullName, email: newUser.email, userType: newUser.userType });
    return { success: true };
  };

  const login = ({ email, password }) => {
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return { success: false, message: 'Invalid credentials' };
    setUser({ id: found.id, fullName: found.fullName, email: found.email, userType: found.userType });
    return { success: true };
  };

  const logout = () => setUser(null);

  const updateProfile = (updates) => {
    setUsers(prev => prev.map(u => u.id === user.id ? { ...u, ...updates } : u));
    setUser(prev => ({ ...prev, ...updates }));
  };

  return (
    <AuthContext.Provider value={{ users, user, signup, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
