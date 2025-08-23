import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// 🔹 Komponen MenuItem (reusable)
function MenuItem({ icon, label, isOpen }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open, isOpen]);

  return (
    <div>
      {/* Menu utama */}
      <div className="px-3 flex items-center justify-between text-gray-600 mt-4">
        <div className="flex items-center gap-x-2">
          <i className={`fa-solid ${icon}`} />
          <span
            className={`font-medium whitespace-nowrap transform transition-all duration-300
              ${isOpen ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-3 invisible"}`}
          >
            {label}
          </span>
        </div>

        {/* Tombol expand submenu */}
        {isOpen && (
          <button
            onClick={() => setOpen(!open)}
            className="transition-transform duration-300"
          >
            <i className={`fa-solid fa-angle-${open ? "up" : "down"}`} />
          </button>
        )}
      </div>

      {/* Submenu */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out text-gray-600"
        style={{ maxHeight: `${height}px` }}
      >
        <ul ref={contentRef} className="ml-10 py-2 text-sm space-y-1">
          <li>
            <Link to="#" className="block hover:text-blue-600">Lihat Semua</Link>
          </li>
          <li>
            <Link to="#" className="block hover:text-blue-600">Tambah Baru</Link>
          </li>
          <li>
            <Link to="#" className="block hover:text-blue-600">Edit</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// 🔹 Komponen AsideDashboard
export default function AsideDashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <aside
      className={`flex flex-col h-screen px-6 py-3 overflow-y-auto bg-white border-r transition-all duration-300
        ${isOpen ? "w-60" : "w-16"}`}
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
          <MenuItem icon="fa-user" label="User" isOpen={isOpen} />
          <MenuItem icon="fa-chalkboard" label="Program Pelatihan" isOpen={isOpen} />
          <MenuItem icon="fa-book-open" label="Materi Pelatihan" isOpen={isOpen} />
          <MenuItem icon="fa-layer-group" label="Kategori Pelatihan" isOpen={isOpen} />
          <MenuItem icon="fa-comment-dots" label="Feedback" isOpen={isOpen} />
        </nav>
      </div>
    </aside>
  );
}
