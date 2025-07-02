import { signOut } from 'firebase/auth';
import React from 'react';
import { GoHome } from 'react-icons/go';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { MdOutlineReportProblem, MdOutlineAddLocation } from 'react-icons/md';
import { Link, Outlet } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import { auth } from '../../../components/firebase/firebase.init';
import { RiDeviceRecoverLine } from 'react-icons/ri';

const DashboardRoute = () => {

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success('Sign Out Successful!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#00A79D] sticky top-0 h-screen hidden lg:flex flex-col p-6 text-white">
        <h2 className="text-xl font-bold mb-6 cursor-default select-none">WhereIsIt Dashboard</h2>
        <nav className="flex-1 flex flex-col gap-4 text-lg">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <GoHome size={20} /> Home
          </Link>
          <Link to="/Dashboard" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <MdOutlineDashboard size={20} /> Overview
          </Link>
          <Link to="UserProfile" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <FaUserCircle size={20} /> User Profile
          </Link>
          <Link to="manageMyItems" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <MdOutlineReportProblem size={20} /> My Reports
          </Link>
          <Link to="allRecovered" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <RiDeviceRecoverLine size={20} /> My Recovered
          </Link>
          <Link to="addItems" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <MdOutlineAddLocation size={20} /> Report Lost Item
          </Link>

          <button
            onClick={handleSignOut}
            className="mt-auto flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition cursor-pointer w-fit"
          >
            <IoLogOutOutline size={20} /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content (scrollable) */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {/* Mobile Drawer */}
        <div className="block lg:hidden">
          <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="navbar bg-[#00A79D] w-full text-white">
                <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="mx-2 flex-1 px-2 font-bold">WhereIsIt Dashboard</div>
              </div>
              {/* Page content will be rendered here */}
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-[#00A79D] min-h-full w-60 p-6 flex flex-col gap-6 text-white">
                <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <GoHome size={20} /> Home
          </Link>
          <Link to="/Dashboard" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <MdOutlineDashboard size={20} /> Overview
          </Link>
          <Link to="UserProfile" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <FaUserCircle size={20} /> User Profile
          </Link>
          <Link to="manageMyItems" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <MdOutlineReportProblem size={20} /> My Reports
          </Link>
          <Link to="allRecovered" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <RiDeviceRecoverLine size={20} /> My Recovered
          </Link>
          <Link to="addItems" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition">
            <MdOutlineAddLocation size={20} /> Report Lost Item
          </Link>
                <button
                  onClick={handleSignOut}
                  className="mt-auto flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition cursor-pointer w-fit"
                >
                  <IoLogOutOutline size={20} /> Logout
                </button>
              </ul>
            </div>
          </div>
        </div>

        {/* Render nested routes here */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardRoute;
