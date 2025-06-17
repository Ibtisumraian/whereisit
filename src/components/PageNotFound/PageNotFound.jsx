import React from 'react';
import { Link, useLocation } from 'react-router';
import { FaRegistered } from "react-icons/fa6";
import Lottie from 'lottie-react';
import pageNotFoundLottie from '../../assets/lotties/page-not-found.json'
import { motion } from 'framer-motion';

const PageNotFound = () => {
    const location = useLocation()
    return (
        <div>
            <div className=''>
                <div className='flex justify-center items-center mt-18 drop-shadow-xl/800'>
                    <div className='w-10/12 md:w-9/12 lg:w-8/12 2xl:w-6/12 mx-auto relative bg-[#56c9c199] rounded-2xl '> 
                        <div className='w-fit p-6 absolute'>
                            <Link to='/'>
                        <motion.button
                        initial={{ opacity: 0 }}
                        whileHover={{ scale: 1.09 }}
                        whileTap={{ scale: 0.8 }}
                        whileInView={{ opacity: 1 }}
                        className=' drop-shadow-xl/800 btn w-fit text-base sm:text-xl text-white bg-[#56c9c199] sm:py-7 sm:px-8 rounded-3xl'>Visit Home Page</motion.button>
                        </Link>
                        </div>
                        <div className='bg-base-300 text-center rounded-tl-full  flex flex-col  justify-between items-center gap-8 p-8'>
                        <div className='mt-8 hidden sm:block'>
                            <Lottie animationData={pageNotFoundLottie} loop={true} className='w-[300px]'></Lottie>
                        </div>
                    <div className='flex flex-col justify-center items-center gap-6 mt-16 sm:mt-0'>
                        <h1 className='text-3xl sm:text-7xl font-bold text-gray-600 '>404</h1>
                        <h1 className='text-3xl sm:text-5xl font-bold text-gray-600 '>Page Not Found!!</h1>
                        <h1 className=' text-gray-600 text-base sm:text-xl'>Oops! The page you're looking for doesn't exist.</h1>
                        <h1 className='text-gray-600 text-sm sm:text-base  flex justify-center items-center gap-2'> There is no page on the path name : { location.pathname}</h1>
                        
                    </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;