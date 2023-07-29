import React from 'react';
import SectionTitle from './SectionTitle';
import skillsData from '../data/skillsData';
import SkillsItems from './SkillsItems';

function Skills() {
  return (
    <div className="">
      <SectionTitle>My <span className=" dark:text-[#02ec88]">Skills</span></SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {skillsData.map( (skillData, index) => (
          <SkillsItems 
            key={index}
            icon={skillData.icon}
            title={skillData.title}
            ></SkillsItems>
        ))}
      </div>
    </div>  
  );
}

export default Skills;
