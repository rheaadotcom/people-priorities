import { FC } from 'react';
import { LightBulbIcon } from '@heroicons/react/24/outline';

interface RecommendationCardProps {
  text: string;
}

const RecommendationCard: FC<RecommendationCardProps> = ({ text }) => (
  <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow space-x-2">
    <LightBulbIcon className="h-5 w-5 text-primary-600" />
    <p className="text-sm text-gray-700 dark:text-gray-200">{text}</p>
  </div>
);

export default RecommendationCard;
