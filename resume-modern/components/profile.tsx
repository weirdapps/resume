'use client';

import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';

export default function Profile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400 border-b border-primary-200 dark:border-primary-800 pb-3 mb-4 flex items-center">
        <FiUser className="mr-2 text-primary-500 flex-shrink-0" />
        Profile
      </h2>

      <p className="text-gray-700 dark:text-gray-300 text-justify">
        Twenty years in Greek retail banking, the last six as an Assistant General Manager
        accountable for the cards, digital, embedded, self-service and direct channels of National
        Bank of Greece. Took the bank to national leadership in digital and negotiated the scheme
        and acquiring transactions that reset its payments economics. Serves on the boards of DIAS,
        the national clearing house, and of NBG Pay. Brings practical depth in payments, digital
        distribution and ICT risk, the competencies European supervisors now require banks to
        strengthen.
      </p>
    </motion.section>
  );
}
