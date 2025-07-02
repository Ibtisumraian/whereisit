import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const NewsletterSection = () => {
  // const [showModal, setShowModal] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setShowModal(true);
  // };

  const handleSubmit = (e) => {
    // setShowModal(false);
    e.preventDefault();
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `Subscribed to the plan successfully!`,
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      background: 'rgba(255, 255, 255,)',
    //   backdrop: 'blur(50px)',
      // timerProgressBar: true,
      // toast: true,
      customClass: {
        popup: 'shadow-lg rounded-xl',
      }
    });
  };

  return (
    <section className='bg-[#00A79D12] py-20 px-4 sm:px-8 md:px-16 lg:px-24 relative z-0'>
      <motion.div
        className='w-full max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-10 shadow-xl text-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold fontInter text-gray-800 mb-4'>
          Stay Updated With <span className='text-[#00A79D]'>WhereIsIt</span>
        </h2>
        <p className='text-gray-600 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto'>
          Subscribe to our newsletter to receive the latest lost & found updates, tips, and stories. We promise—no spam, just helpful info.
        </p>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col sm:flex-row justify-center items-center gap-4 max-w-3xl mx-auto'
        >
          <input
            type='email'
            placeholder='Enter your email'
            className='input input-bordered w-full sm:w-2/3 px-4 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#00A79D]'
            required
          />
          <button
            type='submit'
            className='btn bg-[#00A79D] hover:bg-[#008a7f] text-white px-6 py-3 rounded-xl shadow-md transition w-full sm:w-auto'
          >
            Subscribe
          </button>
        </form>
      </motion.div>

      {/* Modal */}
      {/* {showModal && (
        <div className='fixed inset-0 bg-opacity-50 backdrop-blur-2xl flex justify-center items-center px-4 z-50'>
          <motion.div
            className='bg-white p-6 sm:p-8 rounded-xl max-w-md w-full shadow-xl text-center space-y-6'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className='text-xl font-bold text-gray-800'>Choose a Subscription Plan</h3>
            <p className='text-sm text-gray-600'>Select the plan that fits your needs:</p>
            <div className='flex flex-col gap-3'>
              <button
                onClick={() => handlePlanSelect('Basic')}
                className='btn bg-[#00A79D] text-white hover:bg-[#008a7f] w-full rounded-lg py-3 transition'
              >
                Basic Plan (Free)
              </button>
              <button
                onClick={() => handlePlanSelect('Premium')}
                className='btn bg-gray-800 text-white hover:bg-gray-700 w-full rounded-lg py-3 transition'
              >
                Premium Plan (Monthly)
              </button>
              <button
                onClick={() => setShowModal(false)}
                className='text-sm text-gray-500 underline hover:text-gray-700 mt-2'
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )} */}
    </section>
  );
};

export default NewsletterSection;
