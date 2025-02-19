import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/admin/dashboard" className="text-2xl font-bold text-pink-500">
          Admin Dashboard
        </Link>
        <div className="flex space-x-4">
          <Link to="/admin/dashboard" className="text-gray-700 hover:text-pink-500 transition-colors">
            Dashboard
          </Link>
          <Link to="/admin/bookings" className="text-gray-700 hover:text-pink-500 transition-colors">
            Bookings
          </Link>
          <Link to="/admin/settings" className="text-gray-700 hover:text-pink-500 transition-colors">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;