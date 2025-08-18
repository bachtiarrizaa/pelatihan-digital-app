import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UbahKataSandi() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="container px-6 pt-36 mx-auto">
        <div className="lg:flex">
          {/* Bagian Kiri */}
          <div className="lg:w-1/2">
            <Link to="/" className="flex items-center text-2xl font-bold space-x-2">
              <i className="fas fa-graduation-cap text-blue-600 text-3xl"></i>
              <span className="flex items-baseline">
                <span className="text-gray-800">Pelatihan</span>
                <span className="text-blue-600">.Ku</span>
                <sup className="text-xs text-gray-800 ml-1">™</sup>
              </span>
            </Link>

            <h1 className="mt-4 text-gray-600 md:text-lg capitalize">
              Senang bertemu kembali
            </h1>
            <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl">
              Ubah Kata Sandi akun anda
            </h1>
          </div>

          {/* Bagian Form */}
          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <form className="w-full lg:max-w-xl">
              {/* Email */}
              <div className="relative flex items-center">
                <span className="absolute">
                  <i className="fas fa-envelope text-gray-300 mx-3"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              {/* Password */}
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <i className="fas fa-lock text-gray-300 mx-3"></i>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  required
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 cursor-pointer text-gray-400 hover:text-gray-600"
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </span>
              </div>

              {/* Konfirmasi Password */}
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <i className="fas fa-lock text-gray-300 mx-3"></i>
                </span>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Konfirmasi Password"
                  required
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 cursor-pointer text-gray-400 hover:text-gray-600"
                >
                  <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </span>
              </div>

              {/* Tombol */}
              <div className="mt-8 flex flex-col items-center md:flex-row md:space-x-6 w-full">
                <button
                  type='button'
                  onClick={() => navigate(-1)}
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white text-center capitalize bg-gray-400 rounded-lg md:w-1/2 hover:bg-gray-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="mt-2 sm:mt-0 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center my-6 w-full lg:max-w-xl">
                <hr className="flex-grow border-gray-300" />
                <span className="px-3 text-gray-500 text-sm">atau</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Reset password */}
              <div className="text-center">
                <Link
                  to="/reset-password"
                  className="text-sm text-blue-600 font-semibold"
                >
                  Reset password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
