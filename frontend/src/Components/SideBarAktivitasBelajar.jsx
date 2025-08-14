import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideBarAktivitasBelajar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDesktopSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Sidebar Desktop */}
      <aside
        className={`hidden px-4 md:flex flex-col bg-white border-r overflow-hidden transition-[width] duration-500 ease-out
        ${isOpen ? "w-60" : "w-12"}`}
      >
        {/* Header Menu */}
        <div
          className={`flex items-center ${
            isOpen ? "justify-between py-2 border-b" : "justify-center py-2"
          }`}
        >
          {isOpen && (
            <div className="flex justify-center">
              <span className="inline-block w-24 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
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
          <nav className="mt-2 whitespace-nowrap overflow-hidden transition-opacity duration-300">
            <NavLink
              to="/aktivitas-belajar"
              end
              className={({ isActive }) =>
                `block p-2 rounded font-medium ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-400"
                }`
              }
            >
              Pelatihan yang Dipelajari
            </NavLink>

            <NavLink
              to="/aktivitas-belajar/selesai"
              className={({ isActive }) =>
                `block p-2 rounded font-medium ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-400"
                }`
              }
            >
              Pelatihan yang Diselesaikan
            </NavLink>
          </nav>
        )}
      </aside>
    </>
  );
}
