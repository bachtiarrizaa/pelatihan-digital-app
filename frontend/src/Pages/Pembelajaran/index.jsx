import HeaderPembelajaran from "./Header";
import AsidePembelajaran from "./Aside";
import Footer from "../../Components/Footer";

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

export default function IndexPembelajaran() {
  return (
    <>
      {/* Header */}
      <HeaderPembelajaran />

      <div className="flex pt-20">
        {/* MATERI PEMBELAJARAN */}
        <main className="flex-1 px-8 pb-8">
          <h2 className="text-xl font-bold mb-4">Materi Pembelajaran</h2>
          <div className="space-y-8">
            {pelatihan.modul.map((modul, i) => (
              <section key={i} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-2">{modul.nama}</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {modul.materi.map((materi, j) => (
                    <li key={j}>{materi}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </main>
        {/* Sidebar */}
        <AsidePembelajaran />
      </div>

      <Footer />
    </>
  );
}
