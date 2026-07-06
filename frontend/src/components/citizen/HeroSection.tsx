import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-blue-600 dark:bg-blue-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Report an Issue
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Help us keep our city safe and clean. Use the wizard below to submit a detailed report, and we will direct it to the right department immediately.
        </p>
      </div>
    </section>
  );
}
