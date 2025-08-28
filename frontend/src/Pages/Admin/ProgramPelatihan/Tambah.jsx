import { useState } from "react";

export default function TambahPelatihanAdmin() {
  const [image, setImage] = useState(null);
  const [nama, setNama] = useState("");
  const [moduls, setModuls] = useState([
    { nama: "", materi: [""], open: true },
  ]);

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const addModul = () => {
    setModuls([...moduls, { nama: "", materi: [""], open: true }]);
  };

  const removeModul = (idx) => {
    setModuls(moduls.filter((_, i) => i !== idx));
  };

  const addMateri = (idx) => {
    const newModuls = [...moduls];
    newModuls[idx].materi.push("");
    setModuls(newModuls);
  };

  const removeMateri = (modulIdx, materiIdx) => {
    const newModuls = [...moduls];
    newModuls[modulIdx].materi = newModuls[modulIdx].materi.filter(
      (_, i) => i !== materiIdx
    );
    setModuls(newModuls);
  };

  const toggleAccordion = (idx) => {
    const newModuls = [...moduls];
    newModuls[idx].open = !newModuls[idx].open;
    setModuls(newModuls);
  };

  return (
    <>
      <div className="px-4 py-1 min-h-screen">
        <h1 className="text-lg font-medium text-gray-800">
          Tambah Program Pelatihan
        </h1>

        {/* Upload & Nama */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Upload Gambar (1/3) */}
          <div className="bg-white p-4 rounded-xl md:col-span-1">
            <label className="text-gray-700">Upload Gambar</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="block w-full border border-gray-200 rounded-lg p-2 text-sm mt-2"
            />
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="mt-3 w-40 h-40 object-cover rounded-lg border shadow-sm"
              />
            )}
          </div>

          {/* Nama Program (2/3) */}
          <div className="bg-white p-4 md:col-span-2">
            <label className="text-gray-700">Nama Program</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama program"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
        </div>

        {/* Subjudul Modul */}
        <div className="flex justify-between items-center mt-8 mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Modul dan Materi
          </h2>
          <button
            onClick={addModul}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center gap-2"
          >
            <i className="fa-solid fa-plus"></i> Tambah Modul
          </button>
        </div>

        {/* Accordion Modul */}
        <div className="space-y-2">
          {moduls.map((modul, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-100"
            >
              {/* Header Modul */}
              <div
                onClick={() => toggleAccordion(idx)}
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 rounded-t-xl transition"
              >
                <span className="font-medium text-gray-700">
                  {modul.nama || `Modul ${idx + 1}`}
                </span>
                <div className="flex gap-3 items-center">
                  {/* Hapus Modul */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeModul(idx);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>

                  {/* Icon Chevron */}
                  <span
                    className={`transform transition-transform duration-300 ${
                      modul.open ? "rotate-180" : ""
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </div>

              {/* Body Modul */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  modul.open ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="p-5 space-y-4">
                  {/* Input Nama Modul */}
                  <input
                    type="text"
                    value={modul.nama}
                    onChange={(e) => {
                      const newModuls = [...moduls];
                      newModuls[idx].nama = e.target.value;
                      setModuls(newModuls);
                    }}
                    placeholder="Nama modul"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Materi */}
                  <div className="space-y-2">
                    {modul.materi.map((materi, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"
                      >
                        <input
                          type="text"
                          value={materi}
                          onChange={(e) => {
                            const newModuls = [...moduls];
                            newModuls[idx].materi[mIdx] = e.target.value;
                            setModuls(newModuls);
                          }}
                          placeholder={`Materi ${mIdx + 1}`}
                          className="flex-1 border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => removeMateri(idx, mIdx)}
                          className="text-red-500 hover:text-red-700 text-lg"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Tambah Materi */}
                  <button
                    onClick={() => addMateri(idx)}
                    className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 flex items-center gap-2"
                  >
                    <i className="fa-solid fa-plus"></i> Tambah Materi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
