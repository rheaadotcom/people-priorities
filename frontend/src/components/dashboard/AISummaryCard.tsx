import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';

export default function AISummaryCard() {
  return (
    <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm space-y-4">
      <div className="flex items-center space-x-2">
        <DocumentDuplicateIcon className="h-6 w-6 text-primary-600" />
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">AI Summary</h2>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        This is a placeholder for the AI-generated summary. It will provide insights and recommendations based on the dashboard data.
      </p>
    </div>
  );
}
