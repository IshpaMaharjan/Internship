import React from 'react';
import { Link } from 'react-router-dom';

export default function ConnectionCard({ connection }) {
  return (
    <div className="flex items-center justify-between py-4 px-5 hover:bg-gray-700 transition-colors border-b border-gray-700">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold">{connection.name.charAt(0)}</div>
        <div>
          <p className="font-medium">{connection.name}</p>
          <p className="text-sm text-gray-400">{connection.title} • <span className="font-medium">{connection.company}</span></p>
        </div>
      </div>
      <div>
        <Link to={`/connection/${connection.id}`} className="text-blue-400">View</Link>
      </div>
    </div>
  );
}
