"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      title: "AGM, Cards & Digital Business",
      company: "National Bank of Greece",
      period: "2020 - Present",
      responsibilities: [
        "Card Business: strategy definition on issuing and acquiring, customer portfolio management; P&L responsibility for 5m cards, 250k merchants, ~€80mn net fee income",
        "Digital Banking: strategy definition, design and execution of Internet Banking, Mobile Banking, and other digital offerings; P&L responsibility for ~€50mn net fee income",
        "Embedded Banking: strategy definition, product development, key partnership agreements, balance sheet responsibility for ~€400mn loan disbursements per annum",
        "Self-Service Machines: footprint optimization and improvement of operational efficiency for the ATM, APS and PPU fleet",
        "Contact Center: strategy definition, operational efficiency, and direct sales performance management",
        "Bank-Wide Loyalty: go-to market strategy, customer engagement strategy"
      ]
    },
    {
      title: "Director, Digital Business",
      company: "National Bank of Greece",
      period: "2019 - 2020",
      responsibilities: [
        "Digital Banking: strategy definition, design and execution of Internet Banking, Mobile Banking, and other digital offerings; P&L responsibility for ~€50mn net fee income",
        "Self-Service Machines: footprint optimization and improvement of operational efficiency for the ATM, APS and PPU fleet",
        "Contact Center: strategy definition, operational efficiency, and direct sales performance management"
      ]
    },
    {
      title: "Director, Retail Banking",
      company: "National Bank of Greece",
      period: "2016 - 2019",
      responsibilities: [
        "Deposit, Investment & Bancassurance Products: product offering definition, product design & implementation and P&L responsibility for ~€45bn of assets",
        "Premium Banking, Retail Banking: segments management, service model design, product offering design",
        "Retail CRM, MIS, Customer Analytics: design of relevant capabilities, including next best action, customer lifetime value",
        "Bank-Wide Loyalty: design and development of go4more, the first bank-wide loyalty program in Greece"
      ]
    },
    {
      title: "Director, Retail Segments",
      company: "National Bank of Greece",
      period: "2013 - 2016",
      responsibilities: [
        "Premium Banking, Business Banking, Retail Banking: segments management, service model design, product offering design",
        "Retail CRM, MIS, Customer Analytics: design of relevant capabilities, including next best action, customer lifetime value",
        "Business Seeds: responsible for the development of NBG Business Seeds startup funding program and act4Greece crowdfunding initiative"
      ]
    },
    {
      title: "Group Strategy",
      company: "National Bank of Greece",
      period: "2006 - 2013",
      responsibilities: [
        "Management of M&A activity: definition of synergies, integration program setup, re-organization design",
        "Design of a customer-based service model for the affluent and SME segments in Greece; segmentation analysis, model definition",
        "Mapping of IT systems cost including personnel expenses, G&As, and depreciation of CAPEX"
      ]
    },
    {
      title: "Senior Associate",
      company: "McKinsey & Company",
      period: "2003 - 2006",
      responsibilities: [
        "Development of the three-year business plan for the incumbent bank in Greece; market sizing, action planning, financial modeling",
        "Business building for a greenfield bank in the Middle East; market analysis, definition of entry strategy, business plan preparation",
        "Benchmarking and strategic target-setting for the downstream ops of a large oil company in the UK"
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400 border-b border-primary-200 dark:border-primary-800 pb-3 mb-6">
        Professional Experience
      </h2>
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            className="timeline-item"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{experience.title}</h3>
              <span className="text-primary-600 dark:text-primary-400 font-medium">{experience.period}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium my-1 text-justify">{experience.company}</p>
            
            <ul className="mt-3 space-y-2">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <motion.li 
                  key={respIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + respIndex * 0.05, duration: 0.5 }}
                  className="text-gray-700 dark:text-gray-300 text-justify"
                >
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>{responsibility}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}