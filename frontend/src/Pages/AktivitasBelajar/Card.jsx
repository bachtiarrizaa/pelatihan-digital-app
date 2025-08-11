import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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

// Komponen AccordionItem
function AccordionItem({ modul, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b">
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-circle-check text-green-600"></i>
          <span className="text-base text-gray-700">{modul.nama}</span>
        </div>
        <i
          className={`fa-solid fa-chevron-${isOpen ? "up" : "down"} text-base sm:text-lg text-green-700 cursor-pointer transition-transform duration-300`}
          onClick={onToggle}
        ></i>
      </div>

      {/* Konten */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="pl-10 pb-4 list-disc text-gray-600 text-sm">
          {modul.materi.map((materi, i) => (
            <li key={i} className="list-none">
              <Link
                to="#"
                className="block py-1 hover:text-blue-600 transition-colors"
              >
                {materi}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AktivitasBelajarCard() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleExpand = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow pt-4 pb-3">
      {/* Header */}
      <div className="px-4 sm:px-6 pb-4 mt-2 items-center justify-between border-b-2">
        <div className="flex items-center justify-between">
          <Link to="#" className="text-lg sm:text-xl font-bold text-gray-700">
            {pelatihan.title}
          </Link>
          <button className="px-3 py-1 text-sm font-bold text-gray-100 bg-blue-600 rounded hover:bg-blue-500">
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

      {/* List Modul */}
      <div className="px-2 sm:px-4">
        {pelatihan.modul.map((modul, index) => (
          <AccordionItem
            key={index}
            modul={modul}
            isOpen={openIndex === index}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </div>
    </div>
  );
}
