import React from "react";
import './navbar.css'
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div>
      <div className="navbar w-11/12 mx-auto py-9 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <div className="flex flex-col items-center gap-3 text-base font-semibold">
            <button className="">Home</button>
            <button className="">Sign In</button>
            <button className="">Sign Out</button>
          
          </div>
      </ul>
    </div>
    <a className=" hidden md:block text-4xl fontInter font-bold text-[#00A79D]">WhereIsIt</a>
  </div>
  <div className="navbar-end flex gap-7">
    <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <div className="flex items-center gap-7 text-base font-semibold">
            <button className="">Home</button>
            <button className="">Sign In</button>
            <button className="">Sign Out</button>
          
          </div>
    </ul>
  </div>
    <div className=" dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="">
                          <div className="relative flex flex-col justify-center">
                            <div className="avatar myDIV">
                            <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                        </div>
                            
                            <div className="hide absolute text-sm -top-5 -left-4">Ibtisum_Raian</div>
                        </div>
                    </div>
                      <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm">
                          <div className="border-b flex flex-col gap-1 text-md pb-2">
                              <h1 className="font-bold">Ibtisum Raian</h1>
                              <p>ibtisumraian@gamil.com</p>
                          </div>
                        
                        <div className="border-b flex flex-col gap-2 text-md py-2 mb-2">
                            <NavLink>Add Lost & Found Item </NavLink>
                            <NavLink>All Recovered Items</NavLink>
                            <NavLink>Manage My Items</NavLink>
                        </div>
                        
                        <div className=" ">
                            <h1>Sign Out</h1>
                        </div>
                    </div>
    </div>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
    </div>
  );
};

export default Navbar;
