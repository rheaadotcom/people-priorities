"use client";

import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface ProgressStepperProps {
  currentStep: number;
  steps: string[];
}

export default function ProgressStepper({ currentStep, steps: stepLabels }: ProgressStepperProps) {
  const steps = stepLabels.map((label, i) => ({ id: i, label }));

  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;

          return (
            <div key={step.id} className="flex flex-col items-center relative flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 bg-white dark:bg-gray-900 transition-colors duration-300 ${
                  isCompleted
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : isCurrent
                    ? 'border-blue-600 text-blue-600'
                    : 'border-gray-300 dark:border-gray-600 text-gray-400'
                }`}
              >
                {isCompleted ? <CheckIcon className="w-6 h-6 text-white" /> : <span className="font-semibold">{step.id}</span>}
              </div>
              <span
                className={`mt-2 text-xs font-medium text-center hidden sm:block ${
                  isCompleted || isCurrent ? 'text-gray-900 dark:text-white' : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-0.5 -z-0 transition-colors duration-300 ${
                    isCompleted ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
