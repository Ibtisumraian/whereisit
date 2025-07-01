import React, { useEffect, useState } from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router';
import { motion } from "framer-motion";


const AllLostAndFound = () => {
    const data = useLoaderData()
    const [initialItems, setInitialItems] = useState([])
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      document.title = "Lost & Found Items | WhereIsIt";
    }, []);
    
    useEffect(() => {
        setInitialItems(data)
        setItems(initialItems)
    },[data, initialItems])
    
    const handleSearchItem = (e) => {
        e.preventDefault()
        const title = e.target.search.value
        fetch(`https://lost-and-found-server-mu.vercel.app/items?title=${title}`, { credentials: 'include' })
        .then(res => res.json())
        .then(data => setItems(data));
    }

        
    const handleViewDetailsButton = (id) => {
       return navigate(`/item/${id}`)
    }
    return (
        <div className='mb-32 mt-8'>
            <div>
                <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-11/12 mx-auto rounded-4xl drop-shadow-xl/800 bg-[#00A79D99]  flex flex-col items-center justify-center font-sans p-4 pb-10">
                    <div className='text-center flex flex-col gap-4 my-8'>
                        <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-white'>Quickly narrow down your search.</h1>
                        <p className='text-white text-sm sm:text-base'>Use the search bar below to filter by item title or location. Whether you've lost something or found something valuable, <br /> help the community reconnect with their items faster.</p>
                    </div>
                    <div className="relative w-full max-w-lg">                   
                        <form onSubmit={handleSearchItem}>
                            <div className="relative bg-white rounded-full drop-shadow-xl/20 p-1.5 flex items-center">
                        <input
                            name="search"
                            type="text"
                            placeholder="Search by title or location..."
                            className="w-full bg-[#00A79D40] rounded-full py-1.5 sm:py-2.5 lg:py-3.5 pl-8 pr-20 text-gray-800 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A79D] transition-all duration-300 shadow-[inset_10px_10px_20px_rgba(105,105,105,0.3)]"
                        />
                        <motion.button
                            initial={{ opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            whileInView={{ opacity: 1 }} 
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
                                className="w-4 h-4 sm:h-6 sm:w-6"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            </div>
                        </motion.button>
                        </div>
                        </form>
                    </div>
            </motion.div>
            </div>

            <div className='text-center py-4 mt-20 mb-10 px-3'>
                <h1 className='text-3xl sm:text-5xl font-bold fontInter text-gray-600'>Lost And Found Items</h1>
            </div>

                <div className='w-11/12 mx-auto py-8'>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    onClick={()=>setItems(initialItems)}
                    className='btn bg-[#00A79D] text-sm sm:text-base text-white hover:bg-[#00A79D80]'>See All</motion.button>
                </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>

                {
                    items.map(item => {
                        return <motion.div
                                                key={item._id}
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.02,
                                                    boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.1)",
                                                    transition: { duration: 0.3 },
                                                }}
                                                className="bg-white rounded-2xl shadow-md border border-gray-200 w-full h-full flex flex-col transition-all duration-300"
                                                >
                                                {/* Image Section */}
                                                <div className="overflow-hidden rounded-t-2xl">
                                                    <img
                                                    src={item.thumbnail}
                                                    alt="Item thumbnail"
                                                    className="w-full h-48 object-cover rounded-t-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
                                                    />
                                                </div>
                        
                                                {/* Content Section */}
                                                <div className="flex flex-col justify-between flex-grow p-5">
                                                    <div className="space-y-3">
                                                    <h2 className="text-lg font-semibold text-gray-800 truncate">
                                                        {item.title}
                                                    </h2>
                        
                                                    <p className="text-sm text-gray-600 line-clamp-3">
                                                        {item.description}
                                                    </p>
                        
                                                    <p className="text-xs text-gray-400 flex items-center gap-1">
                                                        <MdDateRange className="text-[#00A79D]" /> {item.date}
                                                    </p>
                                                    </div>
                        
                                                    {/* Button pinned to bottom */}
                                                    <div className="mt-4 pt-2 flex justify-between">
                                                    <div></div>
                                                    <motion.button
                                                        whileHover={{ scale: 1.08 }}
                                                        whileTap={{ scale: 0.92 }}
                                                        className="w-fit text-center cursor-pointer bg-[#00A79D] text-white hover:bg-white hover:text-[#00A79D] hover:border hover:border-[#00A79D] transition-all duration-300 text-sm font-medium py-2 px-4 rounded-full"
                                                        onClick={() => handleViewDetailsButton(item._id)}
                                                    >
                                                        View Details
                                                    </motion.button>
                                                    </div>
                                                </div>
                                                </motion.div>
                    })
                }



            </div>
        </div>
    );
};

export default AllLostAndFound;