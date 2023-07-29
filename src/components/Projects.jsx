import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectsItems from './ProjectsItems';
import projectsData from '../data/projectsData';

function Projects() {
  return (
    <div id='works' className="py-12">
      <SectionTitle id='projects'>
        Featured <span className="dark:text-[#02ec88]">Projects</span>
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid:cols-2 lg:grid-cols-2 gap-5 mt-8">
        {projectsData.map(projectData => (
          <ProjectsItems className="mt-0"
            key={projectData.title}
            imageUrl={projectData.imageUrl}
            title={projectData.title}
            tech={projectData.tech}
            demoUrl={projectData.demoUrl}
            ></ProjectsItems>
        ))}
      </div>
    </div>
  );
}

export default Projects;
