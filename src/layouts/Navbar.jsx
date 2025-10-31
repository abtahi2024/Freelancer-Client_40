import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const { user, logoutUser, orders } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="shopservice">ServicesShop</Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          href="#"
          className="btn flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
        >
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
          <div className="flex items-center">
            <span className="ml-1 text-white">Freelancher</span>
          </div>
          <div className="ml-2 flex items-center gap-1 text-sm md:flex">
            <svg
              className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
              data-slot="icon"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="m-1">
            <Button variant="outlined" color="primary">
              <Link to="/" className="text-lg">
                Home
              </Link>
            </Button>
          </li>
          <li className="m-1">
            <div
              className="text-lg
             border-b-4
             hover:brightness-110 hover:-translate-y-1 hover:border-b-6
             active:border-b-2 active:brightness-90 active:translate-y-2"
            >
              <summary>
                <Link to="/dashboard">Dashboard</Link>
              </summary>
            </div>
          </li>
          <li className="m-1">
            <Button variant="outlined">
              <Link to="/shopservice" className="text-lg">
                ServicesShop
              </Link>
            </Button>
          </li>
          <li className="m-1">
            <Link className="btn btn-neutral" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />{" "}
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item">
                    {orders?.filter((o) => o.status === "Pending").length || 0}
                  </span>
                </div>
              </div>

              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {orders?.length || 0}Items
                  </span>
                  <span className="text-info">
                    Subtotal: ${orders?.total_price}
                  </span>
                  <div className="card-actions">
                    <button
                      className="btn btn-primary btn-block "
                      onClick={() => navigate("/dashboard/orders")}
                    >
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar w-14"
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
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                  <Link to="/">Home</Link>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                  <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                  <a onClick={handleLogout}>Logout</a>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                  Settings
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn btn-neutral btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-link">
              Join
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
