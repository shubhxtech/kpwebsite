import React from 'react';
import HeroSection from './components/hero.jsx';
import Card from './components/card.jsx';

function App() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <HeroSection />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 justify-items-center">
          {Array.from({ length: 16 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name={`Luv Sharma`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
