import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { PiBatteryWarningFill } from "react-icons/pi";
import { RiFindReplaceLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const ManageMyItems = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    const navigate = useNavigate()


    useEffect(() => {
        document.title = "Manage My Items | WhereIsIt";
    }, []);
    
    setTimeout(() => {
        setLoading(false)
    }, 3000);


    useEffect(() => {
        fetch(`https://lost-and-found-server-mu.vercel.app/user/${user.email}`, {
            credentials: 'include'
        })
        .then(res=>res.json()
            .then(data =>
                setItems(data),
            )
    )
    }, [user])
    
    const handleItemDeleteButton = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#00A79D",
            cancelButtonColor: "#EF5350",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                

                        fetch(`https://lost-and-found-server-mu.vercel.app/delete/${id}`, {
                            method: "DELETE",
                            credentials: 'include'
                    })
                    .then(res=>res.json()
                    .then(data =>{
                        if (data.deletedCount) {
                            Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                            });

                            setItems(prevItems => prevItems.filter(item => item._id !== id));
                        }
                    })
                )
                }
                
        });
    }


    return (
        <div>
                <div className='text-center p-2 py-4 mt-20 mb-10 '>
                    {!loading && items?.length > 0 ? <h1 className='text-2xl sm:text-4xl font-bold fontInter text-gray-600'>Manage My Items</h1> : ""}
                </div>
            <div className='w-10/12 mx-auto mb-32'>
                
                
                {!loading ? <>{items?.length > 0 ?
                    <div>
                        <motion.h1
                    animate={{
                        color: ['#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350', '#00A79D', '#EF5350'],
                        transition: {duration: 4, repeat: Infinity}
                    }}
                            className='block lg:hidden font-semibold py-2'>Scroll Right to see</motion.h1>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">                   
                        <table className="table rounded-2xl border-2 border-[#00A79D]">
                            {/* head */}
                            <thead className='bg-[#00A79D] text-white text-lg'>
                            <tr className=''>
                                <th>Image</th>
                                <th>Post Type</th>
                                <th>Posted By</th>
                                <th>Status</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            
                                {/* {items ? "" : <> */}
                                    {
                                    items?.map(item => {
                                        return <tr key={ item._id} className='border border-[#00A79D]'>  
                                            <td><img className='w-[80px] h-[70px] object-cover rounded-xl' src={ item?.thumbnail} alt="" /></td>
                                            <td>{ item?.post_type }</td>
                                            <td>{item?.user_name}</td>
                                            {item?.recovered ? <td className='text-[#00A79D]'> Recovered </td> : <td className='text-red-400'> Not Recovered </td> }                                      
                                            <td><MdOutlineEdit onClick={()=>navigate(`/Dashboard/UpdatePost/${item._id}`)} className='text-4xl rounded-xl text-white bg-[#00A79D] p-2 cursor-pointer' /></td>
                                            <td><MdDeleteOutline onClick={()=>handleItemDeleteButton(item._id)}  className='text-4xl rounded-xl text-white bg-red-400 p-2 cursor-pointer' /></td>
                                        </tr>
                                    })
                                }
                                {/* </>} */}
                                

                            </tbody>
                        </table>
                        </div>
                    </div>
                    :
                    <div> <div className='w-fit mx-auto drop-shadow-xl/40 text-center bg-gradient-to-t from-[#00A79D] to-[#00A79D20] rounded-2xl sm:rounded-4xl p-3 sm:p-8'>
                    <div className='text-6xl sm:text-8xl md:text-9xl text-gray-600 flex justify-center'>
                        <PiBatteryWarningFill className='drop-shadow-xl/30' />
                    </div>
                    <div className='space-y-3'>
                        <h1 className=' md:text-2xl text-gray-600 font-semibold'>No recovered items found !!</h1>
                        <h1 className=' md:text-3xl font-bold fontInter text-gray-600'>Looks like you have not posted any <br /> items yet !</h1>
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

export default ManageMyItems;