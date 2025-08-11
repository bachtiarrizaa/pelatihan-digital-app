import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const pelatihan = {
  title: "Frontend Web Development",
  deskripsi:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.",
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
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left"
      >
        <span className="font-medium text-gray-700">{modul.nama}</span>
        <span className="text-sm text-gray-500">
          <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`} />
        </span>
      </button>

      {/* Konten Accordion */}
      <div
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: `${height}px` }}
      >
        <ul
          ref={contentRef}
          className="px-6 pt-2 pb-4 list-disc list-inside text-sm text-gray-600 space-y-1"
        >
          {modul.materi.map((materi, i) => (
            <li key={i}>
              <Link to="#" className="hover:text-blue-600 transition-colors">
                {materi}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Silabus() {
  const [openIndex, setOpenIndex] = useState(null);
  const silabusRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white" ref={silabusRef}>
      <div className="container px-6 mx-auto">
        <div className="lg:px-24 pt-4 pb-8">
          <p className="text-lg font-medium text-blue-600">Silabus</p>
          <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl">
            {pelatihan.title}
          </h1>

          <div className="flex mx-auto my-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
          </div>

          {/* List Modul */}
          <div className="space-y-4">
            {pelatihan.modul.map((modul, index) => (
              <AccordionItem
                key={index}
                modul={modul}
                isOpen={openIndex === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
