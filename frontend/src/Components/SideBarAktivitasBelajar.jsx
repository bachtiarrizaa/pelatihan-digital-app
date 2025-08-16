import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideBarAktivitasBelajar() {
  const [isOpen, setIsOpen] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);

  const toggleDesktopSidebar = () => {
    if (isOpen) {
      setContentVisible(false);
      setTimeout(() => {
        setShowContent(false);
        setIsOpen(false);
      }, 300);
    } else {
      setIsOpen(true);
      setShowContent(true);
      setTimeout(() => setContentVisible(true), 300);
    }
  };

  return (
    <>
      {/* Sidebar Desktop */}
      <aside
        className={`hidden px-4 md:flex flex-col bg-white border-r overflow-hidden transition-[width] duration-300 ease-out
        ${isOpen ? "w-60" : "w-12"}`}
      >
        {/* Header Menu */}
        <div
          className={`flex items-center ${
            isOpen ? "justify-between py-2 border-b" : "justify-center py-2 border-b"
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
              className={`fa-solid fa-angles-right transition-transform duration-300 ${
                !isOpen ? "rotate-180" : ""
              }`}
            ></i>
          </button>
        </div>

        {/* Menu Items */}
        {showContent && (
          <nav
            className={`mt-2 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
              contentVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
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
