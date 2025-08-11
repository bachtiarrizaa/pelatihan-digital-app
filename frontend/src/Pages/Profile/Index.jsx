import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/NavBar';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center py-2 px-3 rounded-lg bg-blue-50 hover:bg-blue-600/15 transition-colors w-full mt-4">
        <div className="w-8 text-blue-600 text-xl flex justify-center">
          <i className={icon}></i>
        </div>
        <div className="flex-1 ml-3 text-sm text-gray-800">
          <span className="font-semibold">{label}</span>
          <p className="font-normal">{value || '-'}</p>
        </div>
    </div>
  );

  const ActionItem = ({ icon, label, to }) => (
    <Link
      to={to}
      className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-600/15 transition-colors w-full mt-4"
    >
      <div className="w-8 text-blue-600 text-xl flex justify-center">
        <i className={icon}></i>
      </div>
      <span className="flex-1 ml-3 text-base font-medium text-gray-700">{label}</span>
      <i className="fas fa-chevron-right text-gray-400 text-xl"></i>
    </Link>
  );

  const LogoutButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center p-3 mt-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors w-full text-left"
    >
      <div className="w-8 text-red-600 text-xl flex justify-center">
        <i className="fas fa-right-from-bracket"></i>
      </div>
      <span className="flex-1 ml-3 text-base font-medium text-red-700">Keluar</span>
      <i className="fas fa-chevron-right text-gray-400 text-xl"></i>
    </button>
  );

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  if (!user) return null;

  return (
    <>
      <div className="bg-blue-600 text-white pt-28 pb-4 px-6 relative text-center mx-auto">
        <div className="px-2 sm:px-16">
          <div className="flex justify-end">
            <Link
              to="/edit-profile"
              className="text-blue-600 bg-white py-1 px-4 text-sm font-bold rounded-full hover:bg-blue-50"
            >
              Ubah Profil
            </Link>
          </div>
          <div className="flex items-center">
            <img
              src={
                user.image_profile
                  ? `/storage/${user.image_profile}`
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`
              }
              alt="Foto Profil"
              className="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg"
            />
            <div className="text-lg text-left ml-4">
              <h1 className="font-bold">{user.name}</h1>
              <p className="font-light">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <section className="pt-4 px-6 sm:px-16">
          <h2 className="text-lg font-bold sm:text-xl text-gray-800 mb-2">Informasi Pribadi</h2>
          <div>
            <InfoItem icon="fa-solid fa-user" label="Username" value={user.username} />
            <InfoItem icon="fa-solid fa-calendar-days" label="Tempat, Tanggal Lahir" value={user.username} />
            <InfoItem icon="fa-solid fa-venus-mars" label="Jenis Kelamin" value={user.username} />
            <InfoItem icon="fa-solid fa-location-dot" label="Alamat" value={user.username} />
            <ActionItem icon="fa-solid fa-book-open" label="Aktivitas Belajar" to="/aktivitas-belajar" />
          </div>
        </section>
      </div>

      <div className="bg-white">
        <section className="pt-4 px-6 sm:px-16">
          <h2 className="text-lg font-bold sm:text-xl text-gray-800 mb-2">Lainnya</h2>
          <div>
            <ActionItem icon="fa-solid fa-circle-info" label="Tentang Aplikasi" to="/about" />
            <ActionItem icon="fa-solid fa-phone" label="Ubah Kata Sandi" to="/password/change" />
            <LogoutButton onClick={() => setShowModal(true)} />
          </div>
        </section>
      </div>

      {/* Modal Konfirmasi Logout */}
      {showModal && (
        <div className="fixed inset-0 z-10 overflow-hidden">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:max-w-sm sm:w-full sm:p-6">
              <div className="flex items-center justify-center">
                <i class="fa-solid fa-right-from-bracket text-4xl text-red-600"></i>
              </div>

              <div className="my-3 text-center">
                <h3 className="text-lg font-medium leading-6 text-gray-800">
                  Konfirmasi Keluar
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Apakah kamu yakin ingin keluar dari akun ini?
                </p>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 border border-gray-200 rounded-md sm:w-auto sm:mx-2 hover:bg-gray-100"
                >
                  Batal
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white bg-red-600 rounded-md sm:w-auto hover:bg-red-500"
                >
                  Ya, Keluar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
