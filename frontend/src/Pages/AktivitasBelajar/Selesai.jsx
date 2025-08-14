import SideBarAktivitasBelajar from "../../Components/SideBarAktivitasBelajar";
import CardSelesai from "./CardSelesai";
import { NavLink } from "react-router-dom";

export default function AktivitasBelajarSelesai() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 pb-4 pt-28 relative">
        {/* Judul */}
        <h1 className="text-2xl px-1 font-bold text-blue-600 flex items-center justify-between">
          <span>
            Aktivitas <span className="text-gray-800">Belajar</span>
          </span>
        </h1>

        <div className="mt-6 sm:hidden">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <NavLink
              to="/aktivitas-belajar"
              end
              className={({ isActive }) =>
                `px-2 py-2 text-sm sm:text-base text-center font-medium whitespace-nowrap rounded-lg ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              Pelatihan yang Dipelajari
            </NavLink>

            <NavLink
              to="/aktivitas-belajar/selesai"
              className={({ isActive }) =>
                `px-2 py-2 text-sm sm:text-base text-center font-medium whitespace-nowrap rounded-lg ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              Pelatihan yang Diselesaikan
            </NavLink>
          </div>
        </div>


        <div className="flex mt-3">
          
          <SideBarAktivitasBelajar />

          {/* Konten utama */}
          <main className="flex-1 px-2 sm:px-4">
            <CardSelesai />
          </main>
        </div>
      </div>
    </div>
  );
}