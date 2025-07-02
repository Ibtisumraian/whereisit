import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { motion } from 'framer-motion';
import useAuth from '../../hooks/useAuth';
import { auth } from '../firebase/firebase.init';

const UserProfile = () => {
  const { user } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setMessage('');

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      setMessage('✅ Profile updated successfully!');
      setEditMode(false);
    } catch (error) {
      setMessage(`❌ Update failed: ${error.message}`);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <section
      className={`p-6 min-h-screen bg-[#F6F4F1] text-gray-800 `}
    >
      <div className="max-w-3xl mx-auto bg-white  shadow-lg p-8 rounded-2xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-[#00A79D] mb-8"
        >
          Your Profile
        </motion.h2>

        <div className="flex flex-col items-center mb-10">
          <img
            src={user?.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}
            alt="User Avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-[#00A79D]"
          />
          <h3 className="mt-4 text-xl font-semibold">{user?.displayName || 'No Name'}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
        </div>

        {editMode ? (
          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Display Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Photo URL</label>
              <input
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="btn bg-[#00A79D] text-white w-full"
                disabled={updating}
              >
                {updating ? 'Updating...' : 'Save Changes'}
              </button>
              <button
                type="button"
                className="btn bg-gray-500 text-white w-full"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <button
              className="btn bg-[#005A52] text-white"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          </div>
        )}

        {message && (
          <p className="text-center mt-6 text-sm font-medium">
            <span className={message.includes('✅') ? 'text-green-500' : 'text-red-500'}>
              {message}
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default UserProfile;
