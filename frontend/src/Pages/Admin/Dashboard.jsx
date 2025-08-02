// src/Pages/Admin/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../lib/axios';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await axios.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });

        // Redirect kalau bukan admin
        if (res.data.role !== 'admin') {
          navigate('/');
        } else {
          setUser(res.data);
        }
      } catch (err) {
        console.error(err);
        setError('Gagal mengambil data user. Silakan login ulang.');
        navigate('/login');
      }
    };

    fetchMe();
  }, [navigate]);

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (!user) {
    return <div className="p-4">Memuat data...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Dashboard Admin</h1>
      <p className="text-gray-700 mb-2">Selamat datang, {user.name}!</p>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Role: {user.role}</p>
    </div>
  );
}
