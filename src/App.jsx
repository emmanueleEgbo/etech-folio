import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "winter"
  );

  // update state on toggle
  const handleThemesSwitch = (e) => {
    if (e.target.checked) {
      setTheme("night");
    } else {
      setTheme("winter");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);


  return (
    <div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost fixed right-5 sm:rigth-3 top-2 z-20">
        <label className='swap swap-rotate w-12 h-12'
          data-toggle-theme='night'
          data-act-class='swap-active'
         >
          {/* this hidden checkbox controls the state */}
          <input 
            type="checkbox"
            onChange={handleThemesSwitch}
            checked={theme === "winter" ? false : true}
          />
          {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on bg-white" />
            {/* dark theme moon image */}
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
        </label>
        </button>
      </div>
      <div  className="font-inter bg-white dark:bg-[#000000]">
        <div className="max-w-5xl mx-auto w-10/12">
          <Homepage/>
          <Services />
          <Skills />
          <Projects />
          <Resume / >
          <Footer / >
        </div>
      </div>
    </div>
  );

}

export default App;
