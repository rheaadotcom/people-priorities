"use client";

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import ImageUploader from './ImageUploader';

export default function Step3Media() {
  const { control } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upload Images</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Provide photos of the issue to help us understand it better.
        </p>
      </div>

      <div>
        <Controller
          name="images"
          control={control}
          render={({ field: { onChange, value } }) => (
            <ImageUploader 
              images={value || []} 
              onImagesChange={onChange} 
            />
          )}
        />
      </div>
    </motion.div>
  );
}
