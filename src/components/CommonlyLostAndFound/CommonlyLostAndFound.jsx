import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { FaBriefcase, FaKey, FaWallet } from 'react-icons/fa6';
import { MdOutlinePets } from 'react-icons/md';

const CommonlyLostAndFound = () => {
    return (
        <div className='pb-32 text-gray-600'>
            <div className='flex items-center justify-center text-2xl sm:text-4xl  fontInter font-semibold pb-12 pt-32 text-center'>
                <h1>Commonly Lost & Found</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-9/12 mx-auto'>
                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-6xl xl:text-7xl text-[#00A79D]'>
                        <FaMobileAlt className='drop-shadow-xl/30'/>
                    </div>
                    <div>
                        <h1 className='text-lg fontInter font-bold'>Electronics</h1>
                    </div>
                </div>


                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-6xl xl:text-7xl text-[#00A79D]'>
                        <FaKey className='drop-shadow-xl/30'/>
                    </div>
                    <div>
                        <h1 className='text-lg fontInter font-bold'>Keys</h1>
                    </div>
                </div>


                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-6xl xl:text-7xl text-[#00A79D]'>
                        <MdOutlinePets className='drop-shadow-xl/30'/>
                    </div>
                    <div>
                        <h1 className='text-lg fontInter font-bold'>Pets</h1>
                    </div>
                </div>


                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-6xl xl:text-7xl text-[#00A79D]'>
                        <FaWallet className='drop-shadow-xl/30'/>
                    </div>
                    <div>
                        <h1 className='text-lg fontInter font-bold'>Wallets</h1>
                    </div>
                </div>


                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-6xl xl:text-7xl text-[#00A79D]'>
                        <FaBriefcase className='drop-shadow-xl/30'/>
                    </div>
                    <div>
                        <h1 className='text-lg fontInter font-bold'>Bags</h1>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default CommonlyLostAndFound;