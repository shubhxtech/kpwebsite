import React from "react";
import HeroSection from "../components/hero";
import Card from "../components/card";
import Carousel from "../components/carousel";
import EatCodeRepeat from "../components/EatCodeRepeat";
import ProjectShowcase from "../components/ProjectsShowcase";

const Home = () => {
  return (
    <>
      Background Grid with Proper z-index
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: "radial-gradient(circle, #eeeeee 2px, transparent 2px)",
          backgroundSize: "64px 64px",
          backgroundAttachment: "fixed",
          opacity: 0.3,
        }}
      >
        
      </div>

      <div className="bg-black min-h-screen" >
        <HeroSection />
        <h1 className="text-5xl py-8 font-bold text-white flex items-center justify-center animate-fadeIn">
          Our Events
        </h1>
        <Carousel />
        <ProjectShowcase />
        <EatCodeRepeat />
      </div>
    </>
  );
};

export default Home;
