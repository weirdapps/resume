"use client";

import { motion } from "framer-motion";
import { FiAnchor, FiVolume2, FiCamera, FiCpu, FiCode, FiHeart, FiSun } from "react-icons/fi";

export default function Interests() {
  const interests = [
    { name: "Sailing", icon: <FiAnchor /> },
    { name: "Volleyball", icon: <FiSun /> },
    { name: "Photography", icon: <FiCamera /> },
    { name: "Technology", icon: <FiCpu /> },
    { name: "Programming", icon: <FiCode /> }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-100 dark:border-gray-700"
    >
      <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400 border-b border-primary-200 dark:border-primary-800 pb-3 mb-4 flex items-center">
        <FiHeart className="mr-2 text-primary-500 flex-shrink-0" />
        Interests
      </h2>
      
      <div className="flex flex-wrap gap-3">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            className="flex items-center bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full px-4 py-2 border border-primary-100 dark:border-primary-800 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="mr-2 flex-shrink-0">{interest.icon}</span>
            <span className="font-medium">{interest.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}