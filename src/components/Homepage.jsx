import React from 'react';
import Card from './Card';
import Menu from '../Menu';
import HorizontalMenu from '../HorizontalMenu';


function Homepage() {
  return (
    <div id='home' className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-4">
      <HorizontalMenu />
      <div className="mt-24 md:mt-2">
        <Card />
      </div>
      <div className="text-slate-900 dark:text-white mt-4">
        <span className="text-xl md:text-3xl lg:text-6xl font-inter font-bold">
          <h1>Say Hi from Emmanuel,</h1>
          <p>Full Stack <span className="dark:text-[#02ec88]">Developer</span></p><br />
        </span>
        <span className="text-base md:text-xl font-Montserrat font-semibold ">
          <h1>I Specialize in developing exceptional digital experiences</h1>
          <h1>With a great focus on building responsive, progressive & secure applications</h1><br /><br />
        </span>
        <a href="#works"><button className="dark:text-slate-900 text-md p-2 md:p-0 md:text-2xl lg:text-2xl font-Montserrat font-semibold bg-[#02ec88]  hover:bg-[#5ada86] hover:-translate-y-2 transform transition sm:w-[220px] md:w-[240px] md:h-[50px] sm:h-[30px]  rounded-2xl">View Projects</button></a>
      </div>
      <Menu />
    </div>
  );
}

export default Homepage;
