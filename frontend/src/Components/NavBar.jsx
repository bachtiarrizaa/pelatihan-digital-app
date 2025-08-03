import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center border-b border-gray-200">
      <div className="flex items-center justify-between">

        <Link to="#" className="flex items-center text-2xl font-bold space-x-2">
        <i className="fas fa-graduation-cap text-blue-600 text-3xl"></i>
        <span className="flex items-baseline">
            <span className="text-gray-800">Pelatihan</span>
            <span className="text-blue-600">.Ku</span>
            <sup className="text-xs text-gray-800 ml-1">™</sup>
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
          <Link className="text-gray-700 hover:text-blue-500 lg:mx-6" to="/">Beranda    </Link>
          <Link className="text-gray-700 hover:text-blue-500 lg:mx-6" to="/components">Daftar Pelatihan</Link>
          <Link className="text-gray-700 hover:text-blue-500 lg:mx-6" to="/pricing">Pricing</Link>
          <Link className="text-gray-700 hover:text-blue-500 lg:mx-6" to="/contact">Contact</Link>
          <Link className="text-gray-700 hover:text-blue-500 lg:mx-6" to="/faq">FAQ</Link>
        </div>

        <Link
          className="block px-5 py-2 mt-4 text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md hover:bg-gray-100 lg:mt-0 lg:w-auto"
          to="/login"
        >
          Masuk
        </Link>
      </div>
    </nav>
  );
}
