import { useState, useRef } from 'react';
import Navbar from '../../Components/NavBar';

const pelatihan = {
  title: 'Pelatihan Frontend Web Development',
  deskripsi: "Pelatihan ini akan membahas dasar-dasar pemrograman dari nol hingga mampu membangun aplikasi sederhana.",
  modul: [
    {
      nama: 'Modul 1: HTML & CSS Dasar',
      materi: ['Pengenalan HTML', 'Struktur Dasar HTML', 'Dasar-dasar CSS']
    },
    {
      nama: 'Modul 2: JavaScript Dasar',
      materi: ['Variabel dan Tipe Data', 'Fungsi dan Event', 'Manipulasi DOM']
    },
    {
      nama: 'Modul 3: React Dasar',
      materi: ['Pengenalan React', 'Component dan Props', 'State dan Event Handling']
    }
  ]
};

function ModulAccordion({ modul, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex justify-between items-center text-left text-gray-800 font-medium hover:bg-gray-50 focus:outline-none"
      >
        <span>{modul.nama}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px'
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden px-6"
      >
        <div className="py-4 space-y-2 text-gray-600">
          {modul.materi.map((materi, idx) => (
            <div key={idx} className="pl-2 border-l-4 border-blue-500">
              <p className="ml-2">{materi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DetailPelatihan() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <section className="bg-white pt-28">
        <div className="container px-6 mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">{pelatihan.title}</h1>
              <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">
                Daftar
              </button>
            </div>
            <p className="mt-2 text-gray-600 text-justify">{pelatihan.deskripsi}</p>
          </div>


          <div className="space-y-6">
            {pelatihan.modul.map((modul, index) => (
              <ModulAccordion
                key={index}
                modul={modul}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}

            {/* Kuis di bawah */}
            <div className="border border-gray-200 rounded-lg shadow-sm p-6 mt-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Kuis Akhir</h2>
                  <p className="text-gray-600">
                    Setelah menyelesaikan semua modul, silakan kerjakan kuis ini untuk menguji pemahamanmu.
                  </p>
                </div>
                <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-500 h-fit">
                  Mulai
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
