"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

export default function Education() {
  const educationItems = [
    {
      degree: "M.Sc. in Decision Sciences",
      institution: "Athens Univ. of Economics and Business (AUEB)",
      years: "2001 - 2002",
      concentration: "Financial Engineering concentration"
    },
    {
      degree: "M.Sc. in Mechanical Engineering",
      institution: "National Technical University of Athens (NTUA)",
      years: "1993 - 1999",
      concentration: "Operational Research concentration"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-100 dark:border-gray-700"
    >
      <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400 border-b border-primary-200 dark:border-primary-800 pb-3 mb-4 flex items-center">
        <FiAward className="mr-2 text-primary-500 flex-shrink-0" />
        Education
      </h2>
      
      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            className="flex"
          >
            <FiBookOpen className="mt-1 mr-3 text-primary-500 flex-shrink-0 w-5 h-5" />
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">{item.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-justify">{item.institution}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.years}</p>
              <p className="text-gray-600 dark:text-gray-400 italic mt-1 text-justify">{item.concentration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}