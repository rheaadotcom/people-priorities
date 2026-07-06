import React from 'react';

export default function HeatmapPlaceholder() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Incident Heatmap</h3>
      <div className="h-64 bg-gray-100 dark:bg-gray-900 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
        <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        <span className="text-gray-500 dark:text-gray-400 font-medium">Map View</span>
        <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">Interactive heatmap will render here</span>
      </div>
    </div>
  );
}
