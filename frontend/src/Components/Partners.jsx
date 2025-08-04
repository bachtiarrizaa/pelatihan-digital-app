import { Link } from "react-router-dom";

export default function Partners() {
    return (
        <div className="px-4 text-center bg-gray-50 lg:px-36">
            <div className="max-w-screen-lg mx-auto py-6 px-2">
                <span className="font-semibold text-gray-400">Mitra Kami</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 justify-items-center mt-2 text-gray-500">
                    <Link to="https://facebook.com" target="_blank"
                    className="flex items-center hover:text-gray-800 dark:hover:text-gray-400">
                        <i className="fa-brands fa-google text-4xl sm:text-5xl"></i>
                        <span className="font-semibold text-3xl sm:text-3xl">Google</span>
                    </Link>
                    <Link to="https://youtube.com" target="_blank" className="flex items-center hover:text-gray-800 dark:hover:text-gray-400">
                        <i className="fa-brands fa-apple text-4xl sm:text-5xl"></i>
                        <span className="font-semibold text-3xl sm:text-3xl">apple</span>
                    </Link>
                    <Link to="https://instagram.com" target="_blank" className="flex items-center hover:text-gray-800 dark:hover:text-gray-400">
                        <i className="fa-brands fa-line text-4xl sm:text-5xl"></i>
                        <span className="font-semibold text-3xl sm:text-3xl">Line</span>
                    </Link>
                    <Link to="https://tiktok.com" target="_blank" className="flex items-center hover:text-gray-800 dark:hover:text-gray-400">
                        <i className="fa-brands fa-microsoft text-4xl sm:text-5xl"></i>
                        <span className="font-semibold text-3xl sm:text-3xl">Microsoft</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
