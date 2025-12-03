import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', email: '', password: '', userType: 'User' });
  const [error, setError] = useState('');

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (form.password.length < 6) return setError('Password should be at least 6 characters');
    const res = signup(form);
    if (!res.success) setError(res.message);
    else navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-appbg p-4">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        {error && <div className="bg-red-600 text-white p-2 rounded mb-3">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-3">
          <input name="fullName" value={form.fullName} onChange={onChange} placeholder="Full Name" className="w-full p-3 rounded bg-gray-700" required />
          <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full p-3 rounded bg-gray-700" required />
          <input name="password" value={form.password} onChange={onChange} type="password" placeholder="Password" className="w-full p-3 rounded bg-gray-700" required />
          <select name="userType" value={form.userType} onChange={onChange} className="w-full p-3 rounded bg-gray-700">
            <option value="User">User</option>
            <option value="Professional">Professional</option>
          </select>
          <div className="flex gap-3">
            <button type="submit" className="flex-1 bg-green-600 p-3 rounded">Sign up</button>
            <Link to="/login" className="flex-1 text-center p-3 border rounded">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
