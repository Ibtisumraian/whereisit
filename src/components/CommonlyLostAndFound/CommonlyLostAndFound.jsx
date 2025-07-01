import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { FaBriefcase, FaKey, FaWallet } from 'react-icons/fa6';
import { MdOutlinePets } from 'react-icons/md';
import { motion } from 'framer-motion';

const items = [
  { icon: <FaMobileAlt />, label: 'Electronics' },
  { icon: <FaKey />, label: 'Keys' },
  { icon: <MdOutlinePets />, label: 'Pets' },
  { icon: <FaWallet />, label: 'Wallets' },
  { icon: <FaBriefcase />, label: 'Bags' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const CommonlyLostAndFound = () => {
  return (
    <div className='pb-32 text-gray-700 bg-[#f7f9fa]'>
      <div className='text-center text-2xl sm:text-4xl font-semibold fontInter pb-12 pt-32 text-[#333]'>
        <h1 className='inline-block  pb-2'>
          Commonly <span className="text-[#00A79D]">Lost & Found</span>
          <motion.div
             className='mt-3 h-1 w-full rounded-full bg-[#00A79D]'
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
             style={{ originX: 0 }}
         />
        </h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-11/12  mx-auto'>
        {items.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className='bg-white p-8 rounded-2xl flex flex-col justify-center items-center gap-6 shadow-lg hover:shadow-2xl transition duration-300'
          >
            <div className='text-6xl xl:text-7xl text-[#00A79D] drop-shadow'>
              {item.icon}
            </div>
            <h1 className='text-lg fontInter font-bold text-gray-800'>
              {item.label}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommonlyLostAndFound;
