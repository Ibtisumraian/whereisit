import React from 'react';
import { FaHandshake } from 'react-icons/fa6';
import { IoMdMegaphone } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';

const HowItWorks = () => {
    return (
        <div className='bg-[#00A79D12] mt-32 pb-16'>
            <div className='flex items-center justify-center text-4xl fontInter font-semibold pb-12 pt-32'>
                <h1 className=''>How WhereIsIt Works ?</h1>
            </div>

            <div className='grid grid-cols-3 gap-4 w-9/12 mx-auto'>
                

                <div className='bg-white p-8 rounded-2xl flex flex-col gap-4'>
                    <div className='text-9xl text-[#00A79D] flex items-center justify-center'>
                        <IoMdMegaphone />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-xl'>1. Report an Item</h1>
                        <p>Quickly post details about a lost or found item. Add photos, descriptions, and location to help others identify it.</p>
                    </div>
                </div>


                <div className='bg-white p-8 rounded-2xl flex flex-col gap-4'>
                    <div className='text-9xl text-[#00A79D] flex items-center justify-center'>
                        <IoSearch />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-xl'>2. Search Listings</h1>
                        <p>Browse through items reported by our community. Use filters for location, category, and date to narrow your search.</p>
                    </div>
                </div>


                <div className='bg-white p-8 rounded-2xl flex flex-col gap-4'>
                    <div className='text-9xl text-[#00A79D] flex items-center justify-center'>
                        <FaHandshake />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-xl'>3. Connect & Recover</h1>
                        <p>Contact the poster securely through our platform to arrange the return of the item. Get your belongings back!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;