import { useState } from "react";
import { Link } from "react-router-dom";

export default function AsideDashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // Komponen MenuItem dengan Submenu
  const MenuItem = ({ icon, label }) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <div className="px-3 flex items-center justify-between text-gray-600 mt-2 min-h-[32px]">
          <div className="flex items-center gap-x-2">
            <i className={`fa-solid ${icon}`} />
            <span
              className={`font-medium whitespace-nowrap transform transition-opacity transition-transform duration-300
                ${isOpen ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-3 invisible"}`}
            >
              {label}
            </span>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className={`transition-opacity duration-300 transform
              ${isOpen ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-3 invisible pointer-events-none"}`}
          >
            <i
              className={`fa-solid fa-angle-${open ? "up" : "down"}`}
            ></i>
          </button>
        </div>

        {/* Submenu CRUD */}
        {isOpen && isOpen && (
          <div
            className={`ml-10 overflow-hidden transition-all duration-300 ease-in-out text-gray-600
              ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <Link to="#" className="block hover:text-blue-600">Lihat Semua</Link>
            <Link to="#" className="block hover:text-blue-600">Tambah Baru</Link>
            <Link to="#" className="block hover:text-blue-600">Edit</Link>
          </div>
        )}

      </div>
    );
  };

  return (
    <aside
      className={`flex flex-col h-screen px-6 py-3 overflow-y-auto bg-white border-r transition-all duration-300
        ${isOpen ? "w-60" : "w-16"}
      `}
    >
      <div className="flex flex-col justify-between flex-1">
        <nav className="-mx-3">
          {/* Header */}
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

          {/* Menu Items */}
          <MenuItem icon="fa-user" label="User" />
          <MenuItem icon="fa-chalkboard" label="Program Pelatihan" />
          <MenuItem icon="fa-book-open" label="Materi Pelatihan" />
          <MenuItem icon="fa-layer-group" label="Kategori Pelatihan" />
          <MenuItem icon="fa-comment-dots" label="Feedback" />
        </nav>
      </div>
    </aside>
  );
}
