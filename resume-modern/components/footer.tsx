"use client";

import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-gray-800 dark:bg-gray-900 text-white py-4 mt-12 print-hidden shadow-inner"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Dimitrios Plessas</p>
          
          <a 
            href="https://www.linkedin.com/in/plessas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-400 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}