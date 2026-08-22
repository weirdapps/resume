'use client';

import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

export default function BoardMemberships() {
  const memberships = [
    {
      company: 'DIAS Interbanking Systems S.A.',
      role: 'Non-Executive Director',
      period: '2021 - Present',
      description:
        "Greece's national automated clearing house and operator of IRIS, the domestic instant payment scheme, owned by the Bank of Greece and the Greek credit institutions. Board oversight through the market's migration to instant payments and the extension of mandatory merchant acceptance.",
    },
    {
      company: 'NBG Pay S.A.',
      role: 'Non-Executive Director',
      period: '2021 - Present',
      description:
        "Merchant acquiring joint venture of National Bank of Greece and Global Payments, formed on the carve-out of the bank's acquiring business. Board oversight of a newly separated business through its transition to standalone operation.",
    },
    {
      company: 'NBG Bancassurance S.A.',
      role: 'Non-Executive Director',
      period: '2016 - 2019',
      description:
        'Insurance distribution subsidiary of National Bank of Greece. Oversight of product governance and of distribution conduct.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400 border-b border-primary-200 dark:border-primary-800 pb-3 mb-6">
        Board Memberships
      </h2>

      <div className="space-y-6">
        {memberships.map((membership, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            className="flex gap-4"
          >
            <div className="mt-1 text-primary-500">
              <FiAward size={24} />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">{membership.company}</h3>
                <span className="text-primary-600 dark:text-primary-400">{membership.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic text-sm mt-0.5">
                {membership.role}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-justify">
                {membership.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
