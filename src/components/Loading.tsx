import React from 'react';
import { Heart } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex space-x-2 animate-pulse">
        <Heart className="w-8 h-8 text-pink-500 animate-float" />
        <Heart className="w-8 h-8 text-pink-500 animate-float delay-200" />
        <Heart className="w-8 h-8 text-pink-500 animate-float delay-400" />
      </div>
    </div>
  );
};

export default Loading;