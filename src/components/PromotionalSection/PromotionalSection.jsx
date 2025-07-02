import React from 'react';
import { motion } from 'framer-motion';

const PromotionalSection = () => {
  return (
    <section className='bg-[#00A79D12] py-20 px-4 '>
      <div className=' w-11/12 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20'>
        
        {/* Left Text Content */}
        <motion.div
          className='flex-1 max-w-lg sm:max-w-xl lg:max-w-none text-center lg:text-left'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold fontInter text-gray-800 mb-6'>
            Why Choose <span className='text-[#00A79D]'>WhereIsIt?</span>
          </h2>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8'>
            Every day, people lose valuable items — from electronics to pets. <strong>WhereIsIt</strong> empowers you to act quickly:
            report, search, and reconnect with your lost belongings using a simple and secure platform.
          </p>
          <button className='btn bg-[#00A79D] hover:bg-[#008a7f] text-white px-6 py-3 rounded-xl shadow-md transition mx-auto lg:mx-0'>
            Get Started Now
          </button>
        </motion.div>

        {/* Right Supporting Text */}
        <motion.div
          className='flex-1 max-w-lg sm:max-w-xl lg:max-w-none text-center lg:text-left text-gray-600 space-y-5 sm:space-y-6'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className='text-lg sm:text-xl md:text-2xl font-semibold fontInter text-[#00A79D]'>
            What Makes Us Unique?
          </h3>
          <ul className='list-disc pl-5 sm:pl-6 text-xs sm:text-sm md:text-base leading-relaxed'>
            <li>Community-driven platform — real people helping real people.</li>
            <li>Smart filters for categories, locations, and dates.</li>
            <li>Fast item reporting with photos and details.</li>
            <li>Safe communication through secure in-app messaging.</li>
            <li>Trustworthy and verified posts reduce scams and confusion.</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default PromotionalSection;
