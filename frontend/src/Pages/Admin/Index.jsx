import { Link } from "react-router-dom";
import AsideDashboard from "./Dashboard/Aside";

export default function IndexAdmin() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-20">
        <div className="py-4 mx-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center text-2xl font-bold gap-x-1">
              <i className="fas fa-graduation-cap text-blue-600 text-3xl"></i>
              <span className="flex items-baseline">
                <span className="text-gray-800">Pelatihan</span>
                <span className="text-blue-600">.Ku</span>
                <sup className="text-xs text-gray-800 ml-0.5">™</sup>
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              {/* Hidden di mobile, tampil mulai md */}
              <span className="hidden md:inline text-gray-700 font-medium">
                Halo, Admin Coy
              </span>

              <button
                type="button"
                className="focus:outline-none"
                aria-label="toggle profile dropdown"
              >
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
        </div>
      </nav>

      {/* Aside + Konten */}
      <div className="flex pt-16"> {/* pt-16 = tinggi navbar (64px) */}
        <AsideDashboard />
        {/* Konten utama di sini */}
        <div className="flex-1 p-6">Konten admin di sini...</div>
      </div>
    </>
  );
}
