import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import { motion } from "framer-motion";

const SignIn = () => {
    const { userSignInWithEmailPass, userSignInWithGoogle} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleFormSubmitBtn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        userSignInWithEmailPass(email, password)
        .then(()=>{
            toast.success('Signed in successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            navigate(location?.state || '/')
        })
        .catch(error=>{
            if (error) {
                toast.error('Invalid email or password!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    })
            }
        })
    }

    const handleSignInWithGoogle = () => {
        userSignInWithGoogle()
        .then(()=>{
            toast.success('Signed in successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            navigate(location?.state || '/')
        })
        .catch(error => {
            if (error) {
                toast.error('There was a problem signing in with Google!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    })
            }
        })
    }
    const constraintsRef = useRef(null)
    return (
        <motion.div ref={constraintsRef} className={`sm:p-4 flex justify-center items-center  `}>
            <div className={`sm:p-4 px-5 sm:px-18 py-4 mt-8  flex justify-center items-center `} >
                <div className='grid grid-cols-2 bg-[#00A79D] rounded-full'>
                    <div className={`flex flex-col justify-center items-center w-fit p-8 sm:px-18 bg-white rounded-4xl drop-shadow-2xl sm:my-22`}>
                        <div className='p-6'>
                            <p className='text-lg sm:text-xl md:text-2xl text-[#00A79D] font-semibold '>User Sign In</p>
                        </div>
                    <form onSubmit={handleFormSubmitBtn}>
                    {/* email fild */}
                        <div>
                            
                        <div className="join ">
                <div className=" sm:w-[320px]">
                    <label className="input validator join-item">
                    <svg className="h-[1.5em] opacity-50 text-[#00A79D]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input required name='email' type="email" placeholder="mail@site.com" />
                    </label>
                
                </div>
                </div>  
                        </div>    

                    <br />

                    {/* password fild */}
                        <div>
                            
                        <div className="">
                        <label className="input validator ">
                <svg className="h-[1.5em] opacity-50 text-[#00A79D]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <path
                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                    ></path>
                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </g>
                </svg>
                <input
                    name='password'
                    type="password"
                    placeholder="Password"
                    required
                />
                </label>
                
                    </div> 
                        </div>  
                            <div className='pt-3 w-fit'>
                                <Link><p className='hover:text-[#00A79D] text-sm sm:text-base w-fit '>Forgot password ?</p></Link>
                    </div>
                    <div className="pt-4 ">
                        <button className="btn text-[#00A79D] hover:bg-[#00A79D] hover:text-white w-full">Sign In</button>
                    </div>
                    </form>
                    
                    <div className="pt-3">
                        <Link to='/SignUp'><p className='text-sm sm:text-base '>New to this site ? <span className="text-[#00A79D]">Sign Up</span></p></Link>
                    </div>
                    <div className="pt-4">
                        <div className="text-center p-2 flex justify-center items-center gap-2"><hr className='w-full text-gray-300' /> or <hr className='w-full text-gray-300' /></div>
                        <button onClick={handleSignInWithGoogle} className="btn hover:border hover:border-blue-400 sm:w-[320px] bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Sign In with Google
                        </button>
                    </div>
                    </div>

                    <div className=' rounded-full'>
                    <motion.img
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    initial={{ opacity: 0, y: 50 }}    
                    animate={{ opacity: 1, y: [0, 20, 0], x: [0, 20, 0] }}
                    transition={{
                        opacity: { duration: 1 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        x: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                        }}
                    className='w-[500px] drop-shadow-xl/100' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1749197946/ChatGPT_Image_zx8pln.png" alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SignIn;