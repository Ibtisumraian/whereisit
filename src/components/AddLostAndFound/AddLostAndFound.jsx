import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from "framer-motion";
import useAuth from '../../hooks/useAuth';
import { FaWpforms } from 'react-icons/fa6';
import { registerLocale } from 'react-datepicker'
import enGB from 'date-fns/locale/en-GB'
import Swal from 'sweetalert2';
registerLocale('en-GB', enGB)

const AddLostAndFound = () => {
    const { user } = useAuth()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const formattedDate = selectedDate.toLocaleDateString('en-US');
    const currentDate = formattedDate.split('/')
    const [mm, dd, yy] = currentDate
    const splitDate = `${dd}/${mm}/${yy}` 

    
    useEffect(() => {
        document.title = "Add Lost & Found Item | WhereIsIt";
    }, []);
    
    const handleFormSubmitBtn = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const post = Object.fromEntries(formData.entries());
        post.date = splitDate
        post.user_name=user?.displayName
        post.email = user?.email
        post.recovered = false
        post.recent_date = selectedDate
        const title = post.title
        const location = post.location
        const searchInput = title + " " + location
        post.Search_input=searchInput
        
        fetch("https://lost-and-found-server-mu.vercel.app/items", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post),
            credentials: 'include' 
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: "error",
                    confirmButtonColor: "#00A79D",
                    title: "Oops...",
                    text: "Something went wrong, try again!",
                });
            }
            e.target.reset()
        })
    }
    return (
        <div className='p-3'>
            <div className='text-center  text-gray-500 mb-16'>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className='text-2xl sm:text-4xl font-bold fontInter'>Add Lost and Found Items</motion.h1>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 2, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className='w-fit  mx-auto bg-[#00A79D99]  p-5 sm:p-10 drop-shadow-xl/800 rounded-2xl  mb-16'>
                
                <div className='flex justify-center lg:flex-none   items-center'>
                    {/* <motion.div
                        animate={{
                            
                            y: [0, -5, 5, -5, 5, 0]
                        }} 
                        transition={{
                        repeat: Infinity, 
                        repeatDelay: 2,   
                        duration: 1     
                        }}
                        className='drop-shadow-xl/80 hidden lg:block'>
                        <img className='h-[500px] lg:h-[600px] w-full ' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1749632658/undraw_new-notifications_wvqc-removebg-preview_agginr.png" alt="" />
                    </motion.div> */}
                    <div
                        className="  h-[775px]"
                        >
                        <div className=""></div>
                        <div className="  text-center">
                            <div className="max-w-md">
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 2, y: 0 }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    className='bg-base-200 shadow rounded-3xl text-start p-6'>
                                    <form onSubmit={handleFormSubmitBtn}>
                                        {/* select type */}
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <fieldset className="fieldset w-[200px] sm:w-[250px] lg:w-[190px] xl:w-[250px]">
                                                    <legend className="fieldset-legend text-base">Post Type</legend>
                                                    <select required name='post_type' defaultValue="Post Type" className="select bg-[#00A79D] text-white rounded-2xl">
                                                        <option disabled={true}>Post Type</option>
                                                        <option className='hover:bg-[#00A79D]'>Lost</option>                                           
                                                        <option className='hover:bg-[#00A79D]'>Found</option>                                           
                                                    </select>
                                                </fieldset>
                                            </div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}    
                                                animate={{ opacity: 1, y: [0, 15, 0], x: [0, -30, 0] }}
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
                                                className='hidden sm:block sm:text-6xl xl:text-8xl text-[#00A79D] drop-shadow-xl/40'>
                                                <FaWpforms />
                                            </motion.div>
                                        </div>
                                        {/* Thumbnail (image url) */}
                                        <div>
                                            <h1 className='text-base font-semibold mb-2'>Thumbnail (Image URL)</h1>
                                            <label className="input validator rounded-2xl w-full">
                                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <g
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                    strokeWidth="2.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    >
                                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                                    </g>
                                                </svg>
                                                <input
                                                    className=''
                                                    name='thumbnail'
                                                    type="url"
                                                    required
                                                    placeholder="https://"
                                                    pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                                    title="Must be valid URL"
                                                />
                                                </label>
                                        </div>
                                        {/* Title */}
                                        <div>
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend text-base">Title</legend>
                                                <input required name='title' type="text" className="input rounded-2xl w-full" placeholder="TItle" />
                                            </fieldset>
                                        </div>
                                        {/* Description */}
                                        <div>
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend text-base">Description</legend>
                                                <textarea required name='description' className="textarea h-24 rounded-2xl w-full" placeholder="Description"></textarea>                                                
                                            </fieldset>
                                        </div>
                                        {/* Category */}
                                        <div>
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend text-base">Category</legend>
                                                <select required name='category' defaultValue="Select Category" className="select bg-[#00A79D] text-white rounded-2xl w-full">
                                                    <option disabled={true}>Select Category</option>
                                                    <option className='hover:bg-[#00A79D]'>Pets</option>                                           
                                                    <option className='hover:bg-[#00A79D]'>Documents</option>                                           
                                                    <option className='hover:bg-[#00A79D]'>Gadgets</option>                                           
                                                    <option className='hover:bg-[#00A79D]'>Bags</option>                                           
                                                    <option className='hover:bg-[#00A79D]'>Wallets</option>                                           
                                                    <option className='hover:bg-[#00A79D]'>Keys</option>                                           
                                                </select>
                                            </fieldset>
                                        </div>
                                        {/* location and date */}
                                        <div className='grid grid-cols-2 items-center justify-center gap-3'>
                                            <div>
                                                <fieldset className="fieldset">
                                                    <legend className="fieldset-legend text-base">Location</legend>
                                                    <input required name='location' type="text" className="input rounded-2xl" placeholder="Location" />
                                                </fieldset>
                                            </div>
                                            <div>
                                                <div>
                                                    <h1 className='text-base font-semibold mb-1.5'>Date</h1>
                                                </div>
                                                <DatePicker
                                                    className='border border-gray-300 rounded-2xl w-full bg-white'
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
                                            </div>
                                        </div>
                                        {/* Contact info */}
                                        <div >
                                            <h1 className='text-base font-semibold mb-2'>Contact</h1>
                                            <div className='py-2 px-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:flex sm:justify-between bg-white border border-gray-300 rounded-2xl'>
                                                <div>
                                                    <h1 className='font-semibold'>Name</h1>
                                                    <p>{ user?.displayName }</p>
                                                </div>
                                                <div>
                                                    <h1 className='font-semibold'>Email</h1>
                                                    <p>{ user?.email }</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Add button */}
                                        <div className='mt-3 '>
                                            <button className='btn text-lg py-6 bg-[#00A79D] text-white w-full rounded-2xl'>
                                                Add Post
                                            </button>
                                        </div>



                                    </form>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AddLostAndFound;