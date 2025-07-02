import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaBoxOpen, FaCheckCircle, FaClock } from 'react-icons/fa';
import { MdOutlinePets, MdCategory } from 'react-icons/md';
import { motion } from 'framer-motion';
import useAuth from '../../hooks/useAuth';

const DashboardOverview = () => {
  const { user } = useAuth();
  const [allItems, setAllItems] = useState([]);
  const [recoveredItems, setRecoveredItems] = useState([]);

  // Fetch user's posted items
  useEffect(() => {
    fetch('https://lost-and-found-server-mu.vercel.app/items')
      .then(res => res.json())
      .then(data => {
        const userItems = data.filter(item => item.email === user?.email);
        setAllItems(userItems);
      })
      .catch(err => console.error('Error fetching all items:', err));
  }, [user]);

  // Fetch user's recovered items
  useEffect(() => {
    if (user?.email) {
      fetch(`https://lost-and-found-server-mu.vercel.app/recovered/${user.email}`, {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => setRecoveredItems(data))
        .catch(err => console.error('Error fetching recovered items:', err));
    }
  }, [user]);

  // Core Stats
  const totalItems = allItems.length;
  const totalRecovered = recoveredItems.length;
  const totalLost = allItems.filter(item => item.post_type === 'Lost').length;
  const totalFound = allItems.filter(item => item.post_type === 'Found').length;
  const unrecoveredCount = allItems.filter(item => !item.recovered).length;

  const recoveredPercent =
    totalItems > 0 ? Math.round((totalRecovered / totalItems) * 100) : 0;

  const uniqueCategories = [...new Set(allItems.map(item => item.category))];
  const lastPostedDate = allItems
    .map(item => new Date(item.recent_date))
    .sort((a, b) => b - a)[0];

  const lastRecoveredDate = recoveredItems
    .map(item => new Date(item.recovered_item_data?.recent_recovered_date))
    .sort((a, b) => b - a)[0];

  return (
      <section className="p-6 space-y-10">
          <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold fontRokkitt">
          Welcome back,{' '}
          <span className="text-[#56c9c1]">
            {user?.displayName || 'User'}
          </span>
          !
        </h1>
        <p className="text-sm sm:text-lg text-gray-400 mt-2">Here's a quick overview of your activity</p>
      </div>
      {/* Header */}
      <div className="text-3xl font-bold text-[#00A79D]">Dashboard Overview</div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <FaBoxOpen className="text-3xl text-[#00A79D] mb-2" />
          <h3 className="text-xl font-semibold">Total Items</h3>
          <p className="text-3xl font-bold">{totalItems}</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <MdOutlinePets className="text-3xl text-[#00A79D] mb-2" />
          <h3 className="text-xl font-semibold">Lost Items</h3>
          <p className="text-3xl font-bold">{totalLost}</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <FaMapMarkerAlt className="text-3xl text-[#00A79D] mb-2" />
          <h3 className="text-xl font-semibold">Found Items</h3>
          <p className="text-3xl font-bold">{totalFound}</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <FaCheckCircle className="text-3xl text-[#00A79D] mb-2" />
          <h3 className="text-xl font-semibold">Recovered Items</h3>
          <p className="text-3xl font-bold">{totalRecovered}</p>
        </motion.div>
      </div>

      {/* Extended Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#E6FCFA] p-5 rounded-xl shadow">
          <h4 className="text-md text-gray-600 font-medium">Recovery Rate</h4>
          <p className="text-2xl font-bold text-[#00A79D]">{recoveredPercent}%</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#FDF6E3] p-5 rounded-xl shadow">
          <h4 className="text-md text-gray-600 font-medium">Unrecovered Items</h4>
          <p className="text-2xl font-bold text-yellow-700">{unrecoveredCount}</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#F3F4F6] p-5 rounded-xl shadow">
          <div className="flex items-center gap-2 text-gray-600">
            <MdCategory />
            <span className="text-md font-medium">Categories Posted</span>
          </div>
          <p className="text-2xl font-bold text-gray-700">{uniqueCategories.length}</p>
        </motion.div>

        {lastPostedDate && (
          <motion.div whileHover={{ scale: 1.03 }} className="bg-[#ECFDF5] p-5 rounded-xl shadow">
            <div className="flex items-center gap-2 text-gray-600">
              <FaClock />
              <span className="text-md font-medium">Last Reported</span>
            </div>
            <p className="text-lg font-semibold text-[#065F46]">
              {lastPostedDate.toLocaleDateString()}
            </p>
          </motion.div>
        )}

        {lastRecoveredDate && (
          <motion.div whileHover={{ scale: 1.03 }} className="bg-[#FEF2F2] p-5 rounded-xl shadow">
            <div className="flex items-center gap-2 text-gray-600">
              <FaClock />
              <span className="text-md font-medium">Last Recovered</span>
            </div>
            <p className="text-lg font-semibold text-[#991B1B]">
              {lastRecoveredDate.toLocaleDateString()}
            </p>
          </motion.div>
        )}
      </div>

      {/* Recent Recovered Items Table */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#00A79D] mb-4">Recent Recovered Items</h2>
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="bg-[#00A79D] text-white">
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Recovered Date</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">User</th>
              </tr>
            </thead>
            <tbody>
              {recoveredItems.length > 0 ? (
                recoveredItems.slice(0, 5).map(({ recovered_item_data }, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-3">{recovered_item_data?.title}</td>
                    <td className="p-3">{recovered_item_data?.recovered_date}</td>
                    <td className="p-3">{recovered_item_data?.recoveredLocation}</td>
                    <td className="p-3">{recovered_item_data?.user_name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No recovered items to display.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
