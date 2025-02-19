import React from 'react';

const ServiceManagement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Service Management</h2>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors mb-4">
        Add Service
      </button>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Service Name</h3>
          <p>Description</p>
          <p>Price: $100</p>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceManagement;