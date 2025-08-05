import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import AdminDashboard from './Pages/Admin/Dashboard';
import Profile from './Pages/Profile/Index';
import NotFound from './Components/NotFound';
import DaftarPelatihan from './Pages/Pelatihan/DaftarPelatihan';
import DetailPelatihan from './Pages/Pelatihan/DetailPelatihan';
import EditProfile from './Pages/Profile/Edit';
import MainLayout from './Layout/MainLayout';

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
      </Route>

      {/* Halaman-halaman tanpa layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminDashboard />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
