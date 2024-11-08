import React from 'react'
import Card from '../components/card'
const gsoc = () => {
  return (
    <div>
      <div className="relative z-10 text-center">
        <h1 className="text-8xl font-bold text-white mb-4 animate-fadeIn">
          &lt;GSOC /&gt;
        </h1>
        <p className="text-gray-400 text-2xl font-bold animate-slideUp">
          SELECTIONS
        </p>   
      </div>
      <h2 className=" text-7xl w-full font-bold text-white  bg-black text-center pt-20 ">
       2023 
       </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name={`Luv Sharma`}
            />
          ))}
        </div>
        <h2 className=" text-7xl w-full font-bold text-white  bg-black text-center pt-20 ">
       2022
       </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name={`Luv Sharma`}
            />
          ))}
        </div>
        <h2 className=" text-7xl w-full font-bold text-white  bg-black text-center pt-20 ">
       2021 
       </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name={`Luv Sharma`}
            />
          ))}
        </div>
        <h2 className=" text-7xl w-full font-bold text-white  bg-black text-center pt-20 ">
       2020 
       </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name={`Luv Sharma`}
            />
          ))}
        </div>
        <h2 className=" text-7xl w-full font-bold text-white  bg-black text-center pt-20 ">
       2019 
       </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name={`Luv Sharma`}
            />
          ))}
        </div>
    </div>
  )
}

export default gsoc
