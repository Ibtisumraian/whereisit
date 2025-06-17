import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { GoInfo } from "react-icons/go";
import { useLoaderData } from 'react-router';
import { motion } from "framer-motion";
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker'
import enGB from 'date-fns/locale/en-GB'
import useAuth from '../../hooks/useAuth';
import { SiAlchemy } from "react-icons/si";
import Swal from 'sweetalert2';
registerLocale('en-GB', enGB)


const PostDetails = () => {
    const { user } = useAuth()
    const item = useLoaderData()
    const [ modal, setModal ] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const formattedDate = selectedDate.toLocaleDateString('en-US');
    const currentDate = formattedDate.split('/')
    const [mm, dd, yy] = currentDate
    const splitDate = `${dd}/${mm}/${yy}` 
    // console.log(selectedDate, splitDate);
    // console.log(item);

    useEffect(() => {
        document.title = "Post Details | WhereIsIt";
    }, []);
    
    const handleRecoveredFormSubmit = (e) => {
        e.preventDefault()
        if (item.recovered) {
            Swal.fire({
                icon: "error",
                confirmButtonColor: "#00A79D",
                text: "This has already been recovered!",
            });
            return setModal(false)
        }
        const recoveredLocation = e.target.recovered_location.value
        item.recovered = true
        const recoveredData = {
            recovered_item_data: item,
            recovered_date: splitDate,
            recoveredLocation,
            recent_recovered_date: selectedDate,
            recovered_mail: user.email
        }


        console.log("Recovered Data Submitted", recoveredData);
        const pId = {
            id: item._id,
        }
        fetch('https://lost-and-found-server-mu.vercel.app/items', {
                method: 'PATCH',
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify(pId),
                credentials: 'include'
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            if (data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Recovered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                fetch("https://lost-and-found-server-mu.vercel.app/recovered", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(recoveredData)
                }).then(res => res.json())
                    .then(data => {
                    console.log('data after post', data);
                    
                })
                    
                setModal(false)
                e.target.reset()
            }
            
        })

        // fetch("https://lost-and-found-server-mu.vercel.app/recovered", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(recoveredData)
        // })
        // .then(res=>res.json())
        // .then(data=>{
            
        //     // console.log("response after post", data);
        // const pId = {
        //     id: item._id,
        // }
        //     if (data.insertedId) {
        //         fetch('https://lost-and-found-server-mu.vercel.app/items', {
        //         method: 'PATCH',
        //         headers: {
        //             "content-type":"application/json"
        //         },
        //         body: JSON.stringify(pId)
        // })
        // .then(res=>res.json())
        // .then((data)=>{
        //     console.log(data);
        //     if (data.modifiedCount) {
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Recovered Successfully",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //         setModal(false)
        //         e.target.reset()
        //     }
            
        // })
        //     }

            
        // })
        
    }
    
    return (
        <div>
            <div className='w-11/12 sm:w-9/12 lg:w-7/12 mx-auto mb-32'>
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
                    <div className='p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                        <div className='flex flex-col justify-between gap-3 xl:col-span-2'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-bold text-2xl'>Description</h1>
                                <div className='p-[1px] bg-[#00A79D]'></div>
                                <p className=''>{item.description}</p>
                            </div>
                            <div className='flex flex-col gap-16'>
                                <div>
                                    <h1 className='w-fit py-1 px-3 bg-amber-100 rounded-xl text-sm flex items-center gap-3 '><GoInfo className='text-xl text-[#00A79D]' /> We're here to help people to reunite with their belongings !</h1>
                                </div>
                                <div className='hidden lg:block'>

                                {item?.post_type === "Lost" ? <motion.button
                                    onClick={()=>setModal(true)}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    whileInView={{ opacity: 1 }}
                                    className='w-fit py-2 px-4 bg-[#00A79D] text-white hover:bg-[#00A79D80] rounded-lg cursor-pointer'>Found This !</motion.button> : <motion.button
                                        onClick={()=>setModal(true)}
                                        initial={{ opacity: 0 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        whileInView={{ opacity: 1 }}
                                        className='w-fit py-2 px-4 bg-[#00A79D] text-white hover:bg-[#00A79D80] rounded-lg cursor-pointer'>This is Mine !</motion.button>}
                                
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <div className="bg-base-200 rounded-xl shadow p-6  space-y-4 ">
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
                            <div className='w-full pt-8 block lg:hidden'>

                                {item?.post_type === "Lost" ? <motion.button
                                    onClick={()=>setModal(true)}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    whileInView={{ opacity: 1 }}
                                    className='w-full py-2 px-4 bg-[#00A79D] text-white hover:bg-[#00A79D80] rounded-lg cursor-pointer'>Found This !</motion.button> : <motion.button
                                        onClick={()=>setModal(true)}
                                        initial={{ opacity: 0 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        whileInView={{ opacity: 1 }}
                                        className='w-full py-2 px-4 bg-[#00A79D] text-white hover:bg-[#00A79D80] rounded-lg cursor-pointer'>This is Mine !</motion.button>}
                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        {modal && <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="  w-full max-h-screen ">
           <div>
            <div className={`w-fit  mx-auto rounded-2xl p-6  `}>
                <div className='text-center py-8'>
                    <h1 className='text-3xl sm:text-5xl font-semibold text-white'>
                    </h1>
                </div>
                    <div className=' bg-white p-8 rounded-2xl drop-shadow-xl/40'>
                 <form onSubmit={handleRecoveredFormSubmit} >
                        <div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-base">Recovered location</legend>
                                <input name='recovered_location' type="text" className="input rounded-2xl" placeholder="Type here" required />
                            </fieldset>
                        </div>
                        <div>
                            <div>
                                <h1 className='text-md font-semibold my-2'>Recovered Date</h1>
                            </div>
                            
                            <div className='flex justify-between items-center'>
                                <DatePicker
                                className='border border-gray-300 rounded-2xl w-[180px] sm:w-[250px] bg-white'
                                showIcon
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yy"
                                locale="en-GB" 
                                icon={
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    className='text-[#00A79D]'
                                    >
                                    <mask id="ipSApplication0">
                                        <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                                        <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                                        <path
                                            fill="#fff"
                                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                        ></path>
                                        </g>
                                    </mask>
                                    <path
                                        fill="currentColor"
                                        d="M0 0h48v48H0z"
                                        mask="url(#ipSApplication0)"
                                    ></path>
                                    </svg>
                                    }
                                    />
                                    <motion.div 
                                                initial={{ opacity: 0, y: 50 }}    
                                                animate={{ opacity: 1, y: [0, 10, 0], x: [0, 15, 0] }}
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
                                    >
                                        <SiAlchemy className='text-5xl sm:text-6xl text-[#00A79D] drop-shadow-xl/20' />
                                    </motion.div>
                                        
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className='text-base font-semibold my-2'>Contact</h1>
                                <div className='py-2 px-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:flex sm:justify-between bg-white border border-gray-300 rounded-2xl'>
                                    <div>
                                        <h1 className='font-semibold'>Name</h1>
                                        <p>{ user.displayName}</p>
                                    </div>
                                    <div>
                                        <h1 className='font-semibold'>Email</h1>
                                        <p>{ user.email }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>

                                    
                            {item?.post_type === "Lost" ? <motion.button
                                    // onClick={()=>setModal(false)}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.8 }}
                                    whileInView={{ opacity: 1 }}
                                    className='w-full py-2 px-4 bg-[#00A79D] text-white hover:bg-[#00A79D80] mt-6 rounded-lg cursor-pointer'>Found This !</motion.button> : <motion.button
                                        // onClick={()=>setModal(false)}
                                        initial={{ opacity: 0 }}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.8 }}
                                        whileInView={{ opacity: 1 }}
                                        className='w-full py-2 px-4 bg-[#00A79D] text-white hover:bg-[#00A79D80] mt-6 rounded-lg cursor-pointer'>This is Mine !</motion.button>}
                        </div>
                        
                            </form>  
                            <div>
                                <motion.button
                                    onClick={()=>setModal(false)}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.8 }}
                                    whileInView={{ opacity: 1 }}
                                    className='w-full py-2 px-4 bg-red-400 text-white hover:bg-red-300 mt-6 rounded-lg cursor-pointer'>Cancel</motion.button>
                            </div>                
                    </div>                  
            </div>
        </div>
          </div>
        </div>}
        </div>
    );
};

export default PostDetails;