import React from 'react';

function Footer() {
  return (
    <div  className="grid py-5 mr-2 mt-8 bg-slate-800 dark:bg-slate-700 text-center md:w-[90vw] lg:w-[79vw] text-gray-300">
      <div className="">
        <a href="#home" className="block text-xl md:text-2xl font-semibold hover:text-indigo-500">Emmanuel Egbo</a>
        <a href="mailto: technov8tive@gmail.com"
          className="font-regular text:sm md:md hover:text-indigo-500"
        >technov8tive@gmail.com</a>
        <p className="text-xs font-regular mt-2 text-gray-500">
          © Emmanuel Egbo {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
