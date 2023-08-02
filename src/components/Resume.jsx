import React from 'react';
import SectionTitle from './SectionTitle';


function Resume() {
  return (
    <div id="resume" className="grid gap-8 text-black dark:text-white">
      <div>
      <a className="hover:text-indigo-500"  href="#resume">
        <SectionTitle>Resume</SectionTitle>
      </a>
      </div>
      <div>
        <h1 className="text-lg md:text-xl lg:text-2xl font-inter font-medium mt-4 mb-8">Education & <span className="dark:text-[#02ec88]">Experience</span></h1>
        <span className="text-sm dark:text-[#02ec88]">2020  -Present</span>
        <h2 className="text-md md:text-lg lg:text-xl font-inter font-semibold">Full Stack Web Developer</h2>
        <h2 className="text-md md:text-lg lg:text-xl font-inter font-semibold">Front-End Web Developer</h2>
        <span className="text-sm">Procrea8 Technology Solutions</span>
      </div>
      <div>
        <span className="text-sm dark:text-[#02ec88]">2018 - 2020</span>
        <h2 className="text-md md:text-lg lg:text-xl font-inter font-semibold">IT Technician</h2>
        <span className="text-sm">SYNLAB</span>
      </div>
      <div>
        <span className="text-sm dark:text-[#02ec88]">2022 - 2023</span>
        <h1 className="text-md md:text-lg lg:text-xl font-inter font-semibold" >Masters of Science in Cyber Security <span className="text-sm">(Awarded: Distinction)</span></h1>
        <span className="text-sm">University of Bradford</span>
      </div>
      <div>
        <span className="text-sm dark:text-[#02ec88]">2012 - 2018</span>
        <h1 className="text-md md:text-lg lg:text-xl font-inter font-semibold" >Bachelor of Science in Computer Science <span className="text-sm">(Awarded: Best Graduating Student)</span></h1>
        <span>University of Benin</span>
      </div>
      <div>
        <h1 className="textmd md:text-lg lg:text-xl font-inter font-semibold">Certifications:</h1>
        <ul className="text-md md:text-lg lg:text-xl font-inter mb-8">
          <li><span className="dark:text-[#02ec88]">JavaScript Programming</span> for Blockchain Developers</li>
          <li><span className="dark:text-[#02ec88]">Web Security</span> & Bug Bounty</li>
          <li>Ethereum 101</li>
          <li>Blockchain and Bitcoin 101</li>
          <li>Bitcoin Standard</li>
          <li>Crypto for Beginners</li>
        </ul>
        <span>
          <a href="https://cdn.discordapp.com/attachments/1127275147087315034/1136081620672184382/Emmanuel_Egbo_Updated_CV2.pdf">
          <button className="flex items-center justify-center font-Montserrat text-lg text-black md:text-2xl py-4 font-semibold bg-[#02ec88] 
              hover:bg-[#5ada86] hover:-translate-y-2 transform transition sm:w-[220px] md:w-[240px] md:h-[50px] sm:h-[30px]  rounded-2xl"
            >Download CV</button>
          </a>
        </span>
         <a href="#home" className="inline-block mt-8 text-lg md:text-2xl py-4 font-semibold hover:text-indigo-500 text-center">Back to top</a>
      </div>
    </div>
  );
}

export default Resume;
