import React, { useState, useEffect } from 'react';

const ModernCarousel = () => {
  const slides = [
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fhome%2Fpic1.jpeg&w=1920&q=75',
      title: 'Campus View',
      description: 'Beautiful campus surroundings'
    },
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fhome%2Fpic1.jpeg&w=1920&q=75',
      title: 'Academic Block',
      description: 'State-of-the-art facilities'
    },
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fimages%2Fcampus.jpeg&w=1920&q=75',
      title: 'Research Lab',
      description: 'Advanced research facilities'
    },
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fhome%2Fpic1.jpeg&w=1920&q=75',
      title: 'Library',
      description: 'Modern learning environment'
    },
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fimages%2Fcampus.jpeg&w=1920&q=75',
      title: 'Sports Complex',
      description: 'World-class sports facilities'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative group w-full max-w-6xl mx-auto h-[600px] overflow-hidden rounded-xl bg-gray-100 shadow-xl">
      <div 
        className="w-full h-full relative duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: 'flex',
          transition: 'transform 0.5s ease-out'
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-2xl font-bold mb-2">{slide.title}</h3>
              <p className="text-white/90">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Autoplay Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
      >
        {isAutoPlaying ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ModernCarousel;