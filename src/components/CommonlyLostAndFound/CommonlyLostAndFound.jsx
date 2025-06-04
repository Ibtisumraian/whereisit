import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { FaBriefcase, FaKey, FaWallet } from 'react-icons/fa6';
import { MdOutlinePets } from 'react-icons/md';

const CommonlyLostAndFound = () => {
    return (
        <div className='pb-32'>
            <div className='flex items-center justify-center text-4xl fontInter font-semibold pb-12 pt-32'>
                <h1>Commonly Lost & Found</h1>
            </div>
            <div className='grid grid-cols-5 gap-4 w-9/12 mx-auto'>
                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-7xl text-[#00A79D]'>
                        <FaMobileAlt />
                    </div>
                    <div>
                        <h1 className='text-lg fontInter font-bold'>Electronics</h1>
                    </div>
                </div>


                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-7xl text-[#00A79D]'>
                        <FaKey />
                    </div>
                    <div>
                        <h1 className='text-lg fontInter font-bold'>Keys</h1>
                    </div>
                </div>


                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-7xl text-[#00A79D]'>
                        <MdOutlinePets />
                    </div>
                    <div>
                        <h1 className='text-lg fontInter font-bold'>Pets</h1>
                    </div>
                </div>


                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-7xl text-[#00A79D]'>
                        <FaWallet />
                    </div>
                    <div>
                        <h1 className='text-lg fontInter font-bold'>Wallets</h1>
                    </div>
                </div>


                <div className='bg-base-200 shadow-2xl p-8 rounded-2xl flex flex-col justify-center items-center gap-6'>
                    <div className='text-7xl text-[#00A79D]'>
                        <FaBriefcase />
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