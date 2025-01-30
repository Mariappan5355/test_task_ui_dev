import React from 'react';
import hero from '../assets/hero.png';

export const HeroSection = () => (
  <div className="banner-bg">
      <div className="max-w-7xl min-h-[308px] px-4 sm:px-6 lg:px-8 mx-auto flex flex-wrap items-center justify-center -mx-2">
        <div className="text-white w-full flex-col lg:w-1/2 px-2 flex justify-center py-3">
          <h1 className="text-6xl font-medium mb-8 leading-tight">
            Manage your<br />
            project <span className="text-green-400 font-light">FASTER</span>
          </h1>
          <button className="w-fit bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-xl font-medium transition-colors duration-200">
            Explore Your Project
          </button>
        </div>
        <div className="w-full lg:w-1/2 px-2 flex justify-center"> 
          <div className="">
            <img
              src={hero}
              alt="Team member"
              className="w-96 h-auto"
              style={{ marginBottom: '-72px' }} 
            />
          </div>
        </div>
      </div>
  </div>
);

export default HeroSection;