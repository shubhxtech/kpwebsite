import React from 'react'
import HeroSection from '../components/hero'
import Card from '../components/card'
import Carousel from '../components/carousel'
import EatCodeRepeat from '../components/EatCodeRepeat'
const Home = () => {
  return (
    <div className="bg-black min-h-screen" >
        <HeroSection />
        <h1 className="text-5xl py-4 font-bold text-white items-center justify-center flex animate-fadeIn">
           #OUR EVENTS
        </h1>
        <Carousel/>

        <h1 className="text-5xl py-8 font-bold text-white items-center justify-center flex animate-fadeIn">
           #OUR PROJECTS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 justify-items-center">
          {Array.from({ length: 16 }).map((_, index) => (
            <Card
              key={index}
              imageUrl="https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
              name={`Luv Sharma`}
            />
          ))}
        </div>
        <EatCodeRepeat/>
    </div>    
  )
}

export default Home
