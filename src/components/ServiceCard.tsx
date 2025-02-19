import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;