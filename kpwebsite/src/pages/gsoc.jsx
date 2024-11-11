import React from 'react';
import Card from '../components/card';
import bg from '../assets/bg.jpg';

const gsoc = () => {
  return (
    <div className="relative bg-black">
      {/* Background image wrapper */}
      <div className="absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat opacity-90" style={{ backgroundImage: `url(${bg})` }}/>
      <div className="fixed left-0 top-0 inset-0 grid"
        style={{
          backgroundImage: 'radial-gradient(circle, #eeeeee 2px, transparent 2px)',
          backgroundSize: '64px 64px',
          backgroundAttachment: 'fixed',
          opacity: 0.3
        }}>
      </div>


      {/* Content wrapper */}
      <div className="relative z-10 text-center pt-28">
        <h1 className="text-8xl font-bold text-white mb-4 animate-fadeIn">
          &lt;GSOC /&gt;
        </h1>
        <p className="text-gray-400 text-2xl font-bold animate-slideUp">
          SELECTIONS
        </p>   

        <h2 className="text-7xl font-bold text-white  text-center pt-20">
          2023 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name="Luv Sharma"
            />
          ))}
        </div>

        <h2 className="text-7xl font-bold text-white  text-center pt-20">
          2022
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name="Luv Sharma"
            />
          ))}
        </div>

        {/* Repeat the same structure for 2021, 2020, 2019 */}
        
        <h2 className="text-7xl font-bold text-white text-center pt-20">
          2021 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name="Luv Sharma"
            />
          ))}
        </div>

        <h2 className="text-7xl font-bold text-white text-center pt-20">
          2020 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name="Luv Sharma"
            />
          ))}
        </div>

        <h2 className="text-7xl font-bold text-white  text-center pt-20">
          2019 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name="Luv Sharma"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default gsoc;
