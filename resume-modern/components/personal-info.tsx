"use client";

import { motion } from "framer-motion";
import { FiUser, FiCalendar, FiHeart, FiFlag } from "react-icons/fi";

export default function PersonalInfo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-100 dark:border-gray-700"
    >
      <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400 border-b border-primary-200 dark:border-primary-800 pb-3 mb-4 flex items-center">
        <FiUser className="mr-2 text-primary-500 flex-shrink-0" />
        Personal Information
      </h2>
      
      <ul className="space-y-4">
        <li className="flex items-center">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
              <FiFlag className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
              <span className="font-medium text-gray-800 dark:text-gray-200 w-32">Nationality:</span>
            </div>
            <span className="text-gray-700 dark:text-gray-300 ml-2">Greek</span>
          </div>
        </li>
        
        <li className="flex items-center">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
              <FiCalendar className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
              <span className="font-medium text-gray-800 dark:text-gray-200 w-32">Date of Birth:</span>
            </div>
            <span className="text-gray-700 dark:text-gray-300 ml-2">02.10.1974</span>
          </div>
        </li>
        
        <li className="flex items-center">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
              <FiHeart className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
              <span className="font-medium text-gray-800 dark:text-gray-200 w-32">Marital Status:</span>
            </div>
            <span className="text-gray-700 dark:text-gray-300 ml-2">Married</span>
          </div>
        </li>
      </ul>
    </motion.section>
  );
}