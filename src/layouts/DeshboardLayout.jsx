import React, { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { Link, Outlet, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const DeshboardLayout = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const { user, logoutUser } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const [isDarkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved === "true";
  });

  // Handle dark mode class on html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const customerMenus = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/orders", label: "Orders" },
  ];

  const adminMenues = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/shopservice", label: "Service" },
    { to: "/dashboard/service/add", label: "Add Service" },
    { to: "/categories", label: "Categories" },
    { to: "/dashboard/categories/add", label: "Add Categories" },
    { to: "/dashboard/orders", label: "Orders" },
  ];

  const menuItems = user.is_staff ? adminMenues : customerMenus;
  return (
    <div>
      <div className="flex h-screen transition-colors duration-300">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-20 w-64 overflow-y-auto bg-white dark:bg-gray-800 transform transition-transform duration-300 md:translate-x-0 ${
            isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0`}
        >
          <div className="py-4">
            <Link
              to="/"
              href="#"
              className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            >
              Freelancer Platform
            </Link>

            <ul className="menu menu-md gap-2">
              {menuItems.map((item, index) => (
                <li className="px-6 py-3" key={index}>
                  <Link
                    to={item.to}
                    className="flex items-center w-full text-sm font-semibold
                    text-gray-800 dark:text-gray-100 hover:text-purple-600
                    cursor-pointer"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-6 my-6">
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700">
                Create Account
                <span className="ml-2">+</span>
              </button>
            </div>
          </div>
          {/* footer */}
          <div className="mt-auto pt-[160%] text-sm text-base-300 text-center">
            © 2025 Freelnacer
          </div>
        </aside>
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <header className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSideMenuOpen(!isSideMenuOpen)}
                className="focus:outline-none md:hidden"
              >
                <FiMenu size={24} />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Profile icon */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link
                      to={"/dashboard/profile/"}
                      className="justify-between badge-lg"
                    >
                      Profile
                      {/* <span className="badge">New</span> */}
                    </Link>
                  </li>
                  <li>
                    <a className=" badge-lg">Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogout} className="badge-lg">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              {/* Mode icon */}
              <button
                onClick={() => setDarkMode(!isDarkMode)}
                className="focus:outline-none"
              >
                {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
          </header>

          {/* Dashboard content */}
          <main className="flex-1 p-5 overflow-y-auto transition-colors duration-300">
            <Outlet />
          </main>
        </div>

        {/* Mobile backdrop */}
        {isSideMenuOpen && (
          <div
            onClick={() => setSideMenuOpen(false)}
            className="fixed inset-0 z-10  bg-opacity-50 md:hidden"
          ></div>
        )}
      </div>
    </div>
  );
};

export default DeshboardLayout;
