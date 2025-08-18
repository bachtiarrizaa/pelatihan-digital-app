import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Cek apakah ada user di localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  return (
    <nav className="fixed px-6 sm:px-16 top-0 left-0 right-0 z-50 bg-white border-b border-blue-600 p-6 lg:flex lg:justify-between lg:items-center">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center text-2xl font-bold gap-x-1">
          <i className="fas fa-graduation-cap text-blue-600 text-3xl"></i>
          <span className="flex items-baseline">
            <span className="text-gray-800">Pelatihan</span>
            <span className="text-blue-600">.Ku</span>
            <sup className="text-xs text-gray-800 ml-0.5">™</sup>
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
        } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
      >
        <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
          <Link className="text-gray-700 hover:text-blue-500 lg:mx-6" to="/" onClick={() => setIsOpen(false)}>Beranda</Link>
          <Link className="text-gray-700 hover:text-blue-500 lg:mx-6" to="/daftar-pelatihan" onClick={() => setIsOpen(false)}>Daftar Pelatihan</Link>
          <Link className="text-gray-700 hover:text-blue-500 lg:mx-6" to="/feedback" onClick={() => setIsOpen(false)}>Feedback</Link>
        </div>

        {user ? (
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="block px-5 py-2 mt-4 text-center text-blue-600 capitalize border border-blue-600 hover:bg-gray-50 rounded-md lg:mt-0 lg:w-auto ml-4"
            >
              Halo, {user.name}
            </Link>
        ) : (
          <Link
            onClick={() => setIsOpen(false)}
            className="block px-5 py-2 mt-4 text-center text-blue-600 capitalize transition-colors duration-300 transform border border-blue-600 rounded-md hover:bg-gray-50 lg:mt-0 lg:w-auto ml-4"
            to="/login"
          >
            Masuk
          </Link>
        )}
      </div>
    </nav>
  );
}
