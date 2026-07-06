import React from 'react';
import Wizard from '@/components/citizen/Wizard';
import Header from '@/components/layout/Header';

export const metadata = {
  title: 'Citizen Portal | People Priority',
  description: 'Submit and track complaints in your city.',
};

export default function CitizenPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-blue-600 dark:bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Report an Issue
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Help us keep our city safe and clean. Use the wizard below to submit a detailed report, and we will direct it to the right department immediately.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 -mt-8 px-4 pb-20">
        <Wizard />
      </main>
    </div>
  );
}
