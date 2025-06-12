import React from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';

const AllLostAndFound = () => {
    return (
        <div className='mb-32'>
            <div>
                <div className="w-9/12 mx-auto rounded-4xl drop-shadow-xl/50 bg-[#00A79D]  flex flex-col items-center justify-center font-sans p-4 pb-10">
                    <div className='text-center flex flex-col gap-4 my-8'>
                        <h1 className='text-5xl font-bold text-white'>Quickly narrow down your search.</h1>
                        <p className='text-white'>Use the search bar below to filter by item title or location. Whether you've lost something or found something valuable, <br /> help the community reconnect with their items faster.</p>
                    </div>
                    <div className="relative w-full max-w-lg">                   
                        <div className="relative bg-white rounded-full drop-shadow-xl/20 p-1.5 flex items-center">
                        <input
                            type="text"
                            placeholder="Search by title..."
                            className="w-full bg-[#00A79D40] rounded-full py-3.5 pl-8 pr-20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A79D] transition-all duration-300 shadow-[inset_10px_10px_20px_rgba(105,105,105,0.3)]"
                        />
                        <button 
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#00A79D] p-1 rounded-full hover:bg-[#00A79D70] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A79D] focus:ring-offset-2"
                        >
                            <div className="bg-gray-200 rounded-full p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="black"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            </div>
                        </button>
                        </div>
                    </div>
            </div>
            </div>

            <div className='text-center py-4 my-20 '>
                <h1 className='text-5xl font-bold fontInter text-gray-600'>Lost And Found Items</h1>
            </div>

            <div className='w-9/12 mx-auto  grid grid-cols-3 gap-2'>
                

                <div className=" rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white p-6">
                    <div className=''>
                        <div className="relative">
                        <img
                        src="https://images.unsplash.com/photo-1558788353-f76d92427f16"
                        alt="Lost Golden Retriever"
                        className="w-full h-48 object-cover rounded-xl"
                        />
                        <span className="absolute top-2 left-2 bg-red-400 text-white text-xs font-semibold px-2 py-1 rounded">
                        Lost
                        </span>
                    </div>

                    <div className=" space-y-2 my-2">
                        <h2 className="text-lg font-semibold">Lost Golden Retriever</h2>
                        <p className="text-gray-600 text-sm">Last seen near Central Park.</p>
                        <p className="text-gray-500 text-sm flex items-center gap-2"><FaMapLocationDot className='text-[#00A79D]' /> CentraPark</p>
                        <p className="text-gray-400 text-xs flex items-center gap-2"><MdDateRange className='text-[#00A79D] text-sm'/> 2025-06-10</p>
                        <button className="mt-2 w-full bg-[#00A79D] hover:bg-[#00A79D80] text-white text-sm font-medium py-2 px-4 rounded">
                        View Details
                        </button>
                    </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AllLostAndFound;