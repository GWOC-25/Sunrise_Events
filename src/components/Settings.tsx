import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Phone:</span>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
        </label>
        <label className="block">
          <span className="text-gray-700">Email:</span>
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
        </label>
        <label className="block">
          <span className="text-gray-700">Instagram:</span>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
        </label>
        <label className="block">
          <span className="text-gray-700">Location:</span>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
        </label>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default Settings;