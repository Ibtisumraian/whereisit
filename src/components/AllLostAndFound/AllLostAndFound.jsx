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
        setInitialItems(data)
        setItems(initialItems)
    },[data, initialItems])
    console.log(items);
    
    const handleSearchItem = (e) => {
        e.preventDefault()
        const title = e.target.search.value
        console.log(title);
        fetch(`https://lost-and-found-server-mu.vercel.app/items?title=${title}`)
        .then(res => res.json())
        .then(data => setItems(data));
    }

        
    const handleViewDetailsButton = (id) => {
       return navigate(`/item/${id}`)
    }
    return (
        <div className='mb-32'>
            <div>
                <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-9/12 mx-auto rounded-4xl drop-shadow-xl/50 bg-[#00A79D]  flex flex-col items-center justify-center font-sans p-4 pb-10">
                    <div className='text-center flex flex-col gap-4 my-8'>
                        <h1 className='text-5xl font-bold text-white'>Quickly narrow down your search.</h1>
                        <p className='text-white'>Use the search bar below to filter by item title or location. Whether you've lost something or found something valuable, <br /> help the community reconnect with their items faster.</p>
                    </div>
                    <div className="relative w-full max-w-lg">                   
                        <form onSubmit={handleSearchItem}>
                            <div className="relative bg-white rounded-full drop-shadow-xl/20 p-1.5 flex items-center">
                        <input
                            name="search"
                            type="text"
                            placeholder="Search by title..."
                            className="w-full bg-[#00A79D40] rounded-full py-3.5 pl-8 pr-20 text-gray-800 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A79D] transition-all duration-300 shadow-[inset_10px_10px_20px_rgba(105,105,105,0.3)]"
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
                                className="h-6 w-6"
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

            <div className='text-center py-4 mt-20 mb-10 '>
                <h1 className='text-5xl font-bold fontInter text-gray-600'>Lost And Found Items</h1>
            </div>

                <div className='w-9/12 mx-auto py-8'>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    onClick={()=>setItems(initialItems)}
                    className='btn bg-[#00A79D] text-base text-white hover:bg-[#00A79D80]'>See All</motion.button>
                </div>
            <div className='w-9/12 mx-auto  grid grid-cols-3 gap-8'>

                {
                    items.map(item => {
                        return <motion.div
                            key={item._id}
                            whileHover={{
                                scale: [null, 1.02, 1.07],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                                },
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className='bg-[#00A79D] rounded-xl  drop-shadow-xl/40'>
                            <div key={item._id} className=" rounded-xl rounded-br-full h-full bg-white  border border-gray-200 p-6">
                    <div className=''>
                        <div className="relative">
                        <img
                        src={ item.thumbnail }
                        alt="Cloudinary server down"
                        className="w-[370px] h-48 object-cover rounded-xl"
                        />
                        <motion.span 
                            initial={{ opacity: 0, y: 50 }}    
                            animate={{ opacity: 1, y: [0, 5, 0], x: [0, 5, 0] }}
                            transition={{
                                opacity: { duration: 1 },
                                y: {
                                     duration: 8,
                                     repeat: Infinity,
                                     ease: "easeInOut"
                                },
                                x: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded ${item.post_type === "Lost" ? "bg-red-400" : "bg-[#00A79D]"}`}>
                        { item.post_type }
                        </motion.span>
                    </div>

                    <div className=" space-y-2 my-2">
                        <h2 className="text-lg font-semibold">{ item.title }</h2>
                        <p className="text-gray-600 text-sm max-w-[300px]">{ item.description }</p>
                        <p className="text-gray-500 text-sm flex items-center gap-2"><FaMapLocationDot className='text-[#00A79D]' /> { item.location }</p>
                        <p className="text-gray-400 text-xs flex items-center gap-2"><MdDateRange className='text-[#00A79D] text-sm'/> { item.date }</p>
                        {/* { item.recovered && <h1>Recovered</h1>} */}
                        <div className='flex flex-col justify-self-end drop-shadow-xl/40'>
                        <motion.button 
                        onClick={()=>handleViewDetailsButton(item._id)}
                        initial={{ opacity: 0 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-2 w-fit cursor-pointer  bg-white text-[#00A79D] hover:bg-[#00A79D] hover:text-white text-sm font-medium py-2 px-4 rounded">
                        View Details
                        </motion.button>
                        </div>
                    </div>
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