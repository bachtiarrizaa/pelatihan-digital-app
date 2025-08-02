import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../lib/axios';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Ambil user dari localStorage saat pertama render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.role !== 'admin') {
        navigate('/'); // kalau bukan admin, redirect
      } else {
        setUser(parsedUser);
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.post('/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Bersihkan localStorage & redirect
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error('Logout gagal:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Selamat datang, {user?.name}
        </h1>

        <button
          onClick={handleLogout}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
