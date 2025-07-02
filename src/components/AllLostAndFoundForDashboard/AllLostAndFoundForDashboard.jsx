import React, { useEffect, useState } from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router';
import { motion } from "framer-motion";


const AllLostAndFoundForDashboard = () => {
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
       return navigate(`/Dashboard/post/${id}`)
    }

    const handleRecentItems = () => {
        fetch(`https://lost-and-found-server-mu.vercel.app/descending`)
        .then(res => res.json())
        .then(data => setItems(data));
    }

    const handleOldestItems = () => {
        fetch(`https://lost-and-found-server-mu.vercel.app/ascending`)
        .then(res => res.json())
        .then(data => setItems(data));
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

             <motion.div
                 className='flex flex-col items-center justify-center mt-24 mb-16 px-4 text-center'
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.7, ease: 'easeOut' }}
                 viewport={{ once: true, amount: 0.4 }}
                 >
                 <h1 className='text-3xl sm:text-5xl font-bold fontInter text-gray-700'>
                 Lost <span className='text-[#00A79D]'>& Found</span> Items
                 <motion.div
                     className='mt-3 h-1 w-full rounded-full bg-[#00A79D]'
                     initial={{ scaleX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                     style={{ originX: 0 }}
                 />
                 </h1>
             
                                     
            </motion.div>

                <div className='w-full mx-auto flex items-center gap-3 py-8'>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    onClick={()=>setItems(initialItems)}
                    className='btn bg-[#00A79D] text-sm sm:text-base text-white hover:bg-[#00A79D80]'>See All</motion.button>
                <div>
                    <button className="btn bg-[#00A79D] text-sm sm:text-base text-white hover:bg-[#00A79D80]" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                        Sort Items
                        </button>

                        <ul className="dropdown menu w-52  rounded-box bg-base-100 shadow-sm"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
                        <li onClick={handleRecentItems}><a>Recent Items</a></li>
                        <li onClick={handleOldestItems}><a>Oldest Items</a></li>
                        </ul>
                </div>
            </div>
            
            <div className="w-full max-w-full mx-auto mt-8 overflow-x-auto rounded-lg shadow-lg border border-gray-200">
      <table className="min-w-[600px] w-full bg-white rounded-lg border-collapse">
        <thead className="bg-[#00A79D] text-white select-none">
          <tr>
            <th className="py-3 px-4 text-left whitespace-nowrap min-w-[80px]">Image</th>
            <th className="py-3 px-4 text-left whitespace-nowrap min-w-[120px]">Title</th>
            {/* Description hidden on xs */}
            <th className="py-3 px-4 text-left whitespace-normal hidden sm:table-cell max-w-xs min-w-[250px]">Description</th>
            <th className="py-3 px-4 text-left whitespace-nowrap min-w-[110px]">Date</th>
            <th className="py-3 px-4 text-center whitespace-nowrap min-w-[120px]">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <motion.tr
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-b last:border-none hover:bg-gray-50 transition "
              >
                <td className="py-3 px-4 whitespace-nowrap">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded-md"
                    loading="lazy"
                  />
                </td>
                <td className="py-3 px-4 font-semibold text-gray-800 whitespace-nowrap max-w-[150px] truncate" title={item.title}>
                  {item.title}
                </td>
                <td className="py-3 px-4 text-gray-600 max-w-xs line-clamp-2 hidden sm:table-cell whitespace-normal">
                  {item.description}
                </td>
                <td className="py-3 px-4 text-gray-500 text-sm whitespace-nowrap">
                  <span className="flex items-center gap-1 justify-start sm:justify-center">
                    <MdDateRange className="text-[#00A79D]" /> {item.date}
                  </span>
                </td>
                <td className="py-3 px-4 text-center whitespace-nowrap">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium bg-[#00A79D] cursor-pointer text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#00A79D] hover:border hover:border-[#00A79D] transition w-full sm:w-auto"
                    onClick={() => handleViewDetailsButton(item._id)}
                    aria-label={`View details for ${item.title}`}
                  >
                    View Details
                  </motion.button>
                </td>
              </motion.tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-8 text-gray-500">
                No items found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

        </div>
    );
};

export default AllLostAndFoundForDashboard;