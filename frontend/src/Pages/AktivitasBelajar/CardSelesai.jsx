import { Link } from "react-router-dom"

const pelatihan = {
  title: "Frontend Web Development",
  deskripsi:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.",
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

export default function CardSelesai () {
  return (
    <>
      <div class="w-full bg-white rounded-lg shadow pt-4 pb-3">
        <div className="px-4 sm:px-6 pb-4 mt-2 items-center justify-between border-b-2">
          <div className="flex items-center justify-between">
            <Link to="#" className="text-lg sm:text-xl font-bold text-gray-700">
              {pelatihan.title}
            </Link>
            <button className="px-3 py-1 text-sm text-blue-600 bg-white rounded hover:bg-gray-50 border border-blue-600">
              Mulai
            </button>
          </div>
          <div className="flex items-start gap-2 sm:gap-1 text-gray-500 mt-2">
            <i className="fa-regular fa-clock text-sm"></i>
            <p className="text-sm text-justify">
              Deadline belajar seluruh kelas:
              <span className="font-bold text-gray-700"> 28 Februari 2026 </span>
              - 23:59 (201 hari lagi)
            </p>
          </div>
        </div>
      </div>
    </>
  )
}