import React from 'react';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <a href="tel:+1234567890" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Phone className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>+91 XXXXX XXXXX</p>
          </a>
          
          <a href="mailto:sunriseevents.in@gmail.com" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Mail className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p>sunriseevents.in@gmail.com</p>
          </a>
          
          <a 
            href="https://www.instagram.com/sunriseevents.in?igsh=MTJuZXdoMnVvcGNxZw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Instagram className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="font-semibold mb-2">Instagram</h3>
            <p>@sunriseevents.in</p>
          </a>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <MapPin className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p>Surat, India</p>
          </div>
        </div>

        <div className="mb-16">
          <BookingCalendar />
        </div>
      </div>
    </div>
  );
}

export default Contact;