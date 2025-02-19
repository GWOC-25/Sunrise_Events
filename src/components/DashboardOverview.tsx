import React, { useEffect, useState } from 'react';

interface UpcomingEvent {
  id: number;
  name: string;
  email: string;
  date: string;
  time: string;
  notes: string;
}

interface DashboardData {
  totalBookings: number;
  upcomingEvents: UpcomingEvent[];
}

const DashboardOverview: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('http://localhost:5000/dashboard-data');
        if (response.ok) {
          const data = await response.json();
          setDashboardData(data);
        } else {
          const errorText = await response.text();
          setError(errorText);
        }
      } catch (error) {
        setError('Error fetching dashboard data');
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!dashboardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Total Bookings</h3>
          <p>{dashboardData.totalBookings}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
          {dashboardData.upcomingEvents.length > 0 ? (
            <ul>
              {dashboardData.upcomingEvents.map((event) => (
                <li key={event.id}>
                  {event.name} - {event.date} {event.time}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming events</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;