export default function AsideDashboard() {
  return (
    <aside className="flex flex-col w-52 h-screen px-5 py-3 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
      <div className="flex flex-col justify-between flex-1">
        <nav className="-mx-3">
          <div className="px-3 flex items-center justify-between py-3 text-gray-600 border-b">
            <div className="flex justify-end">
              <span className="inline-block w-24 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
            <button>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
          <div className="px-3 flex items-center justify-between text-gray-600 mt-2">
            <div className="flex items-center gap-x-2">
              <i class="fa-solid fa-file"></i>
              <label className="font-medium">Dashboard</label>
            </div>
            <button>
              <i class="fa-solid fa-angle-down"></i>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}
