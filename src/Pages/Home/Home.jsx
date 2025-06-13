import React from 'react';
import Banner from '../../components/Banner/Banner';
import { FaCalendarDays } from 'react-icons/fa6';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import CommonlyLostAndFound from '../../components/CommonlyLostAndFound/CommonlyLostAndFound';
import useAuth from '../../hooks/useAuth';
import { useLoaderData } from 'react-router';

const Home = () => {
    const recentItems = useLoaderData()
    const { user } = useAuth()
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
                            return <div key={item._id} className='bg-gray-50 shadow-md '>
                    <div className='flex justify-center items-center rounded-lg'>
                                    <img className='w-full h-[300px] rounded-t-lg' src={ item.thumbnail } alt="" />
                    </div>
                        <div className='flex flex-col gap-4 p-6'>
                            {/* <h5 className='bg-[#00A79D20] py-1 px-3 w-fit rounded-xl text-[#00A79D]'>Lost</h5> */}
                            <h1 className='fontInter font-bold text-base'>{ item.title }</h1>
                            <p>{ item.description }</p>
                            <h2 className='flex items-center gap-3'> <FaCalendarDays className='text-[#00A79D]' /> { item.date }</h2>
                            <button className='btn w-fit bg-[#00A79D] text-base text-white hover:bg-[#00A79D80]'>View Details</button>
                    </div>
                    </div>
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