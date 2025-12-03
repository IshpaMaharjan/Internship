import React, { createContext, useContext, useState, useEffect } from 'react';

const ConnectionContext = createContext();

const initialConnections = [
  { id: 1, name: 'Monalisa Pokhrel', title: 'Product Manager', company: 'TechCorp', location: 'Kathmandu', dateAdded: '2024-01-18' },
  { id: 2, name: 'Aliza Shrestha', title: 'UX Designer', company: 'DesignHub', location: 'Pokhara', dateAdded: '2024-01-15' },
  { id: 3, name: 'Apu Maharjan', title: 'Software Engineer', company: 'TechCorp', location: 'Kathmandu', dateAdded: '2024-01-20' },
  { id: 4, name: 'Shristi Maharjan', title: 'Marketing Head', company: 'NepalBiz', location: 'Birgunj', dateAdded: '2024-01-12' }
];

export function ConnectionProvider({ children }) {
  const [connections, setConnections] = useState(() => {
    const saved = localStorage.getItem('connections_v1');
    return saved ? JSON.parse(saved) : initialConnections;
  });

  useEffect(() => {
    localStorage.setItem('connections_v1', JSON.stringify(connections));
  }, [connections]);

  const addConnection = (payload) => setConnections(prev => [{ ...payload, id: Date.now(), dateAdded: new Date().toISOString() }, ...prev]);
  const updateConnection = (id, updates) => setConnections(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  const removeConnection = (id) => setConnections(prev => prev.filter(c => c.id !== id));

  return (
    <ConnectionContext.Provider value={{ connections, addConnection, updateConnection, removeConnection }}>
      {children}
    </ConnectionContext.Provider>
  );
}

export const useConnections = () => useContext(ConnectionContext);
