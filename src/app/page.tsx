'use client';
import { useState, useEffect } from 'react';
import { QuoteModal } from './components/QuoteModal';
import Image from 'next/image';

const images = [
  '/cleaning1.jpg',  // Replace with your actual image paths
  '/cleaning2.jpg',
  '/cleaning3.jpg',
  '/cleaning4.jpg'
  
];

export default function Home() {
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Cleaning service ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Your trusted partner for residential and commercial cleaning solutions
          </p>
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get A Quote
          </button>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-blue-600' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />
    </div>
  );
}