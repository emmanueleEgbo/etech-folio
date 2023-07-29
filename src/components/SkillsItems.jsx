import React from 'react';


function SkillsItems({icon, title}) {
  return (
    <div className="grid place-items-center">
      <div className="grid place-items-center p-2 lg:p-5 w-12 h-24 md:w-24 md:h-36 bg-black dark:bg-black dark:border-2 dark:border-[#02ec88] hover:bg-slate-800 hover:-translate-y-2 transform transition rounded-full">
        <div className="text-white sm:w-9 sm:h-9 w-18 h-18 mt-1">
          {icon}
        </div>
      </div>
        <h1 className="font-semibold text-lg text-black dark:text-white mb-1">{title}</h1>
    </div>
  );
}

export default SkillsItems;
