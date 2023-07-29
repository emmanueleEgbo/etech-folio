import React from 'react';
import SectionTitle from './SectionTitle';
import specializations from '../data/specializations';
import SpecializationItems from './SpecializationItems';

function Services() {
  return (
    <div id="skills" className="py-[50px]">
      <SectionTitle>My <span className="dark:text-[#02ec88] p-2">Specializations</span></SectionTitle>
      <div className="grid grid-cols-1 md:grid:cols-2 lg:grid-cols-3 gap-5 mt-8">
        {specializations.map(specialization => (
          <SpecializationItems 
            key={specialization.title}
            title={specialization.title}
            icon={specialization.icon}
            description={specialization.description}
            ></SpecializationItems>
        ))}
      </div>
    </div>
  );
}

export default Services;
