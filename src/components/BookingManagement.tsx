import React, { useEffect, useState } from 'react';

interface Booking {
  id: number;
  name: string;
  email: string;
  date: string;
  time: string;
  notes: string;
}

const BookingManagement: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/consultations');
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          const errorText = await response.text();
          setError(errorText);
        }
      } catch (error) {
        setError('Error fetching bookings');
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{booking.name}</h3>
            <p>Email: {booking.email}</p>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <p>Notes: {booking.notes}</p>
            <div className="flex space-x-2 mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                Approve
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                Reject
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingManagement;