import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
// import AdminDashboard from './Pages/Admin/Dashboard';
import Profile from './Pages/Profile/Index';
import NotFound from './Components/NotFound';
import DaftarPelatihan from './Pages/Pelatihan/DaftarPelatihan';
import DetailPelatihan from './Pages/Pelatihan/DetailPelatihan';
import EditProfile from './Pages/Profile/Edit';
import MainLayout from './Layout/MainLayout';
import IndexPembelajaran from './Pages/Pembelajaran';
import AktivitasBelajar from './Pages/AktivitasBelajar';
import AktivitasBelajarSelesai from './Pages/AktivitasBelajar/Selesai';
import UbahKataSandi from './Pages/Profile/UbahKataSandi';
import ResetKataSandi from './Pages/Profile/ResetKataSandi';

import AdminLayout from './Layout/AdminLayout';
import IndexAdmin from './Pages/Admin/Index';
import UserDashboard from './Pages/Admin/User/Index';
import PelatihanIndexAdmin from './Pages/Admin/ProgramPelatihan/Index';
import PelatihanDetailAdmin from './Pages/Admin/ProgramPelatihan/Detail';

export default function App() {
  return (
    <Routes>
      {/* Halaman-halaman yang menggunakan layout dengan Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/daftar-pelatihan" element={<DaftarPelatihan />} />
        <Route path="/daftar-pelatihan-detail" element={<DetailPelatihan />} />
        <Route path="/aktivitas-belajar" element={<AktivitasBelajar />} />
        <Route path="/aktivitas-belajar/selesai" element={<AktivitasBelajarSelesai />} />
      </Route>

      {/* Halaman-halaman tanpa layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pembelajaran" element={<IndexPembelajaran />} />
      <Route path="/ubah-password" element={<UbahKataSandi />} />
      <Route path="/reset-password" element={<ResetKataSandi />} />
      
      {/* Halaman Admin */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<IndexAdmin />} />
        <Route path="/admin/user" element={<UserDashboard />} />
        <Route path="/admin/pelatihan" element={<PelatihanIndexAdmin />} />
        <Route path="/admin/pelatihan/detail" element={<PelatihanDetailAdmin />} />
      </Route>


      {/* <Route path="/admin" element={<IndexAdmin />} />
      <Route path="/admin/user" element={<UserDashboard />} /> */}

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
