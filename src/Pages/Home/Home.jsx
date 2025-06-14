import React from 'react';
import Banner from '../../components/Banner/Banner';
import { FaCalendarDays, FaMapLocationDot } from 'react-icons/fa6';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import CommonlyLostAndFound from '../../components/CommonlyLostAndFound/CommonlyLostAndFound';
import useAuth from '../../hooks/useAuth';
import { useLoaderData, useNavigate } from 'react-router';
import { motion } from "framer-motion";
import { MdDateRange } from 'react-icons/md';

const Home = () => {
    const recentItems = useLoaderData()
    const { user } = useAuth()
    const navigate = useNavigate()
    const handleViewDetailsButton = (id) => {
       return navigate(`/item/${id}`)
    }
    console.log(user, recentItems);
    return (
        <div>
            <Banner></Banner>
            <div>
                    <div className='flex items-center justify-center mb-16 mt-32'>
                        <h1 className='text-5xl font-bold fontInter text-gray-600'>Latest Lost & Found Items</h1>
                    </div>
                <div className='grid grid-cols-3 gap-6 w-9/12 mx-auto'>
                    

                    {
                        recentItems.map(item => {
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
                            <div key={item._id} className=" rounded-xl h-full rounded-br-full bg-white border border-gray-200 p-6">
                    <div className=''>
                        <div className="relative">
                        <img
                        src={ item.thumbnail }
                        alt="Cloudinary server down"
                        className="w-[350px] h-48 object-cover rounded-xl"
                        />
                    </div>

                    <div className=" space-y-2 my-2">
                        <h2 className="text-lg font-semibold">{ item.title }</h2>
                        <p className="text-gray-600 text-sm max-w-[300px]">{ item.description }</p>
                        <p className="text-gray-400 text-xs flex items-center gap-2"><MdDateRange className='text-[#00A79D] text-sm'/> { item.date }</p>
                        <div className='flex justify-between items-baseline-last drop-shadow-xl/40'>
                        <div></div>
                        <motion.button 
                        initial={{ opacity: 0 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        whileInView={{ opacity: 1 }}
                        onClick={()=>handleViewDetailsButton(item._id)}
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

            <HowItWorks></HowItWorks>
            <CommonlyLostAndFound></CommonlyLostAndFound>
        </div>
    );
};

export default Home;