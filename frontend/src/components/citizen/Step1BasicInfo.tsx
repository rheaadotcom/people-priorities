"use client";

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function Step1BasicInfo() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Basic Information</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Provide a clear title and description for your complaint.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Complaint Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            placeholder="e.g., Pothole on Main Street"
            className={`mt-1 block w-full rounded-md border p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
              errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            }`}
            {...register('title')}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message as string}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Describe the issue in detail..."
            className={`mt-1 block w-full rounded-md border p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
              errors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            }`}
            {...register('description')}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description.message as string}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
