"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Step6Success() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-12 space-y-6 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <CheckCircleIcon className="w-24 h-24 text-green-500" />
      </motion.div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Complaint Submitted Successfully!</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          Thank you for reporting this issue. Your complaint ID is <span className="font-semibold text-gray-900 dark:text-gray-200">#CP-8492</span>. 
          We will keep you updated on its progress.
        </p>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row gap-4">
        <Link 
          href="/dashboard"
          className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Go to Dashboard
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Submit Another
        </button>
      </div>
    </motion.div>
  );
}
