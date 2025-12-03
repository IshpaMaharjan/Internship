import React, { useState } from 'react';
import { useConnections } from '../context/ConnectionContext';
import { useNavigate } from 'react-router-dom';

export default function AddConnection() {
  const { addConnection } = useConnections();
  const navigate = useNavigate();
  const [form, setForm] = useState({ 
    name: '', 
    title: '', 
    company: '', 
    location: '' 
  });

  const onChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const onSubmit = e => {
    e.preventDefault();
    addConnection(form);
    navigate('/connections');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Add New Connection</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Add someone new to your professional network
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <input 
                name="name" 
                value={form.name} 
                onChange={onChange} 
                placeholder="Enter full name" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Title
              </label>
              <input 
                name="title" 
                value={form.title} 
                onChange={onChange} 
                placeholder="Enter job title" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company
              </label>
              <input 
                name="company" 
                value={form.company} 
                onChange={onChange} 
                placeholder="Enter company name" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <input 
                name="location" 
                value={form.location} 
                onChange={onChange} 
                placeholder="Enter location" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              Add Connection
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/connections')}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}