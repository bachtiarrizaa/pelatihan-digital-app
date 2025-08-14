import { Link } from "react-router-dom"

export default function CardSelesai () {

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow py-6 mb-4">
        <div className="px-4 sm:px-6 items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-700">
              Frontend Web Develeopment
            </h2>
            <Link to="/daftar-pelatihan-detail" className="px-3 py-1 text-sm font-medium text-gray-600 bg-white rounded hover:bg-gray-50 border border-gray-200 flex items-center gap-1">
              <i className="fa-solid fa-file-lines"></i>
              Lihat
            </Link>
          </div>
          <div className="flex items-start gap-2 sm:gap-1 text-gray-500 mt-2">
            <i className="fa-regular fa-clock text-base text-red-600"></i>
            <p className="text-sm text-justify">
              Deadline belajar seluruh kelas:
              <span className="font-bold text-gray-700"> 28 Februari 2026 </span>
              - Kadaluwarsa
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg shadow py-6 mb-4">
        <div className="px-4 sm:px-6 items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-700">
              Backend Web Develeopment
            </h2>
            <Link to="/daftar-pelatihan-detail" className="px-3 py-1 text-sm font-medium text-gray-600 bg-white rounded hover:bg-gray-50 border border-gray-200 flex items-center gap-1">
              <i className="fa-solid fa-file-lines"></i>
              Lihat
            </Link>
          </div>
          <div className="flex items-start gap-2 sm:gap-1 text-gray-500 mt-2">
            <i className="fa-regular fa-clock text-base text-green-600"></i>
            <p className="text-sm text-justify">
              Deadline belajar seluruh kelas:
              <span className="font-bold text-gray-700"> 28 Februari 2026 </span>
              - Selesai
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg shadow py-6 mb-4">
        <div className="px-4 sm:px-6 items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-700">
              Machine Learning
            </h2>
            <Link to="/daftar-pelatihan-detail" className="px-3 py-1 text-sm font-medium text-gray-600 bg-white rounded hover:bg-gray-50 border border-gray-200 flex items-center gap-1">
              <i className="fa-solid fa-file-lines"></i>
              Lihat
            </Link>
          </div>
          <div className="flex items-start gap-2 sm:gap-1 text-gray-500 mt-2">
            <i className="fa-regular fa-clock text-base text-green-600"></i>
            <p className="text-sm text-justify">
              Deadline belajar seluruh kelas:
              <span className="font-bold text-gray-700"> 28 Februari 2026 </span>
              - Selesai
            </p>
          </div>
        </div>
      </div>
    </>
  )
}