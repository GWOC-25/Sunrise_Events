import React from 'react';
import { Cake, Heart, Music, Sun, PartyPopper, Sofa } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

function Services() {
  const services = [
    {
      title: "Birthday Celebrations",
      icon: <Cake className="w-8 h-8 text-pink-500" />,
      description: "Create magical moments with our themed birthday party setups, perfect for all ages.",
    },
    {
      title: "Wedding Decoration",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      description: "Transform your special day with our elegant and customized wedding decorations.",
    },
    {
      title: "Sangeet Decoration",
      icon: <Music className="w-8 h-8 text-purple-500" />,
      description: "Add vibrancy to your pre-wedding celebrations with our dynamic setups.",
    },
    {
      title: "Haldi Decoration",
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      description: "Create a warm and traditional atmosphere for your haldi ceremony.",
    },
    {
      title: "Reception Setup",
      icon: <PartyPopper className="w-8 h-8 text-blue-500" />,
      description: "Elegant and sophisticated reception arrangements for your celebration.",
    },
    {
      title: "Rental Furniture",
      icon: <Sofa className="w-8 h-8 text-green-500" />,
      description: "Quality furniture rentals to complete your event setup.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;