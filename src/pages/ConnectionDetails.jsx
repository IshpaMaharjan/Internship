import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useConnections } from '../context/ConnectionContext';

export default function ConnectionDetails() {
  const { id } = useParams();
  const { connections, removeConnection } = useConnections();
  const navigate = useNavigate();
  const conn = connections.find(c => String(c.id) === String(id));
  if (!conn) return <div className="text-gray-400">Connection not found</div>;

  return (
    <div className="max-w-md bg-gray-800 text-white p-6 rounded">
      <h3 className="text-lg font-semibold mb-2">{conn.name}</h3>
      <p className="text-sm text-gray-400">{conn.title} • {conn.company}</p>
      <p className="text-xs text-gray-500">{conn.location} • Added {new Date(conn.dateAdded).toLocaleDateString()}</p>
      <div className="flex gap-3 mt-4">
        <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded">Back</button>
        <button onClick={() => { removeConnection(conn.id); navigate('/connections'); }} className="px-4 py-2 bg-red-600 rounded text-white">Remove</button>
      </div>
    </div>
  );
}
