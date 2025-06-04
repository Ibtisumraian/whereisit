import React from "react";
import './navbar.css'
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-7 w-11/12 mx-auto">
        <div>
          <h1 className="text-4xl fontInter text-[#00A79D] font-bold">WhereIsIt</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-7 text-base font-semibold">
            <button className="">Home</button>
            <button className="">Sign In</button>
            <button className="">Sign Out</button>
          
          </div>

         
         
                  <div className="dropdown dropdown-end">
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
      </div>
    </div>
  );
};

export default Navbar;
