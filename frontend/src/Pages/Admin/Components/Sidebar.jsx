import { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuItemWithDropdown({ icon, label, isOpen, submenu }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
      >
        <div className="flex items-center">
          <i className={`fa-solid ${icon} min-w-[20px] text-center`} />
          <span
            className={`ml-2 text-sm font-lg whitespace-nowrap transition-all duration-300 
              ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}
            `}
          >
            {label}
          </span>
        </div>
        <i
          className={`fa-solid fa-angle-down transition-all duration-300 ${
            open ? "rotate-180" : ""
          } ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}
        />
      </div>

      {/* Submenu pakai NavLink */}
      <div
        className={`ml-8 flex flex-col overflow-hidden transition-all duration-300 
          ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {submenu.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.to}
            className={({ isActive }) =>
              `px-2 py-1 text-sm rounded-md transition-colors duration-200 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function MenuItem({ icon, label, isOpen, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-3 py-2 rounded-lg transition-colors duration-300 cursor-pointer
        ${isActive ? "text-blue-600 bg-gray-100" : "text-gray-800 hover:bg-gray-100 hover:text-blue-600"}`
      }
    >
      <i className={`fa-solid ${icon} min-w-[20px] text-center`} />
      <span
        className={`ml-2 text-sm font-lg whitespace-nowrap transition-all duration-300 
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
          <MenuItemWithDropdown
            icon="fa-user"
            label="User"
            isOpen={isOpen}
            submenu={[
              { label: "Lihat Semua", to: "/user" },
              { label: "Tambah Data", to: "/user/add" },
            ]}
          />
          <MenuItemWithDropdown
            icon="fa-chalkboard"
            label="Program Pelatihan"
            isOpen={isOpen}
            submenu={[
              { label: "Lihat Semua", to: "/program" },
              { label: "Tambah Data", to: "/program/add" },
            ]}
          />
          <MenuItemWithDropdown
            icon="fa-book-open"
            label="Materi Pelatihan"
            isOpen={isOpen}
            submenu={[
              { label: "Lihat Semua", to: "/materi" },
              { label: "Tambah Data", to: "/materi/add" },
            ]}
          />
          <MenuItemWithDropdown
            icon="fa-layer-group"
            label="Kategori Pelatihan"
            isOpen={isOpen}
            submenu={[
              { label: "Lihat Semua", to: "/kategori" },
              { label: "Tambah Data", to: "/kategori/add" },
            ]}
          />
          <MenuItemWithDropdown
            icon="fa-comment-dots"
            label="Feedback"
            isOpen={isOpen}
            submenu={[
              { label: "Lihat Semua", to: "/feedback" },
              { label: "Tambah Data", to: "/feedback/add" },
            ]}
          />
        </nav>

        <div className="mt-12">
          <MenuItem icon="fa-gear" label="Pengaturan" isOpen={isOpen} to="/settings" />
          <MenuItem icon="fa-arrow-right-from-bracket" label="Keluar" isOpen={isOpen} to="/logout" />
        </div>
      </div>
    </div>
  );
}
