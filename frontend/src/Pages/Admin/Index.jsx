import { Link } from "react-router-dom";
import AsideDashboard from "./Dashboard/Aside";
import SidebarAdmin from "./Components/Sidebar";

export default function IndexAdmin() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-20 h-16">
        <div className="h-full flex items-center justify-between px-6">
          {/* Logo */}
          <Link to="#" className="flex items-center text-2xl font-bold gap-x-1">
            <i className="fas fa-graduation-cap text-blue-600 text-3xl"></i>
            <span className="flex items-baseline">
              <span className="text-gray-800">Pelatihan</span>
              <span className="text-blue-600">.Ku</span>
              <sup className="text-xs text-gray-800 ml-0.5">™</sup>
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline text-gray-700 font-medium">
              Halo, Admin Coy
            </span>
            <button type="button" className="focus:outline-none">
              <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                  alt="avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar + Konten */}
      <div className="flex flex-1 pt-16 h-full">
        <aside className="h-full overflow-y-auto overflow-x-hidden bg-white">
          {/* <AsideDashboard /> */}
          <SidebarAdmin />
        </aside>

        <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 bg-white w-full">
          <div className="h-[2000px]">
            Konten admin di sini... (tes scroll panjang)
          </div>
        </main>
      </div>
    </div>
  );
}
