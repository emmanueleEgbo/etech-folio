import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function CardComponent() {
return(
      <div className="bg-black text-white border-2 dark:border-[#02ec88] rounded-xl w-80 hover:-translate-y-2 transform transition">
      <div className="max-w-lg mx-auto my-8 bg-black rounded-lg shadow-md p-3">
        <img className="w-46 h-72 rounded-lg mx-auto" src="https://cdn.discordapp.com/attachments/1127275147087315034/1133534390841000047/profilePicsss.jpeg" />
        <h2 className="text-center text-2xl font-semibold mt-3 mb-2">Emmanuel Egbo</h2>
        <p className="text-center text-xl text-white mt-1">Full Stack <span className="text-[#02ec88]">Developer</span></p>
        <div className="flex justify-center mt-5" >
            <a href="mailto: technov8tive@gmail.com" 
            className="text-blue-500 hover:text-blue-700 mx-3"
            ><span className="w-8 h-8 md:w-10 md:h-10 border-2 p-2 rounded-full">
            <FontAwesomeIcon icon={faEnvelope} /></span></a>
          <a href="https://www.linkedin.com/in/etechpro" 
            className="text-blue-500 hover:text-blue-700 mx-3"
            target="_blank" 
            >
            <span className="w-8 h-8 md:w-10 md:h-10 border-2 p-2 rounded-full">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </a>
          <a href="https://github.com/etechpro" 
            className="text-blue-500 hover:text-blue-700 mx-3"
            target="_blank" 
            rel="noopener noreferrer">
            <span className="sm:w-8 sm:h-8 md:w-10 md:h-10 border-2 p-2 rounded-full">
              <FontAwesomeIcon icon={faGithub} />
              </span>
          </a>
        </div>
        <div className="mt-2">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-white mt-2">A full stack developer with over 3 years of experience in developing web applications.Skilled in JavaScript, React, Node.js, Express.js, etc.</p>
        </div>
        <span className="flex justify-center mt-4">
          <a href="mailto: technov8tive@gmail.com"><button className="text-black text-md md:p-1 text-lg md:text-xl font-Montserrat font-semibold bg-[#02ec88]  hover:bg-[#5ada86] hover:-translate-y-2 transform transition sm:w-[210px] md:w-[230px] md:h-[40px] sm:h-[20px]  rounded-xl">Hire me</button></a>
        </span>
      </div>
    </div>
  );
}