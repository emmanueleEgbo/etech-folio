import React from 'react';
import HomeIcon from './assets/homeIcon.svg';
import SkillsIcon from './assets/skillsIcon.svg';
import ProjectsIcon from './assets/projectsIcon.svg';
import ResumeIcon from './assets/resumeIcon.svg';

function Menu() {
  return (
    <div  className="fixed right-5 top-8 bg-white invisible md:visible border-2 border-black h-[220px] w-[52px] rounded-2xl mt-24 md:ml-[800px] lg:ml-[1295px]">
        <ul className="">
          <li>
            <a href="#home" className="tooltip tooltip-left mt-4 my-2 ml-2" data-tip="Home">
              <img src={HomeIcon} alt="HomeIcon" className="h-4 w-4 ml-[8px]" fill="none" viewBox="0 0 24 24" stroke="black" />
              <h1 className="font-semibold text-xs ml-[-2px] text-black mb-1">Home</h1>
            </a>
          </li>
          <li>
            <a href="#skills" className="tooltip tooltip-left my-2 ml-2" data-tip="Skills">
              <img src={SkillsIcon} alt="SkillsIcon" className="h-4 w-4 ml-[8px]" fill="none" viewBox="0 0 24 24" stroke="black"  /> 
              <h1 className="font-semibold text-xs ml-[-2px] text-black mb-1">Skills</h1>
            </a>
          </li>
          <li>
            <a href="#works" className="tooltip tooltip-left my-2 ml-2" data-tip="Projects">
              <img src={ProjectsIcon} alt="projectsIcon" className="h-4 w-4 ml-[8px]" fill="none" viewBox="0 0 24 24" stroke="black"  />
              <h1 className="font-semibold text-xs ml-[-8px] text-black mb-1">Projects</h1> 
            </a>
          </li>
          <li>
            <a href="#resume" className="tooltip tooltip-left my-2 ml-[8px]" data-tip="Resume">
              <img src={ResumeIcon} alt="ResumeIcon" className="h-4 w-4 ml-[8px]" fill="none" viewBox="0 0 24 24" stroke="black"  />
              <h1 className="font-semibold text-xs ml-[-8px] text-black mb-1">Resume</h1> 
            </a>
          </li>
        </ul>
    </div>
  );
}

export default Menu;


