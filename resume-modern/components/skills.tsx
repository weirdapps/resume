'use client';

import { motion } from 'framer-motion';
import { FiGlobe, FiCode, FiLayers } from 'react-icons/fi';

export default function Skills() {
  const languages = [
    { name: 'Greek', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'Intermediate' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-100 dark:border-gray-700"
    >
      <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400 border-b border-primary-200 dark:border-primary-800 pb-3 mb-4 flex items-center">
        <FiLayers className="mr-2 text-primary-500 flex-shrink-0" />
        Expertise & Languages
      </h2>

      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-3">
            <FiCode className="mr-2 text-primary-500 w-5 h-5" />
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Areas of Expertise</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'Retail Banking',
              'Digital Growth & Digital Distribution',
              'Payments, Cards & Schemes',
              'Financial Crime, Fraud & Conduct',
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1.5 text-sm inline-block border border-primary-100 dark:border-primary-800"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <FiGlobe className="mr-2 text-primary-500 w-5 h-5" />
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Languages</h3>
          </div>

          <div className="space-y-2">
            {languages.map((language, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {language.name}
                </span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{language.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
