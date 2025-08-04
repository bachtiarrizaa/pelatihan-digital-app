// import { useEffect, useState } from 'react';
import Navbar from '../../Components/NavBar';
import { Link } from 'react-router-dom';

export default function DaftarPelatihan() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pb-8 pt-28">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Daftar Pelatihan</h1>

        {/* Grid Card Pelatihan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="px-6 py-4 bg-white rounded-lg shadow-md">
            <div className="mt-2">
              <Link
                to="/daftar-pelatihan-detail"
                className="text-xl font-bold text-gray-700 hover:text-gray-600"
              >
                Web Development Dasar
              </Link>
              <p className="mt-2 text-gray-600 text-justify">
                Pelajari HTML, CSS, dan dasar JavaScript untuk membangun halaman web statis dan dinamis.
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div to="#" className="text-blue-600">
                8 Modul Pelatihan
              </div>

              <span className="px-3 py-1 text-sm font-bold text-gray-100 bg-blue-600 rounded hover:bg-blue-500 cursor-pointer">
                Daftar
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="px-6 py-4 bg-white rounded-lg shadow-md">
            <div className="mt-2">
              <Link
                to="#"
                className="text-xl font-bold text-gray-700 hover:text-gray-600"
              >
                UI/UX Design
              </Link>
              <p className="mt-2 text-gray-600 text-justify">
                Pelatihan ini membahas prinsip desain antarmuka dan pengalaman pengguna yang baik.
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div to="#" className="text-blue-600">
                5 Modul Pelatihan
              </div>

              <span className="px-3 py-1 text-sm font-bold text-gray-100 bg-blue-600 rounded hover:bg-blue-500 cursor-pointer">
                Daftar
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="px-6 py-4 bg-white rounded-lg shadow-md">
            <div className="mt-2">
              <Link
                to="#"
                className="text-xl font-bold text-gray-700 hover:text-gray-600"
              >
                Digital Marketing
              </Link>
              <p className="mt-2 text-gray-600 text-justify">
                Kuasai strategi pemasaran digital termasuk SEO, media sosial, dan kampanye iklan online.
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div to="#" className="text-blue-600">
                6 Modul Pelatihan
              </div>

              <span className="px-3 py-1 text-sm font-bold text-gray-100 bg-blue-600 rounded hover:bg-blue-500 cursor-pointer">
                Daftar
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
