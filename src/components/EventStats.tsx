import React from 'react';
import { Heart, Cake, Diamond } from 'lucide-react';

const EventStats = () => {
  const stats = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      count: '80+',
      label: 'Weddings',
    },
    {
      icon: <Cake className="w-12 h-12 text-pink-500" />,
      count: '100+',
      label: 'Big Theme Birthday Parties',
    },
    {
      icon: <Diamond className="w-12 h-12 text-yellow-500" />,
      count: '150+',
      label: 'Engagements',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">About the Events Organized</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-white mb-2">{stat.count}</h3>
            <p className="text-lg text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventStats;