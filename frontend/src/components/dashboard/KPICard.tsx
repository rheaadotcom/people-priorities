import { FC } from 'react';
import { ChartBarIcon } from '@heroicons/react/24/outline';

interface KPICardProps {
  title: string;
  value: string | number;
  icon?: typeof ChartBarIcon;
  bgColor?: string; // Tailwind bg class e.g. 'bg-primary-500'
}

const KPICard: FC<KPICardProps> = ({ title, value, icon: Icon, bgColor = 'bg-primary-600' }) => {
  return (
    <div className={`flex items-center p-4 rounded-xl shadow-sm text-white ${bgColor}`}>
      {Icon && <Icon className="h-8 w-8 mr-3" aria-hidden="true" />}
      <div>
        <p className="text-sm font-medium opacity-80">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default KPICard;
