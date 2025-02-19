import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/admin/dashboard" className="text-gray-700 hover:text-pink-500 transition-colors">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/services" className="text-gray-700 hover:text-pink-500 transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link to="/admin/gallery" className="text-gray-700 hover:text-pink-500 transition-colors">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/admin/bookings" className="text-gray-700 hover:text-pink-500 transition-colors">
            Bookings
          </Link>
        </li>
        <li>
          <Link to="/admin/settings" className="text-gray-700 hover:text-pink-500 transition-colors">
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;