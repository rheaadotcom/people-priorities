"use client";

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ComplaintWizardFormData } from '../../types/citizen';

export default function Step5Review() {
  const { getValues } = useFormContext<ComplaintWizardFormData>();
  const data = getValues();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Review Complaint</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Please verify the details below before submitting.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <h3 className="font-medium text-gray-900 dark:text-white">Basic Information</h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <span className="block text-sm text-gray-500 dark:text-gray-400">Title</span>
            <span className="block font-medium text-gray-900 dark:text-white mt-1">{data.title || 'N/A'}</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500 dark:text-gray-400">Description</span>
            <span className="block text-gray-900 dark:text-white mt-1">{data.description || 'N/A'}</span>
          </div>
        </div>

        <div className="px-6 py-4 border-y border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <h3 className="font-medium text-gray-900 dark:text-white">Categorization</h3>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          <div>
            <span className="block text-sm text-gray-500 dark:text-gray-400">Category</span>
            <span className="block font-medium text-gray-900 dark:text-white mt-1">{data.category || 'N/A'}</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500 dark:text-gray-400">Priority</span>
            <span className="inline-flex mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              {data.priority || 'N/A'}
            </span>
          </div>
        </div>

        <div className="px-6 py-4 border-y border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <h3 className="font-medium text-gray-900 dark:text-white">Media & Location</h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <span className="block text-sm text-gray-500 dark:text-gray-400">Attached Media</span>
            <span className="block text-gray-900 dark:text-white mt-1">
              {data.images?.length ? `${data.images.length} Images` : 'No Images'}, {data.voiceNote ? '1 Voice Note' : 'No Voice Note'}
            </span>
          </div>
          <div>
            <span className="block text-sm text-gray-500 dark:text-gray-400">Location Coordinates</span>
            <span className="block text-gray-900 dark:text-white mt-1">
              {data.latitude && data.longitude ? `${data.latitude.toFixed(6)}, ${data.longitude.toFixed(6)}` : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
