import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Sparkles, Heart, Gift } from 'lucide-react';
import EventStats from '../components/EventStats';

function Home() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-20 z-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse delay-75" />
            <Gift className="w-6 h-6 text-pink-400 animate-pulse delay-150" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            Sunrise Events
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 font-light">
            Where Every Celebration Becomes a Masterpiece
          </p>
          
          <div className="max-w-2xl mx-auto mb-12 space-y-6 text-lg md:text-xl text-white/90">
            <p className="font-serif">
              At Sunrise Events, we transform ordinary moments into extraordinary memories. 
              Our passion for creativity and meticulous attention to detail ensures that 
              every celebration tells your unique story.
            </p>
            <p className="font-serif">
              From enchanting birthday parties to elegant weddings and memorable engagements, 
              we craft immersive experiences that captivate and delight, making every event truly unforgettable.
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></span>
            <Calendar className="relative w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="relative">Book Your Event Now</span>
          </button>
        </div>
      </div>

      {/* Event Stats */}
      <div className="relative z-20">
        <EventStats />
      </div>

      {/* Footer */}
      <footer className="relative py-8 text-white/90 text-center z-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">Email: sunriseevents.in@gmail.com</p>
          <p>&copy; {new Date().getFullYear()} Sunrise Events. All rights reserved.</p>
          <p>Created by - Bugging Bad</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;