import React from 'react';

function ProjectsItem({imageUrl, title, tech, demoUrl}) {
  return (
    <a href={demoUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="py-8 bg-black dark:bg-black text-white rounded-lg border-2 dark:border-[#02ec88] 
      hover:bg-slate-800 hover:-translate-y-2 transform transition">
      <img src={imageUrl} alt={title} className="w-full object-cover" />
      <div className="p-5 w-full">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {tech.map( (item, index) => (
          <span 
            key={index}
            className="inline-block px-3 py-1 border-2 border-[#02ec88] bg-[#444444] dark:bg-black text-white font-semibold rounded-md"
            >
              {item}
            </span>
        ))}
        </p>
      </div>
    </a>
  );
}

export default ProjectsItem;
