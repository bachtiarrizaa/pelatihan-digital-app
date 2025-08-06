import { useEffect, useState } from "react";

const feedback = [
  {
    message: "Pelatihan ini sangat membantu saya memahami dasar-dasar frontend. Materinya mudah dipahami dan instruktur sangat membantu.",
    name: "Bachtiar Riza Pratama",
    role: "Pelatihan Frontend Web Development",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
  },
  {
    message: "Sangat puas dengan pelatihan ini. Praktik langsung yang diberikan sangat membantu saya untuk memahami materi.",
    name: "Dewi Anggraini",
    role: "Peserta Batch 2",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
  },
  {
    message: "Instrukturnya ramah dan sabar dalam menjelaskan. Saya jadi lebih percaya diri membuat tampilan web sendiri.",
    name: "Andi Saputra",
    role: "Alumni Pelatihan",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
  },
  {
    message: "Materi yang diajarkan sangat relevan dengan kebutuhan industri saat ini. Recommended banget!",
    name: "Citra Melati",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
  },
  {
    message: "Pelatihan ini membuat saya lebih siap menghadapi dunia kerja sebagai frontend developer.",
    name: "Rian Prakoso",
    role: "Peserta Bootcamp",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
  }
];

export default function Feedback() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxStartIndex = feedback.length - itemsPerView;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  return (
    <section className="bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="lg:px-24 pt-4 pb-4">
          {/* Title + Buttons */}
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <p className="text-lg font-medium text-blue-600">Testimonials</p>
              <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl">
                Pelatihan Frontend Web Development
              </h1>
            </div>
            <div className="flex justify-between mt-4 gap-4">
              <button
                onClick={handlePrev}
                className="p-2 text-blue-600 transition-colors duration-300 border rounded-full hover:bg-gray-100 disabled:opacity-30"
                disabled={startIndex === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="p-2 text-blue-600 transition-colors duration-300 border rounded-full hover:bg-gray-100 disabled:opacity-30"
                disabled={startIndex >= maxStartIndex}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative mt-2 sm:mt-6 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${feedback.length * (100 / itemsPerView)}%`,
                transform: `translateX(-${(startIndex * 100) / feedback.length}%)`
              }}
            >
              {feedback.map((item, index) => (
                <div
                  key={index}
                  className="p-2"
                  style={{ width: `${100 / feedback.length}%`, flexShrink: 0 }}
                >
                  <div className="bg-white rounded-lg shadow p-6 h-full">
                    <p className="text-gray-500 mb-4 text-sm text-justify">"{item.message}"</p>
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="ml-4">
                        <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                        <span className="text-xs text-gray-500">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}