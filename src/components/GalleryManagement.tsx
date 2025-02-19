import React from 'react';

const GalleryManagement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Gallery Management</h2>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors mb-4">
        Upload Images
      </button>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <img src="image1.jpg" alt="Gallery Item" className="w-full h-auto rounded-md mb-2" />
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryManagement;