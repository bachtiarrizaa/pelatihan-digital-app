import { useState } from "react";
import { NavLink } from "react-router-dom";

// MenuItem untuk yang punya dropdown (ada angle-down)
function MenuItemWithDropdown({ icon, label, isOpen }) {
  return (
    <div
      className="flex items-center justify-between px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
    >
      <div className="flex items-center">
        <i className={`fa-solid ${icon} min-w-[20px] text-center`} />
        <span
          className={`ml-2 text-sm font-medium whitespace-nowrap transition-all duration-300 
            ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}
          `}
        >
          {label}
        </span>
      </div>

      {/* Angle down */}
      <i
        className={`fa-solid fa-angle-down transition-all duration-300
          ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}
        `}
      />
    </div>
  );
}

// MenuItem untuk yang simple (tanpa angle-down)
function MenuItemSimple({ icon, label, isOpen }) {
  return (
    <NavLink
      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
    >
      <i className={`fa-solid ${icon} min-w-[20px] text-center`} />
      <span
        className={`ml-2 text-sm font-medium whitespace-nowrap transition-all duration-300 
          ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}
        `}
      >
        {label}
      </span>
    </NavLink>
  );
}

export default function AsideDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`flex flex-col min-h-full px-3 pt-3 pb-6 bg-white border-r transition-all duration-300
      ${isOpen ? "w-60" : "w-16"}`}
    >
      <div className="flex flex-col justify-between flex-1">
        <nav className="space-y-3">
          <div className="px-3 flex items-center justify-between py-3 text-gray-600 border-b">
            {isOpen && (
              <div className="flex justify-end transition-opacity duration-300">
                <span className="inline-block w-24 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
            )}
            <button onClick={toggleSidebar}>
              <i
                className={`fa-solid fa-angles-right transition-transform duration-300 ${
                  !isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Menu dengan dropdown */}
          <MenuItemWithDropdown icon="fa-user" label="User" isOpen={isOpen} />
          <MenuItemWithDropdown icon="fa-chalkboard" label="Program Pelatihan" isOpen={isOpen} />
          <MenuItemWithDropdown icon="fa-book-open" label="Materi Pelatihan" isOpen={isOpen} />
          <MenuItemWithDropdown icon="fa-layer-group" label="Kategori Pelatihan" isOpen={isOpen} />
          <MenuItemWithDropdown icon="fa-comment-dots" label="Feedback" isOpen={isOpen} />
        </nav>

        <div className="mt-12">
          {/* Menu simple tanpa dropdown */}
          <MenuItemSimple icon="fa-gear" label="Pengaturan" isOpen={isOpen} />
          <MenuItemSimple icon="fa-arrow-right-from-bracket" label="Keluar" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}
