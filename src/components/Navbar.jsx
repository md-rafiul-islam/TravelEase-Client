import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthProvider, { Authcontext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(Authcontext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User log out succesfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-vehicles">All Vehicles</NavLink>
      </li>

      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/add-vehicle">Add Vehicle</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/">My Vehicle</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/">My Bookings</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar  p-3 rounded-2xl border-none sm:w-full  mx-auto">
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
            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold font-quicksand">
          <p>
            <span className="text-accent">Travel</span>Ease
          </p>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3 relative group">
            {/* User Photo */}
            <img
              src={user?.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full object-cover border cursor-pointer"
            />

            {/* Hover Display Name */}
            <div className="absolute right-0 top-12 hidden group-hover:block bg-white shadow-md rounded-lg px-4 py-2 text-sm">
              <p className="font-medium text-gray-800">
                {user.displayName || "User"}
              </p>
            </div>

            {/* Logout (UI only) */}
            <button
              onClick={handleLogout}
              className="btn btn-sm rounded-3xl bg-red-500 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn rounded-3xl bg-accent text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
