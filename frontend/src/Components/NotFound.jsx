import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container flex items-center min-h-screen p-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <div className="p-3 text-sm font-medium text-blue-600 rounded-full bg-blue-50">
            <i className="fa-solid fa-circle-exclamation text-4xl"></i>
          </div>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            404 Page Not Found
          </h1>
          <p className="mt-4 text-gray-500">
            Maaf, halaman yang kamu cari tidak tersedia. Coba kembali ke halaman utama.
          </p>

            <Link
              to="/"
              className="mt-4 flex items-center justify-center px-5 py-2 text-sm text-blue-600 font-medium bg-white border border-blue-600 rounded-lg shadow-md hover:bg-gray-100 focus:ring focus:ring-blue-300 focus:ring-opacity-80 transition sm:w-auto"
            >
              <span>Kembali ke Beranda</span>
            </Link>
        </div>
      </div>
    </section>
  );
}
