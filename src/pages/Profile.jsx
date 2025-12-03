import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.fullName || '');

  const save = () => { updateProfile({ fullName: name }); setEditing(false); };

  return (
    <div className="max-w-md bg-gray-800 p-6 rounded">
      <h3 className="text-lg font-semibold text-white mb-2">Profile</h3>
      <p className="text-sm text-gray-300">Email: {user?.email}</p>
      <p className="text-sm text-gray-300">Type: {user?.userType}</p>
      {!editing ? (
        <div className="mt-4">
          <p className="font-medium text-white">{user?.fullName}</p>
          <button onClick={() => setEditing(true)} className="mt-2 px-3 py-1 text-white border rounded">Edit</button>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          <input value={name} onChange={e => setName(e.target.value)} className="w-full p-2 rounded bg-gray-700" />
          <div className="flex gap-2">
            <button onClick={save} className="px-3 py-1 bg-green-600 rounded">Save</button>
            <button onClick={() => setEditing(false)} className="px-3 py-1 border rounded">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
