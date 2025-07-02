import React from "react";
import './navbar.css'
import { NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { Bounce, toast } from "react-toastify";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { motion } from 'framer-motion';
const Navbar = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  // let userName = "";
  // if (!loading) {
  //       let str = user?.displayName;
  //       let newStr = str?.replace(" ", "_");
  //       userName = newStr
  // }  
  
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      toast.success('Sign Out Successful!', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
      });
      navigate('/')
    })
      .catch((error => {
      console.log(error);
      
    }))
  }

  const links = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/allItems'>All Items</NavLink>
    <NavLink to='/AboutUs'>AboutUs</NavLink>
    <NavLink to='/Contact'>Contact</NavLink>
    <NavLink to='/Support'>Support</NavLink>
    <NavLink to='/Dashboard'>Dashboard</NavLink>
  
  </>

  return (
    <div className="shadow bg-white sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto py-9 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <div className="flex flex-col gap-3 text-md sm:text-base font-semibold">
            {links}
          
          </div>
      </ul>
    </div>
    <motion.a 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 2, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    className=" hidden md:block text-4xl fontInter font-bold text-[#00A79D] drop-shadow-xl/30">WhereIsIt</motion.a>
  </div>
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 2, y: 0 }}
    transition={{ duration: 1.5, ease: 'easeOut' }}
  className="navbar-center gap-4 hidden lg:flex">
    {links}
    {/* <NavLink to='/' className="hover:bg-[#00A79D10] py-2 px-3 rounded-md text-gray-500">Home</NavLink>
    <NavLink to='/allItems' className="hover:bg-[#00A79D10] py-2 px-3 rounded-md text-gray-500">Lost & Found Items</NavLink>
    <NavLink to='/AboutUs' className="hover:bg-[#00A79D10] py-2 px-3 rounded-md text-gray-500">AboutUs</NavLink> */}
  </motion.div>
  <div className="navbar-end flex gap-3 sm:gap-7">
    <div className=" ">
    <ul className="menu menu-horizontal px-1">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      className="flex items-center gap-3 sm:gap-7 text-md sm:text-base font-semibold">
            
            {
                  !user ? <NavLink to='/Signin' className="hover:bg-[#00A79D10] py-1 px-3  text-gray-500 rounded-xl">Sign In</NavLink> : <button onClick={handleSignOut} className="cursor-pointer hover:bg-[#00A79D10] py-2 px-3  text-gray-500 rounded-xl"> Sign Out</button>
               
            }
          
          </motion.div>
    </ul>
  </div>
    {
      user && <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      className=" dropdown dropdown-end ">
                      <div tabIndex={0} role="button" className="cursor-pointer">
                          <div className="relative flex flex-col justify-center">
                            <div className="avatar myDIV ">
                            <div className="w-8 sm:w-12 rounded-full border-[3px]  border-[#00A79D]">
                              <a data-tooltip-id="my-tooltip" data-tooltip-content={user ? user.displayName : "User Name"}>
                                  <img src={user ? user?.photoURL : "https://res.cloudinary.com/dd4np04jl/image/upload/v1749252066/images_1_vzswvu.png"} />
                              </a>
                              <Tooltip id="my-tooltip" 
                                style={{
                                  backgroundColor: '#00A79D',
                                  color: 'white',
                                  borderRadius: '10px',
                                }}
                                                            />
                            </div>
                        </div>                                                       
                        </div>
                    </div>
                        <div tabIndex={0} className="dropdown-content menu  bg-[#00A79D99] drop-shadow-xl/800 rounded-xl z-1 w-52  border-2 border-[#00A79D] ">
                    <div className="bg-base-200 rounded-br-[120px]">
                            <div className="border-b-2 border-b-[#00A79D] flex flex-col gap-1 text-md p-2">
                                <h1 className="font-bold text-[#00A79D]">{user ? user?.displayName : "User Name"}</h1>
                                <p className="text-gray-500">{user ? user?.email : "User Email"}</p>
                            </div>
                          
                          <div className=" flex flex-col gap-1 text-md  my-3">
                              <NavLink to='/addItems' className=" hover:bg-[#00A79D10] py-1 px-3  text-gray-600" >Add Lost & Found Item </NavLink>
                              <NavLink to={`/allRecovered`} className=" hover:bg-[#00A79D10] py-1 px-3  text-gray-600">All Recovered Items</NavLink>
                              <NavLink to='/manageMyItems' className=" hover:bg-[#00A79D10] py-1 px-3  text-gray-600">Manage My Items</NavLink>
                          </div>
                          
                    </div>
                      </div> 
    </motion.div>
    }

  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
    </div>
  );
};

export default Navbar;
