import React from 'react';
import Card from '../components/card';
import bg from '../assets/bg.jpg';
import gsocData from '../../public/gsocData.json';

const Gsoc = () => {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Background image wrapper */}

      <div
        className="fixed left-0 top-0 inset-0 grid"
        style={{
          backgroundImage: 'radial-gradient(circle, #eeeeee 2px, transparent 2px)',
          backgroundSize: '64px 64px',
          backgroundAttachment: 'fixed',
          opacity: 0.3
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 text-center pt-28 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fadeIn">
          &lt;GSOC /&gt;
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl font-bold animate-slideUp">
          SELECTIONS
        </p>
        
        {/* Map through years data */}
        {gsocData.years.map((yearData) => (
          <div key={yearData.year}>
            <h2 className="text-4xl md:text-7xl font-bold text-white text-center pt-16">
              {yearData.year}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center ">
              {yearData.selections.map((student, index) => (
                <Card
                  key={index}
                  imageUrl={student.imageUrl}
                  name={student.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gsoc;
