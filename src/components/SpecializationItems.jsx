import React from 'react';


function SpecializationItems({title, icon, description}) {
  return (
    <div>
      <div className="bg-black dark:bg-black border-4 dark:border-2 dark:border-[#02ec88] hover:bg-slate-800 hover:-translate-y-2 transform transition p-5 rounded-md">
        <div className="text-white w-6 h-6 mt-3">
          {icon}
        </div>
        <h1 className="font-semibold text-lg text-[#02ec88] mb-1">{title}</h1>
        <p className="font-semibold text-md text-white">{description}</p>
      </div>
    </div>
  );
}

export default SpecializationItems;
