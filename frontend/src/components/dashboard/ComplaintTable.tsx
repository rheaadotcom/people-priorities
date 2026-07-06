import React from 'react';
import { Complaint } from '../../types/dashboard';

interface ComplaintTableProps {
  data: Complaint[];
}

export default function ComplaintTable({ data }: ComplaintTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg bg-white dark:bg-gray-800 shadow">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              ID
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Title
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Priority
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((c) => (
            <tr key={c.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">{c.id}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">{c.title}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">{c.status}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">{c.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
