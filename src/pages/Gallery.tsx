import React from 'react';

function Gallery() {
  const imageCount = 150;
  const images = Array.from({ length: imageCount }, (_, index) => ({
    url: `/images/images (${index + 1}).jpg`,
    alt: `Event image ${index + 1}`,
  }));

  // Shuffle the images array to mix the images
  const shuffledImages = images.sort(() => Math.random() - 0.5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Our Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shuffledImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;