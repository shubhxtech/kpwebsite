import React from 'react'
import HeroSection from '../components/hero'
import Card from '../components/card'
import Carousel from '../components/carousel'
import EatCodeRepeat from '../components/EatCodeRepeat'
import ProjectShowcase from '../components/ProjectsShowcase'

const Home = () => {
  return (
    <>
       <div className="fixed left-0 top-0 inset-0 grid"
        style={{
          backgroundImage: 'radial-gradient(circle, #eeeeee 2px, transparent 2px)',
          backgroundSize: '64px 64px',
          backgroundAttachment: 'fixed',
          opacity: 0.3
        }}>
      </div>
    <div className="bg-black min-h-screen">

      <HeroSection />
      <h1 className="text-5xl py-8 font-bold text-white items-center justify-center flex animate-fadeIn">
        Our Events
      </h1>
      
      <Carousel />
      <ProjectShowcase />
      <EatCodeRepeat />
    </div>    

    </>

  )
}

export default Home
