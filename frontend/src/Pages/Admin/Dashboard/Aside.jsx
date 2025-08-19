import { useState } from "react";

export default function AsideDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);

  const toggleSidebar = () => {
    if (isOpen) {
      setContentVisible(false);
      setTimeout(() => {
        setShowContent(false);
        setIsOpen(false);
      }, 300);
    } else {
      setIsOpen(true);
      setShowContent(true);
      setTimeout(() => setContentVisible(true), 300);
    }
  };

  return (
    <aside
      className={`flex flex-col h-screen px-6 py-3 overflow-y-auto bg-white border-r transition-all duration-300
        ${isOpen ? "w-60" : "w-16"}
      `}
    >
      <div className="flex flex-col justify-between flex-1">
        <nav className="-mx-3">
          {/* Header */}
          <div className="px-3 flex items-center justify-between py-3 text-gray-600 border-b">
            {isOpen && (
              <div className="flex justify-end transition-opacity duration-300">
                <span className="inline-block w-24 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
            )}
            <button onClick={toggleSidebar}>
              <i
                className={`fa-solid fa-angles-right transition-transform duration-300 ${
                  !isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Dashboard Menu */}
          <div className="px-3 flex items-center justify-between text-gray-600 mt-2">
            <div className="flex items-center gap-x-2">
              <i className="fa-solid fa-file"></i>
              {showContent && (
                <label
                  className={`font-medium transition-opacity duration-300 ${
                    contentVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Dashboard
                </label>
              )}
            </div>
            {showContent && (
              <button
                className={`transition-opacity duration-300 ${
                  contentVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <i className="fa-solid fa-angle-down"></i>
              </button>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}
