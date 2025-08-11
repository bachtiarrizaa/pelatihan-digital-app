import { useState } from "react";
import { Link } from "react-router-dom";
import AktivitasBelajarCard from "./Card";

export default function AktivitasBelajar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDesktopSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-4 pt-28 relative">
      {/* Judul */}
      <h1 className="text-2xl font-bold text-blue-600 flex items-center justify-between">
        <span>
          Aktivitas <span className="text-gray-800">Belajar</span>
        </span>
      </h1>

      <div class="justify-center items-center my-6 sm:hidden">
        <div class="flex items-center gap-2 sm:gap-4">
          <button
            class="px-4 py-2 text-sm text-center text-gray-600 bg-gray-50 sm:text-base font-medium whitespace-nowrap rounded-lg hover:bg-gray-100">
            Pelatihan yan Dipelajari
          </button>
          <button
            class="px-4 py-2 text-sm text-center text-gray-600 bg-gray-50 sm:text-base font-medium whitespace-nowrap rounded-lg hover:bg-gray-100">
            Pelatihan yan Dipelajari
          </button>
        </div>
        <div class="flex justify-center mt-4">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>


      <div className="flex mt-4">
        {/* Sidebar Desktop */}
        <aside
          className={`hidden md:flex flex-col bg-white border-r overflow-hidden transition-[width] duration-500 ease-out
            ${isOpen ? "w-60" : "w-12"}
            h-[calc(100vh-7rem)]`}
        >
          {/* Header Menu */}
          <div
            className={`flex items-center ${
              isOpen ? "justify-between py-2 pr-4 border-b" : "justify-center py-2"
            }`}
          >
            {isOpen && (
              <div class="flex justify-center">
                  <span class="inline-block w-24 h-1 bg-blue-500 rounded-full"></span>
                  <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                  <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
            )}
            <button onClick={toggleDesktopSidebar}>
              <i
                className={`fa-solid fa-angles-right overflow-hidden transition-opacity duration-300 ${
                  !isOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>
          </div>

          {/* Menu Items */}
          {isOpen && (
            <nav className="mt-2 space-y-1 whitespace-nowrap overflow-hidden transition-opacity duration-300">
              <Link
                to="#"
                className="block py-2 rounded hover:bg-gray-100 font-medium text-gray-700"
              >
                Pelatihan yang Dipelajari
              </Link>
              <Link
                to="#"
                className="block py-2 rounded hover:bg-gray-100 font-medium text-gray-700"
              >
                Pelatihan yang Diselesaikan
              </Link>
            </nav>
          )}
        </aside>

        {/* Konten utama */}
        <main className="flex-1 px-2 sm:px-4">
          <AktivitasBelajarCard />
        </main>
      </div>
    </div>
  );
}
