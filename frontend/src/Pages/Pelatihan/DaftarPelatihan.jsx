import Navbar from '../../Components/NavBar';
import { Link } from 'react-router-dom';

export default function DaftarPelatihan() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pb-8 pt-28">
        <h1 className="text-2xl font-bold text-blue-600">Daftar <span className="text-gray-800">Pelatihan</span></h1>

        <div class="flex justify-center mx-auto my-6">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        {/* Grid Card Pelatihan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow">
            <div className="relative group">
              <Link to="/daftar-pelatihan-detail">
                <img
                  className="object-cover w-full h-52 rounded-t-lg"
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Pelatihan"
                />

                {/* Judul tetap ditampilkan */}
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white px-4 py-2">
                  <h2 className="text-xl font-semibold truncate">Belajar Frontend Web Development</h2>
                </div>

                {/* Overlay muncul saat hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
                  <span className="text-white text-lg font-medium">Lihat Detail</span>
                </div>
              </Link>
            </div>

            <div className="p-4">
              <div>
                <div className="flex items-center justify-between">
                    <Link to="#" className="text-sm font-medium text-blue-600">Web Development</Link>
                </div>
                <p className="mt-2 text-sm text-gray-600 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between px-4 pb-4 text-sm font-light text-gray-500">
              <span className="flex items-center gap-2">
                <i className="fas fa-layer-group"></i>
                13 Modul
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-clock"></i>
                60 Jam
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-star text-yellow-400"></i>
                4.5
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-users"></i>
                450 Siswa Terdaftar
              </span>
            </div>
          </div>
          <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow">
            <div className="relative group">
              <Link to="/daftar-pelatihan-detail">
                <img
                  className="object-cover w-full h-52 rounded-t-lg"
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Pelatihan"
                />

                {/* Judul tetap ditampilkan */}
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white px-4 py-2">
                  <h2 className="text-xl font-semibold truncate">Belajar Frontend Web Development</h2>
                </div>

                {/* Overlay muncul saat hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
                  <span className="text-white text-lg font-medium">Lihat Detail</span>
                </div>
              </Link>
            </div>

            <div className="p-4">
              <div>
                <div className="flex items-center justify-between">
                    <Link to="#" className="text-sm font-medium text-blue-600">Web Development</Link>
                </div>
                <p className="mt-2 text-sm text-gray-600 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between px-4 pb-4 text-sm font-light text-gray-500">
              <span className="flex items-center gap-2">
                <i className="fas fa-layer-group"></i>
                13 Modul
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-clock"></i>
                60 Jam
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-star text-yellow-400"></i>
                4.5
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-users"></i>
                450 Siswa Terdaftar
              </span>
            </div>
          </div>
          <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow">
            <div className="relative group">
              <Link to="/daftar-pelatihan-detail">
                <img
                  className="object-cover w-full h-52 rounded-t-lg"
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Pelatihan"
                />

                {/* Judul tetap ditampilkan */}
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white px-4 py-2">
                  <h2 className="text-xl font-semibold truncate">Belajar Frontend Web Development</h2>
                </div>

                {/* Overlay muncul saat hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
                  <span className="text-white text-lg font-medium">Lihat Detail</span>
                </div>
              </Link>
            </div>

            <div className="p-4">
              <div>
                <div className="flex items-center justify-between">
                    <Link to="#" className="text-sm font-medium text-blue-600">Web Development</Link>
                </div>
                <p className="mt-2 text-sm text-gray-600 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between px-4 pb-4 text-sm font-light text-gray-500">
              <span className="flex items-center gap-2">
                <i className="fas fa-layer-group"></i>
                13 Modul
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-clock"></i>
                60 Jam
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-star text-yellow-400"></i>
                4.5
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-users"></i>
                450 Siswa Terdaftar
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
