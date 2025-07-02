import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `${name}, your message has been sent successfully!`,
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      background: '#fff',
      customClass: {
        popup: 'shadow-lg rounded-xl',
      },
    });

    console.log({ name, email, message });
    e.target.reset();
  };

  return (
    <section className="relative bg-white py-28 px-6 lg:px-24 overflow-hidden">
      {/* Decorative brand-colored line */}
      <div className="absolute top-0 left-0 w-2 h-full bg-[#00A79D] rounded-tr-full rounded-br-full opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            Whether you’ve found something or lost something, we’re here to help. Reach out with any queries or stories — we're listening.
          </p>

          <div className="space-y-4 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#00A79D]" />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#00A79D]" />
              <span>support@whereisit.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#00A79D]" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/80 border border-gray-200 shadow-xl rounded-3xl p-10 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Send Us a Message</h3>

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A79D]"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00A79D]">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A79D]"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00A79D]">
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="5"
              required
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 border border-gray-300 bg-transparent rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#00A79D]"
            ></textarea>
            <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00A79D]">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#00A79D] hover:bg-[#009088] cursor-pointer text-white font-semibold py-3 rounded-full shadow-lg transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
