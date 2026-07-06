"use client";

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaRoad, FaTint, FaBolt, FaTrash, FaQuestionCircle } from 'react-icons/fa';

const categories = [
  { id: 'Road', icon: FaRoad, label: 'Road' },
  { id: 'Water', icon: FaTint, label: 'Water' },
  { id: 'Electricity', icon: FaBolt, label: 'Electricity' },
  { id: 'Waste', icon: FaTrash, label: 'Waste' },
  { id: 'Other', icon: FaQuestionCircle, label: 'Other' },
];

const priorities = ['Low', 'Medium', 'High'];

export default function Step2Category() {
  const { control, formState: { errors } } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Category & Priority</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Select the type of issue and how urgent it is.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Category <span className="text-red-500">*</span>
        </label>
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onChange(cat.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    value === cat.id
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <cat.icon className={`w-8 h-8 mb-2 ${value === cat.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} />
                  <span className="font-medium">{cat.label}</span>
                </button>
              ))}
            </div>
          )}
        />
        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category.message as string}</p>
        )}
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Priority <span className="text-red-500">*</span>
        </label>
        <Controller
          name="priority"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="flex space-x-4">
              {priorities.map((pri) => (
                <button
                  key={pri}
                  type="button"
                  onClick={() => onChange(pri)}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 text-center font-medium transition-colors ${
                    value === pri
                      ? pri === 'High'
                        ? 'border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                        : pri === 'Medium'
                        ? 'border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : 'border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {pri}
                </button>
              ))}
            </div>
          )}
        />
        {errors.priority && (
          <p className="mt-1 text-sm text-red-500">{errors.priority.message as string}</p>
        )}
      </div>
    </motion.div>
  );
}
