// src/Pages/Home.jsx
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Cek apakah user sudah login
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Selamat Datang di Aplikasi
      </h1>

      {user ? (
        <>
          <p className="text-gray-700 mb-4 text-center">
            Halo, <span className="font-semibold">{user.name}</span>!
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <p className="text-gray-700 mb-8 text-center max-w-md">
            Silakan login jika sudah memiliki akun, atau daftar terlebih dahulu
            untuk membuat akun baru.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow"
            >
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
