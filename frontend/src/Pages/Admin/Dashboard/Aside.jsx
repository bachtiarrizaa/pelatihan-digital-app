import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function MenuItem({ icon, label }) {
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div>
      {/* Menu utama */}
      <div className="px-3 flex items-center justify-between text-gray-600 mt-4">
        <div className="flex items-center gap-x-2">
          <i className={`fa-solid ${icon}`} />
          <span className="font-medium whitespace-nowrap transition-all duration-300">
            {label}
          </span>
        </div>

        {/* Tombol expand */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="transition-transform duration-300"
        >
          <i className={`fa-solid fa-angle-${isOpen ? "up" : "down"}`} />
        </button>
      </div>

      {/* Submenu wrapper */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out text-gray-600"
        style={{ maxHeight: `${height}px` }}
      >
        <ul className="ml-10 py-2 text-sm">
          <li className="mb-1">
            <Link to="#" className="block hover:text-blue-600">Lihat Semua</Link>
          </li>
          <li className="mb-1">
            <Link to="#" className="block hover:text-blue-600">Tambah Baru</Link>
          </li>
          <li className="last:mb-0">
            <Link to="#" className="block hover:text-blue-600">Edit</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// 🔹 Komponen Utama AsideDashboard
export default function AsideDashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <aside
      className={`flex flex-col min-h-screen px-6 py-3 overflow-y-auto bg-white border-r transition-all duration-300
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
