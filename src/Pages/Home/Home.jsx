import React, { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import { FaCalendarDays, FaMapLocationDot } from 'react-icons/fa6';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import CommonlyLostAndFound from '../../components/CommonlyLostAndFound/CommonlyLostAndFound';
import { useLoaderData, useNavigate } from 'react-router';
import { motion } from "framer-motion";
import { MdDateRange } from 'react-icons/md';
import PromotionalSection from '../../components/PromotionalSection/PromotionalSection';

const Home = () => {
    const recentItems = useLoaderData()

    const navigate = useNavigate()
    useEffect(() => {
        document.title = "WhereIsIt";
    }, []);
    const handleViewDetailsButton = (id) => {
       return navigate(`/item/${id}`)
    }

    const handleSeeAllButton = () => {
       return navigate('/allItems')
    }

    return (
        <div>
            <Banner></Banner>
            <div>
                    <motion.div
                        className='flex flex-col items-center justify-center mt-24 mb-16 px-4 text-center'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                        >
                        <h1 className='text-3xl sm:text-5xl font-bold fontInter text-gray-700'>
                        Latest <span className='text-[#00A79D]'>Lost & Found</span> Items
                        <motion.div
                            className='mt-3 h-1 w-full rounded-full bg-[#00A79D]'
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                            style={{ originX: 0 }}
                        />
                        </h1>

                        
                        </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                        transition: {
                            staggerChildren: 0.1,
                        },
                        },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 w-11/12 mx-auto"
                    >
                    {recentItems.map((item) => (
                        <motion.div
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
                    ))}
                    </motion.div>

                    <div className='flex items-center justify-center py-12'>
                    <motion.button
                            onClick={handleSeeAllButton}
                            initial={{ opacity: 0 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            whileInView={{ opacity: 1 }}
                            className='w-fit py-2 px-4 text-lg sm:text-2xl fontInter bg-[#00A79D] text-white hover:bg-[#00A79D80] mt-6 rounded-lg cursor-pointer drop-shadow-xl/30'>See All</motion.button>
                    </div>

            </div>

            <div>
                <HowItWorks></HowItWorks>
            </div>
            <div>
                <CommonlyLostAndFound></CommonlyLostAndFound>
            </div>
            <div>
                <PromotionalSection/>
            </div>
        </div>
    );
};

export default Home;