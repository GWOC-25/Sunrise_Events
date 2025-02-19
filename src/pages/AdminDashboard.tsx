import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import DashboardOverview from '../components/DashboardOverview';
import BookingManagement from '../components/BookingManagement';
import Settings from '../components/Settings';
import { Routes, Route, Navigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminNavbar />
      <div className="flex-1 p-6 bg-gray-100">
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardOverview />} />
          <Route path="bookings" element={<BookingManagement />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;