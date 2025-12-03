import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const res = login({ email: form.email, password: form.password });
      setLoading(false);
      if (!res.success) setError(res.message);
      else {
        if (form.remember) localStorage.setItem('remembered_email', form.email);
        navigate('/');
      }
    }, 600);
  };

  React.useEffect(() => {
    const remembered = localStorage.getItem('remembered_email');
    if (remembered) setForm(f => ({ ...f, email: remembered, remember: true }));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-appbg p-4">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {error && <div className="bg-red-600 text-white p-2 rounded mb-3">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-3">
          <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full p-3 rounded bg-gray-700" required />
          <div className="relative">
            <input name="password" value={form.password} onChange={onChange} type={showPassword ? 'text' : 'password'} placeholder="Password" className="w-full p-3 rounded bg-gray-700" required />
            <button type="button" onClick={() => setShowPassword(s => !s)} className="absolute right-3 top-2 text-sm">{showPassword ? 'Hide' : 'Show'}</button>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="remember" checked={form.remember} onChange={onChange} /> Remember me</label>
            <Link to="/signup" className="text-sm text-blue-400">Sign up</Link>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-blue-600 p-3 rounded">{loading ? 'Logging...' : 'Login'}</button>
        </form>
      </div>
    </div>
  );
}
