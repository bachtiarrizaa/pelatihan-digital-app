import { NavLink } from "react-router-dom"

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

export default function AsidePembelajaran() {
  return(
    <>
      <aside className="fixed right-0 top-16 flex flex-col w-64 h-[calc(100vh-64px)] px-4 py-6 overflow-y-auto bg-white border-l">
        <div className="flex flex-col justify-between flex-1">
          <nav>
            {/* Tombol Navigasi Modul */}
            <div className="flex items-center justify-between sm:pr-4 -mx-2">
              <button>
                <i className="fa-solid fa-angles-left"></i>
              </button>
              <div className="flex justify-center">
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-24 h-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>

            {/* Loop modul dan materi */}
            {pelatihan.modul.map((modul, i) => (
              <div key={i} className="mt-3">
                <label className="text-sm font-medium text-gray-600">
                  {modul.nama}
                </label>
                <div className="flex flex-col text-gray-600 text-sm">
                  {modul.materi.map((materi, j) => (
                    <NavLink key={j} to="#" className="hover:text-blue-700 mt-1">
                      {materi}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}