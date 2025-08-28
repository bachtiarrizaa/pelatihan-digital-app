import { Outlet } from "react-router-dom";
import SidebarAdmin from "../Components/Admin/Sidebar";
import NavbarAdmin from "../Components/Admin/Navbar";

export default function AdminLayout() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <NavbarAdmin />
        
        {/* Sidebar + Konten */}
        <div className="flex flex-1 pt-16 h-full">
          <aside className="h-full overflow-y-auto overflow-x-hidden bg-white">
            <SidebarAdmin />
          </aside>
  
          <main className="flex-1 h-full overflow-y-auto overflow-x-hidden px-2 pt-4 pb-8 bg-white w-full">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
