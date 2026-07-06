import Link from 'next/link';
import { HomeIcon, CogIcon, ChartBarIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
  { name: 'Help', href: '/help', icon: QuestionMarkCircleIcon },
];

export default function Sidebar() {
  return (
    <nav className="hidden md:flex flex-col w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-center h-12 mb-8">
        <span className="text-xl font-bold text-gray-800 dark:text-white">MP Dashboard</span>
      </div>
      <ul className="flex-1 space-y-2">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="flex items-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
