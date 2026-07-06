"use client";

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import VoiceRecorder from './VoiceRecorder';

export default function Step4Audio() {
  const { control } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Voice Note</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Optionally, record a short voice note describing the issue.
        </p>
      </div>

      <div>
        <Controller
          name="audio"
          control={control}
          render={({ field: { onChange, value } }) => (
            <VoiceRecorder 
              initialAudio={value} 
              onAudioRecorded={onChange} 
            />
          )}
        />
      </div>
    </motion.div>
  );
}
