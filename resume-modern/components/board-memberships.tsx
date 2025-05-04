"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

export default function BoardMemberships() {
  const memberships = [
    {
      company: "DIAS Interbanking Systems S.A.",
      period: "2021 - Present",
      description: "DIAS is the National Automated Clearing House (ACH) for Greece. The Company's shareholders are Bank of Greece, credit institutions and finance related entities focusing on payments"
    },
    {
      company: "NBG Pay S.A.",
      period: "2021 - Present",
      description: "NBG Pay is a JV between National Bank of Greece and Global Payments, focusing on providing acquiring services in Greece"
    },
    {
      company: "NBG Bancassurance S.A.",
      period: "2016 - 2019",
      description: "NBG Bancassurance was an NBG subsidiary focusing on providing bancassurance products to the bank's customers"
    }
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
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-justify">{membership.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}