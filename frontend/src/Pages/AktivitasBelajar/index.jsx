import { useState } from "react";
import { Link } from "react-router-dom";

export default function AktivitasBelajar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDesktopSidebar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="max-w-7xl mx-auto px-4 pb-4 pt-28 relative">
      {/* Judul */}
      <h1 className="text-2xl font-bold text-blue-600 flex items-center justify-between">
        <span>
          Aktivitas <span className="text-gray-800">Belajar</span>
        </span>
      </h1>

      <div className="flex mt-4">
        {/* Sidebar Desktop */}
        <aside
          className={`hidden md:block bg-white border-r overflow-hidden
            transition-[width] duration-500 ease-in-out
            ${isOpen ? "w-60" : "w-12"}
            h-[calc(100vh-7rem)]`}
        >
          {/* Item 1 */}
          <div className="flex items-center justify-between py-2 text-gray-700">
            <span
              className={`whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link className="font-medium" to="#">
                Pelatihan yang Dipelajari
              </Link>
            </span>
            <button onClick={toggleDesktopSidebar}>
              <i
                className={`fa-solid fa-angles-right mr-4 transform transition-transform duration-300 ${
                  !isOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>
          </div>

          {/* Item 2 */}
          <div className="flex items-center py-2 text-gray-700">
            <span
              className={`whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link className="font-medium" to="#">
                Pelatihan yang Diselesaikan
              </Link>
            </span>
          </div>
        </aside>

        {/* Konten utama */}
        <main className="flex-1 px-4">
          <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-600">
                Mar 10, 2019
              </span>
              <span className="px-3 py-1 text-sm font-bold text-gray-100 bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
                Design
              </span>
            </div>

            <div className="mt-2">
              <a
                href="#"
                className="text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline"
              >
                Accessibility tools for designers and developers
              </a>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                expedita dicta totam aspernatur doloremque...
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-blue-600 hover:underline">
                Read more
              </a>
              <div className="flex items-center">
                <img
                  className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  src="https://images.unsplash.com/photo-1502980426475-b83966705988?auto=format&fit=crop&w=40&q=80"
                  alt="avatar"
                />
                <span className="font-bold text-gray-700 cursor-pointer">
                  Khatab wedaa
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
