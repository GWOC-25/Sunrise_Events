import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar as CalendarIcon } from 'lucide-react';

const BookingCalendar: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date(),
    time: '',
    eventType: '',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, date: formData.date.toISOString().split('T')[0] }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Consultation booked:', result);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: new Date(),
          time: '',
          eventType: '',
          message: '',
        });
      } else {
        const errorText = await response.text();
        setError(errorText);
        console.error('Error booking consultation:', errorText);
      }
    } catch (error) {
      setError('Error booking consultation');
      console.error('Error booking consultation:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prev) => ({
      ...prev,
      date,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Book a Consultation</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Event Date</label>
            <div className="relative">
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
              <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Event Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event Type</label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            >
              <option value="">Select an event type</option>
              <option value="birthday">Birthday Party</option>
              <option value="wedding">Wedding</option>
              <option value="sangeet">Sangeet</option>
              <option value="haldi">Haldi</option>
              <option value="reception">Reception</option>
              <option value="engagement">Engagement</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Details</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          ></textarea>
        </div>

        {error && <div className="text-red-500">{error}</div>}

        <div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-md hover:from-pink-600 hover:to-purple-600 transition-colors font-semibold"
          >
            Book Consultation
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingCalendar;