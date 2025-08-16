import { useState } from "react";
import { NavLink } from "react-router-dom";

const pelatihan = {
  title: "Frontend Web Development",
  modul: [
    {
      nama: "Modul 1: HTML & CSS Dasar",
      materi: [
        "Pengenalan HTML",
        "Struktur Dasar HTML",
        "Dasar-dasar CSS",
        "Selektor & Properti CSS",
      ],
    },
    {
      nama: "Modul 2: JavaScript Dasar",
      materi: [
        "Variabel dan Tipe Data",
        "Fungsi dan Event",
        "Manipulasi DOM",
        "Conditional & Looping",
      ],
    },
    {
      nama: "Modul 3: JavaScript Lanjutan",
      materi: [
        "Asynchronous JavaScript (Promise, Async/Await)",
        "Fetch API",
        "Modularisasi JS",
      ],
    },
    {
      nama: "Modul 4: React Dasar",
      materi: [
        "Pengenalan React",
        "Component dan Props",
        "State dan Event Handling",
        "Rendering List dan Conditional",
      ],
    },
    {
      nama: "Modul 5: Penutup & Evaluasi",
      materi: ["Review Materi", "Kuis Evaluasi Akhir", "Penutup dan Sertifikasi"],
    },
  ],
};

export default function AsidePembelajaran() {
  const [isOpen, setIsOpen] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [contentVisible, setContentVisible] = useState(true); // untuk atur class opacity

  const toggleSidebar = () => {
    if (isOpen) {
      // Kalau nutup → fade out dulu
      setContentVisible(false); // opacity 100 → 0
      setTimeout(() => {
        setShowContent(false); // setelah animasi selesai, baru benar-benar hilang
        setIsOpen(false);
      }, 300); // sama dengan duration-300
    } else {
      // Kalau buka → sidebar melebar dulu, lalu isi fade in
      setIsOpen(true);
      setShowContent(true);
      setTimeout(() => setContentVisible(true), 100); // tunggu width animasi
    }
  };

  return (
    <aside
      className={`fixed right-0 top-16 pb-8 flex flex-col h-[calc(100vh-64px)] bg-white border-l overflow-hidden transition-[width] duration-300 ease-out
      ${isOpen ? "w-60" : "w-12"}`}
    >
      {/* Header Sidebar */}
      <div
        className={`flex items-center ${
          isOpen ? "justify-between px-4 pb-3 pt-5 border-b" : "justify-center pb-3 pt-5 border-b"
        }`}
      >
        <button onClick={toggleSidebar} className="mr-2">
          <i
            className={`fa-solid fa-angles-left transition-transform duration-300 ${
              !isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </button>

        {isOpen && (
          <div className="flex justify-end flex-1 pr-6">
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-24 h-1 bg-blue-500 rounded-full"></span>
          </div>
        )}
      </div>

      {/* Isi Sidebar */}
      {showContent && (
        <nav
          className={`flex-1 px-4 overflow-y-auto whitespace-normal transition-opacity duration-300 ${
            contentVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {pelatihan.modul.map((modul, i) => (
            <div key={i} className="mt-3">
              <label className="text-sm font-semibold text-gray-700">{modul.nama}</label>
              <div className="flex flex-col text-gray-600 text-sm">
                {modul.materi.map((materi, j) => (
                  <NavLink key={j} to="#" className="hover:text-blue-700 mt-1 transition-colors">
                    {materi}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      )}
    </aside>
  );
}
