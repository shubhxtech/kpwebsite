import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carousel() {
  const slides = [
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fimages%2Fcampus.jpeg&w=1920&q=75',
    },
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fhome%2Fpic2.jpeg&w=1920&q=75',
    },
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fhome%2Fpic5.JPG&w=1920&q=75',
    },
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fhome%2Fpic3.jpeg&w=1920&q=75',
    },
    {
      url: 'https://cc.iitmandi.co.in/_next/image?url=%2Fassets%2Fhome%2Fpic1.jpeg&w=1920&q=75',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <>
      <div className='max-w-[720px] md:max-w-[1000px] lg:max-w-[1200px] h-[300px] md:h-[400px] lg:h-[600px] w-full m-auto py-8 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>

        {/* Left Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-20px] md:left-[-40px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-20px] md:right-[-40px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        {/* Dots */}
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue-500' : 'text-white'}`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
