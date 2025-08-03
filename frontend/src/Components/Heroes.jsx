import { Link, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

export default function Heroes() {
    const navigate = useNavigate();

    const handlePelatihanSayaClick = () => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    };

    return (
        <section className="container px-6 py-8 mx-auto text-center">
            <div className="max-w-2xl mx-auto">
                {/* Badge + Info */}
                <div
                    className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-white border border-gray-200 transition-colors duration-200"
                >
                    <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
                        New
                    </span>
                    <span className="text-sm font-medium flex items-center">
                        Selamat Datang di
                        <span className="ml-1 font-semibold text-gray-800">
                            Pelatihan
                            <span className="text-blue-600">.Ku</span>
                            <sup className="text-[10px] ml-0.5 text-gray-600">™</sup>
                        </span>
                    </span>
                    <i className="fas fa-angle-right ml-2 text-sm"></i>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 lg:text-5xl leading-tight">
                    Platform Pelatihan Digital untuk Masa Depan Karirmu
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg text-gray-600">
                    Tingkatkan keterampilanmu kapan saja dan di mana saja. Akses pelatihan interaktif, materi terkini, dan sertifikat yang diakui industri – semua dalam satu platform.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="pelatihan"
                        className="inline-flex items-center justify-center px-6 py-3 text-white font-medium bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 transition"
                    >
                        Daftar Pelatihan
                    </Link>
                    <button
                        onClick={handlePelatihanSayaClick}
                        className="inline-flex items-center justify-center px-6 py-3 text-blue-600 font-medium bg-white border border-blue-600 rounded-lg shadow-md hover:bg-gray-100 focus:ring focus:ring-blue-300 focus:ring-opacity-80 transition"
                    >
                        Lihat Pelatihan Saya
                    </button>
                </div>
            </div>
        </section>
    );
}
