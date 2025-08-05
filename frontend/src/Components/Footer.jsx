import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="bg-white">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <Link to="/" className="flex items-center text-2xl font-bold gap-x-1">
                            <i className="fas fa-graduation-cap text-blue-600 text-3xl"></i>
                            <span className="flex items-baseline">
                                <span className="text-gray-800">Pelatihan</span>
                                <span className="text-blue-600">.Ku</span>
                                <sup className="text-xs text-gray-800 ml-1">™</sup>
                            </span>
                        </Link>
                    </div>

                    <hr className="my-4 border-gray-200 sm:my-6" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-gray-500 text-center">
                            &copy; {new Date().getFullYear()} bachtiarrizap. All rights reserved.
                        </p>

                        <div className="flex mt-4 sm:mt-0">
                            <Link href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
                                <i className="fa-brands fa-square-linkedin"></i>
                            </Link>
                            <Link href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
                                <i className="fa-brands fa-github"></i>
                            </Link>
                            <Link href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                            <Link href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
                                <i className="fa-brands fa-medium"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}