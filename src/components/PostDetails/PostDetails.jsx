import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { GoInfo } from "react-icons/go";
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const item = useLoaderData()
    console.log(item);
    
    return (
        <div>
            <div className='max-w-7/12 mx-auto mb-32'>
                <div className='bg-white drop-shadow-xl/50 rounded-xl'>
                    <div>
                        
                        <div className="relative rounded-t-xl overflow-hidden shadow-lg">
                            <img
                                src={ item.thumbnail }
                                alt="Lost Dog"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute"></div>
                            <div className="absolute bottom-0 p-5 text-white z-10">
                                <p className={`w-fit text-sm mt-1 mb-3 py-2 px-4 rounded-xl ${ item?.post_type === "Lost" ? "bg-red-400" : "bg-[#00A79D80]"}`}> { item.post_type }</p>
                                <h2 className="text-xl font-bold">{ item.title }</h2>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 grid grid-cols-3 gap-8'>
                        <div className='flex flex-col justify-between gap-3 col-span-2'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-bold text-2xl'>{item.description}</h1>
                                <div className='p-[1px] bg-[#00A79D]'></div>
                                <p className=''>Friendly golden retriever named Max. Last seen near Central Park entrance.</p>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <div>
                                    <h1 className='w-fit py-1 px-3 bg-amber-100 rounded-xl text-sm flex items-center gap-3 '><GoInfo className='text-xl text-[#00A79D]' /> We're here to help people to reunite with their belongings !</h1>
                                </div>
                                {item?.post_type === "Lost" ? <button className='w-fit py-2 px-4 bg-[#00A79D] text-white rounded-lg cursor-pointer'>Found This !</button> : <button className='w-fit py-2 px-4 bg-[#00A79D] text-white rounded-lg cursor-pointer'>This is Mine !</button> }
                                
                                
                            </div>
                        </div>
                        <div>
                            <div className="bg-base-200 rounded-xl shadow p-6 w-80 space-y-4">
                                <h2 className="text-xl font-semibold">Details</h2>
                                <div>
                                    <span className="font-medium">Category:</span>
                                    <span className="ml-1 text-gray-700">{ item.category }</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaMapMarkerAlt className="text-teal-500" />
                                    <div>
                                    <span className="font-medium">Location:</span><br />
                                    { item.location }
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaCalendarAlt className="text-teal-500" />
                                    <div>
                                    <span className="font-medium">Date Posted:</span><br /> 
                                    { item.date }
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaUser className="text-teal-500" />
                                    <div>
                                    <span className="font-medium">Posted By:</span><br />
                                    { item.user_name } <br />
                                    { item.email }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;