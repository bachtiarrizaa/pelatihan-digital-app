import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/NavBar';

export default function Profile() {
  const [user, setUser] = useState(null);
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
        <span className="flex-1 ml-3 text-base font-medium text-red-700">Logout</span>
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
      <Navbar />
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
          <h2 className="text-lg font-bold sm:text-xl text-gray-800 mb-2">Pengaturan</h2>
          <div>
            <ActionItem icon="fa-solid fa-circle-info" label="Tentang Aplikasi" to="/about" />
            <ActionItem icon="fa-solid fa-phone" label="Ubah Kata Sandi" to="/password/change" />
            <LogoutButton onClick={handleLogout} />
          </div>
        </section>
      </div>
    </>
  );
}
