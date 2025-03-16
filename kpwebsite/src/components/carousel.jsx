import React, { useState, useEffect } from 'react';

const ModernCarousel = () => {
  const slides = [
    {
      url: 'img/1.jpg',
      title: 'Mock OA For Second Year',
      description: ''
    },
    {
      url: 'img/2.jpg',
      title: 'Inter-IIT BootCamp',
      description: ''
    },
    {
      url: 'img/3.jpg',
      title: 'BlockChain Session',
      description: ''
    },
    {
      url: 'img/4.jpg',
      title: 'CP-101 For Second Year',
      description: ''
    },
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fimages%2Fcampus.jpeg&w=1920&q=75',
      title: 'Sports Complex',
      description: 'World-class sports facilities'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isTouching) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, isTouching]);

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

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsTouching(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  return (
    <div className="relative group w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg sm:rounded-xl bg-gray-100 shadow-xl">
      <div 
        className="w-full h-full relative duration-500 ease-out flex touch-pan-y"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-out'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{slide.title}</h3>
              <p className="text-white/90 text-sm sm:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={prevSlide}
        className="hidden sm:group-hover:block absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:group-hover:block absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300"
      >
        {isAutoPlaying ? (
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ModernCarousel;