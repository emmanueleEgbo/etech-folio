import React from 'react';
import HomeIcon from './assets/homeIcon.svg';
import SkillsIcon from './assets/skillsIcon.svg';
import ProjectsIcon from './assets/projectsIcon.svg';
import ResumeIcon from './assets/resumeIcon.svg';

function HorizontalMenu() {
  return (
    <ul className="fixed flex justify-start place-content-center left-1 top-0 mt-0 visible md:invisible menu menu-horizontal bg-white dark:bg-[#02ec88] w-full h-[10vh] z-10">
      <li>
        <a href="#home" className="tooltip tooltip-top my-2 ml-2" data-tip="Home">
          <img src={HomeIcon} alt="HomeIcon" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black" /> 
          <h1 className="font-semibold text-xs ml-[-7px] text-black mb-1">Home</h1>
        </a>
      </li>
      <li>
        <a href="#skills" className="tooltip tooltip-top my-2 ml-2" data-tip="Skills">
          <img src={SkillsIcon} alt="SkillsIcon" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"  /> 
          <h1 className="font-semibold text-xs ml-[-7px] text-black mb-1">Skills</h1>
        </a>
      </li>
      <li>
        <a href="#works" className="tooltip tooltip-top my-2 ml-2" data-tip="Projects">
          <img src={ProjectsIcon} alt="projectsIcon" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"  />
          <h1 className="font-semibold text-xs ml-[-12px] text-black mb-1">Projects</h1> 
        </a>
      </li>
      <li>
        <a href="#resume" className="tooltip tooltip-top my-2 ml-2" data-tip="Resume">
          <img src={ResumeIcon} alt="ResumeIcon" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black" />
          <h1 className="font-semibold text-xs ml-[-11px] text-black mb-1">Resume</h1>
        </a>
      </li>
</ul>
  );
}

export default HorizontalMenu;