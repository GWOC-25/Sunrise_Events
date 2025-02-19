import React from 'react';
import { Instagram } from 'lucide-react';

const FloatingInstagram = () => {
  return (
    <a
      href="https://www.instagram.com/sunriseevents.in?igsh=MTJuZXdoMnVvcGNxZw=="
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
    >
      <Instagram className="w-6 h-6 text-white" />
    </a>
  );
};

export default FloatingInstagram;