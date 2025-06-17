import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { PiBatteryWarningFill } from "react-icons/pi";
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { RiFindReplaceLine } from "react-icons/ri";
import { color, motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { FaMapLocationDot, FaSquare, FaTable } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';

const AllRecovered = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [layout, setLayout] = useState(false)
    const { user } = useAuth()
    console.log(items);

    useEffect(() => {
        document.title = "All Recovered Items | WhereIsIt";
    }, []);
    
    setTimeout(() => {
        setLoading(false)
    }, 3000);


    useEffect(() => {
        fetch(`https://lost-and-found-server-mu.vercel.app/recovered/${user.email}`, { credentials: 'include' })
        .then(res=>res.json()
            .then(data =>
                setItems(data),
            )
    )
    }, [user])
    

    return (
        <div>
            <div className='w-9/12 2xl:w-8/12 mx-auto mb-32'>
                <div className='text-center py-4 mt-20 mb-10 '>
                    {!loading && items?.length > 0 ? <h1 className='text-4xl font-bold fontInter text-gray-600'>All Recovered Items</h1> : ""}
                </div>

                {!loading ? <>{items?.length > 0 ?
                    <>
                        {layout ? 
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div><motion.h1
                                        animate={{
                                            color: ['#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350'],
                                            transition: {duration: 4, repeat: Infinity}
                                        }}
                                        className='block lg:hidden font-semibold'>Scroll Right to see</motion.h1></div>
                                    <div className='p-2 flex gap-2'>
                                        <button onClick={()=>setLayout(true)} className='w-fit text-[#00A79D] text-2xl cursor-pointer'> <FaTable /></button>
                                        <button onClick={()=>setLayout(false)} className='w-fit text-[#00A79D] text-2xl cursor-pointer'> <FaSquare /></button>
                                    </div>
                                </div>
                                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                        <table className="table rounded-2xl border-2 border-[#00A79D]">
                            {/* head */}
                            <thead className='bg-[#00A79D] text-white text-lg'>
                            <tr className=''>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Recovered Location</th>
                                <th>Recovered Date</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                                    {
                                    items?.map(item => {
                                        return <tr key={ item._id} className='border border-[#00A79D]'>  
                                            <td><img className='w-[80px] h-[70px] object-cover rounded-xl' src={ item?.recovered_item_data?.thumbnail} alt="" /></td>
                                            <td>{ item?.recovered_item_data?.title }</td>
                                            <td>{ item?.recoveredLocation }</td>
                                            <td>{ item?.recovered_date }</td>
                                            <td><IoCheckmarkDoneCircleOutline className='text-3xl text-[#00A79D]' /></td>
                                        </tr>
                                    })
                                }

                                

                            </tbody>
                        </table>
                                </div>
                            </div>

                            :
                <div>
                    <div className='flex justify-between items-center'>
                    <div></div>
                    <div className='p-2 flex gap-2'>
                        <button onClick={()=>setLayout(true)} className='w-fit text-[#00A79D] text-2xl cursor-pointer'> <FaTable /></button>
                        <button onClick={()=>setLayout(false)} className='w-fit text-[#00A79D] text-2xl cursor-pointer'> <FaSquare /></button>
                    </div>
                </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {items.map(item => {
                  return  <motion.div
                                                key={item._id}
                                                whileHover={{
                                                    scale: [null, 1.02, 1.05],
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
                                                <div key={item._id} className=" rounded-xl rounded-br-full h-full bg-base-200  border border-gray-200 p-6">
                                        <div className=''>
                                            <div className="relative">
                                            <img
                                            src={ item?.recovered_item_data?.thumbnail }
                                            alt="Cloudinary server down"
                                            className="w-[200px] h-30 object-cover rounded-xl"
                                            />                                          
                                        </div>
                    
                                        <div className=" space-y-2 my-2">
                                            <h2 className="text-lg font-semibold">{ item.title }</h2>
                                            <p className="text-gray-600 text-sm max-w-[300px]">{ item.description }</p>
                                            <p className="text-gray-500 text-sm flex items-center gap-2"> { item?.recovered_item_data?.title }</p>
                                            <p className="text-gray-500 text-sm flex items-center gap-2"> { item?.recoveredLocation }</p>
                                            <p className="text-gray-400 text-xs flex items-center gap-2"><MdDateRange className='text-[#00A79D] text-sm'/> { item?.recovered_date }</p>
                                            {/* { item.recovered && <h1>Recovered</h1>} */}
                                            <div className='flex flex-col justify-self-end'>
                                            <motion.button 
 
                                            initial={{ opacity: 0 }}
                                            // whileHover={{ scale: 1.2 }}
                                            // whileTap={{ scale: 0.8 }}
                                            whileInView={{ opacity: 1 }}
                                            className="mt-2 w-fit cursor-pointer  bg-base-200 text-[#00A79D] text-sm font-medium py-2 px-4 rounded-xl ">
                                            <IoCheckmarkDoneCircleOutline className='text-3xl text-[#00A79D]' />
                                            </motion.button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                            </motion.div>
                })}
                </div>
                </div>}
                        
                    </>
                    
                    
                    :
                    
                    <div> <div className='w-fit mx-auto drop-shadow-xl/40 text-center bg-gradient-to-t from-[#00A79D] to-[#00A79D20] rounded-4xl p-8'>
                    <div className='text-9xl text-gray-600 flex justify-center'>
                        <PiBatteryWarningFill className='drop-shadow-xl/30' />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-2xl text-gray-600 font-semibold'>No recovered items found !!</h1>
                        <h1 className='text-3xl font-bold fontInter text-gray-600'>None of your posted items has been <br /> recovered yet !</h1>
                    </div>
                </div></div>}</> : <div className='text-5xl text-gray-600 font-bold flex flex-col items-center justify-center text-center gap-6'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}    
                            animate={{ opacity: 1, y: [0, -40, 0], x: [0, -40, 0] }}
                            transition={{
                                opacity: { duration: 1 },
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                x: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                                }}
                            className=' '>
                            <RiFindReplaceLine className=' text-7xl drop-shadow-xl/40 text-[#00A79D]'/>
                        </motion.div>
                        <h1>Finding Recovered Items</h1>
                </div>}
                
                


            </div>
        </div>
    );
};

export default AllRecovered;