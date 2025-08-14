// src/Layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* Ini akan merender komponen halaman sesuai route */}
      </main>
      <Footer />
    </>
  );
}
