// import { useRef, useState } from 'react';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../../Components/NavBar';
import Feedback from '../../Components/Feedback';
import Silabus from '../../Components/Silabus';

const pelatihan = {
  title: 'Frontend Web Development',
  deskripsi:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.",
  modul: [
    {
      nama: 'Modul 1: HTML & CSS Dasar',
      materi: [
        'Pengenalan HTML',
        'Struktur Dasar HTML',
        'Dasar-dasar CSS',
        'Selektor & Properti CSS',
      ],
    },
    {
      nama: 'Modul 2: JavaScript Dasar',
      materi: [
        'Variabel dan Tipe Data',
        'Fungsi dan Event',
        'Manipulasi DOM',
        'Conditional & Looping',
      ],
    },
    {
      nama: 'Modul 3: JavaScript Lanjutan',
      materi: [
        'Asynchronous JavaScript (Promise, Async/Await)',
        'Fetch API',
        'Modularisasi JS',
      ],
    },
    {
      nama: 'Modul 4: React Dasar',
      materi: [
        'Pengenalan React',
        'Component dan Props',
        'State dan Event Handling',
        'Rendering List dan Conditional',
      ],
    },
    {
      nama: 'Modul 5: Penutup & Evaluasi',
      materi: ['Review Materi', 'Kuis Evaluasi Akhir', 'Penutup dan Sertifikasi'],
    },
  ],
};

export default function DetailPelatihan() {
  // const [isOpen, setIsOpen] = useState(false);
  const silabusRef = useRef(null);
  const feedbackRef = useRef(null);

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sudahDaftar, setSudahDaftar] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user");
    const daftar = localStorage.getItem("sudahDaftar");

    setIsLoggedIn(!!token);
    if (token && daftar === "true") {
      setSudahDaftar(true);
    }
  }, []);

  const handleDaftarClick = () => {
    if (!isLoggedIn) {

      if (!isLoggedIn) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/login");
        }, 2000);
        return;
      }

      setIsOpen(false);
      setSudahDaftar(true);
      localStorage.setItem("sudahDaftar", "true");

    }

    setIsOpen(true);
  };

  const handleDaftar = () => {
    setIsOpen(false);
    setSudahDaftar(true);
    localStorage.setItem("sudahDaftar", "true");
  };

  const handleMulai = () => {
    navigate("/pembelajaran");
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 pt-24 sm:pt-28">
        <div className="container px-6 mx-auto">
          <div className="lg:px-24 pt-4 pb-6 sm:pb-8">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-8">

              {/* Gambar */}
              <img
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt={`Thumbnail ${pelatihan.title}`}
                className="w-full sm:w-auto h-52 object-cover rounded mx-auto lg:mx-0"
              />

              {/* Info Program */}
              <div className="flex-1">
                <span className="inline-block text-xs font-medium text-blue-600 mb-2 sm:mb-3">
                  Web Programming
                </span>

                <h1 className="text-xl font-bold text-gray-800">{pelatihan.title}</h1>

                <p className="mt-1 text-sm text-gray-600 text-justify">
                  {pelatihan.deskripsi}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-3">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-layer-group"></i> 13 Modul
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-clock"></i> 14 Jam
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-star text-yellow-400"></i> 4.5
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-users"></i> 420 Siswa Terdaftar
                  </span>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="w-full lg:w-auto bg-white rounded-xl shadow-sm p-6 text-center space-y-3">

                {/* Tombol Daftar / Mulai */}
                {isLoggedIn && sudahDaftar ? (
                  <button
                    onClick={handleMulai}
                    className="w-full px-2 py-2 text-white bg-green-600 rounded-md hover:bg-green-500 transition duration-200"
                  >
                    <i className="fas fa-play mr-2"></i> Mulai Belajar
                  </button>
                ) : (
                  <button
                    onClick={handleDaftarClick}
                    className="w-full px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
                  >
                    <i className="fas fa-sign-in-alt mr-2"></i> Daftar
                  </button>
                )}

                {showAlert && (
                  <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-full max-w-md">
                    <div className="flex w-full overflow-hidden bg-white rounded-lg shadow-md">
                      <div className="flex items-center justify-center w-12 sm:w-16 bg-red-500">
                        <i className="fa-solid fa-circle-xmark text-xl sm:text-2xl text-white"></i>
                      </div>
                      <div className="flex-1 px-3 sm:px-4 py-3 sm:py-4">
                        <div className="text-left">
                          <span className="font-semibold text-red-500 text-sm sm:text-base">Gagal</span>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                            Maaf, Anda Belum Login. Silakan login terlebih dahulu.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Modal Konfirmasi */}
                {isOpen && (
                  <div className="fixed inset-0 z-10 overflow-hidden">
                    <div className="flex items-center justify-center min-h-screen px-4 text-center">
                      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                      </span>

                      <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:max-w-sm sm:w-full sm:p-6">
                        <div className="flex items-center justify-center">
                          <i className="fa-solid fa-circle-question text-5xl text-blue-600"></i>
                        </div>

                        <div className="my-3 text-center">
                          <h3 className="text-lg font-medium leading-6 text-gray-800">
                            Konfirmasi Pendaftaran
                          </h3>
                          <p className="mt-2 text-sm text-gray-500">
                            Dengan mendaftar, Anda akan mendapatkan akses ke seluruh materi pelatihan ini. Lanjutkan?
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 border border-gray-200 rounded-md sm:w-auto sm:mx-2 hover:bg-gray-100"
                          >
                            Batal
                          </button>
                          <button
                            onClick={handleDaftar}
                            className="px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white bg-blue-600 rounded-md sm:w-auto hover:bg-blue-500"
                          >
                            Daftar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-gray-200 my-1"></div>

                {/* Tombol Silabus */}
                <button
                  onClick={() => silabusRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-2 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition duration-200"
                >
                  <i className="fas fa-file-alt mr-2"></i> Silabus
                </button>

                {/* Tombol Testimonials */}
                <button
                  onClick={() => feedbackRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-2 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-gray-50 transition duration-200"
                >
                  <i className="fas fa-comments mr-2"></i> Testimonials
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-blue-600 py-4'>
        <div className="flex justify-center mx-auto">
          <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-white rounded-full"></span>
          <span className="inline-block w-1 h-1 mx-1 bg-white rounded-full"></span>
          <span className="inline-block w-1 h-1 mx-1 bg-white rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-white rounded-full"></span>
          <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
        </div>
      </section>

      <div ref={silabusRef}>
        <Silabus />
      </div>

      <div ref={feedbackRef}>
        <Feedback />
      </div>
    </>
  );
}
