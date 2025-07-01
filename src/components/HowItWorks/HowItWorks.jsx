import React from 'react';
import { FaHandshake } from 'react-icons/fa6';
import { IoMdMegaphone } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const HowItWorks = () => {
  return (
    <div className='bg-[#00A79D12] mt-32 pb-16 text-gray-600'>
      <div className='text-center text-2xl sm:text-4xl font-semibold fontInter pb-12 pt-32 text-[#333]'>
        <h1 className='inline-block  pb-2'>
          How <span className="text-[#00A79D]">WhereIsIt</span> Works?
          <motion.div
                className='mt-3 h-1 w-full rounded-full bg-[#00A79D]'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                style={{ originX: 0 }}
            />
        </h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12  mx-auto'>
        {[{
          icon: <IoMdMegaphone />,
          title: '1. Report an Item',
          description: 'Quickly post details about a lost or found item. Add photos, descriptions, and location to help others identify it.'
        },
        {
          icon: <IoSearch />,
          title: '2. Search Listings',
          description: 'Browse through items reported by our community. Use filters for location, category, and date to narrow your search.'
        },
        {
          icon: <FaHandshake />,
          title: '3. Connect & Recover',
          description: 'Contact the poster securely through our platform to arrange the return of the item. Get your belongings back!'
        }].map((step, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className='bg-white p-8 rounded-2xl flex flex-col gap-5 shadow-xl hover:shadow-2xl transition duration-300'
          >
            <div className='text-7xl sm:text-8xl text-[#00A79D] flex justify-center drop-shadow-md'>
              {step.icon}
            </div>
            <div className='text-center sm:text-left'>
              <h2 className='font-bold text-lg sm:text-xl text-gray-800'>{step.title}</h2>
              <p className='text-sm sm:text-base mt-2 text-gray-600 leading-relaxed'>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
