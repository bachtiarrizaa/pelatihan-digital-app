import { Link } from "react-router-dom"

export default function PelatihanIndexAdmin() {
  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
              <div className="flex items-center gap-x-3">
                  <h2 className="text-lg font-medium text-gray-800">Program Pelatihan</h2>

                  <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">240 program</span>
              </div>

              <p className="mt-1 text-sm text-gray-500">These companies have purchased in the last 12 months.</p>
          </div>

          <div className="flex items-center mt-4 gap-x-3">
              <Link to="/admin/pelatihan/tambah" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600">
                  <i className="fa-solid fa-plus"></i>
                  <span className="font-medium">Tambah</span>
              </Link>
          </div>
      </div>

      <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
              <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm">
                  View all
              </button>

              <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100">
                  Monitored
              </button>

              <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100">
                  Unmonitored
              </button>
          </div>

          <div className="relative flex items-center mt-4 md:mt-0">
            <span className="absolute">
                <i className="fa-solid fa-magnifying-glass mx-3 text-gray-300"></i>
            </span>

            <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
      </div>

        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow">
                      <div className="relative group">
                        <Link to="/admin/pelatihan/detail">
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
                        <Link to="/admin/pelatihan/detail">
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
                        <Link to="/admin/pelatihan/detail">
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
            </div>
        </div>
      </section>
    </>
  )
}