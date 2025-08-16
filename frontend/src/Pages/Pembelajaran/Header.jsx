import { Link } from "react-router-dom"

export default function HeaderPembelajaran() {
  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white shadow pl-4 pr-20 sm:px-8 py-4 z-20">
        {/* Tombol Kembali */}
        <button onClick={() => window.history.back()}>
          <i className="fa-solid fa-angle-left text-xl"></i>
        </button>

        {/* Judul */}
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Frontend Web Development
        </h1>

        {/* Logo */}
        <Link to="/" className="hidden sm:flex items-center text-2xl font-bold gap-x-1">
          <i className="fas fa-graduation-cap text-blue-600 text-3xl"></i>
          <span className="flex items-baseline">
            <span className="text-gray-800">Pelatihan</span>
            <span className="text-blue-600">.Ku</span>
            <sup className="text-xs text-gray-800 ml-0.5">™</sup>
          </span>
        </Link>
      </div>
    </>
  )
}