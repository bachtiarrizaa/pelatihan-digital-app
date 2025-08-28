import { useRef } from "react";
import Feedback from '../../../Components/Feedback';
import Silabus from '../../../Components/Silabus';

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

export default function PelatihanDetailAdmin() {
  const silabusRef = useRef(null);
  const feedbackRef = useRef(null);

  return (
    <>
      <section className="bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="pt-4 pb-6 sm:pb-8">
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
                <button className="w-full px-2 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-400 transition duration-200">
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                </button>

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
