"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiLinkedin } from "react-icons/fi";
import Image from 'next/image';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 print:shadow-none"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="md:w-2/3 order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 text-center md:text-left"
          >
            Dimitrios Plessas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 mt-2 text-center md:text-left"
          >
            Assistant General Manager, Cards & Digital Business
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
          >
            <div className="flex items-center">
              <FiMapPin className="text-primary-500 mr-3 flex-shrink-0 w-5 h-5" />
              <span className="text-gray-700 dark:text-gray-300">Glyfada, Athens Greece</span>
            </div>
            <div className="flex items-center">
              <FiPhone className="text-primary-500 mr-3 flex-shrink-0 w-5 h-5" />
              <span className="text-gray-700 dark:text-gray-300">+30 6949200878</span>
            </div>
            <div className="flex items-center">
              <FiMail className="text-primary-500 mr-3 flex-shrink-0 w-5 h-5" />
              <span className="text-gray-700 dark:text-gray-300">plessasdimitrios@yahoo.com</span>
            </div>
            <div className="flex items-center">
              <FiLinkedin className="text-primary-500 mr-3 flex-shrink-0 w-5 h-5" />
              <a href="https://www.linkedin.com/in/plessas/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                linkedin.com/in/plessas
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="order-1 md:order-2 md:w-1/3 flex justify-center"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-lg">
            <Image 
              src="/images/PD.png" 
              alt="Dimitrios Plessas" 
              width={192} 
              height={192} 
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}